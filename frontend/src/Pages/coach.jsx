import React from "react";
import Header from "@/constants/navbar";
import Footer from "@/constants/footer";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import player from "@/assets/player.jpg";
import Card2 from "@/constants/card2";
function Coach() {
  const user = [
    {
      username: "Robert Doe",
      sport: "Cricket",
    },
    {
      username: "Robert Doe",
      sport: "Cricket",
    },
    {
      username: "Robert Doe",
      sport: "Cricket",
    },
    {
      username: "Robert Doe",
      sport: "Cricket",
    },
    {
      username: "Robert Doe",
      sport: "Cricket",
    },
    {
      username: "Robert Doe",
      sport: "Cricket",
    },
  ];
  const organizations = [
    {
      username: "BCCI",
      sport: "Cricket",
    },
    {
      username: "BCCI",
      sport: "Cricket",
    },
    {
      username: "BCCI",
      sport: "Cricket",
    },
    {
      username: "BCCI",
      sport: "Cricket",
    },
    {
      username: "BCCI",
      sport: "Cricket",
    },
    {
      username: "BCCI",
      sport: "Cricket",
    },
  ];
  const rowperpage = 4;
  const totalPages1 = Math.ceil(organizations.length / rowperpage);
  const totalPages2 = Math.ceil(user.length / rowperpage);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);
  const startindex = currentPage * rowperpage;
  const startindex2 = currentPage2 * rowperpage;
  const endindex = Math.min(startindex + rowperpage, organizations.length);
  const endindex2 = Math.min(startindex2 + rowperpage, user.length);
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen bg-black">
      <Header></Header>
      <div className="flex flex-col justify-center items-center  mt-20 w-full">
        <div className="flex w-full justify-center items-start">
          <div className="flex h-fit place-content-start w-full ">
            <div className="flex flex-col items-start justify-start w-full xl:bg-[url('@/assets/player.jpg')] object-cover">
              <div className=" p-4 bg-gradient-to-r from-slate-900  to-transparent w-full">
                <h1 className="text-4xl font-extrabold font-custom text-white">
                  ATHLETES
                </h1>
                <hr className="h-1 bg-orange-500 border-none w-40" />
                <p className="text-white max-w-[34rem] mt-1 ">
                  Here is a comprehensive record of all the athletes you have
                  trained in the past or are currently coaching, ensuring you
                  maintain a well-organized system to track their progress, stay
                  informed, and effectively manage your coaching
                  responsibilities.
                </p>
              </div>
              <div className="w-fit p-4 bg-gradient-to-r from-slate-700  to-transparent">
                {user.length > 0 && (
                  <div className="bg-black/50 p-2 rounded-md mt-2 w-fit">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-1 w-full">
                      {user.slice(startindex2, endindex2).map((user, index) => (
                        <Card2
                          key={index}
                          username={user.username}
                          sport={user.sport}
                        />
                      ))}
                    </div>

                    <Pagination className="mt-4">
                      <PaginationContent>
                        <PaginationItem className="flex justify-center items-center gap-2">
                          <PaginationPrevious
                            className={
                              currentPage2 === 0
                                ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                                : "text-slate-50 hover:bg-white hover:text-black"
                            }
                            onClick={() =>
                              setCurrentPage2((prev) => Math.max(0, prev - 1))
                            }
                          />
                          {Array.from({ length: totalPages2 }, (_, i) => (
                            <PaginationItem key={i}>
                              <button
                                className={`${
                                  currentPage2 === i
                                    ? "font-bold text-white px-2 bg-orange-600"
                                    : "text-slate-50 hover:bg-white hover:text-black px-2 font-semibold"
                                }`}
                                onClick={() => setCurrentPage2(i)}
                              >
                                {i + 1}
                              </button>
                            </PaginationItem>
                          ))}
                          <PaginationNext
                            className={
                              currentPage2 >= totalPages2 - 1
                                ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                                : "text-slate-50 hover:bg-white hover:text-black"
                            }
                            onClick={() =>
                              setCurrentPage2((prev) =>
                                Math.min(totalPages2 - 1, prev + 1)
                              )
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
                {user.length === 0 && (
                  <div className="flex flex-col justify-center items-center p-20 bg-white/20 rounded-md mt-3">
                    <UserRoundXIcon className="h-20 w-20 p-2 stroke-white " />
                    <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                      Currently no Athlete available...
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-start">
          <div className="flex h-fit place-content-start w-full ">
            <div className="flex flex-col items-start justify-start w-full xl:bg-[url('@/assets/player.jpg')] object-cover">
              <div className=" p-4 bg-gradient-to-r from-slate-900  to-transparent w-full">
                <h1 className="text-4xl font-extrabold font-custom text-white">
                  ORGANIZATIONS
                </h1>
                <hr className="h-1 bg-orange-500 border-none w-60" />
                <p className="text-white max-w-[30rem] mt-1 ">
                  Here is a comprehensive list of all organizations you have
                  joined , ensuring you stay organized and up to date.{" "}
                </p>
              </div>
              <div className="w-fit p-4 bg-gradient-to-r from-slate-700  to-transparent">
                {organizations.length > 0 && (
                  <div className="bg-black/50 p-2 rounded-md mt-2 w-fit">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-1 w-full">
                      {organizations
                        .slice(startindex, endindex)
                        .map((user, index) => (
                          <Card2
                            key={index}
                            username={user.username}
                            sport={user.sport}
                          />
                        ))}
                    </div>

                    <Pagination className="mt-4">
                      <PaginationContent>
                        <PaginationItem className="flex justify-center items-center gap-2">
                          <PaginationPrevious
                            className={
                              currentPage === 0
                                ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                                : "text-slate-50 hover:bg-white hover:text-black"
                            }
                            onClick={() =>
                              setCurrentPage((prev) => Math.max(0, prev - 1))
                            }
                          />
                          {Array.from({ length: totalPages2 }, (_, i) => (
                            <PaginationItem key={i}>
                              <button
                                className={`${
                                  currentPage === i
                                    ? "font-bold text-white px-2 bg-orange-600"
                                    : "text-slate-50 hover:bg-white hover:text-black px-2 font-semibold"
                                }`}
                                onClick={() => setCurrentPage(i)}
                              >
                                {i + 1}
                              </button>
                            </PaginationItem>
                          ))}
                          <PaginationNext
                            className={
                              currentPage >= totalPages1 - 1
                                ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                                : "text-slate-50 hover:bg-white hover:text-black"
                            }
                            onClick={() =>
                              setCurrentPage((prev) =>
                                Math.min(totalPages1 - 1, prev + 1)
                              )
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
                {organizations.length === 0 && (
                  <div className="flex flex-col justify-center items-center p-20 bg-white/20 rounded-md mt-3">
                    <UserRoundXIcon className="h-20 w-20 p-2 stroke-white " />
                    <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                      Currently no coach available...
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Coach;
