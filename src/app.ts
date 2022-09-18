import express, { Request, Response } from 'express'; //
import ProductController from './controllers/userController'; //

const app = express();

app.use(express.json());

const userController = new ProductController();

app.get('/', (_req: Request, res: Response) => res.json({ ok: true }));
app.post('/products', userController.create); ///

export default app;
