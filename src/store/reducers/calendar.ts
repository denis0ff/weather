import { SET_TODOS, SET_TOKEN } from '@store/actions'
import { CalendarAction, CalendarInitialState, CalendarTodo } from '@interfaces'

const initialState: CalendarInitialState = {
  todos: [],
  token: '',
  error: '',
  loading: '',
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
    default:
      return state
  }
}
