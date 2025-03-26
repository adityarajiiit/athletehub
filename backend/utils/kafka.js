import { Kafka } from "kafkajs";
import dotenv from 'dotenv'
import { Message } from "../models/message.model.js";
import fs from "fs"
import path from "path"
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
dotenv.config()
const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)
const kafka=new Kafka({
    brokers:[process.env.KAFKA_URL],
    sasl:{
        mechanism:"plain",
        username:process.env.KAFKA_USER,
        password:process.env.KAFKA_PASS
    },
    ssl:{
        ca:[fs.readFileSync(path.join(__dirname,'../services/ca (2).pem'),"utf-8")],

    }
})

let producer=null
export const createProducer=async()=>{
    if(producer){
        return producer
    }
    const _producer=kafka.producer()
    await _producer.connect()
    producer=_producer;
    return producer;
}
export  const produceMessage=async(message)=>{
    const producer=await createProducer()
await producer.send({
    topic:"MESSAGES",
    messages:[{key:`message-${Date.now()}`,value:message}]
})
return true
}
export const startMessageConsumer=async()=>{
console.log('Consumer started')
const consumer=kafka.consumer({groupId:"default"})
await consumer.connect()
await consumer.subscribe({topic:"MESSAGES",fromBeginning:true})
await consumer.run({
    autoCommit:true,
    eachMessage:async({message,pause})=>{
        console.log('New message received')
        if(!message.value){
            return;
        }
        try{
            console.log("this is - ",JSON.parse(message.value.toString()).roommessage)
            const newMessage=new Message({
                message:JSON.parse(message.value.toString()).roommessage.message,
                room:JSON.parse(message.value.toString()).roommessage.room,
                userId:JSON.parse(message.value.toString()).roommessage.userId
            })
            await newMessage.save();}
catch(error){
    pause()
    setTimeout(()=>{
        consumer.resume([{topic:"MESSAGES"}])
    },60*1000)
}
        
    }
})
}
export default kafka;