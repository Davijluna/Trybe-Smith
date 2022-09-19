import express, { Request, Response } from 'express'; //
import ProductController from './controllers/productController'; //
import UserController from './controllers/userController';
import OdersController from './controllers/orederController';

// import {
//   checkUsername,/orders
//   checkClasse,
//   checkLevel,
//   checkPassword } from './middlewares/userMiddleware';

const app = express();

app.use(express.json());

const productController = new ProductController();
const userController = new UserController();
const orederController = new OdersController();

app.get('/', (_req: Request, res: Response) => res.json({ ok: true }));
app.post('/products', productController.create); ///
app.get('/products', productController.getAll);
app.post(
  '/users',
  // checkUsername,
  // checkClasse,
  // checkLevel,
  // checkPassword,
  userController.create,
);

app.get('/orders', orederController.getById);
export default app;
