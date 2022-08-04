import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductsUseCase from './CreateProductstUseCase';

export default class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      description,
      price,
      discount,
      parcel,
      parcel_price,
    } = request.body;

    const createProductUseCase = container.resolve(CreateProductsUseCase);

    const product = await createProductUseCase.execute({
      description,
      price,
      discount,
      parcel,
      parcel_price,
    });

    return response.json(product);
  }
}
