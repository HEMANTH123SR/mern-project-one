import express from "express";
import cors from "cors"
import mongoose from "mongoose";

const app=express()

// when you send data fromend it will convert to json
app.use(express.json())
app.use(cors());

app.listen(3001,()=>{
    console.log("server started")
})