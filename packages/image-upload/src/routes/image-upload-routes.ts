import express from "express";
import { requireAuth } from '@rb6art/common';
import { uploadImage } from "../routeControllers/upload-image";
import multer from 'multer'

const router = express.Router();


const upload = multer({
  storage: multer.diskStorage({
    // destination to which the file will be stored.
    destination(req, file, callback) {
      callback(null, './images')
    },
    // // name of the file that will be stored in the destination folder.
    filename(req, file, callback) {
      callback(null, `${new Date().getTime()}_${file.originalname}`)
    }
  }),
  limits: {
    fileSize: 25000000 // max file size 2.5MB = 25000000 bytes
  },
  fileFilter(req, file, callback) {
    const allowedImageTypes = /\.(jpeg|jpg|png)$/

    if (!file.originalname.match(allowedImageTypes)) {
      return callback(
        new Error('Only image formats; jpeg, jpg, and png are allowed.')
      )
    }
    //@ts-ignore
    callback(undefined, true) // continue with upload.
  }
})

router.post(
  '/image/upload',
  requireAuth,
  upload.single('file'),
  uploadImage
)

export { router as imageUploadRoutes }