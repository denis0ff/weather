import { Tokens, Endpoints } from '@constants'
import {
  Coordinates,
  OpenWeatherResponse,
  StormGlassResponse,
} from '@interfaces'
import { getEndDateStormglass } from './helpers'

export const getCoordinates = async (
  city: string,
): Promise<Coordinates | Error> => {
  try {
    const response = await fetch(
      `${Endpoints.GEOAPIFY}?text=${city}&lang=en&limit=1&type=city&format=json&apiKey=${Tokens.GEOAPIFY}`,
    )
    const { results } = await response.json()
    return {
      country: results[0].country,
      city: results[0].city,
      latitude: results[0].lat,
      longitude: results[0].lon,
    }
  } catch (error) {
    return new Error('Unknown city. Correct the place, please')
  }
}

export const getOpenWeather = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `${Endpoints.OPENWEATHER}?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${Tokens.OPENWEATHER}`,
    )
    const data: OpenWeatherResponse = await response.json()
    return data
  } catch {
    return new Error(
      'Something went wrong. Try to reload page or choose another API',
    )
  }
}

export const getStormglass = async (lat: number, lon: number) => {
  const date = getEndDateStormglass(7).getTime() / 1000

  try {
    const response = await fetch(
      `${Endpoints.STORMGLASS}?lat=${lat}&lng=${lon}&params=airTemperature&end=${date}&source=sg`,
      {
        headers: {
          Authorization: Tokens.STORMGLASS,
        },
      },
    )

    if (response.status === 402) {
      throw Error()
    }

    const { hours }: StormGlassResponse = await response.json()

    return {
      hours: hours.filter(({ time }) => new Date(time).getHours() === 12),
    }
  } catch (e) {
    return new Error(
      'The daily request limit has been reached. Please choose another API',
    )
  }
}

export const getCoordinatesByIP = async () => {
  try {
    const response = await fetch(Endpoints.IPWHOIS)
    const data = await response.json()
    return data
  } catch {
    return new Error(
      'Unable to get your location. Try to enter the city to get weather',
    )
  }
}
