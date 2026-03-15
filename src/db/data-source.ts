import { DataSource } from 'typeorm'
import dotenv from "dotenv";
dotenv.config({ path: ".env.stage.dev" });

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env;


export const AppDataSource  = new DataSource({
    type: 'postgres',
    host: DB_HOST!,
    port: Number(DB_PORT!),
    username: DB_USERNAME!,
    password: DB_PASSWORD!,
    database: DB_DATABASE!,
    synchronize: false,
    logging: true,
    // entities: [User, Task],
    // migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});

