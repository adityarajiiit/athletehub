import React from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
function Card2(props) {
  const createRoom=async(user)=>{
    try{
const response=await axios.post("http://localhost:5000/api/chat/createroom",{
userid:user,
    },{
      headers:{
        "Content-Type":"application/json",
      },
      withCredentials:true
    })
  }
    catch(error){
        console.log(error.message)
    }
  }
  return (
    <Card className="bg-[#2b6759]/80 shadow-md shadow-slate-50/10  flex flex-col justify-center items-center border-secondary/50">
      <CardHeader className="flex items-center w-full">
        <CardTitle className="flex flex-col ">
          <div className="flex flex-row items-center  gap-x-4 ">
            <div className="h-32 w-32 bg-slate-400 rounded-full z-10"> </div>
            <div className="flex flex-col  bg-[#B3D8A8]/40  p-4 rounded-lg pl-20 relative right-16">
              <p className="w-fit h-fit  text-white text-2xl font-semibold ">
                {props.username}
              </p>

              <CardDescription className="flex flex-col gap-y-1">
                <p className="flex flex-col text-destructive  text-base font-normal">
                  {props.sport}
                </p>
                <p className="text-destructive font-medium text-sm -mt-1">
                  {props.specialization}
                </p>
              </CardDescription>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="flex gap-3 justify-center items-center w-full ">
          <button className="bg-white p-2 rounded-full text-black hover:bg-white/90 h-fit">
            <ArrowRight />
          </button>
          <button className="text-white p-2 rounded-md bg-black hover:bg-black/80 h-fit font-semibold duration-500 transition-all hover:scale-105 " onClick={()=>createRoom(props.id)}>
            Request Contact
          </button>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default Card2;
