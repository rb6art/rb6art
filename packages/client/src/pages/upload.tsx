import { Grid, GridItem, Box, Flex, Heading } from '@chakra-ui/react'
import { Container } from '../components/base/container/Container'
import ImageUploadForm from '../components/upload/ImageUploadForm'

const ImageUploadPage = () => {
  return (
    <Container id="image-upload-page">
      <Grid templateRows="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2} display="flex" alignItems="center">
          <Heading>Upload your image:</Heading>
        </GridItem>
        <GridItem colSpan={4} rowSpan={9}>
          <ImageUploadForm></ImageUploadForm>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default ImageUploadPage
