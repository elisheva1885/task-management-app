import dotenv from 'dotenv'

dotenv.config();

interface DB {
    dbHost: string;
    dbPort: number;
    dbUsername: string;
    dbPassword: string;
    dbDatabase: string
}

interface Config {
    port: number;
    db: DB
    jwt : string;
}

export const configData: Config = {
    port: Number(process.env.PORT) || 3000,
    db : { dbHost: process.env.DB_HOST || 'localhost',
    dbPort: Number(process.env.DB_PORT) || 5432,
    dbUsername: process.env.DB_USERNAME || 'postgres',
    dbPassword: process.env.DB_PASSWORD || '',
    dbDatabase: process.env.DB_DATABASE || 'default_db_name',
    },
    jwt: process.env.JWT_SECRET  || 'secret'
}