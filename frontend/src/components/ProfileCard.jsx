import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcnComponents/ui/card";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
function Card2(props) {
  return (
    <Card className="bg-base-300 shadow-md shadow-slate-50/10  flex flex-col justify-center items-center border-secondary/50 p-2">
      <CardHeader className="flex items-center w-full">
        <CardTitle className="flex flex-col w-full">
          <div className="flex flex-row items-center justify-end  gap-x-4 relative w-full">
            <div className="h-32 w-32 bg-slate-400 rounded-full z-10 absolute left-0 ">
              {" "}
            </div>
            <div className="flex flex-col  bg-base-100 p-4 rounded-lg ml-10 pl-[6.5rem] relative w-full">
              <p className="w-fit h-fit  text-white text-2xl font-semibold font-custom">
                {props.username}
              </p>

              <CardDescription className="flex flex-col gap-y-1">
                <p className="flex flex-col text-white  text-sm font-medium font-inter">
                  {props.sport}
                </p>
                <p className="text-white font-medium text-sm -mt-1 font-poppins">
                  {props.specialization}
                </p>
              </CardDescription>
            </div>
          </div>
        </CardTitle>
        <div className="flex gap-3 justify-center items-center w-full pt-8 ">
          <button className="flex justify-between items-center  glass text-accent-foreground bg-muted/80 text-base rounded-full w-40 p-1.5 font-semibold font-poppins gap-3">
            <p className="pl-4">Profile</p>
            <BsArrowUpRightCircleFill className="size-7" />
          </button>
          <button
            className="flex justify-between items-center  glass text-accent-foreground  text-base rounded-full w-40 p-1.5 font-semibold font-poppins gap-3"
            onClick={props.handleclick}
          >
            <p className="pl-4">Connect</p>
            <BsArrowUpRightCircleFill className="size-7" />
          </button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default Card2;
