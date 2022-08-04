import { injectable, inject } from 'tsyringe';
import Products from '../../infra/typeorm/entities/Products';
import IProductsRepository from '../../repositories/IProductsRepository';

interface IRequest {
  description: string;
  price: number;
  discount: number;
}
@injectable()
class CreateProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    description,
    price,
    discount,
  }: IRequest): Promise<Products> {
  
    const products = await this.productsRepository.create({
      description,
      price,
      discount,
    });

    return products;
  }
}

export default CreateProductsUseCase;
