import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/user.interface';

const properties = ['username', 'password'];

const validateExistence = (user: User): [boolean, string | null] => {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }

  return [true, null];
};

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;

  const [valid, property] = validateExistence(product);
  if (!valid) {
    return res.status(400).json({ message: `"${property}" is required` });
  }

  next();
};

export default validateUser;
