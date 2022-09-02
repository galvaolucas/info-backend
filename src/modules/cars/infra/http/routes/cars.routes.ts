import { Router } from 'express';
import CreateCarController from '../../../useCases/createCars/CreateCarController';
import DeleteCarController from '../../../useCases/deleteCars/DeleteCarController';
import GetCarsController from '../../../useCases/getAllCars/GetCarsController';
import GetCarByIdController from '../../../useCases/getCarById/GetCarByIdController';
import UpdateCarController from '../../../useCases/updateCars/UpdateCarController';

const carsRouter = Router();

const createCarController = new CreateCarController();
const getCarsController = new GetCarsController();
const getCarByIdController = new GetCarByIdController();

const deleteCarController = new DeleteCarController();
const updateCarController = new UpdateCarController();

carsRouter.post('/', createCarController.handle);
carsRouter.get('/', getCarsController.handle);
carsRouter.get('/:id', getCarByIdController.handle);
carsRouter.delete('/:id', deleteCarController.handle);
carsRouter.put('/:id', updateCarController.handle);

export default carsRouter;
