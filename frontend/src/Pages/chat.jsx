import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "@/components/chatComponents/sidebar";
import NoSelectedUser from "@/components/chatComponents/noSelectedUser";
import Header from "@/components/navbar";
import Chat from "@/components/chatComponents/Chat";
function Home() {
  const { selectedUser } = useChatStore();
  return (
    <div className="min-h-screen h-full bg-base-200 w-full">
      <Header></Header>
      <div className="flex flex-col items-center justify-center pt-32 px-4 w-full gap-4">
        <div className="w-full flex flex-wrap justify-between gap-6 max-w-6xl">
          <div className="join ">
            <input
              className="input input-bordered join-item min-w-52 max-w-72"
              placeholder="Search users..."
            />
            <button className="btn bg-base-content join-item rounded-r-xl text-base-100 font-inter hover:bg-white">
              Search
            </button>
          </div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Category
            </option>
            <option>Athlete</option>
            <option>Coach</option>
            <option>Doctor</option>
            <option>Organisation</option>
          </select>
        </div>

        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)] mb-10">
          <div className="flex h-full rounded-lg overflow-hidden w-full">
            <Sidebar />
            {!selectedUser ? <NoSelectedUser /> : <Chat />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
