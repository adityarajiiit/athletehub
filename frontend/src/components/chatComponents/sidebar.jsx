import React, { useEffect, useState } from "react";
import { useChatStore } from "@/store/useChatStore";
import { FaUsers } from "react-icons/fa";
import { useAuthStore } from "@/store/useAuthStore";
import IsSubmitting from "../ui/isSubmitting";
function Sidebar({ isLoading, users }) {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <aside className="h-full w-20 lg:w-72 border-r  flex flex-col transition-all duration-200 bg-background p-1">
      <div className="w-full p-4">
        <div className="flex items-center  gap-4 w-full">
          <FaUsers className="size-6 w-8 lg:size-6 lg:w-9"></FaUsers>{" "}
          <span className="font-semibold hidden lg:block text-primary w-full text-xl">
            Contacts
          </span>
        </div>
      </div>
      <div className="overflow-y-auto w-full  bg-muted rounded-md">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-full p-4 flex items-center gap-3 justify-center"
              >
                <IsSubmitting />
              </div>
            ))
          : users.map((user) => (
              <button
                key={user.id}
                className={`w-full p-1.5 py-3 sm:p-3 flex items-center gap-3 hover:bg-destructive/80 transition-colors justify-start ${
                  selectedUser?.id == user.id
                    ? "bg-destructive/60 border-b border-primary"
                    : ""
                }`}
                onClick={() => setSelectedUser(user)}
              >
                <div className="relative shrink-0">
                  <img
                    src={
                      user?.athlete?.image ||
                      user?.doctor?.image ||
                      user?.coach?.image ||
                      user?.organization?.image ||
                      "/default-profile.jpg"
                    }
                    alt={user?.name}
                    className="size-12 rounded-full object-cover shrink-0"
                  />
                  {onlineUsers.includes(user.id) && (
                    <span className="absolute bottom-0 right-0 size-3 bg-success rounded-full ring-1 ring-base-200" />
                  )}
                </div>
                <div className="hidden lg:block text-left min-w-0">
                  <div className="font-semibold truncate">
                    {user.name}
                    <span className="text-sm">({user.role})</span>
                  </div>
                  <div className="text-sm font-inter text-accent font-medium">
                    {onlineUsers.includes(user.id) ? "Online" : "Offline"}
                  </div>
                </div>
              </button>
            ))}
      </div>
    </aside>
  );
}

export default Sidebar;
