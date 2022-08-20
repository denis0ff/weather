import { all, call, spawn } from 'redux-saga/effects'

import weatherSaga from './weatherSaga'

export default function* rootSaga() {
  const sagas = [weatherSaga].map(saga => {
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
