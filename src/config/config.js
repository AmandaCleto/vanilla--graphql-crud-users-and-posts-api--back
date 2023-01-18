import * as dotenv from 'dotenv';

dotenv.config()

export default {
    DATABASE_CONNECTION_PW: process.env.DATABASE_CONNECTION_PW,
    DATABASE_CONNECTION_NAME: process.env.DATABASE_CONNECTION_NAME,
};