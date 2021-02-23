import express from "express";
import { body } from 'express-validator'
import {postSignin, getCurrentUser, postLogin, postSignup} from '../controllers/authController';

const router = express.Router();

// router.get('/jwt', authController.getJWT);
router.post("/user/signin", postSignin);

router.post(
  "/user/signup", 
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid.'),
    body('password')
      .trim()
      .isLength({ min: 6, max: 20})
      .withMessage("Password needs to be between 6 and 20 chars."),
  ],
  postSignup
);


router.post("/login", postLogin);
router.get("/user/currentuser", getCurrentUser)

export { router as authRoutes }