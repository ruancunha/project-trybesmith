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

export default {
  getOrders,
};
