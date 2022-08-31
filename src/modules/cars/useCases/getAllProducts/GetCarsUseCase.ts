import { injectable, inject } from 'tsyringe';
import Car from '../../infra/typeorm/entities/Car';
import ICarsRepository from '../../repositories/ICarsRepository';


@injectable()
class GetCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(): Promise<Car[]> {
    const cars = await this.carsRepository.list();

    return cars;
  }
}

export default GetCarsUseCase;
