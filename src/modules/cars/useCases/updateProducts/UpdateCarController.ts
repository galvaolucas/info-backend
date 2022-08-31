import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCarUseCase from './UpdateCarUseCase';

export default class UpdateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      description,
      price,
      discount,
      parcel,
      parcel_price,
    } = request.body;

    const updateCarUseCase = container.resolve(UpdateCarUseCase);

    const Car = await updateCarUseCase.execute(id, {
      description,
      price,
      discount,
      parcel,
      parcel_price,
    });

    return response.json(Car);
  }
}
