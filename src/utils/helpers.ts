import { WeatherApi } from '@interfaces'

export const getEndDateStormglass = (forwardDays: number) => {
  const today = new Date()
  const nextDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + forwardDays,
  )
  return nextDate
}

export const parseURL = (url: string, folder: string, format: string) => {
  return `url(${process.env.PUBLIC_URL}/${folder}/${url.slice(
    0,
    -1,
  )}.${format})`
}

export const getIsoDates = () => {
  const date = new Date()
  const start = date.toISOString()
  date.setHours(24)
  const end = date.toISOString()
  return [start, end]
}

export const parseTimeFromIso = (iso: string) => {
  const date = new Date(iso)
  return date.toLocaleTimeString().slice(0, -3)
}

export const checkWeatherDate = (city: string, weather: WeatherApi) => {
  const MINIMAL_TIME = 1000 * 60 * 60 * 4 // 4 hours
  return weather[city] && Date.now() - weather[city].date <= MINIMAL_TIME
}
