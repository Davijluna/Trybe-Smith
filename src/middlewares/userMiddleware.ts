import { NextFunction, Request, Response } from 'express';
import Users from '../interface/Users .Interface';
/// 

export const checkUsername = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as Users;
  if (!user.username) {
    return res.status(401).json({ message: '"username" is required' });
  }
  if (user.username.length <= 2) {
    return res
      .status(422).json({ 
        message: '"username" length must be at least 3 characters long',
      });
  }
  if (typeof user.username !== 'string') {
    return res.status(422).json({ message: '"username" is not a string' });
  }
  next();
};

export const checkClasse = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as Users;
  if (!user.classe) {
    return res.status(401).json({ message: '"classe" is require' });
  }
  if (user.classe.length <= 2) {
    return res
      .status(422).json({ 
        message: '"classe" length must be at least 3 characters long',
      });
  }
  if (typeof user.classe !== 'string') {
    return res.status(422).json({ message: '"classe" is not a string' });
  }
  next();
};

export const checkLevel = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as Users;
  if (!user.level) {
    return res.status(401).json({ message: '"level" is require' });
  }
  if (user.level <= 0) {
    return res
      .status(422).json({ 
        message: '"level" length must be at least 3 characters long',
      });
  }
  if (typeof user.level !== 'number') {
    return res.status(422).json({ message: '"level" is not a number' });
  }
  next();
};

export const checkPassword = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as Users;
  if (!user.password) {
    return res.status(401).json({ message: '"password" is require' });
  }
  if (user.password <= 0) {
    return res
      .status(422).json({ 
        message: '"password" length must be at least 3 characters long',
      });
  }
  next();
};