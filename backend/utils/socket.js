import{Server} from 'socket.io'
import Redis from 'ioredis'
import { fileURLToPath } from 'node:url'
import {dirname,join} from 'node:path'
import dotenv from 'dotenv'
import { User } from '../models/user.model.js'
dotenv.config()
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import {startMessageConsumer} from './kafka.js'
import { Message } from '../models/message.model.js'
import { getName } from './auth.utils.js'
import {produceMessage} from './kafka.js'
const serviceurl=process.env.REDIS_SERVICE_URI
const pub=new Redis(serviceurl)
const sub=new Redis(serviceurl)
sub.subscribe('MESSAGES')
const _dirname=dirname(fileURLToPath(import.meta.url))

export const initializeSocket=(server)=>{

    const io=new Server(server,{
        cors:{
            origin:"http://localhost:5173",
            credentials:true,
            methods:["GET","POST"]
        }
    })
   const chatio=io.of('/chatroom')
chatio.use((socket,next)=>{
    try{
        const cookie=socket.handshake.headers.cookie
        if(!cookie){
            return next(new Error("No cookie found"))
        }
        const token=cookie.split(';').find(c=>c.trim().startsWith('token='));
        if(!token){
            return next(new Error("No token"))
        }
        const finaltoken=token.split('=')[1];
        const decoded=jwt.verify(finaltoken,process.env.JWT_SECRET)
        socket.userId=decoded.id;
        next()
    }
    catch(error){
        socket.emit(error)
    }
})    
chatio.on('connection',(socket)=>{
    console.log('a user connected')
    socket.on('joinroom',async (room)=>{
        socket.join(room)

        socket.username=await getName(socket.userId)
        socket.room=room;
        socket.to(room).emit('message',{
            sender:await getName(socket.userId),
            message:`${await getName(socket.userId)} joined ${room}`
        })
        console.log(`${socket.username} joined ${room}`)
    })
    socket.on('message',async(message)=>{
        const roommessage={
            room:socket.room,
            message:message,
            username:socket.username,
            userId:socket.userId
        }
        console.log(`Message: ${message}`)
        await pub.publish('MESSAGES',JSON.stringify({roommessage}))
    })
    socket.on('disconnect',()=>{
        console.log('user disconnected')
        socket.to(socket.room).emit('message',`${socket.username} left the room`)
    })
})
sub.on('message',async(channel,message)=>{
    if(channel==='MESSAGES'){
        chatio.to(JSON.parse(message).roommessage.room).emit('message',{message:JSON.parse(message).roommessage.message,sender:JSON.parse(message).roommessage.username})
        await produceMessage(message)
console.log('message produced to kafka')
    }
})
startMessageConsumer();
return chatio;
}
