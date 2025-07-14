import express from 'express'
import {PORT} from './config/config.mjs'



const app=express()



app.listen(PORT,()=>
{
    console.log(`Server is listening on ${PORT}`);  
})







