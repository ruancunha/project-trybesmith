import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductService.getAll();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const product = await ProductService.create({ name, amount });
  res.status(201).json(product);
};

export default {
  getAll,
  create,
};
