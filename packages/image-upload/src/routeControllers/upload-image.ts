import { Request, Response, NextFunction } from 'express';
import { Image } from '../model/image'

export const uploadImage = async (req: Request, res: Response, next: NextFunction) => {
  // try {
  // const { title, description } = req.body;
  // const { path, mimetype } = req.file;

  console.log("req.body: ", req.body);
  console.log("req.file:", req.file);
  res.sendStatus(200);


  // console.log(fs.readFileSync(join(__dirname, '..', path)))
  // console.log(join(__dirname, '..', path))

  // const file = new Image({
  //   title,
  //   description,
  //   file_path: path,
  //   file_mimetype: mimetype
  // });
  // await file.save();

  // res.send('file uploaded successfully.');
  // } catch (error) {
  //   res.status(400).send('Error while uploading file. Try again later.');
  // }
}
