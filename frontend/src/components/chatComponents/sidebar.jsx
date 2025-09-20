import React, { useEffect } from "react";
import { useChatStore } from "@/store/useChatStore";
import no_data from "/no-data.png";
import { FaUsers } from "react-icons/fa";
function Sidebar() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const onlineUsers = [1, 3];
  const users = [
    { _id: 1, fullname: "John Doe", ProfilePic: no_data },
    { _id: 2, fullname: "Jane Smith", ProfilePic: no_data },
    { _id: 3, fullname: "Alice Johnson", ProfilePic: no_data },
    { _id: 4, fullname: "Bob Brown", ProfilePic: no_data },
  ];

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
        {users.map((user) => {
          return (
            <button
              key={user._id}
              className={`w-full p-3 flex items-center gap-3 hover:bg-destructive/80 transition-colors justify-start ${
                selectedUser?._id == user._id
                  ? "bg-destructive/60 border-b border-primary"
                  : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="relative ">
                <img
                  src={user.ProfilePic || "/no-data.jpg"}
                  alt={user.fullname}
                  className="size-12 rounded-full object-cover"
                />
                {onlineUsers.includes(user._id) && (
                  <span className="absolute bottom-0 right-0 size-3 bg-success rounded-full ring-1 ring-base-200" />
                )}
              </div>
              <div className="hidden lg:block text-left min-w-0">
                <div className="font-semibold truncate">{user.fullname}</div>
                <div className="text-sm font-inter text-accent font-medium">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
