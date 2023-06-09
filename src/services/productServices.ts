import connection from '../models/connection';
import ProductsModel from '../models/productorModel';
import Products from '../interface/Products.Interface';

class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection); // testar com 'connection' como parametro.
  }

  public async getAll(): Promise<Products[]> {
    const product = await this.model.getAll();
    return product;
  }

  public async create(product: Products): Promise<Products> {
    const users = await this.model.create(product);
    return users;
  }
}

export default ProductsService;

// REVER ESSE ARQUIVO.