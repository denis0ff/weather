import { useSelector } from 'react-redux'
import { RootState } from '@store'
import { NormalizedWeather } from 'src/interfaces'

import { useEffect } from 'react'
import { Endpoints, Tokens } from '@constants'

type ReturnType = NormalizedWeather | { today: null; daily: null }

export const useCityWeather = (): ReturnType => {
  const {
    data: {
      coordinates: { city },
      api,
    },
    weather,
  } = useSelector((state: RootState) => state)

  if (weather[api][city]) {
    const { today } = weather[api][city]
    const { daily } = weather[api][city]
    return { today, daily }
  }
  return { today: null, daily: null }
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
