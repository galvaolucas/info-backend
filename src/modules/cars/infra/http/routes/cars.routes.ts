import { Router } from 'express';
import CreateCarController from '../../../useCases/createCars/CreateCarController';
import DeleteCarController from '../../../useCases/deleteProducts/DeleteCarController';
import GetCarsController from '../../../useCases/getAllProducts/GetCarsController';
import UpdateCarController from '../../../useCases/updateProducts/UpdateCarController';

const carsRouter = Router();

const createCarController = new CreateCarController();
const getCarsController = new GetCarsController();
const deleteCarController = new DeleteCarController();
const updateCarController = new UpdateCarController();

carsRouter.post('/', createCarController.handle);
carsRouter.get('/', getCarsController.handle);
carsRouter.delete('/:id', deleteCarController.handle);
carsRouter.put('/:id', updateCarController.handle);

export default carsRouter;
