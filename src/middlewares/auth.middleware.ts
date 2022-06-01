import { Request, Response, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';
import TokenPayload from '../interfaces/tokenPayload.interface';
import { SECRET } from './jwtGenerator';

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;

  if (!auth) return res.status(401).json({ message: 'Token not found' });

  try {
    const payload = Jwt.verify(auth, SECRET) as TokenPayload;

    req.body.userId = payload.id;
    
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenValidation;
