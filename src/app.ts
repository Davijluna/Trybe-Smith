import express, { Request, Response } from 'express'; //
import ProductController from './controllers/productController'; //
import UserController from './controllers/userController';

const app = express();

app.use(express.json());

const productController = new ProductController();
const userController = new UserController();

app.get('/', (_req: Request, res: Response) => res.json({ ok: true }));
app.post('/products', productController.create); ///
app.get('/products', productController.getAll);
app.post('/users', userController.create);

export default app;
