import { injectable, inject } from 'tsyringe';
import Car from '../../infra/typeorm/entities/Car';
import ICarsRepository from '../../repositories/ICarsRepository';

interface IRequest {
  plate: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: number;
}
@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute({
    plate,
    chassis,
    renavam,
    model,
    brand,
    year,
  }: IRequest): Promise<Car> {
  
    const car = await this.carsRepository.create({
    plate,
    chassis,
    renavam,
    model,
    brand,
    year,
    });

    return car;
  }
}

export default CreateCarUseCase;
