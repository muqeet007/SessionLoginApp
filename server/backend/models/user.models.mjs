import { pool } from "../database/Users.table.mjs";

export async function findUserByEmail(email)
{
    try
    {
        const result=await pool.query(`select * from users where email= $1`,[email])
        return result.rows[0]
    }

    catch(error)
    {
        throw error
    }
}

export async function createNewUser({name,email,password})
{
    try
    {
        await pool.query(`insert into users (name,email,password) values ($1 , $2, $3)`,[name,email,password])

        return true
    }

    catch (error)
    {
         throw error;
    }
}




