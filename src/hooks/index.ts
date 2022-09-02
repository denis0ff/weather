import { useSelector } from 'react-redux'
import { RootState } from '@store'

import { useEffect } from 'react'
import { WeatherData } from '@interfaces'
import { UseCityReturnType } from './types'

export const useCityWeather = (): UseCityReturnType => {
  const {
    data: {
      coordinates: { city },
      api,
      type,
      isLoading,
      error,
    },
    weather: weatherState,
  } = useSelector((state: RootState) => state)

  if (weatherState[api][city]) {
    const weather = <WeatherData[]>weatherState[api][city][type]
    return { weather, isLoading, error }
  }
  return { weather: null, isLoading, error }
}

export default useCityWeather

export const useGoogle = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = <string>process.env.REACT_APP_GOOGLE_CLIENT_API
    script.onload = () => {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        auto_select: false,
      })
    }
    document.head.append(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])
}
