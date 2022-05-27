import { Request, Response } from 'express';
import ProductService from '../services/product.service';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductService.getAll();
  res.status(200).json(products);
};

export default {
  getAll,
};
