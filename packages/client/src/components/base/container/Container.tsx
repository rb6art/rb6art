import { Box } from '@chakra-ui/react'
// import styles from './Container.module.scss'

export const Container = (props: any) => {
  return (
    <Box
      minH="650px"
      margin="20px 100px;"
      // className={styles['base-container']}
      {...props}
    />
  )
}
