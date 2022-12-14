import { Router } from 'express';
import carsRouter from '../../../modules/cars/infra/http/routes/cars.routes';

const routes = Router();

routes.get('/', function(req, res) {
    res.json({
      health: 'OK'
    }) 
});

routes.use('/cars', carsRouter);

export default routes;
