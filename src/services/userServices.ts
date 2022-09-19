import UserModel from '../models/userModel';
import Users from '../interface/Users .Interfaces';

class UserService {
  private model = new UserModel();

  public async create(product: Users): Promise<Users> {
    const users = await this.model.create(product);
    return users;
  }
}

export default UserService; 