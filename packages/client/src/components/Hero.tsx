import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex justifyContent="center" alignItems="center" mt="40" mb="10%">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Welcome to Rainbow 6 Art',
}
