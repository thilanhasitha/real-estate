import express from 'express'
import mongoose from 'mongoose'
import cors from'cors'
import dotenv from 'dotenv'
import route from './route/user.route.js';

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

//user route
app.use('/api/v1/user',route);


app.use(express.json());

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})