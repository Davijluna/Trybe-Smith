import { Request, Response } from 'express';
import UserService from '../services/userServices';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const result = req.body;
    const product = await this.userService.create(result);
    res.status(201).json(product);
  };
}

export default UserController;