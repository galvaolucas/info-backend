import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductsUseCase from './CreateProductstUseCase';

export default class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      description,
      price,
      discount,
    } = request.body;

    const createProductUseCase = container.resolve(CreateProductsUseCase);

    const product = await createProductUseCase.execute({
      description,
      price,
      discount,
    });

    return response.json(product);
  }
}
