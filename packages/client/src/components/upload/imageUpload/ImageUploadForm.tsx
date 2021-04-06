import React, { useState, ChangeEvent, useRef } from 'react'
import {
  Grid,
  GridItem,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'

import FileDropper, { ImagePreview, ImageFile } from '../dropzone/Dropzone'

import styles from './ImageUploadForm.module.scss'

import axios from 'axios'
import { ERRORS } from './constants/errors'

interface LocalState {
  descriptionField: string
  imageFile: ImageFile
  previewSrc: ImagePreview
  descriptionFieldError: string
  fileDropError: string
}

const ImageUploadForm = () => {
  // Theme setup
  const bg = useColorModeValue('orange.300', 'orange.300')
  const color = useColorModeValue('white', 'gray.800')
  const hoverColor = 'orange.400'
  const inputBorderColor = useColorModeValue('#A0AEC0', '#E2E8F0')
  // const dropzoneErrorColor = useColorModeValue('#F6AD55', '#DD6B20')

  // Local State
  const [state, setState] = useState<LocalState>({
    descriptionField: '',
    imageFile: null,
    previewSrc: null,
    descriptionFieldError: '',
    fileDropError: '',
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const validate = (state: LocalState): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      console.log(state.descriptionField.trim())

      if (state.descriptionField.trim().length > 0) {
        setState((prevState: any) => {
          return {
            ...prevState,
            descriptionFieldError: '',
          }
        })
        resolve('Valid')
      } else if (state.imageFile) {
        setState((prevState: any) => {
          return {
            ...prevState,
            descriptionFieldError: '',
          }
        })
        resolve('Valid')
      } else {
        setState((prevState: any) => {
          return {
            ...prevState,
            descriptionFieldError: ERRORS.__NO_DESCRIPTION,
            fileDropError: ERRORS.__NO_FILE,
          }
        })
        reject('Not Valid')
      }
    })
  }

  const handleOnSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    const { descriptionField, imageFile } = state

    validate(state).then(() => {
      if (imageFile) {
        const formData = new FormData()
        formData.append('file', imageFile)
        formData.append('description', descriptionField)

        // await axios.post(`${API_URL}/upload`, formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // })
      }
    })
  }

  return (
    <>
      <Box w="100%">
        <div className="upload-section">
          <form className="image-upload-form">
            {/* <GridItem colSpan={2}> */}
            <FormControl id="description" isRequired>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem colSpan={2} mb="2">
                  <Flex alignItems="center">
                    <FormLabel p="0" mb="1">
                      Description
                    </FormLabel>
                    <Textarea
                      p="0"
                      m="0"
                      color="red"
                      isInvalid={!state.descriptionFieldError}
                    >
                      {state.descriptionFieldError}
                    </Textarea>
                  </Flex>
                  <Input
                    mb="5"
                    isInvalid={state.descriptionFieldError !== ''}
                    borderColor={inputBorderColor}
                    type="text"
                    value={state.descriptionField || ''}
                    name="descriptionField"
                    placeholder="Enter Description"
                    onChange={(event) => {
                      handleInputChange(event)
                    }}
                  />
                </GridItem>
                <GridItem
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  colSpan={[2, 2, 2, 1]}
                  mb="5"
                >
                  <Text p="0" m="0" color="red">
                    {state.fileDropError}
                  </Text>
                  <FileDropper
                    onFileDropSuccess={({ imageFile, previewSrc }) => {
                      setState({
                        ...state,
                        fileDropError: '',
                        imageFile,
                        previewSrc,
                      })
                    }}
                    onFileDropError={(message) => {
                      setState({
                        ...state,
                        fileDropError: message,
                      })
                    }}
                  />
                </GridItem>
                <GridItem colSpan={[2, 2, 2, 1]}>
                  <div className={styles['preview-section']}>
                    {!state.previewSrc && <p>Image Preview</p>}
                    {state.previewSrc && (
                      <div className="image-preview">
                        <p>{state.imageFile && state.imageFile.name}</p>
                        <img
                          className="preview-image"
                          src={String(state.previewSrc)}
                        ></img>
                      </div>
                    )}
                  </div>
                </GridItem>
                <GridItem colSpan={1}>
                  <Button
                    bg={bg}
                    color={color}
                    type="submit"
                    variant="outline"
                    width="full"
                    onClick={handleOnSubmit}
                    _hover={{ bg: hoverColor }}
                    _focus={{ boxShadow: 'outline' }}
                  >
                    Submit
                  </Button>
                </GridItem>
              </Grid>
            </FormControl>
            {/* </GridItem> */}
          </form>
        </div>
      </Box>
    </>
  )
}

export default ImageUploadForm
