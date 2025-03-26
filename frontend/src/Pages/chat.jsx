import React, { useRef,useEffect, useState } from "react";
import Messageslides from "@/constants/messageslide";
import { LucideFileChartColumnIncreasing, SearchIcon } from "lucide-react";
import Header from "@/constants/navbar";
import Footer from "@/constants/footer";
import chat from "@/assets/chat.png";
import coach from "@/assets/coach.png";
import { ArrowLeftCircle } from "lucide-react";
import { io } from "socket.io-client";
import axios from "axios";
function Chat() {

  const [active, setActive] = useState(false);
  const [chatHistory, setChatHistory] = useState({});
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const[username,setUsername]=useState("")
  const[usermessage,setUsermessage]=useState(LucideFileChartColumnIncreasing)
  const [cardcomp,setCardcomp] = useState([
    {
      id: 1,
      username: "Group 1",
      category: "Coach",
      chatHistory: [
        { sender: "User", message: "Hey, how's it going?" },
        { sender: "Coach", message: "Doing well! How about you?" },
        { sender: "User", message: "I'm good, just checking in!" },
      ],
    },
    {
      id: 2,
      username: "Group 2",
      category: "Doctor",
      chatHistory: [
        { sender: "User", message: "Did you complete the workout?" },
        { sender: "Doctor", message: "Yes! It was intense." },
        { sender: "User", message: "Awesome! Keep pushing!" },
      ],
    },
    {
      id: 3,
      username: "Group 3",
      category: "Athelete",
      chatHistory: [
        { sender: "User", message: "Let's plan our next session" },
        { sender: "Athlete", message: "Sure, how about Saturday?" },
        { sender: "User", message: "Sounds great!" },
      ],
    },
  ]);
  const socketRef=useRef()
  useEffect(()=>{
socketRef.current=io("http://localhost:5000/chatroom",{withCredentials:true})
socketRef.current.on("connect",()=>{
  console.log("connected")
 
})
getAllRooms();
socketRef.current.on("disconnect",()=>{
  console.log("disconnected");
})
console.log("hi")
return()=>{
  if(socketRef.current){
  socketRef.current.disconnect()
  }
}
  },[])
 useEffect(()=>{
  if(!socketRef.current||!selectedGroup){
    return;
  }
  
  socketRef.current.emit("joinroom",cardcomp[selectedGroup-1].roomid)
  
    getPreviousChats(selectedGroup)
 const handleMessage=(msg)=>{
  console.log("check - ",msg)
  console.log(msg.sender)
  console.log(typeof(msg.sender),typeof(username))
  console.log(msg.sender===username)
  
setChatHistory((prev)=>({
  ...prev,
  [selectedGroup]:[
    ...(prev[selectedGroup]||[]),
    {sender:msg.sender,message:msg.message}
  ]
}))
 } 
socketRef.current.on("message",handleMessage)
return()=>{
  socketRef.current.off("message",handleMessage)

}
},[selectedGroup]) 

 
  // const cardcomp = [
  //   {
  //     id: 1,
  //     username: "group1",
  //     category: "category1",
  //   },
  //   {
  //     id: 2,
  //     username: "group2",
  //     category: "category2",
  //   },
  //   {
  //     id: 3,
  //     username: "group3",
  //     category: "category3",
  //   },
  //   {
  //     id: 4,
  //     username: "group4",
  //     category: "category4",
  //   },
  //   {
  //     id: 5,
  //     username: "group5",
  //     category: "category5",
  //   },
  //   {
  //     id: 6,
  //     username: "group6",
  //     category: "category6",
  //   },
  //   {
  //     id: 7,
  //     username: "group7",
  //     category: "category7",
  //   },
  //   {
  //     id: 8,
  //     username: "group8",
  //     category: "category8",
  //   },
  //   {
  //     id: 9,
  //     username: "group9",
  //     category: "category9",
  //   },
  //   {
  //     id: 10,
  //     username: "group9",
  //     category: "category9",
  //   },
  //   {
  //     id: 11,
  //     username: "group7",
  //     category: "category7",
  //   },
  //   {
  //     id: 12,
  //     username: "group8",
  //     category: "category8",
  //   },
  //   {
  //     id: 13,
  //     username: "group9",
  //     category: "category9",
  //   },
  //   {
  //     id: 14,
  //     username: "group9",
  //     category: "category9",
  //   },
  // ];
  const getAllRooms=async()=>{
    try{
const response=await axios.get("http://localhost:5000/api/chat/rooms",{
  headers:{
    "Content-Type":"application/json"
  },
  withCredentials:true,
})
console.log(response.data)
setUsername(response.data[0].myusername)
console.log(response.data[0].myusername)
let id=1;
if(response.data){
  const rooms=response.data.map(room=>({
    id:id++,
    roomid:room.roomId,
    username:room.username,
    category:room.role,
  }))
setCardcomp(rooms)

console.log(rooms)
}
    }
    catch(error){
      console.log(error)
    }
  }
  const getPreviousChats=async(groupId)=>{
    try{
const response=await axios.get(`http://localhost:5000/api/chat/prevchat/${cardcomp[groupId-1].roomid}`,{
  headers:{
    "Content-Type":"application/json"
  },
  withCredentials:true,
})

if(response.data.messages){
  const messageformatted=response.data.messages.map(message=>({
    sender:message.username,
    message:message.message
  }))
  console.log(messageformatted)
  console.log(username)
  setChatHistory((prev)=>({
    ...prev,
    [groupId]:messageformatted||[]
  }))
}

    }
    catch(error){
      console.log(error)
    }
  }

  const handleSelectGroup = (groupId) => {
    console.log("Group selected:", groupId);

    const selectedChat = cardcomp.find((group) => group.id === groupId);

    setSelectedGroup(groupId);
    setActive(true);

    setChatHistory((prev) => ({
      ...prev,
      [groupId]: prev[groupId] || selectedChat?.chatHistory || [],
    }));
  };

  const sendMessage = (groupId) => {
    if (!newMessage.trim()) return;
    socketRef.current.emit('message',newMessage)
    setNewMessage("");
  };

  return (
    <div>
      <Header />
      <div className="flex flex-row pt-20 bg-black/80 h-fit">
        <div
          className={
            selectedGroup
              ? "max-sm:hidden sm:hidden md:flex flex-col justify-center items-center w-96 bg-accent/30  h-[52rem] border-r-2 border-muted/20 max-sm:full"
              : "flex flex-col justify-center items-center w-96 bg-accent/30  h-[52rem] border-r-2 border-muted/20 max-sm:full"
          }
        >
          <div className="flex justify-center items-center w-fit p-4 ">
            <form className="flex flex-row relative gap-x-2">
              <SearchIcon className="stroke-slate-50 absolute inset-y-3 inset-x-3 z-10 pointer-events-none w-fit" />
              <input
                type="search"
                className=" border border-secondary outline-none pl-12 rounded-md  text-slate-100 bg-transparent placeholder:text-slate-200 h-12 w-60 placeholder:italic pr-2"
                placeholder="Search ..."
              />
              <button className="bg-secondary text-accent p-2 rounded-md font-medium">
                Search
              </button>
            </form>
          </div>

          <div className="flex flex-col overflow-y-auto p-2 mt-2 h-[46rem] w-full custom-scrollbar">
            {cardcomp.map((card) => (
              <div
                key={card.id}
                onClick={() => handleSelectGroup(card.id)}
                className="cursor-pointer"
              >
                <Messageslides
                  username={card.username}
                  category={card.category}
                />
              </div>
            ))}
          </div>
        </div>

        {selectedGroup ? (
          <div className="flex flex-col  bg-gray-900 w-full h-[52rem]">
            <div className="flex flex-row justify-between items-center w-full bg-blue-950 ">
              <div className="flex flex-row items-center justify-start h-20 gap-4 pl-6">
                <img src={coach} alt="" className="h-12 w-12 " />
                <div className="flex flex-col justify-center items-start">
                  <p className="font-base text-xl text-secondary">
                    {cardcomp[selectedGroup - 1].username}
                  </p>
                  <p className="text-base text-destructive font-extralight">
                    {cardcomp[selectedGroup - 1].category}
                  </p>
                </div>
              </div>
              <div>
                <ArrowLeftCircle
                  className="stroke-secondary h-8 w-8 mr-4"
                  onClick={() => {
                    selectedGroup
                      ? setSelectedGroup(false)
                      : setSelectedGroup(true);
                  }}
                />
              </div>
            </div>

            <div className="flex-grow overflow-y-auto">
              {chatHistory[selectedGroup]?.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 ${
                    msg.sender === username
                      ? "text-right text-blue-400"
                      : "text-left text-white"
                  }`}
                >
                  <p>{msg.message}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center border-t p-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow p-2 bg-gray-800 text-white rounded-lg outline-none"
                placeholder="Type a message..."
              />
              <button
                onClick={() => sendMessage(selectedGroup)}
                className="ml-2 bg-blue-600 text-white p-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[52rem] w-full  bg-black">
            <div className="flex justify-center items-center flex-col gap-2">
              <img
                src={chat}
                alt="message"
                className="h-20 w-20 md:h-32 md:w-32"
              />
              <p className="text-destructive text-center">
                Keep in touch with the person you are connected with.
                <br />
                <span className="text-slate-400">
                  Connect with coaches, doctors, and other athletes.
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Chat;
