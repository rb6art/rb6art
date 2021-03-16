import { Request, Response, NextFunction } from 'express';
import { JWTService } from './../services/jwt';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = JWTService.verifyToken(req.session.jwt) as UserPayload;
    req.currentUser = payload;
  } catch (err) { }

  next();
};
