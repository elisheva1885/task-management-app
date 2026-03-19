import { DataSource } from 'typeorm'
import { configData } from '../config/config.js';
import { User } from '../entities/User.entity.js';
import { Task } from '../entities/Task.entity.js';



export const AppDataSource = new DataSource({
    type: 'postgres',
    host: configData.db.dbHost,
    port: Number(configData.db.dbPort),
    username: configData.db.dbUsername,
    password: configData.db.dbPassword,
    database: configData.db.dbDatabase,
    entities: [User, Task],
    synchronize: true,
    logging: true,
});

