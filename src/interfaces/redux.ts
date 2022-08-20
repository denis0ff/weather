import { CallEffect, PutEffect, SelectEffect } from 'redux-saga/effects'
import { Coordinates, OpenWeatherResponse, StormGlassResponse } from './api'

type Action = {
  type: string
}

export type WeatherData = {
  date: number
  description: string
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
  payload: string
}

export type DataInitialState = {
  city: string
  country: string
  api: string
}

/* export type WeatherInitialState = {

} */

export type WeatherWorker = Generator<
  | SelectEffect
  | CallEffect<Coordinates | Error>
  | CallEffect<OpenWeatherResponse | StormGlassResponse | Error>
  | PutEffect<{ type: string; payload: string }>
  | PutEffect<{ type: string; payload: WeatherPayload }>
  | PutEffect<{ type: string }>,
  void,
  unknown
>
