import React, { useState, ChangeEvent, useRef } from 'react'
import {
  Grid,
  GridItem,
  Box,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import Dropzone, {
  DropzoneOptions,
  DropzoneState,
  FileWithPath,
} from 'react-dropzone'
import axios from 'axios'
// import { API_URL } from '../../utils/constants'

import styles from './ImageUploadForm.module.scss'

const ImageUploadForm = () => {
  const dropRef = useRef<HTMLHeadingElement>(null)

  // Local State
  const [state, setSate] = useState({
    title: '',
    description: '',
  })
  const [imageFile, setImageFile] = useState<null | FileWithPath>()
  const [previewSrc, setPreviewSrc] = useState<string | ArrayBuffer | null>()
  const [errorMsg, setErrorMsg] = useState('')
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSate({
      ...state,
      [event.target.name]: event.target.value,
    })
  }
  // const handleOnSubmit = async (event: ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault()

  //   const { title, description } = state

  //   if (title.trim() !== '' && description.trim() !== '') {
  //     if (imageFile) {
  //       const formData = new FormData()
  //       formData.append('file', imageFile)
  //       formData.append('title', title)
  //       formData.append('description', description)

  //       setErrorMsg('')
  //       await axios.post(`${API_URL}/upload`, formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       })
  //     } else {
  //       setErrorMsg('Please select a image to upload')
  //     }
  //   } else {
  //     setErrorMsg('Please enter in values to form fields.')
  //   }
  // }

  const handleFileDrop = (files: FileWithPath[]) => {
    if (files.length === 1) {
      const [imageFile] = files

      if (imageFile && imageFile.type.match(/\/(jpeg|jpg|png)/gm)) {
        setImageFile(imageFile)

        const fileReader = new FileReader()

        fileReader.onload = () => {
          setPreviewSrc(fileReader.result)
          setIsPreviewAvailable(true)

          setErrorMsg('')
          console.log(fileReader.result)
        }

        fileReader.readAsDataURL(imageFile)
      } else {
        setErrorMsg('Unsuported file type.')
      }
    } else {
      setErrorMsg('Only one upload allowed at a time.')
    }
  }

  const updateBoarder = (dragState: string) => {
    switch (dragState) {
      case 'over':
        if (dropRef && dropRef.current) {
          dropRef.current.style.border = '2px dotted #000'
        }
        break
      case 'leave':
        if (dropRef && dropRef.current) {
          dropRef.current.style.border = '2px dashed #e9ebeb'
        }
        break
      default:
        break
    }
  }
  return (
    <>
      <Box w="100%" h="10">
        <div className="upload-section">
          <form>
            <Grid
              h="200px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={4}
            >
              <GridItem colSpan={2} bg="tomato">
                {/*  
                  Abstract out the Dropzone part into its own component 
                */}
                <Dropzone
                  onDrop={handleFileDrop}
                  onDragEnter={() => updateBoarder('over')}
                  onDragLeave={() => updateBoarder('leave')}
                >
                  {(
                    { getRootProps, getInputProps }: any // fix any type!
                  ) => (
                    <div
                      {...getRootProps({ className: styles['drop-zone'] })}
                      ref={dropRef}
                    >
                      <input {...getInputProps()} />
                      <p>Drag and drop a file OR click here to select a file</p>

                      {imageFile && imageFile.name.length > 0 && (
                        <div className="dropzone-content">
                          <strong>Selected file:</strong> {imageFile.name}
                        </div>
                      )}
                    </div>
                  )}
                </Dropzone>
              </GridItem>
              <GridItem colSpan={2} bg="tomato">
                Preview component.
              </GridItem>

              <GridItem colSpan={4}>
                <FormControl id="description" pb="3" isRequired>
                  {/* <Flex alignItems="center" pb="5px"> */}
                  <FormLabel p="0" pr="5px" m="0">
                    Description
                  </FormLabel>
                  {/* <Text p="0" m="0" color="red" isInvalid={!isEmailValid}>
              {emailErrorMsg}
            </Text> */}
                  {/* </Flex> */}

                  <Input
                    // isInvalid={!isEmailValid}
                    // borderColor={inputBorderColor}
                    type="text"
                    placeholder="Enter Description"
                    onChange={(event) => {
                      // setEmail(event.target.value)
                    }}
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </form>
        </div>
      </Box>
    </>
  )
}

export default ImageUploadForm
