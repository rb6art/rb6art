import React, { useState, ChangeEvent, useRef } from 'react'
import Dropzone, {
  DropzoneOptions,
  DropzoneState,
  FileWithPath,
} from 'react-dropzone'
import { FILE_DROPPER_ERRORS } from './constants/ERRORS'

import styles from './Dropzone.module.scss'

export type ImageFile = null | FileWithPath
export type ImagePreview = string | ArrayBuffer | null | undefined

interface FileUploadSuccess {
  imageFile: ImageFile
  previewSrc: ImagePreview
}

type errorMessage = string

interface FileUploaderProps {
  onFileDropSuccess: ({ imageFile, previewSrc }: FileUploadSuccess) => void
  onFileDropError: (message: errorMessage) => void
  borderSize?: string
  borderStyle?: string
  borderColorOnHover?: string
  borderColorOnLeave?: string
  borderColor?: string
  errorColor?: string
}

const FileDropper = ({
  onFileDropSuccess,
  onFileDropError,
  borderSize,
  borderStyle,
  borderColor,
  borderColorOnHover,
  borderColorOnLeave,
  errorColor,
}: FileUploaderProps) => {
  const _borderSize = borderSize || '2px'
  const _borderStyle = borderStyle || 'dashed'
  const _borderColor = borderColor || '#e9ebeb'
  const _errorColor = errorColor || '#E53E3E'
  const _borderOnHoverColor = borderColorOnHover || '#F6AD55'
  const _borderOnLeaveColor = borderColorOnLeave || _borderColor

  const dropRef = useRef<HTMLHeadingElement>(null)

  const [imageFileName, setImageFileName] = useState('')

  const handleFileDrop = (files: FileWithPath[]) => {
    if (files.length === 1) {
      const [file] = files

      if (file && file.type.match(/\/(jpeg|jpg|png)/gm)) {
        const fileReader = new FileReader()
        const imageFile = file

        setImageFileName(imageFile.name)

        fileReader.onload = () => {
          const previewSrc = fileReader.result

          if (onFileDropSuccess) {
            onFileDropSuccess({
              imageFile,
              previewSrc,
            })
          }
        }

        updateBoarder('leave')
        fileReader.readAsDataURL(imageFile)
      } else {
        updateBoarder('error')
        onFileDropError(FILE_DROPPER_ERRORS.__FILE_FORMAT_NOT_SUPPORTED)
      }
    } else {
      updateBoarder('error')
      onFileDropError(FILE_DROPPER_ERRORS.__MAX_FILE_LIMIT)
    }
  }

  const updateBoarder = (dragState: string) => {
    switch (dragState) {
      case 'hover':
        if (dropRef && dropRef.current) {
          dropRef.current.style.border = `${_borderSize} ${_borderStyle} ${_borderOnHoverColor}`
        }
        break
      case 'leave':
        if (dropRef && dropRef.current) {
          dropRef.current.style.border = `${_borderSize} ${_borderStyle} ${_borderOnLeaveColor}`
        }
        break
      case 'error':
        if (dropRef && dropRef.current) {
          dropRef.current.style.border = `${_borderSize} ${_borderStyle} ${_errorColor}`
        }
        break
      default:
        break
    }
  }

  return (
    <Dropzone
      onDrop={handleFileDrop}
      onDragEnter={() => updateBoarder('hover')}
      onDragLeave={() => updateBoarder('leave')}
    >
      {(
        { getRootProps, getInputProps }: any, // fix any type!
      ) => (
        <div
          {...getRootProps({ className: styles['drop-zone'] })}
          ref={dropRef}
        >
          <input {...getInputProps()} />
          <p>Drag and drop a file OR click here to select a file</p>

          {imageFileName && imageFileName.length > 0 && (
            <div className={styles['dropzone-content']}>
              <strong>Selected file:</strong> {imageFileName}
            </div>
          )}
        </div>
      )}
    </Dropzone>
  )
}

export default FileDropper
