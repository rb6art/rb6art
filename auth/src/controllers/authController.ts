import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator'
import { RequestValidationError} from '../errors/request-validation-error';
import { DatabaseConnectionEror } from './../errors/database-connection-error';

interface User {
  username: String,
  email: String
  password: String
}

const postSignup = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    throw new RequestValidationError(errors.array());
  }

  const { email, password } = req.body;

  throw new DatabaseConnectionEror();

  res.send({});

}

const postSignin = (req: Request, res: Response) => {
  if (req.body && req.body.email && req.body.password) {
    const { email, password } = req.body;

    console.log(email, password);

  }
}

const postLogin = (req: Request, res: Response) => {

}

const getCurrentUser = (req: Request, res: Response) => {
  return res.status(201).send("will send user data!!");
}



export { 
  getCurrentUser,
  postSignup,
  postSignin,
  postLogin
}

