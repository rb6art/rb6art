import { Box, Flex } from '@chakra-ui/react'
import { Container } from '../../components/base/container/Container'
import SignInForm from '../../components/auth/forms/SigninForm'

const SignupPage = () => (
  <Container id="signin-container">
    <Flex alignItems="center">
      <Box textAlign="center" w={[350, 450, 510]}>
        <SignInForm />
      </Box>
    </Flex>
  </Container>
)

export default SignupPage
