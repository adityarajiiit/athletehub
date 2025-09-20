import React from "react";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { Carousel, CarouselCard } from "@/shadcnComponents/ui/carousel";
import eventImg from "/achievement.jpg";
import no_data from "/no-data.png";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/shadcnComponents/ui/pagination";
import Card2 from "@/components/ProfileCard";
import EventCard from "@/components/eventcard";
import EventForm from "@/components/eventForm";
function Organization() {
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
  ];
  const coaches = [
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
  const doctors = [
    {
      username: "Robert Doe",
      sport: "Cardiologists",
    },
    {
      username: "Robert Doe",
      sport: "Cardiologists",
    },
    {
      username: "Robert Doe",
      sport: "Cardiologists",
    },
  ];
  const rowperpage = 4;
  const totalPages1 = Math.ceil(coaches.length / rowperpage);
  const totalPages2 = Math.ceil(user.length / rowperpage);
  const totalPages3 = Math.ceil(doctors.length / rowperpage);

  const [currentPage, setCurrentPage] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);
  const [currentPage3, setCurrentPage3] = useState(0);

  const startindex = currentPage * rowperpage;
  const startindex2 = currentPage2 * rowperpage;
  const startindex3 = currentPage3 * rowperpage;

  const endindex = Math.min(startindex + rowperpage, coaches.length);
  const endindex2 = Math.min(startindex2 + rowperpage, user.length);
  const endindex3 = Math.min(startindex3 + rowperpage, doctors.length);

  const dummyEvents = [
    {
      eventName: "Intercollege Football Tournament",
      eventType: "Sports",
      Sports: "Football",
      startDate: "2025-06-10",
      endDate: "2025-06-12",
      eventLocation: "Central Stadium, Delhi",
      organizerName: "XYZ University",
      agreeTerms: true,
    },
    {
      eventName: "Hackathon 5.0",
      eventType: "Tech",
      Sports: "N/A",
      startDate: "2025-07-01",
      endDate: "2025-07-02",
      eventLocation: "Tech Park, Bangalore",
      organizerName: "Innovate Club",
      agreeTerms: true,
    },
    {
      eventName: "Yoga and Wellness Camp",
      eventType: "Health",
      Sports: "Yoga",
      startDate: "2025-05-20",
      endDate: "2025-05-22",
      eventLocation: "Community Center, Pune",
      organizerName: "Wellbeing Foundation",
      agreeTerms: false,
    },
  ];
  const cardsData = [
    ...dummyEvents.map((event, index) => ({
      category: "Appointment Details",
      title: event.eventName,
      src: eventImg,
      content: <EventCard events={event} />,
    })),
  ];
  const cards = cardsData.map((card, index) => (
    <CarouselCard key={`${card.title}-${index}`} card={card} index={index} />
  ));
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen ">
      <Header></Header>
      <div className="flex flex-col justify-center items-center  pt-28 w-full">
        <div className="flex flex-col w-full justify-center p-4">
          <div className="flex h-fit place-content-start w-full col-span-4">
            <div className="flex flex-col items-start justify-start w-full ">
              <h1 className="text-4xl font-extrabold font-poppins text-accent">
                ATHLETES
              </h1>
              <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
              <p className="text-accent max-w-lg mt-4 font-poppins">
                Here is a comprehensive list of all your athletes you have
                trained in past or working currently, ensuring you stay
                organized and up to date.{" "}
              </p>

              {user.length > 0 && (
                <div className="bg-muted/50 p-4 rounded-xl mt-2 w-fit">
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
                              ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                              : "text-accent-foreground hover:bg-accent hover:text-black"
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
                                  ? "font-semibold text-accent px-2 bg-secondary rounded-full"
                                  : "text-accent-foreground hover:bg-accent hover:text-base-300 rounded-full px-2 font-semibold"
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
                              : "text-accent-foreground hover:bg-accent hover:text-black"
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
                <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                  <img src={no_data} alt="no data" className="size-32" />

                  <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                    No data found
                  </h1>
                  <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                    Currently no athlete available...
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-start p-4">
          <div className="flex h-fit place-content-start w-full col-span-4">
            <div className="flex flex-col items-start justify-start w-full">
              <h1 className="text-4xl font-extrabold font-poppins text-accent">
                COACHES
              </h1>
              <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />{" "}
              <p className="text-accent max-w-lg mt-4 font-poppins">
                Here is a comprehensive list of all coaches that have joined
                your organization, ensuring you stay organized and up to date.{" "}
              </p>
              {coaches.length > 0 && (
                <div className="bg-muted/50 p-4 rounded-xl mt-2 w-fit xl:col-span-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-1 w-full">
                    {coaches.slice(startindex, endindex).map((user, index) => (
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
                              : "text-accent-foreground hover:bg-accent hover:text-black"
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
                                  ? "font-semibold text-accent px-2 bg-secondary rounded-full"
                                  : "text-accent-foreground hover:bg-accent hover:text-base-300 rounded-full px-2 font-semibold"
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
                              : "text-accent-foreground hover:bg-accent hover:text-black"
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
              {coaches.length === 0 && (
                <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                  <img src={no_data} alt="no data" className="size-32" />

                  <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                    No data found
                  </h1>
                  <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                    Currently no coach available...
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-start flex-col p-4">
          <div className="flex h-fit place-content-start w-full xl:col-span-4">
            <div className="flex flex-col items-start justify-start w-full ">
              <h1 className="text-4xl font-extrabold font-poppins text-accent">
                DOCTORS
              </h1>
              <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />{" "}
              <p className="text-accent max-w-lg mt-4 font-poppins">
                Here is a comprehensive list of all doctors that have joined
                your organization, ensuring you stay organized and up to date.{" "}
              </p>
              {doctors.length > 0 && (
                <div className="bg-muted/50 p-4 rounded-xl mt-2 w-fit xl:col-span-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-1 w-full">
                    {doctors
                      .slice(startindex3, endindex3)
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
                            currentPage3 === 0
                              ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                              : "text-accent-foreground hover:bg-accent hover:text-black"
                          }
                          onClick={() =>
                            setCurrentPage3((prev) => Math.max(0, prev - 1))
                          }
                        />
                        {Array.from({ length: totalPages2 }, (_, i) => (
                          <PaginationItem key={i}>
                            <button
                              className={`${
                                currentPage3 === i
                                  ? "font-semibold text-accent px-2 bg-secondary rounded-full"
                                  : "text-accent-foreground hover:bg-accent hover:text-base-300 rounded-full px-2 font-semibold"
                              }`}
                              onClick={() => setCurrentPage3(i)}
                            >
                              {i + 1}
                            </button>
                          </PaginationItem>
                        ))}
                        <PaginationNext
                          className={
                            currentPage3 >= totalPages3 - 1
                              ? "pointer-events-none opacity-50 font-semibold text-slate-50"
                              : "text-accent-foreground hover:bg-accent hover:text-black"
                          }
                          onClick={() =>
                            setCurrentPage3((prev) =>
                              Math.min(totalPages3 - 1, prev + 1)
                            )
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
              {doctors.length === 0 && (
                <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                  <img src={no_data} alt="no data" className="size-32" />

                  <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                    No data found
                  </h1>
                  <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                    Currently no doctors available...
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flexflex-col w-full justify-center items-start p-4">
          <div className="flex h-fit place-content-start w-full ">
            <div className="flex flex-col items-start justify-start w-full">
              <h1 className="text-4xl font-extrabold font-poppins text-accent">
                EVENTS
              </h1>
              <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />{" "}
              <p className="text-accent max-w-lg mt-4 font-poppins">
                Here is a comprehensive list of all your ongoing and previous
                events, ensuring you stay organized and up to date.{" "}
              </p>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                type="submit"
                className="btn btn-info mt-4"
              >
                Add Events
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="mb-4 font-poppins">
                    Press ESC key or click on ✕ button to close
                  </p>
                  <EventForm />
                </div>
              </dialog>
            </div>
          </div>
          <Carousel items={cards} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Organization;
