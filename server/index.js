const express = require('express')
const app=express();
const dotenv = require("dotenv")

var cookieParser = require('cookie-parser')


app.use(cookieParser())

dotenv.config();
const database= require("./config/db")
database.connect();
app.use(express.json());
const userRoutes= require("./router/User")
app.use("/api/v1/auth",userRoutes);
app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is started on port number ${process.env.PORT}`)
})