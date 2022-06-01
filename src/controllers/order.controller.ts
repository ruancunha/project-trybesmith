import { Request, Response } from 'express';
// import User from '../interfaces/user.interface';
import OrderService from '../services/order.service';

// interface IReq extends Request {
//   user: User;
// }

const getOrders = async (req: Request, res: Response) => {
  const orders = await OrderService.getOrders();
  return res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { userId } = req.body;
  const result = await OrderService.createOrder(userId, productsIds);
  return res.status(201).json(result);
};

export default {
  getOrders,
  createOrder,
};
