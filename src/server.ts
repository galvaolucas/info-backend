import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import routes from './shared/http';
import './shared/container';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.get('/', (req, res) => {
        return (res.json('tudo certo'))
    });

    app.use(routes);

    app.listen(3333, () => {
        console.log('Server running!')
    });
})





