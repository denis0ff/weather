import { takeEvery, call, put, select, fork } from 'redux-saga/effects'
import { setCountry, setOpenWeather, SET_CITY } from '@store/actions'
import {
  Coordinates,
  DataInitialState,
  OpenWeatherResponse,
  WeatherPayload,
  WeatherWorker,
} from '@interfaces'
import { getCoordinates, getOpenWeather, normalizeOpenWeather } from '@utils'

function* workWeather(): WeatherWorker {
  const dataState = yield select(state => state.data)

  const { city } = dataState as DataInitialState

  const cityData = yield call(getCoordinates, city)
  const { country, longitude, latitude } = cityData as Coordinates

  yield put(setCountry(country))

  const weather = yield call(getOpenWeather, latitude, longitude)

  const [today, daily] = normalizeOpenWeather(weather as OpenWeatherResponse)

  const payload: WeatherPayload = {
    city,
    weather: {
      today,
      daily,
    },
  }

  yield put(setOpenWeather(payload))
}

function* watchCityChange() {
  yield takeEvery(SET_CITY, workWeather)
}

export default function* weatherSaga() {
  yield fork(watchCityChange)
}
