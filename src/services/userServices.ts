import connection from '../models/connection';
import UserModel from '../models/userModel';
import Users from '../interface/Users .Interface';
import tokenHelp from '../middlewares/token';
import Payload from '../interface/PayloadInterface';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection); // testar com 'connection' como parametro.
  }

  public async create(user: Users): Promise<string> { //
    const users = await this.model.create(user);
    const { id, username } = users;
    const token = tokenHelp.createToken({ id, username } as Payload);
    return token;
  }
}

export default UserService; 