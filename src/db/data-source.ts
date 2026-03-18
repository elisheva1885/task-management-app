import { DataSource } from 'typeorm'
import { configData } from '../config/config.js';
import { User } from '../entities/User.entity.js';
import { Task } from '../entities/Task.entity.js';

console.log("in app data ", configData);


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: configData.db.dbHost,
    port: Number(configData.db.dbPort),
    username: configData.db.dbUsername,
    password: configData.db.dbPassword,
    database: configData.db.dbDatabase,
    synchronize: true,
    logging: true,
    entities: [User, Task],
    migrations: ["src/migrations/**/*.ts"],
    // migrations: [join(__dirname, "migration", "*.ts")],
    subscribers: [],
});

