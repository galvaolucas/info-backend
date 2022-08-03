import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductUseCase from './CreateProductstUseCase';

export default class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      description,
      price,
      discount,
      image,
    } = request.body;

    const createPlanUseCase = container.resolve(CreateProductUseCase);

    const plan = await createPlanUseCase.execute({
      description,
      price,
      discount,
      image,
    });

    return response.json(plan);
  }
}
