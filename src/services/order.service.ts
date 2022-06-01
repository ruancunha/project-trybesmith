import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';

const getOrders = async () => {
  const orders = await OrderModel.getOrders();

  const result = orders.map(({ id, userId, productsIds }) => ({ 
    id,
    userId,
    productsIds: [productsIds] }));

  return result;
};

const createOrder = async (userId: number | undefined, productsIds: number[]) => {
  const order = await OrderModel.createOrder(userId);

  productsIds.forEach((prodId) => ProductModel.update(order, prodId));
  return { userId, productsIds };
};

export default {
  getOrders,
  createOrder,
};
