import { Pool } from 'mysql2/promise';
import Orders from '../interface/Products.Interface';

export default class OrersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Orders[]> {
    const constOrders = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders');
    const [rows] = constOrders;
    return rows as Orders[];
  }
}