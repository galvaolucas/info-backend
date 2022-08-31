import { injectable, inject } from 'tsyringe';
import ICarsRepository from '../../repositories/ICarsRepository';


@injectable()
class DeleteCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const checkIfCarExists = await this.carsRepository.findById(id);

    if (!checkIfCarExists) {
      console.log('No card with the given ID was found.');
    }

    await this.carsRepository.delete(id);
  }
}

export default DeleteCarUseCase;
