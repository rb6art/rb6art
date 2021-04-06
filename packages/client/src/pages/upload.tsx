import { Grid, GridItem, Box, Flex, Heading } from '@chakra-ui/react'
import { Container } from '../components/base/container/Container'
import ImageUploadForm from '../components/upload/imageUpload/ImageUploadForm'

const ImageUploadPage = () => {
  return (
    <Container id="image-upload-page">
      <Grid templateColumns="repeat(1, 1fr)">
        <GridItem colSpan={1}>
          <ImageUploadForm></ImageUploadForm>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default ImageUploadPage
