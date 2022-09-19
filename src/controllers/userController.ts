import { Request, Response } from 'express';
import UserService from '../services/userServices';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const result = req.body;
    const token = await this.userService.create(result);
    res.status(201).json({ token });
  };
}

export default UserController;