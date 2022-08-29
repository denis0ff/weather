import { useGoogle } from '@hooks'
import { useEffect } from 'react'
import { getToken, initializeClient } from '@utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import CalendarTodo from '@components/CalendarTodo'
import { logout, setToken, updateTodos } from '@store/actions'
import Loader from '@components/Loader'
import { Button, Container } from './styled'

const Calendar = () => {
  const { todos, token, isLoading } = useSelector(
    (state: RootState) => state.calendar,
  )
  const dispatch = useDispatch()

  const initializeGoogle = async () => {
    initializeClient()
      .then(tokenID => dispatch(setToken(tokenID)))
      .catch(() => dispatch(logout()))
  }

  const updateTodo = () => dispatch(updateTodos())

  useEffect(() => {
    updateTodo()
  }, [])

  useEffect(() => {
    window.addEventListener('load', initializeGoogle)
    return () => window.removeEventListener('load', initializeGoogle)
  }, [])

  useGoogle()

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  return (
    <Container>
      {token ? (
        <Button onClick={updateTodo}>Update</Button>
      ) : (
        <Button onClick={getToken}>Login</Button>
      )}
      <ul>
        {!!todos.length &&
          todos.map(({ time, summary }) => (
            <CalendarTodo key={time} time={time} summary={summary} />
          ))}
        {!todos.length && token && (
          <CalendarTodo time="" summary="No calendar events for today" />
        )}
      </ul>
    </Container>
  )
}

export default Calendar
