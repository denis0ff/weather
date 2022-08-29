/* eslint-disable @typescript-eslint/indent */
import { parseURL } from '@utils'
import styled from 'styled-components'

const space = 5

export const Wrapper = styled.div<{ bg: string }>`
  width: 100%;
  height: 100%;
  background: center / cover no-repeat
    ${({ bg }) => parseURL(bg, 'backgrounds', 'jpg')};
`

export const Container = styled.div<{ bg: string }>`
  margin: ${({ theme }) => theme.spaces[space]};
  display: flex;
  flex-direction: column;
  height: calc(100% - 2 * ${({ theme }) => theme.spaces[space]});
  background: center / cover no-repeat
    ${({ bg }) => parseURL(bg, 'card_backgrounds', 'jpg')};
  opacity: 0.9;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: auto;
  @media screen and (max-width: 600px) {
    margin: ${({ theme }) => theme.spaces[0]};
    height: 100%;
  }
`

export const MainWrapper = styled.main`
  flex: 1 0 auto;
  padding: ${({ theme }) => {
    return `${theme.spaces[4]} ${theme.spaces[4]} 0 ${theme.spaces[4]}`
  }};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spaces[1]};
  @media screen and (max-width: 600px) {
    padding: ${({ theme }) => {
      return `${theme.spaces[2]} ${theme.spaces[2]} 0 ${theme.spaces[2]}`
    }};
  }
`

export const Main = styled.section`
  flex: 1 0 60%;
  @media screen and (max-width: 550px) {
    flex: 1 0 100%;
  }
`

export const Aside = styled.aside`
  flex: 1 0 320px;
  display: flex;
  justify-content: flex-end;
`

export const Footer = styled.footer`
  flex: 0 0 auto;
  min-height: ${({ theme }) => theme.footerHeight};
  background: ${({ theme }) => theme.footerBgColor};
`
