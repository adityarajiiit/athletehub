import React, { useEffect, useState } from "react";
import Header from "@/constants/navbar";
import Footer from "@/constants/footer";
import Card from "@/constants/card2";
import axios from "axios";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Career() {
  const [userdata,setUserdata]=useState([
    {
      username: "John Doe",
      sport: "Football",
      specialization: "Intermediate",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "Robert Doe",
      sport: "Basketball",
      specialization: "Advanced",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "Christ Doe",
      sport: "Football",
      specialization: "Intermediate",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "Tom Doe",
      sport: "Basketball",
      specialization: "Advanced",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "John Doe",
      sport: "Football",
      specialization: "Intermediate",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "Robert Doe",
      sport: "Basketball",
      specialization: "Advanced",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "Christ Doe",
      sport: "Football",
      specialization: "Intermediate",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "Tom Doe",
      sport: "Basketball",
      specialization: "Advanced",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "Alice Doe",
      sport: "Tennis",
      specialization: "Beginner",
      description: "Lorem ipsum...",
      id:""
    },
    {
      username: "Bob Doe",
      sport: "Swimming",
      specialization: "Intermediate",
      description: "Lorem ipsum...",
      id:""
    },
  ])
 const [athletedata,setAthletedata]=useState([])
  const getCoaches=async()=>{
    try{
const response=await axios.get("http://localhost:5000/api/auth/coaches",{
headers:{
    "Content-Type":"application/json",
},withCredentials:true});
if(response.data){
    console.log(response.data)
    setUserdata(response.data)
    console.log(userdata)
}    

    }
    catch(error){
        console.log(error.message)
    }
  }
  const getAthletes=async()=>{
    try{
const response=await axios.get("http://localhost:5000/api/auth/athletes",{
headers:{
    "Content-Type":"application/json",
},withCredentials:true});
if(response.data){
    console.log(response.data)
    setAthletedata(response.data)
    console.log(athletedata)
}    

    }
    catch(error){
        console.log(error.message)
    }
  }
  useEffect(()=>{
    getCoaches()
    getAthletes()
  },[])

  const rowperpage = 6;
  const totalPages = Math.ceil(userdata.length / rowperpage);
  const [currentPage, setCurrentPage] = useState(0);

  const startindex = currentPage * rowperpage;
  const endindex = Math.min(startindex + rowperpage, userdata.length);

  return (
    <div className="flex flex-col justify-between min-h-screen h-full w-full bg-black/85 mt-20">
      <Header />
      <div className="flex flex-col items-center justify-center gap-y-10 w-full">
        <div className="flex flex-col justify-center items-center p-2 w-full">
          <div className="gap-y-4 mt-4 w-full p-4">
            <div className="flex flex-col items-start justify-center pl-4 w-full">
              <h1 className="text-4xl w-fit  text-accent-foreground font-semibold ">
                Coaches
              </h1>
              <hr class="border-none h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md shadow-blue-400/20 w-36" />
            </div>
          </div>

          {userdata.length > 0 && (
            <div className="bg-slate-600/50 p-2 rounded-md mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {userdata.slice(startindex, endindex).map((user, index) => (
                  <Card
                    key={index}
                    username={user.username}
                    sport={user.sport}
                    specialization={user.specialization}
                    description={user.description}
                    id={user.id}
                  />
                ))}
              </div>

              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        currentPage === 0
                          ? "pointer-events-none opacity-50 font-semibold text-slate-50 "
                          : "text-slate-50 hover:bg-white hover:text-black"
                      }
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(0, prev - 1))
                      }
                    />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext
                      className={
                        currentPage >= totalPages - 1
                          ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                          : "text-slate-50 hover:bg-white hover:text-black"
                      }
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(totalPages - 1, prev + 1)
                        )
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
          {userdata.length == 0 && (
            <h1 className="text-base italic text-accent-foreground font-base text-center mt-4">
              Currently no mentor available...
            </h1>
          )}
        </div>

        <div className="gap-y-4 mt-4 w-full pl-8">
          <div className="flex flex-col items-start justify-center ">
            <h1 className="text-4xl w-fit  text-accent-foreground font-bold ">
              Events
            </h1>
            <hr class="border-none h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md shadow-blue-400/20 w-28" />
          </div>
          <h1 className="text-base italic text-accent-foreground font-base  mt-4">
            Currently no ongoing events...
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center p-2 w-full">
          <div className="gap-y-4 mt-4 w-full p-4">
            <div className="flex flex-col items-start justify-center pl-4 w-full">
              <h1 className="text-4xl w-fit  text-accent-foreground font-semibold ">
                Atheletes
              </h1>
              <hr class="border-none h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md shadow-blue-400/20 w-40" />
            </div>
          </div>

          {athletedata.length > 0 && (
            <div className="bg-slate-600/50 p-2 rounded-md mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {athletedata.slice(startindex, endindex).map((user, index) => (
                  <Card
                    key={index}
                    username={user.username}
                    sport={user.sport}
                    id={user.id}
                  />
                ))}
              </div>

              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        currentPage === 0
                          ? "pointer-events-none opacity-50 font-semibold text-slate-50 "
                          : "text-slate-50 hover:bg-white hover:text-black"
                      }
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(0, prev - 1))
                      }
                    />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext
                      className={
                        currentPage >= totalPages - 1
                          ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                          : "text-slate-50 hover:bg-white hover:text-black"
                      }
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(totalPages - 1, prev + 1)
                        )
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
          {userdata.length == 0 && (
            <h1 className="text-base italic text-accent-foreground font-base text-center mt-4">
              Currently no mentor available...
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Career;
