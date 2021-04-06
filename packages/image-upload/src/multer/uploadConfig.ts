import multer from 'multer'

export const multerUpload = multer({
  storage: multer.diskStorage({
    // destination to which the file will be stored.
    destination(req, file, callback) {
      callback(null, './temp-images')
    },
    // // name of the file that will be stored in the destination folder.
    filename(req, file, callback) {
      callback(null, `${new Date().getTime()}_${file.originalname}`)
    },
  }),
  limits: {
    fileSize: 25000000, // max file size 2.5MB = 25000000 bytes
  },
  fileFilter(req, file, callback) {
    const allowedImageTypes = /\.(jpeg|jpg|png)$/

    if (!file.originalname.match(allowedImageTypes)) {
      return callback(
        new Error('Only image formats; jpeg, jpg, and png are allowed.'),
      )
    }
    //@ts-ignore
    callback(undefined, true) // continue with upload.
  },
})
