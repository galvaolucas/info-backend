import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../data-source';
import ICreateProductsDTO from '../../../dtos/ICreateProductsDTO';
import IProductsRepository from '../../../repositories/IProductsRepository';
import Products from '../entities/Products';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Products>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Products);
  }

  public async create(productsData: ICreateProductsDTO): Promise<Products> {
    const products = this.ormRepository.create(productsData);

    await this.ormRepository.save(products);

    return products;
  }

  async update(
    id: string,
    productsData: ICreateProductsDTO,
  ): Promise<Products | null> {
   await this.ormRepository.update(id, productsData);
  
   const product = await this.ormRepository.findOneBy({id});

    return product;
  }

  async list(): Promise<Products[]> {
    const products = await this.ormRepository.find({
      order: {
        price: 'ASC',
      },
    });
    return products;
  }

  async findById(id: string): Promise<Products> {
    const product = await this.ormRepository.findOneBy({id});

    if(!product) {
      console.log('No product was found!')
    }

    return product;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ProductsRepository;
