import {Pool} from 'pg'
import {DB_HOST,DB_PASSWORD,DB_NAME,DB_USER,DB_PORT} from '../config/config.mjs'

export const pool =new Pool(
    {
        host:DB_HOST,
        port:DB_PORT,
        user:DB_USER,
        password:DB_PASSWORD,
        database:DB_NAME
    }
)


//in pgadmin create a databse with the same name mentioned here and create a table there using :
// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL,
//   email TEXT UNIQUE NOT NULL,
//   password TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );


