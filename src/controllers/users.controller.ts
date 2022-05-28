import { Request, Response } from 'express';
import UserService from '../services/users.service';

const create = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const token = await UserService.create({ username, classe, level, password });
  res.status(201).json({ token });
};

export default {
  create,
};
