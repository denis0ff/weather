import { takeLatest, call, put, select, fork } from 'redux-saga/effects'
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
  OpenWeatherResponse,
  StormGlassResponse,
  Weather,
  WeatherInitialState,
  WeatherPayload,
} from '@interfaces'
import {
  checkWeatherDate,
  getCoordinates,
  getCoordinatesByIP,
  getOpenWeather,
  getStormglass,
  normalizeOpenWeather,
  normalizeStormglass,
} from '@utils'

function* setErrorSaga(data: string) {
  yield put(setError(data))
  yield put(stopLoading())
}

function* callOpenWeather({ city, longitude, latitude }: Coordinates) {
  const weatherResponse: OpenWeatherResponse = yield call(
    getOpenWeather,
    latitude,
    longitude,
  )
  const weather = normalizeOpenWeather(weatherResponse)
  return { city, weather }
}

function* callStormglass(
  { city, longitude, latitude }: Coordinates,
  normalizedWeather: Weather,
) {
  const weatherResponse: StormGlassResponse = yield call(
    getStormglass,
    latitude,
    longitude,
  )
  const weather = normalizeStormglass(weatherResponse, normalizedWeather)
  return { city, weather }
}

function* loadWeather() {
  const {
    weather,
    data: { api, coordinates },
  }: { weather: WeatherInitialState; data: DataInitialState } = yield select(
    state => state,
  )
  if (checkWeatherDate(coordinates.city, weather[api])) {
    yield setErrorSaga('')
    return
  }

  yield put(startLoading())
  let payload: WeatherPayload = yield callOpenWeather(coordinates)
  yield put(setOpenWeather(payload))

  if (api === 'stormglass') {
    payload = yield callStormglass(coordinates, payload.weather)
    if (payload instanceof Error) {
      yield setErrorSaga(payload.message)
      return
    }
    yield put(setStormGlass(payload))
  }

  yield setErrorSaga('')
}

function* setCoordinates(isAutoLocation: boolean) {
  const { city }: Coordinates = yield select(state => state.data.coordinates)
  yield put(startLoading())
  let payload: Coordinates

  if (isAutoLocation) payload = yield call(getCoordinatesByIP)
  else payload = yield call(getCoordinates, city)

  if (payload instanceof Error) {
    yield setErrorSaga(payload.message)
    return
  }

  yield put(setLocation(payload))
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
