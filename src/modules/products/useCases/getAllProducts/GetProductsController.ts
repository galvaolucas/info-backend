import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetAllProductsUseCase from './GetProductsUseCase';

export default class GetAllProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getProductsUseCase = container.resolve(GetAllProductsUseCase);
    
    const products = await getProductsUseCase.execute();

    return response.json(products);
  }
}
