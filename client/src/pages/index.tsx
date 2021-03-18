import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Container } from '../components/base/Container'
import { AppProps } from 'next/app'
import { Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useDispatchUser, useUser } from '../context/User/UserProvider'
import { CurrentUser } from '../context/User/interface'

const height = '90vh'
const BackgroundWrapper = styled.div`
  padding-top: 100px;
  height: ${height};
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: -1;
`

interface _AppProps extends AppProps {
  currentUser: CurrentUser
}

const Index = (pageProps: _AppProps) => {

  const userState = useUser()
  const userDispatch = useDispatchUser()

  useEffect((): void => {
    const user = pageProps.currentUser

    if(user && !userState.userID){
      userDispatch({
        type: 'SET_LOGIN_STATUS',
        value: true,
      })
      userDispatch({
        type: 'SET_USER_ID',
        value: user.id || '',
      })
      userDispatch({
        type: 'SET_EMAIL',
        value: user.email || '',
      })
    }

  }, [pageProps.currentUser])

  return (
    <div>
      <BackgroundWrapper>
        The teal background will be replaced with a video
      </BackgroundWrapper>
      <Container height="100%">
        <Flex direction="column" h={height} w="100%">
          <Box mr="20" ml="20" h="100vh">
            <Hero />
            <Box bg="red" textAlign="center">
              welcome 
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default Index
