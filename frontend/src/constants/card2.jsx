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
    <Card className="bg-black shadow-md shadow-slate-50/10  flex flex-col justify-center items-center border-secondary/50 ">
      <CardHeader className="flex items-center w-full">
        <CardTitle className="flex flex-col ">
          <div className="flex flex-row items-center  gap-x-4 ">
            <div className="h-32 w-32 bg-slate-400 rounded-full z-10"> </div>
            <div className="flex flex-col  bg-[#434242] p-4 rounded-lg pl-20 relative right-16">
              <p className="w-fit h-fit  text-white text-2xl font-semibold font-custom">
                {props.username}
              </p>

              <CardDescription className="flex flex-col gap-y-1">
                <p className="flex flex-col text-white  text-lg font-normal font-custom">
                  {props.sport}
                </p>
                <p className="text-white font-medium text-sm -mt-1 font-poppins">
                  {props.specialization}
                </p>
              </CardDescription>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="flex gap-3 justify-center items-center w-full ">
          <button className="flex justify-center items-center bg-orange-500 p-2 rounded-sm text-white h-fit font-poppins font-semibold hover:bg-transparent hover:border-2 hover:border-orange-500 duration-200 hover:scale-105">
            <ArrowRight className="h-5 w-5" /> Visit Profile
          </button>
          <button
            className="text-white p-2 rounded-sm bg-black hover:bg-black/80 h-fit  duration-300 transition-all hover:scale-105 font-poppins border-2 border-orange-500 hover:bg-orange-500 font-semibold"
            onClick={()=>createRoom(props.id)}
          >
            Request Contact
          </button>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default Card2;
