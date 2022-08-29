import {
  SET_TODOS,
  SET_TOKEN,
  LOGOUT,
  TODOS_START_LOADING,
  TODOS_STOP_LOADING,
} from '@store/actions'
import { CalendarAction, CalendarInitialState, CalendarTodo } from '@interfaces'

const initialState: CalendarInitialState = {
  todos: [],
  token: '',
  isLoading: false,
}

export default (state = initialState, action: CalendarAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: <string>payload,
      }
    }
    case SET_TODOS: {
      return {
        ...state,
        todos: <CalendarTodo[]>payload,
      }
    }
    case LOGOUT: {
      return {
        todos: [],
        token: '',
        isLoading: false,
      }
    }
    case TODOS_START_LOADING:
      return { ...state, isLoading: true }
    case TODOS_STOP_LOADING:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
