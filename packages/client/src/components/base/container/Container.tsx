import { Box } from '@chakra-ui/react'
// import styles from './Container.module.scss'

export const Container = (props: any) => {
  return (
    <Box
      height="80vh"
      minH="650px"
      margin="20px 50px;"
      // className={styles['base-container']}
      {...props}
    />
  )
}
