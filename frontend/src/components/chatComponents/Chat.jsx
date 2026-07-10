import React, { useRef, useEffect, useState } from "react";
import { useChatStore } from "@/store/useChatStore";
import ChatHeaders from "./chatHeader";
import MessageInput from "./MessageInput";
import { useAuthStore } from "@/store/useAuthStore";
import KineticDotsLoader from "@/components/loading";

function Chat() {
  const {
    messages,
    getMessage,
    selectedUser,
    subscribeToMessages,
    unSubscribeFromMessages,
  } = useChatStore();

  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!selectedUser) return;
      setIsLoading(true);
      try {
        await getMessage();
        subscribeToMessages();
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    run();

    return () => {
      cancelled = true;
      unSubscribeFromMessages();
    };
  }, [selectedUser, getMessage, subscribeToMessages, unSubscribeFromMessages]);

  const messageRef = useRef();

  useEffect(() => {
    if (messageRef.current && messages) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="w-full flex flex-col justify-between">
      <ChatHeaders></ChatHeaders>

      <div className="flex flex-col overflow-y-auto p-4 space-y-4 h-full">
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center">
            <KineticDotsLoader />
          </div>
        ) : (
          messages.map((message) => {
            return (
              <div
                key={message.id}
                className={`chat ${
                  message.senderId == user.id ? "chat-end" : "chat-start"
                }`}
                ref={messageRef}
              >
                <div className="chat-image avatar">
                  <div className="size-10 rounded-full border object-cover">
                    <img
                      src={
                        message.senderId == user.id
                          ? user?.athlete?.image ||
                            user?.doctor?.image ||
                            user?.coach?.image ||
                            user?.organization?.image ||
                            "/no-data.jpg"
                          : selectedUser?.athlete?.image ||
                            selectedUser?.doctor?.image ||
                            selectedUser?.coach?.image ||
                            selectedUser?.organization?.image ||
                            "/no-data.jpg"
                      }
                    ></img>
                  </div>
                </div>

                <div className="chat-header mb-1">
                  <time className="text-xs opacity-50 ml-1">
                    {new Date(message.timestamp).toLocaleTimeString("en-US", {
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
                  {message.content && <p>{message.content}</p>}
                </div>
              </div>
            );
          })
        )}
      </div>

      <MessageInput></MessageInput>
    </div>
  );
}

export default Chat;
