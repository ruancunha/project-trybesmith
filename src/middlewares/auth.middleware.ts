import { NextFunction, Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import { SECRET } from './jwtGenerator';

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = Jwt.verify(authorization, SECRET);

    req.tokenData = decoded.data;

    next();
  } catch (error: any) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    next(error);
  }
};

export default tokenValidation;
