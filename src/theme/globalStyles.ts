import { createGlobalStyle } from 'styled-components';

type ThemeParams = { theme: { [x: string]: string } };

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
      background: ${({ theme }) => theme.secondary};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
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
    border: ${({ theme }) => theme.defaultBorder};
    background: ${({ theme }) => theme.primary};
    color: inherit;
    cursor: pointer;
      &:hover {
      border-color: ${({ theme }) => theme.primary};
      background-color: ${({ theme }) => theme.secondary};
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
  }
`;
