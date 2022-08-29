import styled, { createGlobalStyle } from 'styled-components'
import defaultTheme from './theme'

type ThemeParams = { theme: typeof defaultTheme }

export default createGlobalStyle<ThemeParams>`
  * {
    margin: ${({ theme }) => theme.spaces[0]};
    padding: ${({ theme }) => theme.spaces[0]};
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font};
    transition: ${({ theme }) => theme.defaultTransition};
    &::-webkit-scrollbar {
      width: ${({ theme }) => theme.webkitScrollBarWidth};
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.secondary};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    color: inherit;
    cursor: pointer;
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};
  }
`

export const ErrorMessage = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  text-align: center !important;
`
