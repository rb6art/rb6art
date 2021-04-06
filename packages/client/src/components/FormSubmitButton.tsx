import { Button, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'

interface FormSubmitButtonProps {
  children: React.ReactNode
  onClick(event?: React.MouseEvent<HTMLElement>): void
}

const FormSubmitButton = ({
  onClick,
  children,
}: FormSubmitButtonProps): ReactJSXElement => {
  // const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' })

  const bg = useColorModeValue('orange.300', 'orange.300')
  const color = useColorModeValue('white', 'gray.800')
  const hoverColor = 'orange.400'

  return (
    <Button
      bg={bg}
      color={color}
      type="submit"
      fontSize="lg"
      variant="outline"
      width="full"
      mt={4}
      onClick={(event): void => {
        onClick(event)
      }}
      _hover={{ bg: hoverColor }}
      _focus={{ boxShadow: 'outline' }}
    >
      {children}
    </Button>
  )
}
export default FormSubmitButton
