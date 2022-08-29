import { memo } from 'react'
import { WeatherData } from '@interfaces'
import { weekDays } from '@constants'
import { Day, Icon, ListItem, Temperature } from './styled'

interface Props extends WeatherData {
  isToday?: boolean
}

const WeatherDay = ({ date, icon, temp, isToday = false }: Props) => {
  return (
    <ListItem>
      <Day isToday={isToday}>{isToday ? 'TODAY' : weekDays[date]}</Day>
      <Icon icon={icon} isToday={isToday} />
      <Temperature isToday={isToday}>
        {temp}
        <sup>o</sup>
      </Temperature>
    </ListItem>
  )
}

export default memo(WeatherDay)
