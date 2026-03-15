import dotenv from 'dotenv'

dotenv.config();

interface Config {
    port: number;
    dbHost: string;
    dbPort: number;
    dbUsername: string;
    dbPassword: string;
    dbDatabase: string

}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: Number(process.env.DB_PORT) || 5432,
    dbUsername: process.env.DB_USERNAME || 'postgres',
    dbPassword: process.env.DB_PASSWORD || '',
    dbDatabase: process.env.DB_DATABASE || 'default_db_name',
}