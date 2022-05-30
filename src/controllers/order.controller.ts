import { Request, Response } from 'express';
import OrderService from '../services/order.service';

const getOrders = async (req: Request, res: Response) => {
  const orders = await OrderService.getOrders();
  return res.status(200).json(orders);
};

export default {
  getOrders,
};
