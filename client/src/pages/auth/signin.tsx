import { Box, Flex } from '@chakra-ui/react'
import { Container } from '../../components/base/Container'
import SignInForm from '../../components/auth/SigninForm'

const SignupPage = () => (
  <Container id="signin-container" height="80vh" minH="650px">
    <Flex alignItems="center" mt="40">
      <Box textAlign="center" w={[300, 400, 560]}>
        <SignInForm />
      </Box>
    </Flex>
  </Container>
)

export default SignupPage
