import { parseURL } from '@utils'
import styled from 'styled-components'

const space = 5

export const Wrapper = styled.div<{ bg: string }>`
  width: 100%;
  height: 100%;
  background: center / cover no-repeat
    ${({ bg }) => parseURL(bg, 'backgrounds', 'jpg')};
`

export const Container = styled.section<{ bg: string }>`
  margin: ${({ theme }) => theme.spaces[space]};
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: calc(100% - 2 * ${({ theme }) => theme.spaces[space]});
  background: center / cover no-repeat
    ${({ bg }) => parseURL(bg, 'card_backgrounds', 'jpg')};
  opacity: 0.9;
  box-shadow: ${({ theme }) => theme.boxShadow};
`

export const Main = styled.main`
  flex: 1 0 65%;
`

export const Aside = styled.aside`
  flex: 1 0 25%;
`

export const Footer = styled.footer`
  flex: 0 0 100%;
  height: 30%;
  background: ${({ theme }) => theme.footerBgColor};
`
