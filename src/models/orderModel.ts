import { Pool } from 'mysql2/promise';
import Orders from '../interface/OrderInterface';

export default class OrersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getById(): Promise<Orders[]> { //
    // https://dev.mysql.com/blog-archive/mysql-8-0-labs-json-aggregation-functions/ JSON_ARRAYAGG
    const query = `
    SELECT orders.id, orders.userId, JSON_ARRAYAGG(product.id) AS productsIds
    FROM Trybesmith.Orders AS orders
    JOIN Trybesmith.Products AS product
    ON orders.id = product.orderId
    GROUP BY orders.id
    ORDER BY orders.userId`;
    const [result] = await this.connection.execute(query);
    return result as Orders[]; ///
  }
}