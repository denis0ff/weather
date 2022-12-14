import styled from 'styled-components'

export default styled.div`
  padding: ${({ theme }) => theme.spaces[1]};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.fontSizes[3]};
  background-color: ${({ theme }) => theme.colors.error};
`
