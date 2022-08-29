import { useSelector } from 'react-redux'
import { RootState } from '@store'
import { WeatherData } from 'src/interfaces'

import { useEffect } from 'react'
import { Endpoints, Tokens } from '@constants'

type ReturnType = {
  today: WeatherData | null
  daily: WeatherData[] | null
  isLoading: boolean
  error: string
}

export const useCityWeather = (): ReturnType => {
  const {
    data: {
      coordinates: { city },
      api,
      isLoading,
      error,
    },
    weather,
  } = useSelector((state: RootState) => state)

  if (weather[api][city]) {
    const { today } = weather[api][city]
    const { daily } = weather[api][city]
    return { today, daily, isLoading, error }
  }
  return { today: null, daily: null, isLoading, error }
}

export default useCityWeather

export const useGoogle = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = Endpoints.GOOGLE_CLIENT_API
    script.onload = () => {
      google.accounts.id.initialize({
        client_id: Tokens.GOOGLE_CLIENT_ID,
        auto_select: false,
      })
    }
    document.head.append(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])
}
