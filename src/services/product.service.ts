import ProductModel from '../models/products.model';
import Product from '../interfaces/product.interface';

const getAll = async (): Promise<Product[]> => {
  const products = await ProductModel.getAll();
  return products;
};

export default {
  getAll,
};
