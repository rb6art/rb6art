import { Button, useBreakpointValue } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'

interface AuthButtonProps {
  children: React.ReactNode
  onClickHandler(event?: React.MouseEvent<HTMLElement>): void
}

const AuthButton = ({
  children,
  onClickHandler,
}: AuthButtonProps): ReactJSXElement => {
  // const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' })

  return (
    <Button
      bg="transparent"
      transition="none"
      border="1px"
      mr="15px"
      h="30px"
      size="sm"
      onClick={(event): void => {
        onClickHandler(event)
      }}
    >
      {children}
    </Button>
  )
}
export default AuthButton
