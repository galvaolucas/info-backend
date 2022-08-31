import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../data-source';
import ICreateCarsDTO from '../../../dtos/ICreateCarsDTO';
import ICarsRepository from '../../../repositories/ICarsRepository';
import Car from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private ormRepository: Repository<Car>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Car);
  }

  public async create(carsData: ICreateCarsDTO): Promise<Car> {
    const car = this.ormRepository.create(carsData);

    await this.ormRepository.save(car);

    return car;
  }

  async update(
    id: string,
    carsData: ICreateCarsDTO,
  ): Promise<Car | null> {
   await this.ormRepository.update(id, carsData);
  
   const car = await this.ormRepository.findOneBy({id});

    return car;
  }

  async list(): Promise<Car[]> {
    const cars = await this.ormRepository.find()
    
    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.ormRepository.findOneBy({id});

    if(!car) {
      console.log('No car was found!')
    }

    return car;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default CarsRepository;
