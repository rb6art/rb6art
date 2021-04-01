import React from 'react'
import { useColorMode, Box, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box textAlign="right">
      <IconButton
        aria-label="themeToggle"
        size="sm"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  )
}
