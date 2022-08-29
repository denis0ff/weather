import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spaces[3]};
  max-height: calc(100% - ${({ theme }) => theme.footerHeight});
  font-weight: ${({ theme }) => theme.fontWeights[2]};
`

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[3]}`};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  border-radius: ${({ theme }) => theme.borderRadiuses[2]};
  border: ${({ theme }) => theme.slimBorder};
  border-color: ${({ theme }) => theme.colors.border};
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`
