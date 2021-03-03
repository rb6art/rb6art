import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { Hero } from '../components/Hero'
import { Container } from '../components/base/Container'

import { Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

import serverSideRequest from '../api/serverSideRequest'
import { useDispatchUser, useUser } from '../context/User/UserProvider'

const height = '90vh'
const BackgroundWrapper = styled.div`
  padding-top: 100px;
  height: ${height};
  position: absolute;
  width: 100%;
  background: teal;
  text-align: center;
  z-index: -1;
`

const Index = ({ currentUser }: any) => {
  const userState = useUser()
  const userDispatch = useDispatchUser()

  useEffect((): void => {
    const user = currentUser
    if (user) {
      userDispatch({
        type: 'SET_LOGIN_STATUS',
        value: true,
      })
    }
    userDispatch({
      type: 'SET_USER_ID',
      value: user?.userID || '',
    })
    userDispatch({
      type: 'SET_EMAIL',
      value: user?.email || '',
    })
  }, [currentUser])

  const email = userState.email

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
              welcome {email}
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const client = serverSideRequest({ req })
  const { data } = await client.get('/api/user/currentuser/')
  return {
    props: data, // will be passed to the page component as props
  }
}

export default Index
