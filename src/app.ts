import express, { Request, Response, NextFunction } from 'express';
import ProductController from './controllers/product.controller';
import UserController from './controllers/users.controller';
import validateProduct from './middlewares/validateProduct.middleware';
import validateUser from './middlewares/validateUser.middleware';

const app = express();

app.use(express.json());

app.get('/products', ProductController.getAll);
app.post('/products', validateProduct, ProductController.create);
app.post('/users', validateUser.pt1, validateUser.pt2, UserController.create);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      
      res.sendStatus(500);
  }

  next();
});

export default app;
