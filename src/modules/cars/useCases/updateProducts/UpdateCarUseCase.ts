import { injectable, inject } from 'tsyringe';
import Car from '../../infra/typeorm/entities/Car';
import ICarsRepository from '../../repositories/ICarsRepository';
import ICarRepository from '../../repositories/ICarsRepository';


interface IRequest {
  plate: string;
  chassis: string;
  renavam: string;
  model: string;
  brand: string;
  year: number;
}

@injectable()
class UpdateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(
    id: string,
    {
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    }: IRequest,
  ): Promise<Car | null> {
    const checkIfCarExists = await this.carsRepository.findById(id);

    if(checkIfCarExists) {
      console.log('Wasn"t possible to find the car!');
    }

    const updatedProduct = await this.carsRepository.update(id, {
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    });

    return updatedProduct;
  }
}

export default UpdateCarUseCase;
