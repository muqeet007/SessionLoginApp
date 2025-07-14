import express from 'express'
import {PORT} from './config/config.mjs'
import cors from 'cors'
import { pool } from './database/Users.table.mjs'



const app=express()
app.use(cors())
app.use(express.json())


app.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT,()=>
{
    console.log(`Server is listening on ${PORT}`);  
})







