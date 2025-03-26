import React from "react";
import Header from "@/constants/navbar";
import Card from "@/constants/card2";
import Footer from "@/constants/footer";
import { useState } from "react";
import { injuryData } from "@/constants/data";
import { HeartOff, X } from "lucide-react";
import { Cross, HeartPulse, UserRoundXIcon } from "lucide-react";
import medical from "@/assets/medical.jpg";
import treatment from "@/assets/treatment.jpg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  sportActivities,
  sportMechanisms,
  illnessesByCategory,
} from "@/constants/data";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PlusIcon } from "lucide-react";
function Aid() {
  const userdata = [
    {
      username: "John Doe",
      sport: "Football",
      specialization: "Physiologist",
      experience: "11 years",
    },
    {
      username: "Robert Doe",
      sport: "Basketball",
      specialization: "CardioLogist",
      experience: "11 years",
    },
    {
      username: "Christ Doe",
      sport: "Football",
      specialization: "Physiologist",
      experience: "11 years",
    },
    {
      username: "Tom Doe",
      sport: "Basketball",
      specialization: "CardioLogist",
      experience: "11 years",
    },
    {
      username: "John Doe",
      sport: "Football",
      specialization: "Physiologist",
      experience: "11 years",
    },
    {
      username: "Robert Doe",
      sport: "Basketball",
      specialization: "CardioLogist",
      experience: "11 years",
    },
    {
      username: "Christ Doe",
      sport: "Football",
      specialization: "Physiologist",
      experience: "11 years",
    },
    {
      username: "Tom Doe",
      sport: "Basketball",
      specialization: "CardioLogist",
      experience: "11 years",
    },
    {
      username: "Alice Doe",
      sport: "Tennis",
      specialization: "Psychologist",
      experience: "11 years",
    },
    {
      username: "Bob Doe",
      sport: "Swimming",
      specialization: "Physiologist",
      experience: "11 years",
    },
  ];
  const getAllInjuries = (data) => {
    let injuries = [];
    data.forEach((bodyPart) => {
      Object.values(bodyPart).forEach((category) => {
        Object.values(category).forEach((injuryList) => {
          injuries = [...injuries, ...injuryList];
        });
      });
    });
    return injuries;
  };
  const injury = [
    // {
    //   type: "acute",
    //   bodyPart: "head",
    //   tissueType: "bone",
    //   InjuryName: "Pinched Nerve (Cervical Radiculopathy)",
    //   levelofPain: 10,
    //   newInjury: "No",
    //   Priority: "High",
    //   sport: "cricket",
    //   activity: "bat",
    //   mechanism: "jumping",
    //   dateofInjury: "10/12/24",
    //   trainingstatus: "Full parcipation",
    //   healthproblemresolved: "10/1/23",
    //   trainingrestriction: "none",
    //   details: "no detail",
    //   personnalprogram: "none",
    //   additionalinformation: "none",
    // },
    {
      type: "acute",
      bodyPart: "head",
      tissueType: "bone",
      InjuryName: "Concussion",
      levelofPain: 10,
      newInjury: "No",
      Priority: "High",
      sport: "cricket",
      activity: "bat",
      mechanism: "jumping",
      dateofInjury: "10/12/24",
      trainingstatus: "Full parcipation",
      healthproblemresolved: "10/1/23",
      trainingrestriction: "none",
      details: "no detail",
      personnalprogram: "none",
      additionalinformation: "none",
    },
  ];
  const illness = [
    // {
    //   category: "cardiovascular",
    //   illnessName: "Hypertension",
    //   levelofPain: 10,
    //   newInjury: "No",
    //   Priority: "High",
    //   dateofIllness: "10/12/24",
    //   returntopartialtraining: "12/12/24",
    //   returntofulltraining: "12/12/24",
    //   returntocompetition: "12/12/24",
    //   trainingstatus: "Full parcipation",
    //   healthproblemresolved: "10/1/23",
    //   trainingrestriction: "none",
    //   personnalprogram: "none",
    //   comments: "none",
    // },
    {
      category: "cardiovascular",
      illnessName: "Hypertension",
      levelofPain: 10,
      newInjury: "No",
      Priority: "High",
      dateofIllness: "10/12/24",
      returntopartialtraining: "12/12/24",
      returntofulltraining: "12/12/24",
      returntocompetition: "12/12/24",
      trainingstatus: "Full parcipation",
      healthproblemresolved: "10/1/23",
      trainingrestriction: "none",
      personnalprogram: "none",
      comments: "none",
    },
  ];
  const [type, settype] = useState("");
  const [bodyPart, setbodyPart] = useState("");
  const [tissueType, settissueType] = useState("");
  const [InjuryName, setInjuryName] = useState("");
  const [levelofPain, setlevelofPain] = useState(0);
  const [newInjury, setnewInjury] = useState("");
  const [Priority, setPriority] = useState("");
  const [sport, setsport] = useState("");
  const [activity, setactivity] = useState("");
  const [mechanism, setmechanism] = useState("");
  const [dateofInjury, setdateofInjury] = useState("");
  const [trainingstatus, settrainingstatus] = useState("");
  const [healthproblemresolved, sethealthproblemresolved] = useState("");
  const [trainingrestriction, settrainingrestriction] = useState("");
  const [troubletype, settroubletype] = useState("");
  const [details, setdetails] = useState("");
  const [personnalprogram, setpersonnalprogram] = useState("");
  const [additionalinformation, setadditionalinformation] = useState("");
  const [category, setcategory] = useState("");
  const [illnessName, setillnessName] = useState("");
  const [dateofIllness, setdateofIllness] = useState("");

  const [returntofulltraining, setreturntofulltraining] = useState("");
  const [returntopartialtraining, setreturntopartialtraining] = useState("");
  const [returntocompetition, setreturntocompetition] = useState("");
  const [comments, setcomments] = useState("");
  const rowperpage = 6;
  const totalPages = Math.ceil(userdata.length / rowperpage);
  const [currentPage, setCurrentPage] = useState(0);
  const startindex = currentPage * rowperpage;
  const endindex = Math.min(startindex + rowperpage, userdata.length);
  const [active, setactive] = useState("");
  const [date, setdate] = useState("");
  const [starttime, setstarttime] = useState("");
  const [endTime, setendTime] = useState("");

  return (
    <div>
      <Header></Header>

      <div className="bg-black/95 pt-20">
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
                      Start Time:
                    </label>
                    <input
                      type="time"
                      value={starttime}
                      onChange={(e) => setstarttime(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-x-2 w-fit">
                  <div className="flex flex-col mb-3">
                    <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                      End Time:
                    </label>
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setendTime(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md w-60 bg-white text-accent"
                    />
                  </div>

                  <div className="flex flex-col mb-3 w-full">
                    <label className="relative top-3 bg-white w-fit left-2 p-1 text-accent">
                      Injury or Illness :
                    </label>
                    <select
                      value={troubletype}
                      onChange={(e) => settroubletype(e.target.value)}
                      required
                      className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                    >
                      <option value="" className="bg-black text-destructive">
                        Select the type of trouble
                      </option>
                      <option
                        value="Illness"
                        className="bg-black text-destructive"
                      >
                        Illness
                      </option>
                      <option
                        value="Injury"
                        className="bg-black text-destructive"
                      >
                        Injury
                      </option>
                    </select>
                  </div>
                </div>
                {troubletype === "Injury" && (
                  <div className="flex flex-col justify-center items-center w-full ">
                    <div className="grid grid-cols-2 gap-2 w-full ">
                      <div className="flex flex-col mb-3 w-full">
                        <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                          Body Part:
                        </label>
                        <select
                          value={bodyPart}
                          onChange={(e) => setbodyPart(e.target.value)}
                          required
                          className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                        >
                          <option
                            value=""
                            className="bg-black text-destructive"
                          >
                            Select type
                          </option>
                          {injuryData.map((organData, organIndex) =>
                            Object.keys(organData).map((organ) => (
                              <option
                                key={organIndex}
                                value={organ}
                                className="bg-black text-destructive custom-scrollbar overflow-y-auto"
                              >
                                {organ}
                              </option>
                            ))
                          )}
                        </select>
                      </div>

                      <div className="flex flex-col mb-3">
                        <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                          Affected Organ:
                        </label>
                        <select
                          value={tissueType}
                          onChange={(e) => settissueType(e.target.value)}
                          required
                          className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                        >
                          <option
                            value=""
                            className="bg-black text-destructive"
                          >
                            Select type
                          </option>
                          {injuryData.map((organData, organindex) =>
                            Object.entries(organData).map(
                              ([organ, suborgan], index) =>
                                organ === bodyPart
                                  ? Object.keys(suborgan).map(
                                      (Affected, index) => (
                                        <option
                                          value={Affected}
                                          className="bg-black text-destructive"
                                        >
                                          {Affected}
                                        </option>
                                      )
                                    )
                                  : null
                            )
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col mb-3 w-full">
                      <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                        Injury:
                      </label>
                      <select
                        value={InjuryName}
                        onChange={(e) => setInjuryName(e.target.value)}
                        required
                        className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                      >
                        <option value="" className="bg-black text-destructive">
                          Select type
                        </option>
                        {injuryData.map((organData, organIndex) =>
                          Object.entries(organData).map(([organ, suborgans]) =>
                            organ === bodyPart
                              ? Object.entries(suborgans).map(
                                  ([suborgan, injuryList]) =>
                                    suborgan === tissueType
                                      ? injuryList.map(
                                          (injury, injuryIndex) => (
                                            <option
                                              key={`${organIndex}-${organ}-${suborgan}-${injuryIndex}`}
                                              value={injury}
                                              className="bg-black text-destructive"
                                            >
                                              {injury}{" "}
                                            </option>
                                          )
                                        )
                                      : null
                                )
                              : null
                          )
                        )}
                      </select>
                    </div>
                  </div>
                )}
                {troubletype === "Illness" && (
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="flex flex-col mb-3">
                      <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                        Illness category:
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        required
                        className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                      >
                        <option value="" className="bg-black text-destructive">
                          Select type
                        </option>
                        {illnessesByCategory.map((illness, illnessindex) =>
                          Object.keys(illness).map((illnessname) => (
                            <option
                              key={illnessindex}
                              value={illnessname}
                              className="bg-black text-destructive custom-scrollbar overflow-y-auto"
                            >
                              {illnessname}
                            </option>
                          ))
                        )}
                      </select>
                    </div>

                    <div className="flex flex-col mb-3">
                      <label className="relative top-3 bg-white w-fit left-2 px-1 text-accent">
                        Name of Illness:
                      </label>
                      <select
                        value={illnessName}
                        onChange={(e) => setillnessName(e.target.value)}
                        required
                        className="border-2 border-secondary p-2 rounded-md bg-white text-accent w-full"
                      >
                        <option value="" className="bg-black text-destructive">
                          Select type
                        </option>
                        {illnessesByCategory.map((illnessdata, illnessindex) =>
                          Object.entries(illnessdata).map(
                            ([illness, illnessname], index) =>
                              illness === category
                                ? illnessname.map((illnessnames, index) => (
                                    <option
                                      value={illnessnames}
                                      className="bg-black text-destructive"
                                    >
                                      {illnessnames}
                                    </option>
                                  ))
                                : null
                          )
                        )}
                      </select>
                    </div>
                  </div>
                )}

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
        <div className="flex flex-col justify-center items-start relative">
          <img
            src={medical}
            alt=""
            className="md:flex flex-col justify-center relative  w-full md:h-screen hidden object-cover lg:h-[80vh]"
          />
          <div className="md:absolute flex flex-col justify-center items-start p-2 pl-4 inset-0 bg-gradient-to-t from-black to-black/70 w-full md:h-screen lg:h-[80vh]">
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-5xl w-fit  text-white font-semibold font-custom">
                OUR DOCTORS
              </h1>
              <hr className="border-none h-1 bg-border shadow-md shadow-blue-400/20 w-64" />
              <p className="mt-2 text-white w-3/6">
                Contact with Doctors for treatments of any kind of injuries and
                illness . You can chat with rhem using our chat features.{" "}
              </p>
            </div>

            {userdata.length > 0 && (
              <div className="bg-black/30 p-2 rounded-md mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 mt-4">
                  {userdata.slice(startindex, endindex).map((user, index) => (
                    <Card
                      key={index}
                      username={user.username}
                      sport={user.experience}
                      specialization={user.specialization}
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
            {userdata.length === 0 && (
              <div className="flex flex-col justify-center items-center p-20 bg-white/10 rounded-md mt-3">
                <UserRoundXIcon className="h-20 w-20 p-2 stroke-white border-2 rounded-3xl border-border" />
                <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                  Currently no user available...
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col justify-center items-start relative">
          <img
            src={treatment}
            alt=""
            className="w-full hidden lg:flex h-[90vh]"
          />
          <div className="lg:absolute inset-0 lg:bg-gradient-to-b from-black to-black/40  pl-4 w-full">
            <div className="flex flex-col items-start w-full mb-4 ">
              <h1 className="text-5xl text-white font-semibold mt-10 w-fit font-custom">
                INJURY & <br />
                ILLNESS RECORD
              </h1>
              <hr className="border-none h-1 bg-border shadow-md shadow-blue-400/20 w-72" />
              <p className="text-base text-white font-medium mt-4 font-poppins max-w-[30rem]">
                Easily maintain a detailed record of all your past injuries and
                illnesses, allowing you to manage and monitor your health
                history more effectively. Fill the form by clicking the button
                provided below.
              </p>
            </div>
            <Popover type="single" collapsible className="w-fit border-none">
              <PopoverTrigger className="flex justify-betwen items-center text-white gap-2 bg-transparent p-2 rounded-sm border-2 border-orange-500 hover:no-underline">
                <PlusIcon />
                <p className="text-base font-poppins">Add Injury or Illness</p>
              </PopoverTrigger>
              <PopoverContent className="overflow-y-auto custom-scrollbar border-muted mt-2 bg-black border-2 rounded-md  p-2 h-96 w-[32rem] ml-2">
                <form action="">
                  <div className="flex flex-col justify-center items-center   bg-black">
                    <h1 className="text-xl font-semibold text-destructive font-custom">
                      Injury & Illness Form
                    </h1>
                    <div className="flex flex-col mb-3 w-full">
                      <label className="relative top-3 bg-black w-fit left-2 p-1 text-destructive">
                        Injury or Illness :
                      </label>
                      <select
                        value={troubletype}
                        onChange={(e) => settroubletype(e.target.value)}
                        required
                        className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                      >
                        <option value="" className="bg-black text-destructive">
                          Select the type of trouble
                        </option>
                        <option
                          value="Illness"
                          className="bg-black text-destructive"
                        >
                          Illness
                        </option>
                        <option
                          value="Injury"
                          className="bg-black text-destructive"
                        >
                          Injury
                        </option>
                      </select>
                    </div>
                    {troubletype === "Injury" ? (
                      <div className="flex flex-col mb-3 w-full">
                        <label className="relative top-3 bg-black w-fit left-2 p-1 text-destructive">
                          Injury type :
                        </label>
                        <select
                          value={type}
                          onChange={(e) => settype(e.target.value)}
                          required
                          className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                        >
                          <option
                            value=""
                            className="bg-black text-destructive"
                          >
                            Select type
                          </option>
                          <option
                            value="Acute"
                            className="bg-black text-destructive"
                          >
                            Acute
                          </option>
                          <option
                            value="Overuse"
                            className="bg-black text-destructive"
                          >
                            Overuse
                          </option>
                        </select>
                      </div>
                    ) : (
                      ""
                    )}
                    {troubletype === "Injury" && (
                      <div className="grid grid-cols-2 gap-2 w-full ">
                        <div className="flex flex-col mb-3 w-full">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Body Part:
                          </label>
                          <select
                            value={bodyPart}
                            onChange={(e) => setbodyPart(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                          >
                            <option
                              value=""
                              className="bg-black text-destructive"
                            >
                              Select type
                            </option>
                            {injuryData.map((organData, organIndex) =>
                              Object.keys(organData).map((organ) => (
                                <option
                                  key={organIndex}
                                  value={organ}
                                  className="bg-black text-destructive custom-scrollbar overflow-y-auto"
                                >
                                  {organ}
                                </option>
                              ))
                            )}
                          </select>
                        </div>

                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Affected Organ:
                          </label>
                          <select
                            value={tissueType}
                            onChange={(e) => settissueType(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                          >
                            <option
                              value=""
                              className="bg-black text-destructive"
                            >
                              Select type
                            </option>
                            {injuryData.map((organData, organindex) =>
                              Object.entries(organData).map(
                                ([organ, suborgan], index) =>
                                  organ === bodyPart
                                    ? Object.keys(suborgan).map(
                                        (Affected, index) => (
                                          <option
                                            value={Affected}
                                            className="bg-black text-destructive"
                                          >
                                            {Affected}
                                          </option>
                                        )
                                      )
                                    : null
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    )}
                    {troubletype === "Illness" && (
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Illness category:
                          </label>
                          <select
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                          >
                            <option
                              value=""
                              className="bg-black text-destructive"
                            >
                              Select type
                            </option>
                            {illnessesByCategory.map((illness, illnessindex) =>
                              Object.keys(illness).map((illnessname) => (
                                <option
                                  key={illnessindex}
                                  value={illnessname}
                                  className="bg-black text-destructive custom-scrollbar overflow-y-auto"
                                >
                                  {illnessname}
                                </option>
                              ))
                            )}
                          </select>
                        </div>

                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Name of Illness:
                          </label>
                          <select
                            value={illnessName}
                            onChange={(e) => setillnessName(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                          >
                            <option
                              value=""
                              className="bg-black text-destructive"
                            >
                              Select type
                            </option>
                            {illnessesByCategory.map(
                              (illnessdata, illnessindex) =>
                                Object.entries(illnessdata).map(
                                  ([illness, illnessname], index) =>
                                    illness === category
                                      ? illnessname.map(
                                          (illnessnames, index) => (
                                            <option
                                              value={illnessnames}
                                              className="bg-black text-destructive"
                                            >
                                              {illnessnames}
                                            </option>
                                          )
                                        )
                                      : null
                                )
                            )}
                          </select>
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {troubletype === "Injury" && (
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Injury:
                          </label>
                          <select
                            value={InjuryName}
                            onChange={(e) => setInjuryName(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                          >
                            <option
                              value=""
                              className="bg-black text-destructive"
                            >
                              Select type
                            </option>
                            {injuryData.map((organData, organIndex) =>
                              Object.entries(organData).map(
                                ([organ, suborgans]) =>
                                  organ === bodyPart
                                    ? Object.entries(suborgans).map(
                                        ([suborgan, injuryList]) =>
                                          suborgan === tissueType
                                            ? injuryList.map(
                                                (injury, injuryIndex) => (
                                                  <option
                                                    key={`${organIndex}-${organ}-${suborgan}-${injuryIndex}`}
                                                    value={injury}
                                                    className="bg-black text-destructive"
                                                  >
                                                    {injury}{" "}
                                                  </option>
                                                )
                                              )
                                            : null
                                      )
                                    : null
                              )
                            )}
                          </select>
                        </div>
                      )}
                      {troubletype === "Illness" && (
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Returning to partail training:
                          </label>
                          <input
                            type="date"
                            value={returntopartialtraining}
                            onChange={(e) =>
                              setreturntopartialtraining(e.target.value)
                            }
                            required
                            className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                          />
                        </div>
                      )}

                      <div className="flex flex-col mb-3">
                        <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                          Level of pain:
                        </label>
                        <input
                          type="range"
                          value={levelofPain}
                          onChange={(e) => setlevelofPain(e.target.value)}
                          required
                          min={0}
                          max={10}
                          className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <div className="flex flex-col mb-3">
                        <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                          New injury:
                        </label>
                        <select
                          value={newInjury}
                          onChange={(e) => setnewInjury(e.target.value)}
                          required
                          className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                        >
                          <option
                            value=""
                            className="bg-black text-destructive"
                          >
                            Select type
                          </option>{" "}
                          <option
                            value={true}
                            className="bg-black text-destructive"
                          >
                            Yes
                          </option>{" "}
                          <option
                            value={false}
                            className="bg-black text-destructive"
                          >
                            No
                          </option>
                        </select>
                      </div>

                      <div className="flex flex-col mb-3">
                        <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                          Priority:
                        </label>
                        <select
                          value={Priority}
                          onChange={(e) => setPriority(e.target.value)}
                          required
                          className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                        >
                          <option
                            value=""
                            className="bg-black text-destructive"
                          >
                            Select type
                          </option>{" "}
                          <option
                            value="High"
                            className="bg-black text-destructive"
                          >
                            High
                          </option>{" "}
                          <option
                            value="Medium"
                            className="bg-black text-destructive"
                          >
                            Medium
                          </option>
                          <option
                            value="Low"
                            className="bg-black text-destructive"
                          >
                            Low
                          </option>
                        </select>
                      </div>
                    </div>
                    {troubletype === "Injury" && (
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Sport:
                          </label>
                          <select
                            value={sport}
                            onChange={(e) => setsport(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                          >
                            <option
                              value=""
                              className="bg-black text-destructive"
                            >
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

                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Sport Activity:
                          </label>
                          <select
                            value={activity}
                            onChange={(e) => setactivity(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                          >
                            <option
                              value=""
                              className="bg-black text-destructive"
                            >
                              Select type
                            </option>
                            {sportActivities.map((sports, sportindex) =>
                              Object.entries(sports).map(
                                ([sportname, sportactivity]) =>
                                  sportname === sport
                                    ? sportactivity.map(
                                        (sportactivityname, finalindex) => (
                                          <option
                                            value={sportactivityname}
                                            className="bg-black text-destructive"
                                          >
                                            {sportactivityname}
                                          </option>
                                        )
                                      )
                                    : null
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {troubletype === "Injury" && (
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            cause of injury:
                          </label>
                          <select
                            value={mechanism}
                            onChange={(e) => setmechanism(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                          >
                            <option
                              value=""
                              className="bg-black text-destructive"
                            >
                              Select type
                            </option>
                            {sportMechanisms.map((sports, sportindex) =>
                              Object.entries(sports).map(
                                ([sportname, sportactivity]) =>
                                  sportname === sport
                                    ? sportactivity.map(
                                        (sportactivityname, finalindex) => (
                                          <option
                                            value={sportactivityname}
                                            className="bg-black text-destructive"
                                          >
                                            {sportactivityname}
                                          </option>
                                        )
                                      )
                                    : null
                              )
                            )}
                          </select>
                        </div>
                      )}
                      {troubletype === "Illness" && (
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Returning to full training:
                          </label>
                          <input
                            type="date"
                            value={returntofulltraining}
                            onChange={(e) =>
                              setreturntofulltraining(e.target.value)
                            }
                            required
                            className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                          />
                        </div>
                      )}
                      {troubletype === "Injury" && (
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Date of injury:
                          </label>
                          <input
                            type="date"
                            value={dateofInjury}
                            onChange={(e) => setdateofInjury(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                          />
                        </div>
                      )}
                      {troubletype === "Illness" && (
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Date of illness:
                          </label>
                          <input
                            type="date"
                            value={dateofIllness}
                            onChange={(e) => setdateofIllness(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                          />
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <div className="flex flex-col mb-3">
                        <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                          Training status:
                        </label>
                        <select
                          value={trainingstatus}
                          onChange={(e) => settrainingstatus(e.target.value)}
                          required
                          className="border-2 border-secondary p-2 rounded-md bg-black text-destructive w-full"
                        >
                          <option
                            value=""
                            className="bg-black text-destructive"
                          >
                            Select type
                          </option>{" "}
                          <option
                            value="Full Participation"
                            className="bg-black text-destructive"
                          >
                            Full Participation
                          </option>{" "}
                          <option
                            value="Reduced Participation"
                            className="bg-black text-destructive"
                          >
                            Reduced Participation
                          </option>
                          <option
                            value="No Participation"
                            className="bg-black text-destructive"
                          >
                            No Participation
                          </option>
                        </select>
                      </div>

                      <div className="flex flex-col mb-3">
                        <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                          Date of full recovery:
                        </label>
                        <input
                          type="date"
                          value={healthproblemresolved}
                          onChange={(e) =>
                            sethealthproblemresolved(e.target.value)
                          }
                          required
                          className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                        />
                      </div>
                    </div>
                    {troubletype === "Illness" && (
                      <div className="flex flex-col mb-3 w-full">
                        <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                          Returning to competition:
                        </label>
                        <input
                          type="date"
                          value={returntocompetition}
                          onChange={(e) =>
                            setreturntocompetition(e.target.value)
                          }
                          required
                          className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                        />
                      </div>
                    )}
                    {troubletype === "Injury" && (
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Training restrictions:
                          </label>
                          <input
                            type="text"
                            value={trainingrestriction}
                            onChange={(e) =>
                              settrainingrestriction(e.target.value)
                            }
                            required
                            className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                          />
                        </div>
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Detail:
                          </label>
                          <input
                            type="text"
                            value={details}
                            onChange={(e) => setdetails(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                          />
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-x-2 w-full">
                      <div className="flex flex-col mb-3">
                        <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                          Personal program:
                        </label>
                        <input
                          type="text"
                          value={personnalprogram}
                          onChange={(e) => setpersonnalprogram(e.target.value)}
                          required
                          className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                        />
                      </div>
                      {troubletype === "Injury" && (
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Additional Information:
                          </label>
                          <input
                            type="text"
                            value={additionalinformation}
                            onChange={(e) =>
                              setadditionalinformation(e.target.value)
                            }
                            required
                            className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                          />
                        </div>
                      )}
                      {troubletype === "Illness" && (
                        <div className="flex flex-col mb-3">
                          <label className="relative top-3 bg-black w-fit left-2 px-1 text-destructive">
                            Comment:
                          </label>
                          <input
                            type="text"
                            value={comments}
                            onChange={(e) => setcomments(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md min-w-60 bg-black text-destructive"
                          />
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="mt-6 mb-2 p-3 bg-destructive text-foreground font-semibold rounded-md w-full  transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </PopoverContent>
            </Popover>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4 w-fit mb-2">
              <div className="flex justify-center items-center w-[33rem] bg-white/20 rounded-md">
                {injury.length > 0 ? (
                  <Carousel className="flex justify-center items-start w-[25rem] h-full ">
                    <CarouselContent>
                      {injury.map((injury, index) => (
                        <CarouselItem key={index} className="md:basis-1/1 pb-4">
                          <div
                            key={index}
                            className="flex flex-col justify-between bg-black rounded-md mt-2 w-full border border-secondary/60 h-full"
                          >
                            <div className="flex justify-center items-center gap-2 p-2">
                              <HeartPulse className="stroke-destructive"></HeartPulse>
                              <p className=" rounded-t-md text-lg font-semibold text-destructive">
                                Injury
                              </p>
                            </div>

                            <div className="flex flex-col justify-center items-start w-full">
                              <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Injury-type :{" "}
                                  </span>
                                  {injury.category}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Body part :{" "}
                                  </span>
                                  {injury.bodyPart}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Affected tissues :{" "}
                                  </span>
                                  {injury.tissueType}div
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Injury :{" "}
                                  </span>
                                  {injury.InjuryName}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    New injury :{" "}
                                  </span>
                                  {injury.newInjury}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Priority :{" "}
                                  </span>
                                  {injury.Priority}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Sport :{" "}
                                  </span>
                                  {injury.sport}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Activity :{" "}
                                  </span>
                                  {injury.activity}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Cause of injury :{" "}
                                  </span>
                                  {injury.mechanism}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Level of pain :{" "}
                                  </span>
                                  {injury.levelofPain}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Training Status :{" "}
                                  </span>
                                  {injury.trainingstatus}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Injury date:{" "}
                                  </span>
                                  {injury.dateofInjury}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Recovery date :{" "}
                                  </span>
                                  {injury.healthproblemresolved}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Training restriction:{" "}
                                  </span>
                                  {injury.trainingrestriction}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Details:{" "}
                                  </span>
                                  {injury.details}
                                </p>

                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Presonal program:{" "}
                                  </span>
                                  {injury.personnalprogram}
                                </p>
                              </div>
                              <div className="grid grid-cols-1 pl-2">
                                <p className="text-destructive">
                                  <span className="font-semibold text-secondary">
                                    Additional information:{" "}
                                  </span>
                                  <br />
                                  {injury.additionalinformation}
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-center items-center gap-2 mb-2">
                              <button className="p-1 pl-2 pr-2 rounded-sm bg-[#388371] text-white">
                                Edit
                              </button>
                              <button className="p-1 pl-2 pr-2 rounded-sm bg-white text-black">
                                Delete
                              </button>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                ) : (
                  ""
                )}
              </div>
              <div className="flex justify-center items-center bg-white/20 w-[30rem] rounded-md">
                {injury.length + illness.length > 0 ? (
                  <Carousel className="flex justify-center items-start   w-[22rem]">
                    <CarouselContent className="p-1">
                      {illness.map((illness, index) => (
                        <CarouselItem key={index} className="md:basis-1/1 pb-2">
                          <div
                            key={index}
                            className="flex flex-col justify-between  bg-black rounded-md mt-2 w-full border border-secondary/60"
                          >
                            {" "}
                            <div className="flex justify-center items-center gap-2">
                              <Cross className="stroke-destructive "></Cross>
                              <p className="rounded-t-md text-center p-1 text-xl font-semibold text-destructive font-poppins">
                                Illness
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Injury-category :{" "}
                                </span>
                                {illness.category}
                              </p>

                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Illness :{" "}
                                </span>
                                {illness.illnessName}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  New illness :{" "}
                                </span>
                                {illness.newillness}
                              </p>

                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Priority :{" "}
                                </span>
                                {illness.Priority}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Level of pain :{" "}
                                </span>
                                {illness.levelofPain}
                              </p>

                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Return to partial training :{" "}
                                </span>
                                {illness.returntopartialtraining}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Return to full training :{" "}
                                </span>
                                {illness.returntofulltraining}
                              </p>

                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Return to cometition:{" "}
                                </span>
                                {illness.returntocompetition}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Training Status :{" "}
                                </span>
                                {illness.trainingstatus}
                              </p>

                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Illness date:{" "}
                                </span>
                                {illness.dateofIllness}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pl-2 w-full">
                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Recovery date :{" "}
                                </span>
                                {illness.healthproblemresolved}
                              </p>

                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Personal program:{" "}
                                </span>
                                {illness.personnalprogram}
                              </p>
                            </div>
                            <div className="grid grid-cols-1 pl-2">
                              <p className="text-destructive">
                                <span className="font-semibold text-secondary">
                                  Comment :{" "}
                                </span>
                                <br />
                                {illness.comments}
                              </p>
                            </div>
                            <div className="flex justify-center items-center gap-2 mb-2">
                              <button className="p-1 pl-2 pr-2 rounded-sm bg-[#388371] text-white">
                                Edit
                              </button>
                              <button className="p-1 pl-2 pr-2 rounded-sm bg-white text-black">
                                Delete
                              </button>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                ) : (
                  ""
                )}
              </div>
            </div>
            {injury.length + illness.length === 0 ? (
              <div className="flex flex-col justify-center items-center p-20 bg-white/10 rounded-md mt-3 w-fit mb-4 lg:bg-black/20">
                <HeartOff className="h-20 w-20 p-2 stroke-white border-2 rounded-3xl border-border" />
                <h1 className="text-base italic text-accent-foreground font-semibold text-center mt-4">
                  Currently no record of previous injury and illness
                  available...
                </h1>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Aid;
