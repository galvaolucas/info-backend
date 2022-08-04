import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProductsUseCase from './UpdateProductsUseCase';

export default class UpdateProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      description,
      price,
      discount,
      parcel,
      parcel_price,
    } = request.body;

    const updateProductsUseCase = container.resolve(UpdateProductsUseCase);

    const Products = await updateProductsUseCase.execute(id, {
      description,
      price,
      discount,
      parcel,
      parcel_price,
    });

    return response.json(Products);
  }
}
