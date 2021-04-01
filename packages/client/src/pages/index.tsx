import { Hero } from '../components/Hero'
import { Container } from '../components/base/Container'
import { Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
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

const Index = ({ currentUser }: { currentUser: CurrentUser }) => {
  const email = currentUser?.email
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
              welcome -- {email}
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default Index
