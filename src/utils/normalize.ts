import { OpenWeatherResponse, WeatherData } from '@interfaces'

export const normalizeOpenWeather = (
  weather: OpenWeatherResponse,
): [WeatherData, WeatherData[]] => {
  const today = {
    date: new Date(weather.current.dt * 1000).getDay(),
    description: weather.current.weather[0].description,
    icon: weather.current.weather[0].icon,
    temp: Math.ceil(weather.current.temp),
  }

  const daily = weather.daily
    .map(day => ({
      date: new Date(day.dt * 1000).getDay(),
      description: day.weather[0].description,
      icon: day.weather[0].icon,
      temp: Math.ceil(day.temp.day),
    }))
    .slice(1)
    .slice(0, -1)

  return [today, daily]
}

export const test = () => 1
