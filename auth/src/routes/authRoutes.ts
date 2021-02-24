import express from "express";
import { body } from 'express-validator'
import { getCurrentUser, postLogin } from '../routeControllers/authController';
import { postSignup } from '../routeControllers/signupController';
import { postSignin } from './../routeControllers/signinController';

const router = express.Router();

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
  postSignin
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
  postSignup
);

router.post(
  "/login",
  postLogin
);

router.get("/user/currentuser", getCurrentUser)

export { router as authRoutes }