import { useState } from 'react'
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import useRequest from '../hooks/use-request'

const SignInForm = () => {
  // Theme setup
  const bg = useColorModeValue('orange.300', 'orange.300')
  const color = useColorModeValue('white', 'gray.800')
  const hoverColor = 'orange.400'
  const inputBorderColor = useColorModeValue('gray.400', 'gray.200')

  // Local state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShow] = useState(false)

  const {
    makeRequest,
    isEmailValid,
    isPassValid,
    emailErrorMsg,
    passErrorMsg,
  } = useRequest({
    url: '/api/user/signin',
    method: 'post',
    body: {
      email,
      password,
    },
  })

  const handleShowPass = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setShow(!showPassword)
  }

  const handleSubmit = async (event?: React.MouseEvent<HTMLElement>) => {
    if (event) event.preventDefault()
    await makeRequest()
  }

  return (
    <Container mt="28">
      <Heading mb="10">Login</Heading>
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
            borderColor={inputBorderColor}
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
              borderColor={inputBorderColor}
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
          bg={bg}
          color={color}
          type="submit"
          variant="outline"
          width="full"
          mt={4}
          onClick={handleSubmit}
          _hover={{ bg: hoverColor }}
          _focus={{ boxShadow: 'outline' }}
        >
          Login
        </Button>
      </form>
    </Container>
  )
}

export default SignInForm
