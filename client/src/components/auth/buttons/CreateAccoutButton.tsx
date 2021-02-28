import { Button } from '@chakra-ui/react'

const CreateAccoutButton = () => {
  const navigateToSignupPage = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault()
    window.location.href = '/auth/signup'
  }

  return (
    <Button
      bg="transparent"
      border="1px"
      mr="15px"
      size="sm"
      onClick={navigateToSignupPage}
    >
      Create account
    </Button>
  )
}

export default CreateAccoutButton
