import { Router } from 'express';
import CreateProductsController from '../../../useCases/createProducts/CreateProductsController';
import DeleteProductsController from '../../../useCases/deleteProducts/DeleteProductsController';
import GetProductsController from '../../../useCases/getAllProducts/GetProductsController';
import UpdateProductsController from '../../../useCases/updateProducts/UpdateProductsController';

const productsRouter = Router();

const createProductsController = new CreateProductsController();
const getProductsController = new GetProductsController();
const deleteProductsController = new DeleteProductsController();
const updateProductsController = new UpdateProductsController();

productsRouter.post('/', createProductsController.handle);
productsRouter.get('/', getProductsController.handle);
productsRouter.delete('/:id', deleteProductsController.handle);
productsRouter.put('/:id', updateProductsController.handle);

export default productsRouter;
