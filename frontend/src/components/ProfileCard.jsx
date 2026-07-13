import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcnComponents/ui/card";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineSportsVolleyball } from "react-icons/md";
function Card2({ user, handleclick }) {
  return (
    <Card className="bg-base-300 shadow-md shadow-slate-50/10  flex flex-col justify-center items-center border-secondary/50 p-2 shrink-0">
      <CardHeader className="flex items-center w-full">
        <CardTitle className="flex flex-col w-full">
          <div className="flex flex-row items-center justify-end  gap-x-4 relative w-full">
            <img
              src={user?.image || "/default-profile.jpg"}
              alt="profile"
              className="size-16 sm:h-28 sm:w-28 bg-slate-400 rounded-full z-10 absolute -top-3 left-3 sm:left-0 object-center object-cover"
            />{" "}
            <div className="flex flex-col  bg-base-100 p-4 rounded-lg sm:ml-10 pl-[6.5rem] pt-6 sm:pt-2 relative w-full min-h-24">
              <p className="w-fit h-fit text-xl font-semibold font-poppins mb-1 text-foreground">
                {user?.user?.name || "N/A"}
              </p>

              <CardDescription className="flex flex-col gap-y-1">
                {(user?.user?.role === "Athlete" ||
                  user?.user?.role === "Coach") && (
                  <p className="flex items-center gap-1   text-sm font-medium font-inter">
                    <MdOutlineSportsVolleyball className="size-4" />
                    {user?.sport}
                  </p>
                )}

                {(user?.user?.role === "Doctor" ||
                  user?.user?.role === "Coach") && (
                  <span className="flex items-center gap-2  font-medium text-sm  font-poppins">
                    {user?.user?.role === "Doctor" ? (
                      <FaUserDoctor className="size-3.5" />
                    ) : (
                      <FaUserTie className="size-3.5" />
                    )}{" "}
                    <span className="line-clamp-1">
                      {user?.specialization || "N/A"}{" "}
                    </span>
                  </span>
                )}

                <p className="flex  gap-1  font-medium text-sm font-poppins">
                  <FaMapPin className="inline size-4" />{" "}
                  <span className="line-clamp-1">
                    {user?.location?.state || "Undefinded"} ,{" "}
                    {user?.location?.country || "N/A"}
                  </span>
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
            className="flex justify-between items-center  glass text-foreground rounded-full w-40 p-1.5 font-semibold font-poppins gap-3"
            onClick={handleclick}
          >
            <span className="pl-4">Connect</span>
            <BsArrowUpRightCircleFill className="size-7" />
          </button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default Card2;
