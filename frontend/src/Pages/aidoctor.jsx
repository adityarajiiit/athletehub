import { useRef,useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Doctor(){
const socketRef=useRef()
const mediaRef=useRef()
const [isRecording,setIsRecording]=useState(false)
const [response,setResponse]=useState("")
useEffect(()=>{
socketRef.current=io("http://localhost:5000/doctor",{withCredentials:true})
socketRef.current.on("connect",()=>{
    console.log("connected")
})
socketRef.current.on("disconnect",()=>{
    console.log("disconnected")
})
socketRef.current.on("response",(response)=>{

})
return()=>{
    if(socketRef.current){
        socketRef.current.disconnect()
    }
}
},[])    
const startrecording=async()=>{
try{
  setIsRecording(true)
  const audio=await navigator.mediaDevices.getUserMedia({audio:true})
mediaRef.current=new MediaRecorder(audio)
mediaRef.current.ondataavailable=(event)=>{
  if(socketRef.current&&event.data.size>0){
    console.log(event.data)
    socketRef.current.emit('audio',event.data)
  }
}
mediaRef.current.start(2000)
}
catch(error){
    console.log(error)
}
}
const stoprecording=()=>{
  setIsRecording(false)
  
    if(mediaRef.current){
mediaRef.current.stop();
    }
    const tracks=mediaRef.current.stream.getTracks()
    console.log(tracks)
    if(tracks){
      tracks.forEach(track=>{
        track.stop();
      });
    }
  socketRef.current.emit('stoprecording')
}
  return (
    <div>
      <h1>Doctor</h1>
      <button onClick={startrecording} disabled={isRecording}>Start Recording</button>
      <button onClick={stoprecording} disabled={!isRecording}>Stop Recording</button>
    </div>
  );
}
