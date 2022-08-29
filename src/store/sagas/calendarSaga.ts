import {
  logout,
  setTodos,
  SET_TOKEN,
  UPDATE_TODOS,
  todosStartLoading,
  todosStopLoading,
} from '@store/actions'
import { call, fork, put, select, takeLatest } from 'redux-saga/effects'
import { CalendarInitialState, CalendarTodo } from '@interfaces'
import { getCalendarTodos } from '@utils'

function* cancelSaga() {
  yield put(todosStopLoading())
  yield put(logout())
}

function* getTodos() {
  yield put(todosStartLoading())
  const { token }: CalendarInitialState = yield select(state => state.calendar)

  if (token === '') {
    yield cancelSaga()
    return
  }

  const payload: CalendarTodo[] = yield call(getCalendarTodos, token)

  if (payload instanceof Error) {
    yield cancelSaga()
    return
  }

  yield put(todosStopLoading())
  yield put(setTodos(payload))
}

function* watchTokenChanges() {
  yield takeLatest(SET_TOKEN, getTodos)
}

function* watchUpdateTodos() {
  yield takeLatest(UPDATE_TODOS, getTodos)
}

export default function* weatherSaga() {
  yield fork(watchTokenChanges)
  yield fork(watchUpdateTodos)
}
