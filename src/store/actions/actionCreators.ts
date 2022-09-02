import { CalendarTodo, Coordinates, WeatherPayload } from '@interfaces'
import {
  SET_CITY,
  SET_LOCATION,
  SET_OPENWEATHER,
  SET_STORMGLASS,
  SET_API,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
  SET_CITY_BY_IP,
  SET_TOKEN,
  SET_TODOS,
  LOGOUT,
  TODOS_START_LOADING,
  TODOS_STOP_LOADING,
  UPDATE_TODOS,
  SET_TYPE,
} from './constants'

/* data reducer */
export const setCity = (payload: string) => ({ type: SET_CITY, payload })
export const setCityByIp = () => ({ type: SET_CITY_BY_IP })
export const setLocation = (payload: string | Coordinates) => ({
  type: SET_LOCATION,
  payload,
})
export const setApi = (payload: string) => ({ type: SET_API, payload })
export const setType = (payload: string) => ({ type: SET_TYPE, payload })
export const setError = (payload: string) => ({ type: SET_ERROR, payload })
export const startLoading = () => ({ type: START_LOADING })
export const stopLoading = () => ({ type: STOP_LOADING })

/* weather reducer */
export const setOpenWeather = (payload: WeatherPayload) => ({
  type: SET_OPENWEATHER,
  payload,
})
export const setStormGlass = (payload: WeatherPayload) => ({
  type: SET_STORMGLASS,
  payload,
})

/* calendar reducer */
export const setToken = (payload: string) => ({ type: SET_TOKEN, payload })
export const setTodos = (payload: CalendarTodo[]) => ({
  type: SET_TODOS,
  payload,
})
export const logout = () => ({ type: LOGOUT })
export const todosStartLoading = () => ({ type: TODOS_START_LOADING })
export const todosStopLoading = () => ({ type: TODOS_STOP_LOADING })
export const updateTodos = () => ({ type: UPDATE_TODOS })
