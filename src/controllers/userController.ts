import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import Products from '../interface/Products.Interface';
import ProductsService from '../services/userServives';

class ProductController {
  constructor(private productService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const product = await this.productService.getAll();
    res.status(200).json(product);
  };

  public create = async (req: Request, res: Response) => {
    const result = req.body;
    const product = await this.productService.create(result);
    res.status(201).json(product);
  };
}

export default ProductController;