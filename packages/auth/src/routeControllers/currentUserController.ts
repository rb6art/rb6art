import { Request, Response } from 'express';

export const getCurrentUser = (req: Request, res: Response) => {

  res.status(200).send({
    currentUser: req.currentUser || null
  });
}
