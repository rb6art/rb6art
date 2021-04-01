import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  // const { colorMode } = useColorMode()
  // const bgColor = { light: 'blackAlpha.50', dark: 'gray.800' }
  // const color = { light: 'black', dark: 'white' }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      // bg={bgColor[colorMode]}
      // color={color[colorMode]}
      {...props}
    />
  )
}
