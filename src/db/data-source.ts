import { DataSource } from 'typeorm'
import { configDbData } from '../config/config.js'
import { Task } from '../entities/Task.entity.js'
import { User } from '../entities/User.entity.js'

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: configDbData.dbHost,
	port: Number(configDbData.dbPort),
	username: configDbData.dbUsername,
	password: configDbData.dbPassword,
	database: configDbData.dbDatabase,
	entities: [User, Task],
	synchronize: true,
	logging: true,
})
