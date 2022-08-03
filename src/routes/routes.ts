import { Router } from 'express';
import productsRouter from '../modules/products/infra/http/routes/products.routes';

export const routes = Router();

routes.get('/', function(req, res) {
    res.json({
      health: 'OK'
    }) 
});

routes.use('/products', productsRouter);

