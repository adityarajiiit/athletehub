import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()
import { connectDB } from "./database/connectdb.js"
import { connect } from "mongoose"
import authRoutes from "./routes/auth.routes.js"
const app=express()
const PORT=process.env.PORT||5000


app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.listen(PORT,()=>{
    connectDB();
    console.log("Server is running on port : ",PORT)
})   

//