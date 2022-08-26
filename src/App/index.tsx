import { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import Loader from '@components/Loader'
import { GlobalStyles, theme } from '@theme'
import Home from '@pages/Home'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />} />
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}
