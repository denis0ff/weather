import {
  Coordinates,
  OpenWeatherResponse,
  StormGlassResponse,
} from '@interfaces'
import { getStormglassDates } from './helpers'

export const getCoordinates = async (
  city: string,
): Promise<Coordinates | Error> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_GEOAPIFY_ENDPOINT}?text=${city}&lang=en&limit=1&type=city&format=json&apiKey=${process.env.REACT_APP_GEOAPIFY_TOKEN}`,
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
      `${process.env.REACT_APP_OPENWEATHER_ENDPOINT}?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_OPENWEATHER_TOKEN}`,
    )
    if (response.status !== 200) throw Error()
    const data: OpenWeatherResponse = await response.json()
    return data
  } catch {
    return new Error(
      'Something went wrong. Try to reload page or choose another API',
    )
  }
}

export const getStormglass = async (lat: number, lon: number) => {
  const [start, end] = getStormglassDates(7)

  try {
    const response = await fetch(
      `${process.env.REACT_APP_STORMGLASS_ENDPOINT}?lat=${lat}&lng=${lon}&params=airTemperature&start=${start}&end=${end}&source=sg`,
      {
        headers: {
          Authorization: <string>process.env.REACT_APP_STORMGLASS_TOKEN,
        },
      },
    )

    if (response.status === 402) {
      throw Error()
    }

    const data: StormGlassResponse = await response.json()

    return data
  } catch (e) {
    return new Error(
      'The daily request limit has been reached. Please choose another API',
    )
  }
}

export const getCoordinatesByIP = async () => {
  try {
    const response = await fetch(<string>process.env.REACT_APP_IPWHOIS_ENDPOINT)
    const data = await response.json()
    return data
  } catch {
    return new Error(
      'Unable to get your location. Try to enter the city to get weather',
    )
  }
}
