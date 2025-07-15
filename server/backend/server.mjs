import express from 'express'
import {PORT} from './config/config.mjs'
import cors from 'cors'
import { pool } from './database/Users.table.mjs'
import { SECRET_KEY } from './config/config.mjs'
import pgSession from 'connect-pg-simple'
import UserRouter from './routes/User.routes.mjs'
import AuthRouter from './routes/Auth.routes.mjs'
import session from 'express-session'


const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Create session store
const pgSessionStore = pgSession(session);

app.use(session(
    {
        store: new pgSessionStore({
    pool: pool,               // your PostgreSQL pool
    tableName: 'session'      // optional, default is "session"
  }),
        name:'session-id',
        resave:false,
        secret:SECRET_KEY,
        saveUninitialized:false,

        cookie:{
            maxAge:1000*60*60*2
        }
    }
))

app.use('/api/users/',UserRouter)
app.use('/auth/users/',AuthRouter)
app.listen(PORT,()=>
{
    console.log(`Server is listening on ${PORT}`);  
})







