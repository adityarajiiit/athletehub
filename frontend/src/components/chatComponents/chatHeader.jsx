import React from "react";
import { useChatStore } from "@/store/useChatStore";
import { IoCloseCircle } from "react-icons/io5";
import { useAuthStore } from "@/store/useAuthStore";
function ChatHeaders() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  return (
    <div className="p-2.5 border-b bg-background w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={
              selectedUser?.athlete?.image ||
              selectedUser?.doctor?.image ||
              selectedUser?.coach?.image ||
              selectedUser?.organization?.image ||
              "/default-profile.jpg"
            }
            alt=""
            className="size-12 rounded-full object-cover"
          />
          <div className="flex flex-col justify-center item-start">
            <h1 className="font-semibold text-base text-accent">
              {selectedUser.name}
            </h1>
            <p className="text-sm text-accent font-inter font-medium">
              {onlineUsers.includes(selectedUser.id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        <button onClick={() => setSelectedUser(null)}>
          <IoCloseCircle className="size-8"></IoCloseCircle>
        </button>
      </div>
    </div>
  );
}

export default ChatHeaders;
