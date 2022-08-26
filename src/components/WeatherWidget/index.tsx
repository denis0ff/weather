import WeatherDay from '@components/WeatherDay'
import { useCityWeather } from '@hooks'
import { List } from './styled'

const WeatherWidget = () => {
  const { today, daily } = useCityWeather()

  if (today && daily) {
    return (
      <List>
        <WeatherDay
          date={today.date}
          icon={today.icon}
          temp={today.temp}
          isToday
        />
        {daily.map(({ date, icon, temp }) => (
          <WeatherDay key={date} date={date} icon={icon} temp={temp} />
        ))}
      </List>
    )
  }
  return null
}

export default WeatherWidget
