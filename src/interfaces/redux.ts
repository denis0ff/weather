import { Coordinates } from './api'

type Action = {
  type: string
}

export type WeatherData = {
  date: number
  icon: string
  temp: number
}

export type Weather = {
  today: WeatherData
  daily: WeatherData[]
}

export type WeatherPayload = {
  city: string
  weather: Weather
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
  isLoading: boolean
  error: string
}

export type WeatherApi = {
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
  date: number
}

export type CalendarTodo = {
  time: string
  summary: string
}

export type CalendarInitialState = {
  token: string
  todos: CalendarTodo[]
  isLoading: boolean
}

export interface CalendarAction extends Action {
  payload: string | CalendarTodo[]
}
