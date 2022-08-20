import { Tokens, Endpoints } from '@constants'
import { Coordinates } from '@interfaces'

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
    return new Error('No coordinates for this place')
  }
}

export const getOpenWeather = async (lat: number, lon: number) => {
  const response = await fetch(
    `${Endpoints.OPENWEATHER}?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${Tokens.OPENWEATHER}`,
  )
  const data = await response.json()
  return data
}
