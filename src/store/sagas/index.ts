import { all, call, spawn } from 'redux-saga/effects'

import weatherSaga from './weatherSaga'
import calendarSaga from './calendarSaga'

export default function* rootSaga() {
  const sagas = [weatherSaga, calendarSaga].map(saga => {
    return spawn(function* generator() {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.error(e)
        }
      }
    })
  })

  yield all(sagas)
}
