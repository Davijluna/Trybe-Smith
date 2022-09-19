import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Users from '../interface/Users .Interfaces';

export default class UserModel {
  private connection = connection;

  public async create(user: Users): Promise<Users> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId: id } = dataInserted;
    return { id, ...user } as Users;
  }
} 