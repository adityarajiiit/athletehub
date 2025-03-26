import { createClient, LiveTranscriptionEvents } from "@deepgram/sdk";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import Groq from "groq-sdk"
const groq=new Groq()
import { Server } from "socket.io";

const main=async ()=>{
    const stream=await getGroqChatStream()
    for await(const chunk of stream){
        console.log(chunk.choices[0]?.delta?.content||"")
    }
    return chunk.choices[0]?.delta?.content||""
}
const getAudio=async()=>{
    const response=await deepgram.speak.request(
    main(),
        {
model:"aura-asteria-en",
encoding:"linear16",
container:"wav"
        }
    )
    const stream=await response.getStream()
    const headers=await response.getHeaders()
    let buffer
    if(stream){
    buffer=await getAudioBuffer(stream)
    }
    if(headers){
    console.log("Headers:",headers)
    }    
    return buffer
}

const message=[{
role:"system",
content:""
}
]
const getAudioBuffer=async(response)=>{
    const reader=response.getReader()
    const chunks=[]
    while(true){
        const {done,value}=await reader.read()
        if(done){
            break;
        }
        chunks.push(value)
    }
    const dataarray=chunks.reduce((acc,chunk)=>Uint8Array.from([...acc,...chunk]),new Uint8Array(0))
    return Buffer.from(dataarray.buffer)
}
const getGroqChatStream=()=>{
    return groq.chat.completions.create({
        messages:message,
        model:"llama-3.3-70b-versatile",
        temperature:0.4,
        max_completion_tokens:1024,
        top_p:1,
        stop:null,
        stream:true,
    })
}
export const socketinitialize=(server)=>{
    const io=new Server(server,{
        cors:{
            origin:"http://localhost:5173",
            credentials:true,
            methods:["GET","POST"]
        }
    })
    const doctorio=io.of('/doctor')
doctorio.use((socket,next)=>{
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
        socket.emit(error.message)
        next(error.message)
    }
})   
doctorio.on('connection',(socket)=>{
    console.log('user connected')
    const API_KEY=process.env.DEEPGRAM_API_KEY
const deepgram=createClient(API_KEY)
const dgConnection=deepgram.listen.live({model:"nova"})

dgConnection.on(LiveTranscriptionEvents.Open,()=>{
    dgConnection.on(LiveTranscriptionEvents.Transcript,(data)=>{
        console.log("Hi")
        console.log(data.channel.alternatives[0].transcript)
        if(data.channel.alternatives[0].transcript){
            message.push({
                role:"user",
                content:data.channel.alternatives[0].transcript
            })
        }
        socket.emit('transcript',data)
    })
})
socket.on('audio',(data)=>{
    dgConnection.send(data)
})
socket.on('stoprecording',async()=>{
    main()
    const buffer=await getAudio()
    socket.emit('response',buffer)
})
socket.on('disconnect',()=>{
    console.log('user disconnected')
        dgConnection.requestClose();
})

})
}
