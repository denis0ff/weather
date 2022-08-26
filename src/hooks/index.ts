import { useSelector } from 'react-redux'
import { RootState } from '@store'
import { NormalizedWeather } from 'src/interfaces'

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
