import { ResultSetHeader } from 'mysql2';
import Order from '../interfaces/order.interface';
import connection from './connection';

const QUERY = `SELECT Orders.id, Orders.userId, Products.id as productsIds
FROM Trybesmith.Orders JOIN Trybesmith.Products WHERE Products.orderId = Orders.id
ORDER BY Orders.userId ASC`;

const getOrders = async (): Promise<Order[]> => {
  const [products] = await connection
    .execute(QUERY);

  return products as Order[];
};

const createOrder = async (userId: number | undefined): Promise<number> => {
  const xove = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUE (?)', [userId]);
  const [{ insertId }] = xove;
  return insertId;
};

export default {
  getOrders,
  createOrder,
};
