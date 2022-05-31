import { ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';
import connection from './connection';

const getAll = async (): Promise<Product[]> => {
  const result = await connection.execute('SELECT * FROM Trybesmith.Products');
  const [rows] = result;
  return rows as Product[];
};

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const result = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...product };
};

const update = async (orderId: number, prodId: number) => {
  await connection
    .execute<ResultSetHeader>(
    'UPDATE Trybesmith.Products SET orderId = ? HWHERE id = ?',
    [orderId, prodId],
  );
};

export default {
  getAll,
  create,
  update,
};
