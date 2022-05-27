import ProductModel from '../models/products.model';
import Product from '../interfaces/product.interface';

const getAll = async (): Promise<Product[]> => {
  const products = await ProductModel.getAll();
  return products;
};

const create = async (product: Product): Promise<Product> => {
  const result = ProductModel.create(product);
  return result;
};

export default {
  getAll,
  create,
};
