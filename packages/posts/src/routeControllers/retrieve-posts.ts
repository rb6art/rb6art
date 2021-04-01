import { Request, Response, NextFunction } from 'express';
import { Posts } from '../model/posts';

// GET // api/posts/get/:id
export const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  const post = await Posts.findById(req.params.id);

  res.send(post);
}

// GET // api/posts/getAllByUserId/:userId
export const getAllPostByUserId = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  const posts = await Posts.find({ userId });

  res.send(posts);
}

// GET // api/posts/getAll
export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  const posts = await Posts.find({});

  res.send(posts);
}