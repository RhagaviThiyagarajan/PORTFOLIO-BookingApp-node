import express from 'express'
const app=express()
import dotenv from 'dotenv';
dotenv.config();

import cors from "cors";
import mongoose from "mongoose";
import hotelRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import cookieParser from 'cookie-parser';
//mongoose

const connect=async()=>
{
    try{
        await mongoose.connect(
            process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB Connected❤️");
    }
    catch(e)
    {
        console.log(e.message,"Error in connecting to db");
    }
};



//if disconnected

mongoose.connection.on("disconnected",()=>
{
    console.log("mongoDB disconnected");
});



connect();



//express.json

//middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"*",
    credentials:true
  }));

//middleware/route

app.use('/api/auth',authRoute);
app.use('/api/hotels',hotelRoute);
app.use('/api/rooms',roomRoute);
app.use('/api/users',userRoute);


//error handling middleware
app.use((error,req,res,next)=>
{
    const errorStatus=error.status || 500
    const errorMessage=error.message || "something went wrong"
   return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message:errorMessage,
    stack:error.stack,
   });
});


//home

app.get("/", (req, res) => {
    res.status(200).send("WELCOME TO BOOKING APPLICATION");
  });


//port

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });