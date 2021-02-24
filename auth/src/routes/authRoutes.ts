import express from "express";
import { body } from 'express-validator'
import { postSignin, getCurrentUser, postLogin } from '../routeControllers/authController';
import { postSignup } from '../routeControllers/signupController';

const router = express.Router();

const validation = [
  body('email')
    .isEmail()
    .withMessage('Email must be valid.'),
  body('password')
    .trim()
    .isLength({ min: 6, max: 20})
    .withMessage("Password needs to be between 6 and 20 chars."),
];

router.post(
  "/user/signin",
  validation,
  postSignin
);

router.post(
  "/user/signup", 
  validation,
  postSignup
);

router.post(
  "/login",
  postLogin
);

router.get("/user/currentuser", getCurrentUser)

export { router as authRoutes }