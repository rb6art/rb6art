import mongoose from 'mongoose';

interface ImageAttributes {
  title: string
  description: string
  file_path: string
  file_mimetype: string
}

interface ImageDocument extends mongoose.Document {
  title: string
  description: string
  file_path: string
  file_mimetype: string
  createdAt: Date
  updatedAt: Date
}

interface ImageModel extends mongoose.Model<ImageDocument> {
  build(fileAttr: ImageAttributes): ImageDocument
}

const ImageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

ImageSchema.statics.build = (fileAttr: ImageAttributes) => {
  return new Image(fileAttr)
}

const Image = mongoose.model<ImageDocument, ImageModel>('Files', ImageSchema);

export { Image }
