import { ChakraProvider, Divider } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../theme'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserProvider } from '../context/User/UserProvider'
import serverSideRequest from '../api/serverSideRequest'


const PageWrapper = styled.div`
  display: flex;
  // height: 100vh;
  flex-direction: column;
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <PageWrapper>
        <UserProvider>
          <Header />
          <Component {...pageProps} />
          <Divider />
          <Footer />
        </UserProvider>
      </PageWrapper>
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const client = serverSideRequest(appContext.ctx);
  const { data } = await client.get('/api/user/currentuser');
  const currentUser = data.currentUser

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  pageProps = {
    currentUser
  }

  return {
    pageProps
  };
}

export default MyApp
