import { Button } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import axios from 'axios'

const SignoutButton = (): ReactJSXElement => (
  <Button
    bg="transparent"
    border="1px"
    mr="15px"
    size="sm"
    onClick={async () => {
      try {
        const response = axios.post('/api/user/signout')
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }}
  >
    Signout{' '}
  </Button>
)

export default SignoutButton
