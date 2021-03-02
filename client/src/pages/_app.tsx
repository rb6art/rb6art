import { ChakraProvider, Divider } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from '../theme'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserProvider } from '../context/User/UserProvider'

const PageWrapper = styled.div`
  display: flex;
  // height: 100vh;
  flex-direction: column;
`

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp
