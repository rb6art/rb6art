import { ChakraProvider, Divider } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
import styled from '@emotion/styled'
import theme from '../theme'
import { AppProps } from 'next/app'
import Header from '../components/Header'
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
      <PageWrapper>
        <CookiesProvider>
          {/* <UserProvider> */}
          <Header {...pageProps} />
          <Component {...pageProps} />
          <Divider />
          <Footer />
          {/* </UserProvider> */}
        </CookiesProvider>
      </PageWrapper>
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
