import { Request, Response, NextFunction } from 'express';
import { Posts } from '../model/posts'

// POST // api/posts/create
export const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const { title, content } = req.body;
  const currentuser = req.currentUser!.id;

  const post = Posts.build({
    title,
    content,
    userId: currentuser
  });
  await post.save();

  res.sendStatus(201).send(post);
}
