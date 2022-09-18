import connection from '../models/connection';
import ProductsModel from '../models/productorModel';
import Products from '../interface/Products.Interface';

class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection); // testar com 'connection' como parametro.
  }

  public create(product: Products): Promise<Products> {
    const users = this.model.create(product);
    return users;
  }
}

export default ProductsService;

// REVER ESSE ARQUIVO.