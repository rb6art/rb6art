import { Request, Response, NextFunction } from 'express'
import { Image } from '../model/image'

export const uploadImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { description } = req.body
    const { path, mimetype } = req.file

    console.log(description)
    console.log(req.file)

    // // console.log(fs.readFileSync(join(__dirname, '..', path)))
    // // console.log(join(__dirname, '..', path))

    // const file = new Image({
    //   title,
    //   description,
    //   file_path: path,
    //   file_mimetype: mimetype
    // });
    // await file.save();

    return res.status(201).send('File uploaded successfully.')
  } catch (error) {
    console.log(error)

    return res.status(400).send('Error while uploading file. Try again later.')
  }
}
