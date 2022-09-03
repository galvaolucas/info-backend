import 'dotenv/config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // entities: [
    //     `src/modules/**/infra/typeorm/entities/*.ts`
    // ],
    // migrations: [
    //     `src/shared/typeorm/migrations/*.ts`
    // ],
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [
        `./dist/modules/**/infra/typeorm/entities/*.js`
    ],
    migrations: [
        `./dist/shared/typeorm/migrations/*.js`
    ],
});