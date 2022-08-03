import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPlansRepository from '../../repositories/IProductsRepository';

@injectable()
class DeletePlansUseCase {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const checkIfPlanExists = this.plansRepository.findById(id);

    if (!checkIfPlanExists) {
      throw new AppError('No plan with the given ID was found.');
    }

    await this.plansRepository.delete(id);
  }
}

export default DeletePlansUseCase;
