import { Box, Flex } from '@chakra-ui/react'
import { Container } from '../../components/base/container/Container'
import SignupForm from '../../components/auth/forms/SignupForm'

const SignupPage = () => {
  return (
    <Container id="signup-container">
      <Flex alignItems="center">
        <Box textAlign="center" w={[350, 450, 510]}>
          <SignupForm />
        </Box>
      </Flex>
    </Container>
  )
}

export default SignupPage
