import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "@/components/chatComponents/sidebar";
import NoSelectedUser from "@/components/chatComponents/noSelectedUser";
import Header from "@/components/ui/navbar";
import Chat from "@/components/chatComponents/Chat";
function Home() {
  const { selectedUser, users, getUsers } = useChatStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setIsLoading(true);
      try {
        await getUsers();
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [getUsers]);

  useEffect(() => {
    let filtered = users;
    if (category !== "All") {
      filtered = filtered.filter((user) => user.role === category);
    }
    if (searchQuery) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    setFilteredUsers(filtered);
  }, [users, searchQuery, category]);
  return (
    <div className="min-h-screen h-full bg-base-200 w-full">
      <Header></Header>
      <div className="flex flex-col items-center justify-center pt-32 px-4 w-full gap-4">
        <div className="w-full flex flex-wrap justify-between gap-6 max-w-6xl">
          <div className="join ">
            <input
              className="input input-bordered join-item w-44"
              placeholder="Search users..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <button className="btn bg-base-content join-item rounded-r-xl text-base-100 font-inter hover:bg-white">
              Search
            </button>
          </div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled selected>
              Category
            </option>
            <option value={"All"}>All</option>
            <option value={"Athlete"}>Athletes</option>
            <option value={"Coache"}>Coaches</option>
            <option value="Doctor">Doctors</option>
          </select>
        </div>

        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)] mb-10">
          <div className="flex h-full rounded-lg overflow-hidden w-full">
            <Sidebar isLoading={isLoading} users={filteredUsers} />
            {!selectedUser ? <NoSelectedUser /> : <Chat />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
