import connection from '../models/connection';
import UserModel from '../models/userModel';
import Users from '../interface/Users .Interfaces';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(product: Users): Promise<Users> {
    const users = this.model.create(product);
    return users;
  }
}

export default UserService;