import { takeLatest, call, put, select, fork, cancel } from 'redux-saga/effects'
import {
  setError,
  setLocation,
  setOpenWeather,
  setStormGlass,
  SET_API,
  SET_CITY,
  SET_CITY_BY_IP,
  startLoading,
  stopLoading,
} from '@store/actions'
import {
  Coordinates,
  DataInitialState,
  NormalizedWeather,
  OpenWeatherResponse,
  StormGlassResponse,
  WeatherPayload,
} from '@interfaces'
import {
  getCoordinates,
  getCoordinatesByIP,
  getOpenWeather,
  getStormglass,
  normalizeOpenWeather,
  normalizeStormglass,
} from '@utils'

function* checkOnError(data: Error | unknown) {
  if (data instanceof Error) {
    yield put(setError(data.message))
    yield put(stopLoading())
    yield cancel()
  }
}

function* callOpenWeather({ city, longitude, latitude }: Coordinates) {
  const weather: OpenWeatherResponse = yield call(
    getOpenWeather,
    latitude,
    longitude,
  )
  const { today, daily } = normalizeOpenWeather(weather)
  return { city, weather: { today, daily } }
}

function* callStormglass(
  { city, longitude, latitude }: Coordinates,
  normalizedWeather: NormalizedWeather,
) {
  const weather: StormGlassResponse = yield call(
    getStormglass,
    latitude,
    longitude,
  )
  const { today, daily } = normalizeStormglass(weather, normalizedWeather)
  return { city, weather: { today, daily } }
}

function* loadWeather() {
  yield put(startLoading())
  const { api, coordinates }: DataInitialState = yield select(
    state => state.data,
  )
  let payload: WeatherPayload = yield callOpenWeather(coordinates)
  yield put(setOpenWeather(payload))

  if (api === 'stormglass') {
    payload = yield callStormglass(coordinates, payload.weather)
    yield checkOnError(payload)
    yield put(setStormGlass(payload))
  }

  yield put(setError(''))
  yield put(stopLoading())
}

function* setCoordinates(isAutoLocation: boolean) {
  yield put(startLoading())
  let cityData: Coordinates

  if (isAutoLocation) {
    cityData = yield call(getCoordinatesByIP)
  } else {
    const { city }: Coordinates = yield select(state => state.data.coordinates)
    cityData = yield call(getCoordinates, city)
  }

  yield checkOnError(cityData)
  yield put(setLocation(cityData))
  yield loadWeather()
}

function* watchCityChange() {
  yield takeLatest(SET_CITY, setCoordinates, false)
}

function* watchCityByIp() {
  yield takeLatest(SET_CITY_BY_IP, setCoordinates, true)
}

function* watchApiChange() {
  yield takeLatest(SET_API, loadWeather)
}

export default function* weatherSaga() {
  yield fork(watchCityChange)
  yield fork(watchApiChange)
  yield fork(watchCityByIp)
}
