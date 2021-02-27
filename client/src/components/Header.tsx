import React from 'react'
import { Flex, Heading, Box, Link } from '@chakra-ui/react'
import ThemeToggler from './ThemeToggler'
import SignoutButton from './auth/SignoutButton'
import SignupButton from './auth/SignupButton'

const Header = () => {
  // const [showMobleMenu, setShow] = useState(false);
  // const handleToggle = () => setShow(!showMobleMenu);

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
      // justify="space-between"
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

      {/* <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box> */}

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
        <SignupButton />
        <SignoutButton />
      </Flex>
      <Box>
        <ThemeToggler />
      </Box>
    </Flex>
  )
}

export default Header
