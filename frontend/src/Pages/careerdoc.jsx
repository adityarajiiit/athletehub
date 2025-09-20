import React from "react";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import no_data from "/no-data.png";
import { Carousel, CarouselCard } from "@/shadcnComponents/ui/carousel";
import appointmentImg from "/appointment.jpg";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/shadcnComponents/ui/pagination";
import Card2 from "@/components/ProfileCard";
import Appointmentcard from "@/components/appointmentcard";
import ClinicalNotes from "@/components/aidSComponents/clinicalNotesForm";
import ClinicalNoteCard from "@/components/aidSComponents/clinicalNoteCard";
function Careerdoc() {
  const appointment = [
    {
      patientname: "Robrt Doe",
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
      patientname: "Robrt Doe",
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
      patientname: "Robrt Doe",
      category: "Injury",
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
  const rowperpage = 4;
  const totalPages2 = Math.ceil(user.length / rowperpage);
  const [currentPage2, setCurrentPage2] = useState(0);
  const startindex2 = currentPage2 * rowperpage;
  const endindex2 = Math.min(startindex2 + rowperpage, user.length);
  const cardsData = appointment.map((appointmentdata, index) => ({
    category: "Appointment Details",
    title: appointmentdata.patientname,
    src: appointmentImg,
    content: (
      <div>
        <Appointmentcard
          props={appointmentdata}
          handleclick={() =>
            document.getElementById(`model_${index}`).showModal()
          }
        />
        <dialog id={`model_${index}`} className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <p className="font-poppins mb-4 font-medium">
              Press ESC key or click on ✕ button to close
            </p>
            <ClinicalNotes />
          </div>
        </dialog>
      </div>
    ),
  }));

  const cards = cardsData.map((card, index) => (
    <CarouselCard key={`${card.title}-${index}`} card={card} index={index} />
  ));
  return (
    <div className=" flex flex-col justify-between items-center min-h-screen">
      <Header></Header>

      <div className="flex flex-col justify-center items-center mt-28 w-full">
        <div className="flex flex-col justify-center items-start w-full">
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <h1 className="text-4xl font-bold font-poppins text-white">
              APPOINTMENTS
            </h1>
            <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
            <p className="text-white max-w-lg mt-4">
              Here is a comprehensive list of all your scheduled appointments
              with athletes, ensuring you stay organized and up to date.{" "}
            </p>
            {appointment.length > 0 && <Carousel items={cards} />}
            {appointment.length === 0 && (
              <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                <img src={no_data} alt="no data" className="size-32" />

                <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                  No data found
                </h1>
                <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                  Currently no treated data available...
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="flex h-fit place-content-start w-full">
          <div className="flex flex-col items-start justify-start w-full p-4">
            <h1 className="text-4xl font-bold font-poppins ">
              TREATED ATHLETE
            </h1>
            <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />{" "}
            <p className="text-base font-poppins mt-4 max-w-lg  ">
              Here is a comprehensive list of all your athletes you have treated
              in past, ensuring you stay organized and up to date.{" "}
            </p>
            <div className="mt-6">
              {user.length > 0 && (
                <div className="bg-muted/50 p-4 rounded-lg w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full">
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
                                  ? "font-semibold text-white px-2.5 bg-secondary rounded-full"
                                  : "text-accent hover:bg-white hover:text-black px-2 font-semibold rounded-full"
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
                              : "text-accent hover:bg-white hover:text-black"
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
                    Currently no account available...
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
