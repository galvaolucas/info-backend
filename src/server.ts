import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import routes from './shared/http';
import './shared/container';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(cors());

    app.use(express.json());

    app.get('/', (req, res) => {
        return (res.json('tudo certo'))
    });

    app.use(routes);

    app.listen(process.env.PORT || 3333, () => {
        console.log('Server running!')
    });
})





