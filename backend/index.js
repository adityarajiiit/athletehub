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
import { socketinitialize } from "./deepgram/index.js"
import cookieParser from "cookie-parser"
import { billScan } from "./controller/finance.controller.js"
import { getPreviousChats,getRooms,createRooms,getAllCoaches,getAllAthletes } from "./controller/auth.controller.js"
import { verifyToken } from "./middleware/verifyToken.js"
import { getAllDoctors } from "./controller/auth.controller.js"
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
app.get("/api/chat/prevchat/:id",verifyToken,getPreviousChats);
app.get("/api/chat/rooms",verifyToken,getRooms)
app.post("/api/chat/createroom",verifyToken,createRooms)
app.get("/api/auth/coaches",verifyToken,getAllCoaches)
app.get("/api/auth/athletes",verifyToken,getAllAthletes)
app.get("/api/auth/doctors",verifyToken,getAllDoctors)
initializeSocket(server)
socketinitialize(server)
server.listen(PORT,()=>{
    connectDB();
    console.log("Server is running on port : ",PORT)
})   

