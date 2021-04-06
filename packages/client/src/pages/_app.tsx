import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import getCurrentUser from '../api/getCurrentUser'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const ctx = appContext.ctx
  const currentUser = await getCurrentUser(ctx)

  let pageProps = {}
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)
  }

  pageProps = {
    ...pageProps,
    currentUser,
  }

  return {
    pageProps,
  }
}

export default MyApp
