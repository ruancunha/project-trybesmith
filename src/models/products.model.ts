import Product from '../interfaces/product.interface';
import connection from './connection';

const getAll = async (): Promise<Product[]> => {
  const result = await connection.execute('SELECT * FROM Trybesmith.Products');
  const [rows] = result;
  return rows as Product[];
};

export default {
  getAll,
};
