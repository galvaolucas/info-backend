import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../../repositories/IProductsRepository';


@injectable()
class DeleteProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const checkIfProductExists = this.productsRepository.findById(id);

    if (!checkIfProductExists) {
      console.log('No product with the given ID was found.');
    }

    await this.productsRepository.delete(id);
  }
}

export default DeleteProductsUseCase;
