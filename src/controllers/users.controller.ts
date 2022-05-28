import { Request, Response } from 'express';
import UserService from '../services/users.service';

const create = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const token = await UserService.create({ username, classe, level, password });
  res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const result = await UserService.login(username, password);

  if (result.message) {
    return res.status(401).json(result);
  }

  return res.status(200).json(result);
};

export default {
  create,
  login,
};
