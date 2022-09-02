import { Coordinates, DataAction, DataInitialState } from '@interfaces'
import {
  SET_CITY,
  SET_LOCATION,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
  SET_API,
  SET_TYPE,
} from '@store/actions'
import { weatherApis, weatherTypes } from '@constants'

const initialState: DataInitialState = {
  coordinates: { city: '', country: '', latitude: 0, longitude: 0 },
  api: weatherApis[0],
  type: weatherTypes[0],
  isLoading: false,
  error: '',
}

export default (state = initialState, action: DataAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_CITY:
      return {
        ...state,
        coordinates: { ...state.coordinates, city: <string>payload },
      }
    case SET_LOCATION:
      return { ...state, coordinates: { ...(<Coordinates>payload) } }
    case START_LOADING:
      return { ...state, isLoading: true }
    case STOP_LOADING:
      return { ...state, isLoading: false }
    case SET_ERROR:
      return { ...state, error: <string>payload }
    case SET_API:
      return { ...state, api: <string>payload }
    case SET_TYPE:
      return { ...state, type: <string>payload }
    default:
      return state
  }
}
