import React from "react";
import appointments from "@/assets/appointment.jpg";
import Header from "@/constants/navbar";
import Footer from "@/constants/footer";
import { useState } from "react";
import Appointmentcard from "@/constants/appointmentcard";
import { BellOffIcon, UserRoundXIcon, X } from "lucide-react";
import { tasksforrecovery } from "@/constants/data";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Card2 from "@/constants/card2";
function Careerdoc() {
  const appointment = [
    {
      username: "Robrt Doe",
      category: "Illness",
      illnesscategory: "cardiovascular",
      illnessname: "Hypertension",
      bodyPart: "head",
      tissueType: "bone",
      InjuryName: "Concussion",
      date: "10/10/20",
      startTime: "10:30",
      endTime: "11:10",
      status: "Schedule",
    },
    {
      username: "Robrt Doe",
      category: "Illness",
      illnesscategory: "cardiovascular",
      illnessname: "Hypertension",
      bodyPart: "head",
      tissueType: "bone",
      InjuryName: "Concussion",
      date: "10/10/20",
      startTime: "10:30",
      endTime: "11:10",
      status: "Schedule",
    },
    {
      username: "Robrt Doe",
      category: "Illness",
      illnesscategory: "cardiovascular",
      illnessname: "Hypertension",
      bodyPart: "head",
      tissueType: "bone",
      InjuryName: "Concussion",
      date: "10/10/20",
      startTime: "10:30",
      endTime: "11:10",
      status: "Schedule",
    },
    {
      username: "Robrt Doe",
      category: "Illness",
      illnesscategory: "cardiovascular",
      illnessname: "Hypertension",
      bodyPart: "head",
      tissueType: "bone",
      InjuryName: "Concussion",
      date: "10/10/20",
      startTime: "10:30",
      endTime: "11:10",
      status: "Completed",
    },
    {
      username: "Robrt Doe",
      category: "Illness",
      illnesscategory: "cardiovascular",
      illnessname: "Hypertension",
      bodyPart: "head",
      tissueType: "bone",
      InjuryName: "Concussion",
      date: "10/10/20",
      startTime: "10:30",
      endTime: "11:10",
      status: "Completed",
    },
  ];
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
  const [active, setactive] = useState(false);
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [duration, setduration] = useState("");
  const [notes, setnotes] = useState("");
  const [tasks, settasks] = useState("");
  const [painlevel, setpainlevel] = useState("");
  const [painSensation, setpainSensation] = useState("");
  const [subjective, setsubjective] = useState("");
  const [objective, setobjective] = useState("");
  const [assessment, setassessment] = useState("");
  const [plan, setplan] = useState("");

  const rowperpage = 4;
  const totalPages1 = Math.ceil(appointment.length / rowperpage);
  const totalPages2 = Math.ceil(user.length / rowperpage);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);
  const startindex = currentPage * rowperpage;
  const startindex2 = currentPage2 * rowperpage;
  const endindex = Math.min(startindex + rowperpage, appointment.length);
  const endindex2 = Math.min(startindex2 + rowperpage, user.length);

  return (
    <div className="bg-black flex flex-col justify-between items-center min-h-screen">
      <Header></Header>
      {active ? (
        <div className="flex justify-center items-center w-screen h-screen fixed bg-black/50 z-50">
          <form
            action=""
            className="rounded-md h-fit w-fit bg-white shadow-md shadow-white/40"
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
              <div className="flex flex-row gap-x-2 w-fit">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Date:
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Time:
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => settime(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-x-2 w-full">
                <div className="flex flex-col mb-3">
                  <label className="relative top-3 bg-white w-fit left-2  text-accent">
                    Duration:
                  </label>
                  <input
                    type="time"
                    value={duration}
                    onChange={(e) => setduration(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>

                <div className="flex flex-col mb-3 w-full">
                  <label className="relative top-3 bg-white w-fit left-2  text-accent">
                    Notes :
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setnotes(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-x-2 w-full">
                <div className="flex flex-col mb-3 w-full">
                  <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                    Tasks:
                  </label>
                  <select
                    value={tasks}
                    onChange={(e) => settasks(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                  >
                    <option value="" className="bg-black text-destructive">
                      Select type
                    </option>
                    {tasksforrecovery.map((tasks, taskindex) => (
                      <option
                        value={tasks}
                        className="bg-black text-destructive"
                      >
                        {tasks}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col mb-3 w-full">
                  <label className="relative top-3 bg-white w-fit left-2 text-accent">
                    Level of Pain :
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={painlevel}
                    onChange={(e) => setpainlevel(e.target.value)}
                    required
                    className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-3 w-full">
                <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                  Pain sensation:
                </label>
                <select
                  value={painSensation}
                  onChange={(e) => setpainSensation(e.target.value)}
                  required
                  className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                >
                  <option value="" className="bg-black text-destructive">
                    Select type
                  </option>
                  <option value="Sharp" className="bg-black text-destructive">
                    Sharp
                  </option>
                  <option value="Dull" className="bg-black text-destructive">
                    Dull
                  </option>
                  <option value="Ache" className="bg-black text-destructive">
                    Ache
                  </option>
                  <option
                    value="Radiating"
                    className="bg-black text-destructive"
                  >
                    Radiating
                  </option>
                </select>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-xl font-semibold font-custom">
                  SOAP Notes
                </h1>
                <div className="flex flex-row gap-x-2 w-full">
                  <div className="flex flex-col mb-3 w-full">
                    <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                      Objective:
                    </label>
                    <input
                      type="text"
                      value={objective}
                      onChange={(e) => setobjective(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                    />
                  </div>

                  <div className="flex flex-col mb-3 w-full">
                    <label className="relative top-3 bg-white w-fit left-2 text-accent">
                      Subjective :
                    </label>
                    <input
                      type="text"
                      value={subjective}
                      onChange={(e) => setsubjective(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-x-2 w-full">
                  <div className="flex flex-col mb-3 w-full">
                    <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                      Assessment:
                    </label>
                    <input
                      type="text"
                      value={assessment}
                      onChange={(e) => setassessment(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                    />
                  </div>

                  <div className="flex flex-col mb-3 w-full">
                    <label className="relative top-3 bg-white w-fit left-2 text-accent">
                      Plan :
                    </label>
                    <input
                      type="text"
                      value={plan}
                      onChange={(e) => setplan(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 mb-2 p-3 bg-accent text-destructive font-semibold rounded-md w-full  transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col justify-center items-center mt-20 w-full">
        <div className="grid lg:grid-cols-6 h-fit place-content-start w-full">
          <div className="flex flex-col items-start justify-start p-4 w-full lg:col-span-4">
            <h1 className="text-4xl font-bold font-custom text-white">
              APPOINTMENTS
            </h1>
            <hr className="h-1 bg-orange-500 border-none w-60" />
            <p className="text-white max-w-[30rem]">
              Here is a comprehensive list of all your scheduled appointments
              with athletes, ensuring you stay organized and up to date.{" "}
            </p>
            {appointment.length > 0 && (
              <div className="bg-white/30 p-2 rounded-md mt-2 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-1 w-full">
                  {appointment
                    .slice(startindex, endindex)
                    .map((appointment, index) => (
                      <Appointmentcard
                        patientname={appointment.username}
                        category={appointment.category}
                        illnesscategory={appointment.illnesscategory}
                        illnessname={appointment.illnessname}
                        date={appointment.date}
                        startTime={appointment.startTime}
                        endTime={appointment.endTime}
                        status={appointment.status}
                        key={index}
                        handleclick={() => {
                          active ? setactive(false) : setactive(true);
                        }}
                      />
                    ))}
                </div>

                <Pagination className="mt-4">
                  <PaginationContent>
                    <PaginationItem>
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
                    </PaginationItem>
                    {Array.from({ length: totalPages1 }, (_, i) => (
                      <PaginationItem key={i}>
                        <button
                          className={`${
                            currentPage === i
                              ? "font-bold text-white px-2 bg-orange-500"
                              : "text-slate-50 hover:bg-white hover:text-black px-2 font-semibold"
                          }`}
                          onClick={() => setCurrentPage(i)}
                        >
                          {i + 1}
                        </button>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
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
            {appointment.length === 0 && (
              <div className="flex flex-col justify-center items-center p-20 bg-white/10 rounded-md mt-3">
                <BellOffIcon className="h-20 w-20 p-2 stroke-white border-2 rounded-3xl border-border" />
                <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                  Currently no appointment available...
                </h1>
              </div>
            )}
          </div>
          <div className="relative hidden xl:flex lg:col-span-2">
            <img src={appointments} alt="" className="h-full w-full relative" />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent "></div>
          </div>
        </div>
        <div className="flex h-fit place-content-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex w-full">
              <div className="bg-white p-4">
                <h1 className="text-4xl font-extrabold font-custom text-black">
                  TREATED ATHLETE
                </h1>
                <hr className="h-1 bg-orange-500 border-none w-72" />
                <p className="text-black max-w-[30rem] mt-1 ">
                  Here is a comprehensive list of all your athletes you have
                  treated in past, ensuring you stay organized and up to date.{" "}
                </p>
              </div>
              <div className="h-full w-full bg-gradient-to-r from-white to-transparent"></div>
            </div>
            <div className="m-4">
              {user.length > 0 && (
                <div className="bg-white/30 p-2 rounded-md mt-2 w-full">
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
                                  ? "font-bold text-white px-2 bg-orange-500"
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
                  <UserRoundXIcon className="h-20 w-20 p-2 stroke-white border-2 rounded-3xl border-border" />
                  <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                    Currently no Athlete available...
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Careerdoc;
