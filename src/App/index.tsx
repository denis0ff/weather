import { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import Loader from '@components/Loader'
import { GlobalStyles, theme } from '@theme'
import Home from '@pages/Home'
import ErrorBoundary from '@components/ErrorBoundary'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />} />
      <GlobalStyles />
      <ErrorBoundary fallback="Something went wrong. Try to reload the page">
        <Home />
      </ErrorBoundary>
    </ThemeProvider>
  )
}
