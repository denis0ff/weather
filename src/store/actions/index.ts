import { CalendarTodo, Coordinates, WeatherPayload } from '@interfaces'

export const SET_CITY = 'SET_CITY'
export const SET_LOCATION = 'SET_LOCATION'
export const SET_OPENWEATHER = 'SET_OPENWEATHER'
export const SET_STORMGLASS = 'SET_STORMGLASS'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_CITY_BY_IP = 'SET_CITY_BY_IP'
export const SET_API = 'SET_API'

export const INIT_GOOGLE = 'INIT_GOOGLE'
export const SET_TOKEN = 'SET_TOKEN'
export const SET_TODOS = 'SET_TODOS'

export const setCity = (payload: string) => ({ type: SET_CITY, payload })
export const setLocation = (payload: string | Coordinates) => ({
  type: SET_LOCATION,
  payload,
})
export const setOpenWeather = (payload: WeatherPayload) => ({
  type: SET_OPENWEATHER,
  payload,
})
export const setStormGlass = (payload: WeatherPayload) => ({
  type: SET_STORMGLASS,
  payload,
})
export const setApi = (payload: string) => ({ type: SET_API, payload })

export const setError = (payload: string) => ({ type: SET_ERROR, payload })
export const startLoading = () => ({ type: START_LOADING })
export const stopLoading = () => ({ type: STOP_LOADING })

export const setCityByIp = () => ({ type: SET_CITY_BY_IP })

export const initializeGoogle = () => ({ type: INIT_GOOGLE })
export const setToken = (payload: string) => ({ type: SET_TOKEN, payload })
export const setTodos = (payload: CalendarTodo[]) => ({
  type: SET_TODOS,
  payload,
})
