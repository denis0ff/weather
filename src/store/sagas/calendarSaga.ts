import { setTodos, SET_TOKEN } from '@store/actions'
import { call, fork, put, select, takeLatest } from 'redux-saga/effects'
import { CalendarInitialState, CalendarTodo } from 'src/interfaces'
import { getCalendarTodos } from '@utils'

function* initializeGoogle() {
  const { token }: CalendarInitialState = yield select(state => state.calendar)
  if (!token) return

  const payload: CalendarTodo[] = yield call(getCalendarTodos, token)
  yield put(setTodos(payload))
}

function* watchTokenChanges() {
  yield takeLatest(SET_TOKEN, initializeGoogle)
}

export default function* weatherSaga() {
  yield fork(watchTokenChanges)
}
