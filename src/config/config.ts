import dotenv from 'dotenv'

dotenv.config();

interface ConfigDb {
    dbHost: string;
    dbPort: number;
    dbUsername: string;
    dbPassword: string;
    dbDatabase: string
}

interface ConfigEnvironment {
    port: number;
    jwt: string;
    expiresIn : number;
}

export const configDbData: ConfigDb = {
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: Number(process.env.DB_PORT) || 5433,
    dbUsername: process.env.DB_USERNAME || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'password',
    dbDatabase: process.env.DB_DATABASE || 'default_db_name',
}

export const configEnvironmentData: ConfigEnvironment = {
    port: Number(process.env.PORT) || 3000,
    jwt: process.env.JWT_SECRET || 'secret',
    expiresIn: Number(process.env.EXPIRES_IN_JWT) ?? 3600
}