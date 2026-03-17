import { DataSource } from 'typeorm'
import { configData } from '../config/config.js';


export const AppDataSource  = new DataSource({
    type: 'postgres',
    host: configData.db.dbHost,
    port: Number(configData.db.dbPort),
    username:configData.db.dbUsername,
    password: configData.db.dbPassword,
    database: configData.db.dbDatabase,
    synchronize: false,
    logging: true,
    // entities: [User, Task],
    // migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});

