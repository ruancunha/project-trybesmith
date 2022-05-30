import OrderModel from '../models/orders.model';

const getOrders = async () => {
  const orders = await OrderModel.getOrders();

  const result = orders.map(({ id, userId, productsIds }) => ({ 
    id,
    userId,
    productsIds: [productsIds] }));

  return result;
};

export default {
  getOrders,
};
