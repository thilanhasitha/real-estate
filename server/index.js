import express from 'express'
import mongoose from 'mongoose'
import cors from'cors'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

//connect to the mongo database
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Mongo database is running successfully")
})
.catch((error)=>{
    console.log(error)
})



app.use(express.json());

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})