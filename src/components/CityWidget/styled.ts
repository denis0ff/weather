import styled from 'styled-components'

export const Container = styled.div`
  & > * {
    margin: ${({ theme }) => theme.spaces[2]} 0;
    width: 100%;
    border: none;
    outline: none;
    color: inherit;
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    text-align: right;
  }
`

export const CityInput = styled.input`
  padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[2]}`};
  background: ${({ theme }) => `${theme.colors.black}1a`};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  border-bottom: ${({ theme }) => `2px solid ${theme.fontColor}`};
  cursor: pointer;
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const CityName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[5]};
`

export const CountryName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]};
`

export const ApiSwitcher = styled.select`
  padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[2]}`};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  background: ${({ theme }) => `${theme.colors.black}1a`};
  text-transform: capitalize;
  border-bottom: ${({ theme }) => `2px solid ${theme.fontColor}`};
  cursor: pointer;
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  & > option {
    color: ${({ theme }) => theme.colors.black};
  }
`
