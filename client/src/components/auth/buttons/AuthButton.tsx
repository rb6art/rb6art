import { Button } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

interface AuthButtonProps {
  text: string
  onClickHandler(event?: React.MouseEvent<HTMLElement>): void
}

const AuthButton = ({
  text,
  onClickHandler,
}: AuthButtonProps): ReactJSXElement => (
  <Button
    bg="transparent"
    border="1px"
    mr="15px"
    size="sm"
    onClick={(event): void => {
      onClickHandler(event)
    }}
  >
    {text}
  </Button>
)

export default AuthButton
