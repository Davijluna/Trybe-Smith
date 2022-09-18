import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import Products from '../interface/Products.Interface';
import ProductsService from '../services/userServives';

class ProductController {
  constructor(private productService = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const result = req.body;
    const product = await this.productService.create(result);
    res.status(201).json(product);
  };
}

export default ProductController;