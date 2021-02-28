import { Button } from '@chakra-ui/react'

const SignupButton = () => {
  const navigateToSignupPage = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault()
    window.location.href = '/auth/signin'
  }

  return (
    <Button
      bg="transparent"
      border="1px"
      mr="15px"
      size="sm"
      onClick={navigateToSignupPage}
    >
      Sign In
    </Button>
  )
}

export default SignupButton
