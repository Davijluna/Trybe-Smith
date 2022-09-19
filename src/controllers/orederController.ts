import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OdersController {
  constructor(private orderService = new OrderService()) {}

  public getById = async (req: Request, res: Response) => {
    const order = await this.orderService.getById();
    res.status(200).json(order);
  };
}

export default OdersController;