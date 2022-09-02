import { parseURL } from '@utils'
import styled from 'styled-components'

export const ListItem = styled.li`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[2]};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  @media screen and (max-width: 950px) {
    :first-child {
      flex: 0 0 100%;
    }
  }
`

export const Day = styled.span<{ isFirst: boolean }>`
  grid-area: ${({ isFirst }) => (isFirst ? '1 / 2 / 2 / 3' : '1 / 1 / 2 / 2')};
  padding: ${({ theme }) => theme.spaces[2]};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme, isFirst }) => {
    return isFirst ? theme.fontSizes[2] : theme.fontSizes[1]
  }};
  border-radius: ${({ theme }) => theme.borderRadiuses[3]};
`

export const Icon = styled.span<{ icon: string; isFirst: boolean }>`
  grid-area: ${({ isFirst }) => (isFirst ? '1 / 1 / 3 / 2' : '2 / 1 / 3 / 2')};
  padding: ${({ theme, isFirst }) => {
    return `calc(${isFirst ? 2 : 1} * ${theme.weatherIconSize})`
  }};
  background: center / cover no-repeat
    ${({ icon }) => parseURL(icon, 'icons', 'png')};
`

export const Temperature = styled.span<{ isFirst: boolean }>`
  grid-area: ${({ isFirst }) => (isFirst ? '2 / 2 / 3 / 3' : '3 / 1 / 4 / 2')};
  font-size: ${({ theme, isFirst }) => {
    return isFirst ? theme.fontSizes[6] : theme.fontSizes[3]
  }};
`
