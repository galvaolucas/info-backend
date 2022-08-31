import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetCarsUseCase from './GetCarsUseCase';

export default class GetCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getCarUseCase = container.resolve(GetCarsUseCase);
    
    const car = await getCarUseCase.execute();

    return response.json(car);
  }
}
