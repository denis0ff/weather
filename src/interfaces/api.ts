type OpenWeather = {
  icon: string
  description: string
}

type OpenWeatherDaily = {
  temp: {
    day: number
  }
  weather: OpenWeather[]
  dt: number
}

export type OpenWeatherResponse = {
  current: {
    temp: number
    weather: OpenWeather[]
    dt: number
  }
  daily: OpenWeatherDaily[]
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
