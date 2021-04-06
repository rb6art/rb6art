import { multerUpload } from './../multer/uploadConfig'
import express from 'express'
import { requireAuth } from '@rb6art/common'
import { uploadImage } from '../routeControllers/upload-image'

const router = express.Router()

router.post(
  '/image/upload',
  requireAuth,
  multerUpload.single('file'),
  uploadImage,
)

export { router as imageUploadRoutes }
