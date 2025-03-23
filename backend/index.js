import express from "express"
import dotenv from "dotenv"
dotenv.config()
import {createServer} from 'node:http'
import { connectDB } from "./database/connectdb.js"
import { connect } from "mongoose"
import authRoutes from "./routes/auth.routes.js"
import {serve} from "inngest/express"
import { inngest,functions } from "./inngest/index.js"
import cors from 'cors'
import { Server } from "socket.io"
import fitbitRoutes from "./routes/fitbit.routes.js"
import {initializeSocket}from './utils/socket.js'
import cookieParser from "cookie-parser"
import { billScan } from "./controller/finance.controller.js"
const app=express()
const PORT=process.env.PORT||5000
const server=createServer(app)
const io=new Server(server)

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST"]
}))
app.use("/api/inngest",serve({client:inngest,functions}));
app.use("/api/auth",authRoutes)
app.use("/api/fitbit",fitbitRoutes)
app.post("/api/finance/billscan",billScan);
initializeSocket(server)
server.listen(PORT,()=>{
    connectDB();
    console.log("Server is running on port : ",PORT)
})   

