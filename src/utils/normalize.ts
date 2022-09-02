import {
  OpenWeatherResponse,
  StormGlassResponse,
  NormalizedWeather,
  Weather,
  WeatherData,
} from '@interfaces'
import { weekDays } from '@constants'

export const normalizeOpenWeather = (
  response: OpenWeatherResponse,
): NormalizedWeather => {
  const daily = response.daily
    .map(({ dt, weather, temp }, i) => ({
      date: i === 0 ? 'TODAY' : weekDays[new Date(dt * 1000).getDay()],
      icon: weather[0].icon,
      temp: Math.ceil(temp.day),
    }))
    .slice(0, 7)

  const hourly = response.hourly
    .map(({ dt, weather, temp }) => ({
      date: new Date(dt * 1000).toLocaleTimeString().slice(0, -3),
      icon: weather[0].icon,
      temp: Math.ceil(temp),
    }))
    .slice(0, 7)

  return { daily, hourly, date: Date.now() }
}

export const normalizeStormglass = (
  weather: StormGlassResponse,
  weatherData: Weather,
): NormalizedWeather => {
  const hourly = weather.hours.slice(0, 7).map(
    ({ airTemperature }, i): WeatherData => ({
      date: weatherData.hourly[i].date,
      icon: weatherData.hourly[i].icon,
      temp: Math.floor(airTemperature.sg),
    }),
  )
  const daily = weather.hours
    .filter(({ time }, i) => new Date(time).getHours() === 12 || i === 0)
    .map(({ airTemperature }, i) => ({
      date: weatherData.daily[i].date,
      icon: weatherData.daily[i].icon,
      temp: Math.floor(airTemperature.sg),
    }))

  return { daily, hourly, date: Date.now() }
}

export const getTime = (date: Date) => {
  return date.toLocaleTimeString('en-UK', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const getDate = (date: Date) => {
  return date.toLocaleDateString('en-UK', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
