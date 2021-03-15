import { createPost } from './../routeControllers/create-posts';
import express from "express";
import { body } from 'express-validator'
import { requireAuth, validateRequest } from '@rb6art/common';

const router = express.Router();

router.post(
  '/posts/create',
  requireAuth,
  [
    body('title')
      .notEmpty()
      .withMessage('A Post must have a title.'),
    body('content')
      .notEmpty()
      .withMessage("A Post must have a content"),
  ],
  validateRequest,
  createPost
)

export { router as postsRoutes }
