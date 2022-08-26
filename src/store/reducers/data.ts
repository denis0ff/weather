import { Coordinates, DataAction, DataInitialState } from '@interfaces'
import {
  SET_CITY,
  SET_LOCATION,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
  SET_API,
} from '@store/actions'
import { weatherApis } from '@constants'

const initialState: DataInitialState = {
  coordinates: { city: '', country: '', latitude: 0, longitude: 0 },
  api: weatherApis[0],
  loading: false,
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
      return { ...state, loading: true }
    case STOP_LOADING:
      return { ...state, loading: false }
    case SET_ERROR:
      return { ...state, error: <string>payload }
    case SET_API:
      return { ...state, api: <string>payload }
    default:
      return state
  }
}
