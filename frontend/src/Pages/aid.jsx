import React, { useEffect } from "react";
import Header from "@/constants/navbar";
import Card from "@/constants/card2";
import Footer from "@/constants/footer";
import { useState } from "react";
import { injuryData } from "@/constants/data";
import { sportActivities, sportMechanisms } from "@/constants/data";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HospitalIcon, Plus, PlusIcon } from "lucide-react";
function Aid() {
  const [userdata,setUserdata] = useState([
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
  ])
  const getDoctors=async()=>{
    try{
const response=await axios.get("http://localhost:5000/api/auth/doctors",{
  headers:{
    "Content-Type":"application/json"
  },withCredentials:true
});
if(response.data){
  setUserdata(response.data)
}
    }
    catch(error){
      console.log(error.message)
    }
  }
  useEffect(()=>{
getDoctors()
  },[])
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

  const allInjuries = getAllInjuries(injuryData);

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
  const [details, setdetails] = useState("");
  const [personnalprogram, setpersonnalprogram] = useState("");
  const [additionalinformation, setadditionalinformation] = useState("");
  const rowperpage = 6;
  const totalPages = Math.ceil(userdata.length / rowperpage);
  const [currentPage, setCurrentPage] = useState(0);
  const startindex = currentPage * rowperpage;
  const endindex = Math.min(startindex + rowperpage, userdata.length);
  return (
    <div>
      <Header></Header>

      <div className="bg-black/85 pt-20">
        <div className="flex flex-col justify-center items-center p-2">
          <div className="gap-y-4 mt-4 w-full">
            <div className="flex flex-col items-start justify-center pl-4">
              <h1 className="text-4xl w-fit  text-accent-foreground font-semibold ">
                Doctors
              </h1>
              <hr className="border-none h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md shadow-blue-400/20 w-32" />
            </div>
          </div>
          {userdata.length > 0 && (
            <div className="bg-slate-600/50 p-2 rounded-md mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 mt-4">
                {userdata.slice(startindex, endindex).map((user, index) => (
                  <Card
                    key={index}
                    username={user.username}
                    sport={user.experience}
                    specialization={user.specialization}
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
            <h1 className="text-base italic text-accent-foreground font-base text-center mt-4">
              Currently no user available...
            </h1>
          )}
        </div>
        <div>
          <div className="w-full p-3">
            <div className="flex flex-col items-start  w-full mb-4">
              <h1 className="text-3xl text-accent-foreground text-start font-semibold mt-10 w-fit">
                Injuries
              </h1>
              <hr className="border-none h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md shadow-blue-400/20 w-28" />
            </div>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-fit border-none"
              >
                <AccordionItem value="item-1" className="border-none ">
                  <AccordionTrigger className="flex justify-betwen items-center text-destructive gap-2 bg-blue-900 p-2 rounded-md">
                    <PlusIcon />
                    <p className="text-base ">Injuries Lists</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <form action="">
                      <div className="flex flex-col justify-center items-center border-2 rounded-md border-muted/50 p-2 mt-2 bg-slate-800">
                        <h1 className="text-xl font-semibold text-destructive">
                          Injury
                        </h1>
                        <div className="flex flex-col mb-3 w-full">
                          <label className="relative top-3 bg-slate-800 w-fit left-2 p-1 text-destructive">
                            Disease type :
                          </label>
                          <select
                            value={type}
                            onChange={(e) => settype(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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
                        <div className="flex flex-row gap-x-2 w-fit">
                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Body Part:
                            </label>
                            <select
                              value={bodyPart}
                              onChange={(e) => setbodyPart(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Affected Organ:
                            </label>
                            <select
                              value={tissueType}
                              onChange={(e) => settissueType(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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
                        <div className="flex flex-row gap-x-2 w-fit">
                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Injury:
                            </label>
                            <select
                              value={InjuryName}
                              onChange={(e) => setInjuryName(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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

                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Level of pain:
                            </label>
                            <input
                              type="range"
                              value={levelofPain}
                              onChange={(e) => setlevelofPain(e.target.value)}
                              required
                              min={0}
                              max={10}
                              className="border-2 border-secondary p-2 rounded-md min-w-60 bg-slate-800 text-destructive"
                            />
                          </div>
                        </div>{" "}
                        <div className="flex flex-row gap-x-2 w-fit">
                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              New injury:
                            </label>
                            <select
                              value={newInjury}
                              onChange={(e) => setnewInjury(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Priority:
                            </label>
                            <select
                              value={Priority}
                              onChange={(e) => setPriority(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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
                        <div className="flex flex-row gap-x-2 w-fit">
                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Sport:
                            </label>
                            <select
                              value={sport}
                              onChange={(e) => setsport(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Sport Activity:
                            </label>
                            <select
                              value={activity}
                              onChange={(e) => setactivity(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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
                        </div>{" "}
                        <div className="flex justify-center items-center gap-2">
                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              cause of injury:
                            </label>
                            <select
                              value={mechanism}
                              onChange={(e) => setmechanism(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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

                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Level of pain:
                            </label>
                            <input
                              type="date"
                              value={dateofInjury}
                              onChange={(e) => setdateofInjury(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md min-w-60 bg-slate-800 text-destructive"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-x-2 w-fit">
                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              New injury:
                            </label>
                            <select
                              value={newInjury}
                              onChange={(e) => setnewInjury(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md bg-slate-800 text-destructive min-w-60"
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
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Priority:
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="mt-6 mb-2 p-3 bg-destructive text-foreground font-semibold rounded-md w-full  transition"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 lg:grid-cols-3 max-sm:grid-cols-1">
              {/* {user.Achievement.map((achievement, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-md mt-2"
                >
                  <p className="bg-sky-700 rounded-t-md text-center p-1 text-lg font-semibold text-destructive">
                    Achievement
                  </p>
                  <p className="text-center">{achievement.competition}</p>
                  <div className="flex flex-row justify-center items-center gap-8 pb-2">
                    <p>
                      <span className="font-semibold">Medal : </span>
                      {achievement.medal}
                    </p>

                    <p>
                      <span className="font-semibold">Year : </span>
                      {achievement.year}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <button className="p-1 pl-2 pr-2 rounded-md bg-[#2b6759] text-white">
                      Edit
                    </button>
                    <button className="p-1 pl-2 pr-2 rounded-md bg-black text-white">
                      Delete
                    </button>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Aid;
