import { Flex, Heading, Box, Link } from '@chakra-ui/react'
import ThemeToggler from '../ThemeToggler'
// import { AppProps } from 'next/app'
import AuthButton from '../auth/buttons/AuthButton'
import {
  SignInAction,
  SignOutAction,
  SignUpAction,
} from '../auth/buttons/actions/ClickActions'
import { useEffect } from 'react'
import { CurrentUser } from '../../context/User/interface'

// import ProfileMenu from './ProfileMenu'

const Header = ({ currentUser }: { currentUser: CurrentUser }) => {
  const loggedIn = currentUser?.loggedIn
  // const email = currentUser?.email

  useEffect(() => {
    console.log(currentUser)
  })

  const menuItems = [
    {
      title: 'Upload Image',
      href: '/upload',
    },
  ]

  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      h="50px"
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
        {!loggedIn && (
          <AuthButton onClickHandler={SignInAction}>Sign In</AuthButton>
        )}
        {loggedIn && (
          <AuthButton
            onClickHandler={() => {
              SignOutAction()
            }}
          >
            Signout
          </AuthButton>
        )}
        {!loggedIn && (
          <AuthButton onClickHandler={SignUpAction}>Create Account</AuthButton>
        )}
      </Flex>
      <Box>
        <ThemeToggler />
      </Box>
      {/* <ProfileMenu></ProfileMenu> */}
    </Flex>
  )
}

export default Header
