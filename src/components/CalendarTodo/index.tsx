import { memo } from 'react'
import { CalendarTodo as CalendarTodoType } from '@interfaces'
import { TodoItem, TodoSummary, TodoTime } from './styled'

type Props = CalendarTodoType

const CalendarTodo = ({ time, summary }: Props) => {
  return (
    <TodoItem>
      <TodoTime>{time}</TodoTime>
      <TodoSummary>{summary}</TodoSummary>
    </TodoItem>
  )
}

export default memo(CalendarTodo)
