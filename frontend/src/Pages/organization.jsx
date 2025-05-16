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
import player from "../assets/athlete.jpg";
import Card2 from "@/constants/card2";
import doc from "@/assets/doc.jpg";
import footballtrophy from "@/assets/football-trophy.jpg";
import { Plus, X } from "lucide-react";
import { sportActivities } from "@/constants/data";
import EventCard from "@/constants/eventcard";
function Organization() {
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
  const [active, setactive] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [Sports, setSports] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
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

  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen bg-black">
      {active ? (
        <div className="flex justify-center items-center w-screen h-screen fixed bg-black/50 z-50">
          <form
            action=""
            className="rounded-md h-fit w-fit bg-white shadow-md shadow-white/40 p-2"
          >
            <div className="">
              <div className="flex justify-between w-full">
                <h3 className="font-semibold text-center text-accent  text-xl mt-2 ml-4">
                  Logo.
                </h3>
                <X
                  className="mt-2 mr-4"
                  onClick={() => {
                    active ? setactive(false) : setactive(true);
                  }}
                ></X>
              </div>
              <p className="font-semibold text-center text-accent pb-2 text-lg">
                Fill the given form ...
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  p-2  w-fit ">
              <div className="flex flex-row gap-x-2 w-full">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Event Name:
                  </label>
                  <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Event Type:
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-60"
                  >
                    <option value="" className="bg-black text-destructive">
                      Select type
                    </option>
                    <option
                      value="Seminar"
                      className="bg-black text-destructive"
                    >
                      Seminar
                    </option>
                    <option
                      value="Workshop"
                      className="bg-black text-destructive"
                    >
                      Workshop
                    </option>
                    <option
                      value="Festival"
                      className="bg-black text-destructive"
                    >
                      Festival
                    </option>
                    <option
                      value="Competition"
                      className="bg-black text-destructive"
                    >
                      Competition
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-x-2 w-full">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2  text-accent">
                    Sports:
                  </label>
                  <select
                    value={Sports}
                    onChange={(e) => setSports(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-60"
                  >
                    <option value="" className="bg-black text-destructive">
                      Select type
                    </option>
                    {sportActivities.map((sports, sportsindex) =>
                      Object.keys(sports).map((sport, sportindex) => (
                        <option
                          key={`${sportindex}`}
                          value={sport}
                          className="bg-black text-destructive custom-scrollbar"
                        >
                          {sport}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="flex flex-col mb-3 w-full">
                  <label className="relative top-3 bg-white w-fit left-2  text-accent">
                    Start Date :
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-x-2 w-full">
                <div className="flex flex-col mb-3 w-full">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    End Date:
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>

                <div className="flex flex-col mb-3 w-full">
                  <label className="relative top-3 bg-white w-fit left-2 text-accent">
                    Event Location:
                  </label>
                  <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-3 w-full">
                <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                  Organisation Name :
                </label>
                <input
                  type="text"
                  value={organizerName}
                  onChange={(e) => setOrganizerName(e.target.value)}
                  required
                  className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                />
              </div>

              <div className="flex flex-col mb-3 w-full">
                <label className="flex justify-center items-center w-fit text-accent gap-2">
                  <input
                    type="checkbox"
                    value={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.value)}
                    required
                    className="p-2 h-4 w-4"
                  />
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 mb-2 p-3 bg-accent text-destructive font-semibold rounded-md w-full transition"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
      <Header></Header>
      <div className="flex flex-col justify-center items-center  mt-20 w-full">
        <div className="xl:grid xl:grid-cols-6 w-full justify-center ">
          <div className="flex h-fit place-content-start w-full col-span-4">
            <div className="flex flex-col items-start justify-start w-full ">
              <div className=" p-4 bg-gradient-to-r from-slate-900  to-transparent w-full">
                <h1 className="text-4xl font-extrabold font-custom text-white">
                  ATHLETES
                </h1>
                <hr className="h-1 bg-orange-500 border-none w-40" />
                <p className="text-white max-w-[30rem] mt-1 ">
                  Here is a comprehensive list of all your athletes you have
                  trained in past or working currently, ensuring you stay
                  organized and up to date.{" "}
                </p>
              </div>
              <div className="w-fit p-4 bg-gradient-to-r from-slate-700  to-transparent">
                {user.length > 0 && (
                  <div className="bg-black/50 p-2 rounded-md mt-2 w-fit">
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
          <div className="hidden xl:flex xl:col-span-2 relative">
            <img src={player} alt="" className=" object-cover h-full w-full " />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          </div>
        </div>
        <div className="flex w-full justify-center items-start">
          <div className="flex h-fit place-content-start w-full col-span-4">
            <div className="flex flex-col items-start justify-start w-full">
              <div className=" p-4 bg-gradient-to-r from-slate-900  to-transparent w-full">
                <h1 className="text-4xl font-extrabold font-custom text-white">
                  COACHES
                </h1>
                <hr className="h-1 bg-orange-500 border-none w-32" />
                <p className="text-white max-w-[30rem] mt-1 ">
                  Here is a comprehensive list of all coaches that have joined
                  your organization, ensuring you stay organized and up to date.{" "}
                </p>
              </div>
              <div className="w-fit p-4 bg-gradient-to-r from-slate-700 xl:from-black  to-black xl:grid xl:grid-cols-6">
                {coaches.length > 0 && (
                  <div className="bg-black/50 p-2 rounded-md mt-2 w-fit xl:col-span-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-1 w-full">
                      {coaches
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
                {coaches.length === 0 && (
                  <div className="flex flex-col justify-center items-center p-20 bg-white/20 rounded-md mt-3 xl:col-span-4">
                    <UserRoundXIcon className="h-20 w-20 p-2 stroke-white " />
                    <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                      Currently no coaches available...
                    </h1>
                  </div>
                )}
                <div className="hidden xl:flex xl:col-span-2 relative h-full w-full">
                  <img src={footballtrophy} alt="" className="h-full w-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-start xl:grid xl:grid-cols-6">
          <div className="flex h-fit place-content-start w-full xl:col-span-4">
            <div className="flex flex-col items-start justify-start w-full ">
              <div className=" p-4 bg-gradient-to-r from-slate-900  to-transparent w-full">
                <h1 className="text-4xl font-extrabold font-custom text-white">
                  DOCTORS
                </h1>
                <hr className="h-1 bg-orange-500 border-none w-32" />
                <p className="text-white max-w-[30rem] mt-1 ">
                  Here is a comprehensive list of all doctors that have joined
                  your organization, ensuring you stay organized and up to date.{" "}
                </p>
              </div>
              <div className="w-fit p-4 bg-gradient-to-r from-slate-700 to-transparent">
                {doctors.length > 0 && (
                  <div className="bg-black/50 p-2 rounded-md mt-2 w-fit xl:col-span-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-1 w-full">
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
                                : "text-slate-50 hover:bg-white hover:text-black"
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
                                    ? "font-bold text-white px-2 bg-orange-600"
                                    : "text-slate-50 hover:bg-white hover:text-black px-2 font-semibold"
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
                                : "text-slate-50 hover:bg-white hover:text-black"
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
                  <div className="flex flex-col justify-center items-center p-20 bg-white/20 rounded-md mt-3 ">
                    <UserRoundXIcon className="h-20 w-20 p-2 stroke-white " />
                    <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                      Currently no Organisation available...
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden xl:flex xl:col-span-2 relative h-full w-full">
            <img src={doc} alt="" className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          </div>
        </div>

        <div className="flexflex-col w-full justify-center items-start">
          <div className="flex h-fit place-content-start w-full ">
            <div className="flex flex-col items-start justify-start w-full xl:bg-[url('@/assets/player.jpg')] object-cover">
              <div className=" p-4 bg-gradient-to-r from-slate-900  to-transparent w-full">
                <h1 className="text-4xl font-extrabold font-custom text-white">
                  EVENTS
                </h1>
                <hr className="h-1 bg-orange-500 border-none w-32" />
                <p className="text-white max-w-[30rem] mt-1 ">
                  Here is a comprehensive list of all your ongoing and previous
                  events, ensuring you stay organized and up to date.{" "}
                </p>
              </div>
              <button
                onClick={() => {
                  active ? setactive(false) : setactive(true);
                }}
                type="submit"
                className="m-4 p-3 bg-transparent border-2  text-white font-semibold rounded-sm w-40  transition border-orange-400 flex justify-center items-center hover:bg-orange-400 hover:text-black"
              >
                <Plus className="h-6 w-6 mr-2 " />
                Add Events
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {dummyEvents.map((event, index) => (
              <EventCard
                key={index}
                eventName={event.eventName}
                eventType={event.eventType}
                Sports={event.Sports}
                startDate={event.startDate}
                endDate={event.endDate}
                eventLocation={event.eventLocation}
                organizerName={event.organizerName}
                agreeTerms={event.agreeTerms}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Organization;
