import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteProductsUseCase from './DeleteProductsUseCase';

export default class DeleteProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProductsController = container.resolve(DeleteProductsUseCase);

    await deleteProductsController.execute(id);

    return response.status(200).send();
  }
}
