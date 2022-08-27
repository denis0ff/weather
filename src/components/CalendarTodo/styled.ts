import styled from 'styled-components'

export const TodoItem = styled.li`
  margin: ${({ theme }) => theme.spaces[3]} 0;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const TodoTime = styled.span`
  margin-right: ${({ theme }) => theme.spaces[2]};
  padding: ${({ theme }) => theme.spaces[2]};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadiuses[3]};
`

export const TodoSummary = styled.span`
  line-height: ${({ theme }) => theme.fontSizes[3]};
`
