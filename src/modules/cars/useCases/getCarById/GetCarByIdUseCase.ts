import { injectable, inject } from 'tsyringe';
import Car from '../../infra/typeorm/entities/Car';
import ICarsRepository from '../../repositories/ICarsRepository';

interface IRequest {
  id: string;
}

@injectable()
class GetCarByIdUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute({id}: IRequest): Promise<Car> {
    const car = await this.carsRepository.findById(id);

    return car;
  }
}

export default GetCarByIdUseCase;
