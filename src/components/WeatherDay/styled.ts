import { parseURL } from '@utils'
import styled from 'styled-components'

export const ListItem = styled.li<{ isToday: boolean }>`
  margin-right: ${({ theme, isToday }) => {
    return isToday ? theme.spaces[5] : theme.spaces[0]
  }};
  display: grid;
  justify-items: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[2]};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`

export const Day = styled.span<{ isToday: boolean }>`
  grid-area: ${({ isToday }) => (isToday ? '1 / 2 / 2 / 3' : '1 / 1 / 2 / 2')};
  padding: ${({ theme }) => theme.spaces[2]};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme, isToday }) => {
    return isToday ? theme.fontSizes[2] : theme.fontSizes[1]
  }};
  border-radius: ${({ theme }) => theme.borderRadiuses[3]};
`

export const Icon = styled.span<{ icon: string; isToday: boolean }>`
  grid-area: ${({ isToday }) => (isToday ? '1 / 1 / 3 / 2' : '2 / 1 / 3 / 2')};
  padding: ${({ theme, isToday }) => {
    return `calc(${isToday ? 2 : 1} * ${theme.weatherIconSize})`
  }};
  background: center / cover no-repeat
    ${({ icon }) => parseURL(icon, 'icons', 'png')};
`

export const Temperature = styled.span<{ isToday: boolean }>`
  grid-area: ${({ isToday }) => (isToday ? '2 / 2 / 3 / 3' : '3 / 1 / 4 / 2')};
  font-size: ${({ theme, isToday }) => {
    return isToday ? theme.fontSizes[6] : theme.fontSizes[3]
  }};
`
