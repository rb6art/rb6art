import { AuthenticationError, JWTService } from '@rb6art/common'
import { Request, Response, NextFunction } from 'express';
import { User } from '../model/user'

// user/signup
export const postSignupController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const userData = await User.findOne({
    email: email
  });

  if (userData) {
    throw new AuthenticationError('User with that email already exist');
  }

  // Save user info to the DB
  const user = User.build({
    email,
    password
  });
  await user.save();

  // Create the JWT session
  req.session = {
    jwt: JWTService.getToken(user.email, user.id)
  }

  res.status(201).send(user);
}
