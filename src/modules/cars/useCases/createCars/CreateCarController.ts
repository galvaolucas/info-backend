import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCarUseCase from './CreateCarUseCase';

export default class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      plate,
      chassis,
      renavam,
      model,
      brand,
      year,
    } = request.body;

    const createProductUseCase = container.resolve(CreateCarUseCase);

    const car = await createProductUseCase.execute({
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
