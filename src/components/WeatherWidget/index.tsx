import Loader from '@components/Loader'
import WeatherDay from '@components/WeatherDay'
import { useCityWeather } from '@hooks'
import { ErrorMessage } from '@theme'
import { List } from './styled'

const WeatherWidget = () => {
  const { weather, isLoading, error } = useCityWeather()

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {!isLoading && !error && weather && (
        <List>
          {weather.map(({ date, icon, temp }, i) => (
            <WeatherDay
              key={date}
              date={date}
              icon={icon}
              temp={temp}
              isFirst={i === 0}
            />
          ))}
        </List>
      )}
    </>
  )
}

export default WeatherWidget
