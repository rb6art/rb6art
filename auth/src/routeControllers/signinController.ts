import { Request, Response, NextFunction } from 'express';
import { BadRequestError, PasswordService, JWTService } from '@rb6art/common'
import { User } from '../model/user'

export const postSigninController = async (req: Request, res: Response, next: NextFunction) => {

  const { email, password } = req.body;
  const userData = await User.findOne({
    email: email
  });

  if (!userData) {
    throw new BadRequestError('No user with that email found.')
  }

  const passMatch = await PasswordService.compare(userData.password, password);
  if (!passMatch) {
    throw new BadRequestError('Password is not correct.')
  }

  // Create the JWT 
  req.session = {
    jwt: JWTService.createToken(userData.email, userData.id)
  }

  res.status(201).send(userData);
}
