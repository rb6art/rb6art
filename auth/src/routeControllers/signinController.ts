import { Request, Response, NextFunction } from 'express';
import { AuthenticationError } from '../errors/authentication-errors'
import { User } from '../model/user'
import { PasswordService } from '../services/password';
import { JWTService } from './../services/jwt';

export const postSigninController = async (req: Request, res: Response, next: NextFunction) => {
  
  const { email, password } = req.body;
  const userData = await User.findOne({
    email: email
  });

  if (!userData) {
    throw new AuthenticationError('No user with that email found.')
  }

  const passMatch = await PasswordService.compare(userData.password, password);
  if (!passMatch) {
    throw new AuthenticationError('Password is not correct.')
  }

  // Create the JWT 
  req.session = {
    jwt: JWTService.getToken(userData.email, userData.id)
  }

  res.status(201).send(userData);
}
