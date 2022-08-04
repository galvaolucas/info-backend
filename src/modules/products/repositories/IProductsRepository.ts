import ICreateProductsDTO from '../dtos/ICreateProductsDTO';
import Products from '../infra/typeorm/entities/Products';

export default interface IProductsRepository {
  create(data: ICreateProductsDTO): Promise<Products>;
  list(): Promise<Products[]>
  findById(id: string): Promise<Products>
  delete(id: string): Promise<void>;
  update(id: string, data: ICreateProductsDTO): Promise<Products>;
}
