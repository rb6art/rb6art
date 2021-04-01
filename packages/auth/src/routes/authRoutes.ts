import express from "express";
import { body } from 'express-validator'
import { currentUser, validateRequest } from '@rb6art/common';
import { postSignupController } from '../routeControllers/signupController';
import { postSigninController } from './../routeControllers/signinController';
import { getCurrentUser } from './../routeControllers/currentUserController';
import { signout } from './../routeControllers/signoutController';


const router = express.Router();

router.get(
  "/user/currentuser",
  currentUser,
  getCurrentUser
);

router.post(
  '/user/signout',
  signout
)

router.post(
  "/user/signin",
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid.'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage("Password must be supplied."),
  ],
  validateRequest,
  postSigninController
);

router.post(
  "/user/signup",
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid.'),
    body('password')
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password needs to be between 6 and 20 chars."),
  ],
  validateRequest,
  postSignupController
);

export { router as authRoutes }
