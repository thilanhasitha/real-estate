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

app.use(express.json());  // ✅ Parse JSON before handling requests
app.use(cors());  // (Optional) Enable CORS if needed

app.use('/api/v1/user', route);  // ✅ Now routes can access req.body

//error handler middleware
app.use((err,req,res,next)=>{
 const statusCode = err.statusCode || 500;
 const message = err.message || 'Internal server error';
 return res.status(statusCode).json({
    success:false,
    statusCode,
    message
 });
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})