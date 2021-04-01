import { Box, Flex } from '@chakra-ui/react'
import { Container } from '../../components/base/Container'
import SignupForm from '../../components/auth/forms/SignupForm'

const SignupPage = () => {
  return (
    <Container id="signup-container" height="80vh" minH="650px">
      <Flex alignItems="center">
        <Box textAlign="center" w={[350, 450, 510]}>
          <SignupForm />
        </Box>
      </Flex>
    </Container>
  )
}

export default SignupPage
