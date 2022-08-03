import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeletePlansUseCase from './DeletePlansUseCase';

export default class DeletePlansController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAddressController = container.resolve(DeletePlansUseCase);

    await deleteAddressController.execute(id);

    return response.status(200).send();
  }
}
