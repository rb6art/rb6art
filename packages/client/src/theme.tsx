import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,

  colors: {
    black: '#17191c',
  },
  fonts,
  breakpoints,
})

export default theme
