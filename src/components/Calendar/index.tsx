import { useGoogle } from '@hooks'
import { useEffect } from 'react'
import { getToken, initClient } from '@utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import CalendarTodo from '@components/CalendarTodo'
import { SignInButton, Container } from './styled'

const Calendar = () => {
  const { todos } = useSelector((state: RootState) => state.calendar)
  const dispatch = useDispatch()

  const initializeGoogle = () => initClient(dispatch)

  useEffect(() => {
    window.addEventListener('load', initializeGoogle)
    return () => window.removeEventListener('load', initializeGoogle)
  }, [])

  useGoogle()

  return (
    <Container>
      <SignInButton onClick={getToken}>Login</SignInButton>
      <ul>
        {!!todos.length &&
          todos.map(({ time, summary }) => (
            <CalendarTodo key={time} time={time} summary={summary} />
          ))}
      </ul>
    </Container>
  )
}

export default Calendar
