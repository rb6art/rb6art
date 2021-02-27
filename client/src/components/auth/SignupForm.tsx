import { useState } from 'react'
import axios from 'axios'
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react'

interface ValidationError {
  message: string
  field: string
}

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShow] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPassValid, setIsPassValid] = useState(true)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [passErrorMsg, setPassMsg] = useState('')

  const handleShowPass = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setShow(!showPassword)
  }

  const handleErrors = (errors: ValidationError[]) => {
    if (errors.length > 0) {
      errors.map((err: ValidationError) => {
        if (err.field) {
          switch (err.field.toLowerCase()) {
            case 'email':
              setIsEmailValid(false)
              setEmailErrorMsg(err.message)
              break
            case 'password':
              setIsPassValid(false)
              setPassMsg(err.message)
              break
            default:
              break
          }
        }
      })
    }
  }

  const handleSubmit = async (event?: React.MouseEvent<HTMLElement>) => {
    if (event) event.preventDefault()
    try {
      await axios.post('/api/user/signup', {
        email,
        password,
      })
    } catch (error) {
      handleErrors(error.response.data.errors)
    }
  }
  return (
    <Container>
      <form>
        <FormControl id="email" pb="3" isRequired>
          <Flex alignItems="center" pb="5px">
            <FormLabel p="0" pr="5px" m="0">
              Email address
            </FormLabel>
            <Text p="0" m="0" color="red" isInvalid={!isEmailValid}>
              {emailErrorMsg}
            </Text>
          </Flex>

          <Input
            isInvalid={!isEmailValid}
            type="email"
            placeholder="Enter Email"
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
        </FormControl>
        <FormControl id="password" pb="5" isRequired>
          <Flex alignItems="center" pb="5px">
            <FormLabel p="0" pr="5px" m="0">
              Password
            </FormLabel>
            <Text p="0" m="0" color="red" isInvalid={!isPassValid}>
              {passErrorMsg}
            </Text>
          </Flex>

          <InputGroup size="md">
            <Input
              isInvalid={!isPassValid}
              pr="4.5rem"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPass}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          type="submit"
          colorScheme="facebook"
          variant="outline"
          width="full"
          mt={4}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  )
}

export default SignUpForm
