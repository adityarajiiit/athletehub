import React from "react";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/shadcnComponents/ui/pagination";
import Card2 from "@/components/ProfileCard";
import no_data from "/no-data.png";
function Coach() {
  const user = [
    // {
    //   username: "Robert Doe",
    //   sport: "Cricket",
    // },
    // {
    //   username: "Robert Doe",
    //   sport: "Cricket",
    // },
    // {
    //   username: "Robert Doe",
    //   sport: "Cricket",
    // },
    // {
    //   username: "Robert Doe",
    //   sport: "Cricket",
    // },
    // {
    //   username: "Robert Doe",
    //   sport: "Cricket",
    // },
    // {
    //   username: "Robert Doe",
    //   sport: "Cricket",
    // },
  ];
  const organizations = [
    // {
    //   username: "BCCI",
    //   sport: "Cricket",
    // },
    // {
    //   username: "BCCI",
    //   sport: "Cricket",
    // },
    // {
    //   username: "BCCI",
    //   sport: "Cricket",
    // },
    // {
    //   username: "BCCI",
    //   sport: "Cricket",
    // },
    // {
    //   username: "BCCI",
    //   sport: "Cricket",
    // },
    // {
    //   username: "BCCI",
    //   sport: "Cricket",
    // },
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
    <div className="flex flex-col justify-between items-center w-full min-h-screen">
      <Header></Header>
      <div className="flex flex-col justify-center items-center  pt-24 w-full">
        <div className="flex w-full justify-center items-start ">
          <div className="flex h-full place-content-start w-full lg:bg-[url('/player.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-start justify-start w-full  lg:bg-gradient-to-b from-transparent to-black ">
              <div className=" p-4 mt-8  w-full  h-full">
                <h1 className="text-4xl font-poppins font-bold  text-white">
                  ATHLETES
                </h1>
                <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
                <p className="text-white font-poppins font-medium max-w-lg mt-4 ">
                  Here is a comprehensive record of all the athletes you have
                  trained in the past or are currently coaching, ensuring you
                  maintain a well-organized system to track their progress, stay
                  informed, and effectively manage your coaching
                  responsibilities.
                </p>
                {user.length === 0 && (
                  <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                    <img src={no_data} alt="no data" className="size-32" />

                    <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                      No data found
                    </h1>
                    <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                      Currently no athlete data available...
                    </h1>
                  </div>
                )}
              </div>
              <div className="w-fit p-4">
                {user.length > 0 && (
                  <div className="bg-muted/50 p-2 rounded-xl mt-2 w-fit">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-1 w-full">
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
                                ? "pointer-events-none opacity-50 font-semibold text-accent"
                                : "text-accent hover:bg-white hover:text-base-300"
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
                                    ? "font-semibold text-white px-2 bg-secondary rounded-full"
                                    : "text-accent hover:bg-white hover:text-base-300 px-2 font-semibold rounded-full"
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
                                ? "pointer-events-none opacity-50 font-semibold text-accent"
                                : "text-accent hover:bg-white hover:text-base-300"
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-start">
          <div className="flex h-fit place-content-start w-full ">
            <div className="flex flex-col items-start justify-start w-full lg:bg-[url('/organisation.png')] object-cover">
              <div className=" p-4  w-full">
                <h1 className="text-4xl font-extrabold font-inter text-white">
                  ORGANIZATIONS
                </h1>
                <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
                <p className="text-white max-w-lg mt-4 font-poppins font-medium">
                  Here is a comprehensive list of all organizations you have
                  joined , ensuring you stay organized and up to date.{" "}
                </p>
              </div>
              <div className="w-fit p-4 ">
                {organizations.length > 0 && (
                  <div className="bg-muted/50 p-2 rounded-md mt-2 w-fit">
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
                                ? "pointer-events-none opacity-50 font-semibold text-accent"
                                : "text-accent hover:bg-white hover:text-base-300"
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
                                    ? "font-semibold text-white px-2 bg-secondary rounded-full"
                                    : "text-accent hover:bg-white hover:text-base-300 px-2 font-semibold rounded-full"
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
                                ? "pointer-events-none opacity-50 font-semibold text-accent"
                                : "text-accent hover:bg-white hover:text-base-300"
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
                  <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                    <img src={no_data} alt="no data" className="size-32" />

                    <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                      No data found
                    </h1>
                    <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                      Currently no organisation data available...
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
