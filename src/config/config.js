import * as dotenv from 'dotenv';

dotenv.config()

export default {
    DATABASE_CONNECTION_PASSWORD: process.env.DATABASE_CONNECTION_PASSWORD,
    DATABASE_CONNECTION_NAME: process.env.DATABASE_CONNECTION_NAME,
};