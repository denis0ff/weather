import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const List = styled.ul`
  padding: ${({ theme }) => theme.spaces[3]};
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[3]};
`
