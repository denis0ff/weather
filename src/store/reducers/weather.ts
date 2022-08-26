import { WeatherAction, WeatherInitialState } from '@interfaces'
import { SET_OPENWEATHER, SET_STORMGLASS } from '@store/actions'

const initialState: WeatherInitialState = {
  openweather: {},
  stormglass: {},
}

export default (state = initialState, action: WeatherAction) => {
  const { type, payload } = action

  switch (type) {
    case SET_OPENWEATHER: {
      return {
        ...state,
        openweather: { ...state.openweather, [payload.city]: payload.weather },
      }
    }
    case SET_STORMGLASS: {
      return {
        ...state,
        stormglass: { ...state.stormglass, [payload.city]: payload.weather },
      }
    }
    default:
      return state
  }
}
