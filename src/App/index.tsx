import { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import Loader from '@components/Loader'
import { GlobalStyles, theme } from '@theme'
import Main from '@pages/Main'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />} />
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  )
}
