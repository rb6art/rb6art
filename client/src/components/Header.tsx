import { Flex, Heading, Box, Link, useBreakpointValue } from '@chakra-ui/react'
import ThemeToggler from './ThemeToggler'
import axios from 'axios'
import AuthButton from './auth/buttons/AuthButton'

// import ProfileMenu from './ProfileMenu'

const Header = () => {
  // const buttonVariants = useBreakpointValue({})

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
        <AuthButton
          text="Sign In"
          onClickHandler={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault()
            window.location.href = '/auth/signin'
          }}
        />
        {/* <SignoutButton /> */}

        <AuthButton
          text="Signout"
          onClickHandler={async () => {
            try {
              await axios.post('/api/user/signout')
            } catch (error) {
              // console.error(error)
            }
          }}
        />
        <AuthButton
          text="Create Account"
          onClickHandler={(event: React.MouseEvent<HTMLElement>): void => {
            event.preventDefault()
            window.location.href = '/auth/signup'
          }}
        />
      </Flex>
      <Box>
        <ThemeToggler />
      </Box>
      {/* <ProfileMenu></ProfileMenu> */}
    </Flex>
  )
}

export default Header
