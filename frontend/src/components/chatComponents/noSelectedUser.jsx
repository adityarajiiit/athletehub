import React from "react";
import logo from "/logo.png";
function NoSelectedUser() {
  return (
    <div className="w-full">
      <div className="w-full h-full flex flex-col items-center justify-center p-16 bg-base-100/50">
        <div className="flex flex-col md:flex-row justify-start items-center gap-4">
          <img src={logo} alt="Logo" className="h-20 w-auto mb-2" />
          <div className="flex flex-col justify-center items-start">
            <h1 className="uppercase text-2xl font-bold text-accent">
              athletehub
            </h1>
            <p className="font-inter -mt-1 text-accent-foreground font-medium text-base">
              Track, Connect, Grow.
            </p>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-primary my-4 text-center">
          Welcome to Athletehub!
        </h1>
        <p className="text-center ">
          Select a conversation from sidebar to start chatting
        </p>
      </div>
    </div>
  );
}

export default NoSelectedUser;
