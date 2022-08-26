import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ theme }) => theme.spaces[3]};
  padding-left: ${({ theme }) => theme.spaces[4]};
  padding-top: ${({ theme }) => theme.spaces[4]};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
`

export const TimeView = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[7]};
  text-transform: uppercase;
`

export const DateView = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[5]};
`
