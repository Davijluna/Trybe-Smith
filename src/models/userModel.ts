import { ResultSetHeader, Pool } from 'mysql2/promise';
import Users from '../interface/Users .Interface';
// import connection from './connection';

export default class UserModel {
  private connection : Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: Users): Promise<Users> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const dataInserted = result;
    const { insertId: id } = dataInserted;
    return { id, ...user } as Users;
  }
} 