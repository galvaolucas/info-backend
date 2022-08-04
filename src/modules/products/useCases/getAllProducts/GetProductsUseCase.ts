import { injectable, inject } from 'tsyringe';
import Products from '../../infra/typeorm/entities/Products';
import IProductsRepository from '../../repositories/IProductsRepository';


@injectable()
class GetProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<Products[]> {
    const products = await this.productsRepository.list();

    return products;
  }
}

export default GetProductsUseCase;
