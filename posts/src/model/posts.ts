import mongoose from 'mongoose';

// Required properties to create a post
interface PostsAttributes {
  title: string;
  content: string;
  userId: string;
}

interface PostsDocument extends mongoose.Document {
  title: string;
  content: string;
  userId: string;
  creationDate: Date;
}


interface PostsModel extends mongoose.Model<PostsDocument> {
  build(postsAttr: PostsAttributes): PostsDocument
}

const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
}, {
  // Massage the return value so it is consistent.
  // This is not a conventional way of doing this.
  // In a MVC pattern the view would typically doing this.
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    }
  }
})


// Doing this so TypeScript knows the types..
PostsSchema.statics.build = (postsAttr: PostsAttributes) => {
  return new Posts(postsAttr)
}

const Posts = mongoose.model<PostsDocument, PostsModel>("Posts", PostsSchema);


export { Posts }
