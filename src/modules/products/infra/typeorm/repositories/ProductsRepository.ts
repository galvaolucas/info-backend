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

  // async update(
  //   id: string,
  //   plansData: ICreatePlansDTO,
  // ): Promise<Plans | null> {
  //   await this.ormRepository.update(id, plansData);

  //   const plans = await this.ormRepository.findOneBy({id});

  //   return plans;
  // }

  // async list(query: IPlansQuery): Promise<Plans[]> {
  //   let whereClause: any = {};

  //   if (query.currency !== undefined) {
  //     whereClause.currency = query.currency;
  //   }

  //   if (query.is_active !== undefined) {
  //     if (query.is_active === 'true') {
  //       whereClause.is_active = true;
  //     }
  //   }

  //   const queryPlans = await this.ormRepository.find({
  //     where: whereClause,
  //     order: {
  //       price: 'ASC',
  //     },
  //   });
  //   return queryPlans;
  // }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ProductsRepository;
