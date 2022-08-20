import { WeatherPayload } from '@interfaces'

export const SET_CITY = 'SET_CITY'
export const SET_COUNTRY = 'SET_COUNTRY'
export const SET_OPENWEATHER = 'SET_OPENWEATHER'
export const SET_STORMGLASS = 'SET_STORMGLASS'

export const setCity = (payload: string) => ({ type: SET_CITY, payload })
export const setCountry = (payload: string) => ({ type: SET_COUNTRY, payload })
export const setOpenWeather = (payload: WeatherPayload) => ({
  type: SET_OPENWEATHER,
  payload,
})
export const setStormGlass = (payload: WeatherPayload) => ({
  type: SET_STORMGLASS,
  payload,
})
