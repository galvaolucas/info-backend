import ICreateProductsDTO from '../dtos/ICreateProductsDTO';
import Products from '../infra/typeorm/entities/Products';

export default interface IProductsRepository {
  create(data: ICreateProductsDTO): Promise<Products>;
}
