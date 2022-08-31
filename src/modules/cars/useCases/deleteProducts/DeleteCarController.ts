import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteCarUseCase from './DeleteCarUseCase';

export default class DeleteCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCarController = container.resolve(DeleteCarUseCase);

    await deleteCarController.execute(id);

    return response.status(200).send();
  }
}
