import { AuthenticationError, JWTService } from '@rb6art/common'
import { Request, Response, NextFunction } from 'express';
// import { Posts } from '../model/posts'

// POST // api/posts/get/[id]
export const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(201)
}
// POST // api/posts/getAll
export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(201)
}
