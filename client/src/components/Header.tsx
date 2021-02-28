import { Flex, Heading, Box, Link } from '@chakra-ui/react'
import ThemeToggler from './ThemeToggler'
import SignoutButton from './/auth/buttons/SignoutButton'
import CreateAccoutButton from './auth/buttons/CreateAccoutButton'
import SigninButton from './auth/buttons/SigninButton'
// import ProfileMenu from './ProfileMenu'
import { useEffect } from 'react'

const Header = () => {
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
        <SigninButton />
        <SignoutButton />
        <CreateAccoutButton />
      </Flex>
      <Box>
        <ThemeToggler />
      </Box>
      {/* <ProfileMenu></ProfileMenu> */}
    </Flex>
  )
}

export default Header
