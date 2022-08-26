import { Coordinates } from './api'

type Action = {
  type: string
}

export type WeatherData = {
  date: number
  icon: string
  temp: number
}

export type WeatherPayload = {
  city: string
  weather: {
    today: WeatherData
    daily: WeatherData[]
  }
}

export interface WeatherAction extends Action {
  payload: WeatherPayload
}

export interface DataAction extends Action {
  payload: string | Coordinates
}

export type DataInitialState = {
  coordinates: Coordinates
  api: string
  loading: boolean
  error: string
}

type WeatherApi = {
  [x: string]: NormalizedWeather
}

export type WeatherInitialState = {
  [x: string]: WeatherApi
  openweather: WeatherApi
  stormglass: WeatherApi
}

export type NormalizedWeather = {
  today: WeatherData
  daily: WeatherData[]
}
