import { DataAction, DataInitialState } from '@interfaces'
import { SET_CITY, SET_COUNTRY } from '@store/actions'

const initialState: DataInitialState = {
  city: '',
  country: '',
  api: 'openweather',
}

export default (state = initialState, action: DataAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_CITY:
      return { ...state, city: payload }
    case SET_COUNTRY:
      return { ...state, country: payload }
    default:
      return state
  }
}
