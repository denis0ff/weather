import { memo } from 'react'
import { CalendarTodo as CalendarTodoType } from '@interfaces'
import { TodoItem, TodoSummary, TodoTime } from './styled'

const CalendarTodo = ({ time, summary }: CalendarTodoType) => {
  return (
    <TodoItem>
      <TodoTime>{time}</TodoTime>
      <TodoSummary>{summary}</TodoSummary>
    </TodoItem>
  )
}

export default memo(CalendarTodo)
