import { Box } from '@chakra-ui/react'
import React from 'react'

interface BaseContainerProps {
  id?: string
  margin?: string
  children: React.ReactNode
}
export const Container = ({ id, margin, children }: BaseContainerProps) => {
  return (
    <Box id={id} minH="650px" m={margin || '20px 15%'}>
      {children}
    </Box>
  )
}
