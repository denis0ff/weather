import { useState, useEffect, useRef } from 'react'
import { getTime, getDate } from '@utils'
import { Container, DateView, TimeView } from './styled'

const DateWidget = () => {
  const [date, setDate] = useState(() => new Date())
  const timerId = useRef<NodeJS.Timer>()

  useEffect(() => {
    timerId.current = setInterval(() => {
      const now = new Date()
      setDate(prev => (prev.getMinutes() === now.getMinutes() ? prev : now))
    }, 1000)

    return () => clearInterval(timerId.current)
  }, [])

  const currentTime = getTime(date)
  const currentDate = getDate(date)

  return (
    <Container>
      <TimeView>{currentTime}</TimeView>
      <DateView>{currentDate}</DateView>
    </Container>
  )
}

export default DateWidget
