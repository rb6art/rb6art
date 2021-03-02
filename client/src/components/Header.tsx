import { Flex, Heading, Box, Link } from '@chakra-ui/react'
import ThemeToggler from './ThemeToggler'
import AuthButton from './auth/buttons/AuthButton'
import {
  SignInAction,
  SignOutAction,
  SignUpAction,
} from './auth/buttons/actions/ClickActions'
import { useUser } from '../context/User/UserProvider'

// import ProfileMenu from './ProfileMenu'

const Header = () => {
  const userState = useUser()
  const email = userState.email

  console.log(email)

  const menuItems = [
    {
      title: 'Posts',
      href: '/posts',
    },
  ]

  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      padding=".5rem"
      bg="orange.400"
      color="white"
    >
      <Flex mr={5}>
        <Link fontSize="lg" mr={6} display="block" href="/">
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            Rainbow 6 Art
          </Heading>
        </Link>
      </Flex>

      <Flex alignItems="center" flexGrow={1}>
        {menuItems.map((item) => (
          <Link
            key={item.title}
            ontSize="lg"
            mr={6}
            display="block"
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </Flex>

      <Flex>
        <AuthButton text="Sign In" onClickHandler={SignInAction} />
        <AuthButton text="Signout" onClickHandler={SignOutAction} />
        <AuthButton text="Create Account" onClickHandler={SignUpAction} />
      </Flex>
      <Box>
        <ThemeToggler />
      </Box>
      {/* <ProfileMenu></ProfileMenu> */}
    </Flex>
  )
}

export default Header
