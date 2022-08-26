import {
  OpenWeatherResponse,
  StormGlassResponse,
  NormalizedWeather,
  WeatherData,
} from '@interfaces'

export const normalizeOpenWeather = (
  weather: OpenWeatherResponse,
): NormalizedWeather => {
  const today = {
    date: new Date(weather.current.dt * 1000).getDay(),
    icon: weather.current.weather[0].icon,
    temp: Math.ceil(weather.current.temp),
  }

  const daily = weather.daily
    .map(day => ({
      date: new Date(day.dt * 1000).getDay(),
      icon: day.weather[0].icon,
      temp: Math.ceil(day.temp.day),
    }))
    .slice(1)
    .slice(0, -1)

  return { today, daily }
}

export const normalizeStormglass = (
  weather: StormGlassResponse,
  normalized: NormalizedWeather,
): NormalizedWeather => {
  const [today, ...daily] = weather.hours.map(
    ({ airTemperature }, i): WeatherData => {
      if (i === 0) {
        return {
          date: normalized.today.date,
          icon: normalized.today.icon,
          temp: Math.floor(airTemperature.sg),
        }
      }
      return {
        date: normalized.daily[i - 1].date,
        icon: normalized.daily[i - 1].icon,
        temp: Math.floor(airTemperature.sg),
      }
    },
  )
  return { today, daily }
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
