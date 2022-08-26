import { useState, useEffect } from 'react'
import { getTime, getDate } from '@utils'
import { Container, DateView, TimeView } from './styled'

const DateWidget = () => {
  const [date, setDate] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setDate(prev => (prev.getMinutes() === now.getMinutes() ? prev : now))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Container>
      <TimeView>{getTime(date)}</TimeView>
      <DateView>{getDate(date)}</DateView>
    </Container>
  )
}

export default DateWidget
