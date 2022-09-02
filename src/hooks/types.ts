import { WeatherData } from '@interfaces'

export type UseCityReturnType = {
  weather: WeatherData[] | null
  isLoading: boolean
  error: string
}
