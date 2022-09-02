type OpenWeather = {
  icon: string
}

type OpenWeatherData = {
  weather: OpenWeather[]
  dt: number
}

interface OpenWeatherHourly extends OpenWeatherData {
  temp: number
}

interface OpenWeatherDaily extends OpenWeatherData {
  temp: { day: number }
}

export type OpenWeatherResponse = {
  current: {
    temp: number
    weather: OpenWeather[]
    dt: number
  }
  daily: OpenWeatherDaily[]
  hourly: OpenWeatherHourly[]
}

type StormGlass = {
  airTemperature: {
    sg: number
  }
  time: string
}

export type StormGlassResponse = {
  hours: StormGlass[]
}

export type Coordinates = {
  country: string
  city: string
  latitude: number
  longitude: number
}

export type Client = {
  requestAccessToken(overrideConfig?: unknown): void
}

type CalendarResponseItem = {
  start: {
    dateTime: string
  }
  summary: string
}

export type CalendarResponse = {
  items: CalendarResponseItem[]
}
