import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/user.interface';

const properties = ['username', 'classe', 'level', 'password'];
// const stringProperties = ['username', 'classe', 'password'];
// const twoCharacterProperties = ['username', 'classe'];

interface Three {
  username: string,
  classe: string,
}

const validateExistence = (user: User): [boolean, string | null] => {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }

  return [true, null];
};

// const validateString = (user: User): [boolean, string | null] => {
//   const entries = Object.entries(user);
//   for (let i = 0; i < entries.length; i += 1) {
//     const [property, value] = entries[i];
//     if (typeof value !== 'string') {
//       return [false, property];
//     }
//   }
//   return [true, null];
// };

const validateString = <T>(value: T): boolean => {
  if (typeof value !== 'string') {
    return false;
  }
  return true;
};

const validateNumber = <T>(value: T): boolean => {
  if (typeof value !== 'number') {
    return false;
  }
  return true;
};

const validateSizeThree = (obj: Three): [boolean, string | null] => {
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (value.length < 3) {
      return [false, property];
    }
  }
  return [true, null];
};

function pt1(req: Request, res: Response, next: NextFunction) {
  const product = req.body;

  const [valid, property] = validateExistence(product);
  if (!valid) {
    return res.status(400).json({ message: `"${property}" is required` });
  }

  if (!validateString(product.username)) {
    return res.status(422).json({ message: '"username" must be a string' });
  }

  if (!validateString(product.classe)) {
    return res.status(422).json({ message: '"classe" must be a string' });
  }

  if (!validateString(product.password)) {
    return res.status(422).json({ message: '"password" must be a string' });
  }

  next();
}

function pt2(req: Request, res: Response, next: NextFunction) {
  const user = req.body;

  if (!validateNumber(user.level)) {
    return res.status(422).json({ message: '"level" must be a number' });
  }

  if (user.level <= 0) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }

  if (user.password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  const { username, classe } = user;
  const [valid, property] = validateSizeThree({ username, classe });
  if (!valid) {
    return res.status(422)
      .json({ message: `"${property}" length must be at least 3 characters long` });
  }

  next();
}

export default {
  pt1,
  pt2,
};
