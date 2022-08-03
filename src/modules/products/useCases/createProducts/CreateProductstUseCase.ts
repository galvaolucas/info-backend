import { injectable, inject } from 'tsyringe';
import Products from '../../infra/typeorm/entities/Products';
import IProductsRepository from '../../repositories/IProductsRepository';

interface IRequest {
  description: string;
  price: number;
  discount: number;
  image: string;
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
    image,
  }: IRequest): Promise<Products> {
  
    const products = await this.productsRepository.create({
      description,
      price,
      discount,
      image,
    });

    return products;
  }
}

export default CreateProductsUseCase;
