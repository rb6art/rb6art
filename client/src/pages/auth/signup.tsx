import { Box, Flex } from '@chakra-ui/react'
import { Container } from '../../components/base/Container'
import SignUpForm from '../../components/auth/SignupForm'

const SignupPage = () => (
  <Container id="signup-container" height="80vh" minH="650px">
    <Flex alignItems="center" mt="40">
      <Box textAlign="center" w={[300, 400, 560]}>
        <SignUpForm />
      </Box>
    </Flex>
  </Container>
)

export default SignupPage
