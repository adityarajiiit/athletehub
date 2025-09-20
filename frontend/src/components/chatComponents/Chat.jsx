import React from "react";
import { useChatStore } from "@/store/useChatStore";
import ChatHeaders from "./chatHeader";
import MessageInput from "./MessageInput";
function Chat() {
  const { selectedUser } = useChatStore();
  const messages = [
    {
      _id: 1,
      senderId: 1,
      text: "Hello!",
      image: null,
      createdAt: "2023-10-01T10:00:00Z",
      ProfilePic: "/no-data.jpg",
    },
    {
      _id: 2,
      senderId: 2,
      text: "Hi there!",
      image: null,
      createdAt: "2023-10-01T10:01:00Z",
      ProfilePic: "/no-data.jpg",
    },
  ];
  const authUser = { _id: 1, fullname: "John Doe", ProfilePic: "/no-data.jpg" };
  return (
    <div className="w-full flex flex-col justify-between">
      <ChatHeaders></ChatHeaders>
      <div className="flex flex-col overflow-y-auto p-4 space-y-4 h-full">
        {messages.map((message) => {
          return (
            <div
              key={message._id}
              className={`chat ${
                message.senderId == authUser._id ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border object-cover">
                  <img
                    src={
                      message.senderId == authUser._id
                        ? authUser.ProfilePic
                        : selectedUser.ProfilePic
                    }
                  ></img>
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {new Date(message.createdAt).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </time>
              </div>
              <div className="chat-bubble flex flex-col">
                {message.image && (
                  <img
                    src={message.image}
                    alt="attachment"
                    className="sm:max-w-[200px] rounded-md mb-2 object-contain"
                  />
                )}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          );
        })}
      </div>
      <MessageInput></MessageInput>
    </div>
  );
}

export default Chat;
