import { WeatherAction } from '@interfaces'
import { SET_OPENWEATHER, SET_STORMGLASS } from '@store/actions'

const initialState = {
  openweather: {},
  stormglass: {},
}

export default (state = initialState, action: WeatherAction) => {
  const {
    type,
    payload: { city, weather },
  } = action

  switch (type) {
    case SET_OPENWEATHER: {
      return {
        ...state,
        openweather: { ...state.openweather, [city]: weather },
      }
    }
    case SET_STORMGLASS: {
      return {
        ...state,
        stormglass: { ...state.stormglass, [city]: weather },
      }
    }
    default:
      return state
  }
}
