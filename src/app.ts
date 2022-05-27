import express from 'express';
import ProductController from './controllers/product.controller';

const app = express();

app.use(express.json());

app.get('/products', ProductController.getAll);

export default app;
