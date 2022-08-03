import { Router } from 'express';
import CreateProductsController from '../../../useCases/createProducts/CreateProductsController';

const productsRouter = Router();

const createProductsController = new CreateProductsController();

productsRouter.post('/', createProductsController.handle);

export default productsRouter;
