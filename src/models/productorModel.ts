// TIRADO COMO EXEMPLO O CUORSE
import { ResultSetHeader, Pool } from 'mysql2/promise';
import Products from '../interface/Products.Interface';
import Users from '../interface/Users .Interfaces';
// import connection from './connection'; /// descer está linha

export default class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Products[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Products[];
  }

  public async create(product: Products): Promise<Products> {
    const { name, amount } = product;
    const result = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async createUser(user: Users): Promise<Users> {
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