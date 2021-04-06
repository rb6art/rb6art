import { ChakraProvider, Divider, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../theme'
import { AppProps } from 'next/app'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
// import { UserProvider } from '../context/User/UserProvider'
import getCurrentUser from '../api/getCurrentUser'

const PageWrapper = styled.div`
  display: flex;
  // height: 100vh;
  flex-direction: column;
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {/* <PageWrapper> */}
      {/* <UserProvider> */}

      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer />

      {/* </UserProvider> */}
      {/* </PageWrapper> */}
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
