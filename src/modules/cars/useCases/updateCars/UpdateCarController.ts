import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCarUseCase from './UpdateCarUseCase';

export default class UpdateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    } = request.body;

    const updateCarUseCase = container.resolve(UpdateCarUseCase);

    const car = await updateCarUseCase.execute(id, {
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    });

    return response.json(car);
  }
}
