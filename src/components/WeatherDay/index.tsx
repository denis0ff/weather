import { memo } from 'react'
import { Day, Icon, ListItem, Temperature } from './styled'
import { WeatherDayProps } from './interfaces'

const WeatherDay = ({ date, icon, temp, isFirst }: WeatherDayProps) => {
  return (
    <ListItem>
      <Day isFirst={isFirst}>{date}</Day>
      <Icon icon={icon} isFirst={isFirst} />
      <Temperature isFirst={isFirst}>
        {temp}
        <sup>o</sup>
      </Temperature>
    </ListItem>
  )
}

export default memo(WeatherDay)
