import connection from '../models/connection';
import OrersModel from '../models/orderModel';
import Orders from '../interface/OrderInterface';

class OrderService {
  private model: OrersModel;

  constructor() {
    this.model = new OrersModel(connection);
  }

  public async getById(): Promise<Orders[]> {
    const order = await this.model.getById();
    return order;
  }
}

export default OrderService;