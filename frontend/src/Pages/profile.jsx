import React from "react";
import { useState } from "react";
import Header from "@/constants/navbar";
import Footer from "@/constants/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon, BadgePlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
function Profile() {
  const user = {
    username: "John Doe",
    category: "Player",
    email: "randomplayer@123.yahoo.com",
    sport: "Football",
    experience: "Intermediate",
    weight: "69",
    height: "5'10",
    country: "Great Britain",
    state: " ",
    Achievement: [
      {
        competition: "state football competition",
        year: 2010,
        medal: "gold",
      },
      {
        competition: "National Football Championship",
        year: 2012,
        medal: "Silver",
      },
    ],
  };
  const [category, setCategory] = useState("Medician");
  const [competition, setCompetition] = useState("");
  const [Year, setYear] = useState("");
  const [medal, setmedal] = useState("");

  return (
    <div className="flex flex-col justify-between min-h-screen h-full w-full bg-black/95 mt-20 ">
      <Header></Header>
      <div>
        <div className="flex  flex-col justify-center items-start w-full bg-gradient-to-b from-white to-transparent ">
          <div className="flex flex-col items-start justify-center  w-full pl-4 mt-4">
            <h1 className="text-4xl text-black text-start font-bold w-fit font-custom">
              MY PROFILE
            </h1>
            <hr class="border-none h-1 bg-orange-500 shadow-md shadow-white/40 w-44 -mt-1" />
            <p className="text-black font-normal mt-1 text-lg font-lato">
              User informations including name , email and category are provided
              below .
            </p>
          </div>
          <div className="pl-4">
            <div className="flex md:flex-row sm:flex-col max-sm:flex-col items-center justify-start p-4  w-fit gap-x-2 shadow-md bg-black shadow-slate-400/10 rounded-md mb-4 border border-orange-500 mt-2">
              <div className="h-40 w-40 rounded-full bg-slate-400 z-10"></div>
              <div className="">
                <div className="flex flex-col md:items-start justify-center gap-y-1  w-full bg-[#434242]/80 p-4 relative md:pl-40 rounded-md h-full md:right-20 pt-32 bottom-20 md:pt-4 md:bottom-0 ">
                  <p className="text-white font-bold text-3xl font-lato">
                    {user.username}
                  </p>

                  <p className="text-white font-medium text-lg font-lato">
                    <span className="font-bold ">Email : </span>
                    {user.email}
                  </p>
                  <p className="text-white font-medium text-lg font-lato">
                    <span className="font-semibold">Category : </span>
                    {user.category}
                  </p>
                  <Link to="/onboard">
                    <button className="bg-transparent p-2 rounded-sm text-white border-2 border-orange-500 hover:scale-105 duration-300 hover:bg-orange-500 mt-2">
                      Complete Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full bg-black">
            <div className="flex flex-col items-start  w-full mb-4 bg-orange-500 p-2 pl-4">
              <h1 className="text-3xl text-white text-start font-semibold w-fit font-custom">
                PERSONAL INFORMATION
              </h1>
              <hr class="border-none h-1 bg-white w-72" />
              <p className="text-white font-lato text-lg mt-1 w-[30rem]">
                {" "}
                Other user information related to their sport experience ,
                location etc are provided below .
              </p>
            </div>
            {user.category == "Player" && (
              <div className="grid md:grid-cols-3 grid-cols-2 gap-3 w-full p-3">
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Sport Experience:
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">Sport : </span>
                    {user.sport}
                  </p>

                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">Date of Birth : </span>
                    {user.dateofbirth}
                  </p>
                </div>
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Physical Information :
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">Weight : </span>
                    {user.weight}
                  </p>

                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">Height : </span>
                    {user.height}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Location :
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">Country : </span>
                    {user.country}
                  </p>

                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">State : </span>
                    {user.state}
                  </p>
                </div>
              </div>
            )}
            {user.category === "Medician" && (
              <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 w-full p-3">
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Sport Experience:
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold"> Specialization : </span>
                    {user.sport}
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">Year of Expreience: </span>
                    {user.experience}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Location :
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">Country : </span>
                    {user.country}
                  </p>

                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">State : </span>
                    {user.state}
                  </p>
                </div>

                <div className="flex flex-col justify-between w-full gap-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Education :
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">College : </span>
                    {user.college}
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">Degree : </span>
                    {user.degree}
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">course duration: </span>
                    {user.years}
                  </p>
                </div>

                <div className="flex flex-col gap-y-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Availability :
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">
                      {" "}
                      Availability in a week :{" "}
                    </span>
                    {user.days}
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">Start time : </span>
                    {user.starttime}
                  </p>

                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">End time : </span>
                    {user.endtime}
                  </p>
                </div>
              </div>
            )}

            {user.category === "Coach" && (
              <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-3 w-full p-3">
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Sport Experience:
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold"> Sport : </span>
                    {user.sport}
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold"> Specialization : </span>
                    {user.sport}
                  </p>

                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">Year of Expreience: </span>
                    {user.experience}
                  </p>
                </div>
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Availability :
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">
                      {" "}
                      Availability in a week :{" "}
                    </span>
                    {user.days}
                  </p>
                  <div className="flex flex-row gap-x-4">
                    <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                      <span className="font-semibold">Start time : </span>
                      {user.starttime}
                    </p>
                  </div>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">End time : </span>
                    {user.endtime}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-lg font-semibold text-white font-custom">
                    Location :
                  </p>
                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    <span className="font-semibold">Country : </span>
                    {user.country}
                  </p>

                  <p className="text-destructive font-medium text-base p-1 bg-slate-500/20 pl-2">
                    {" "}
                    <span className="font-semibold">State : </span>
                    {user.state}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {user.category == "Player" ? (
          <div className="w-full p-3">
            <div className="flex flex-col items-start  w-full mb-4">
              <h1 className="text-3xl text-accent-foreground text-start font-semibold mt-10 w-fit">
                Achievements
              </h1>
              <hr class="border-none h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md shadow-blue-400/20 w-52" />
            </div>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-fit border-none"
              >
                <AccordionItem value="item-1" className="border-none ">
                  <AccordionTrigger className="flex justify-center items-center text-destructive gap-2 bg-blue-900 p-2 rounded-md">
                    <BadgePlusIcon />
                    <p className="text-base ">Add Achievements</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <form action="">
                      <div className="flex flex-col justify-center items-center border-2 rounded-md border-muted/50 p-2 mt-2 bg-slate-800">
                        <h1 className="text-xl font-semibold text-destructive">
                          Achievement
                        </h1>
                        <div className="flex flex-col mb-3 w-full">
                          <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                            Competition:
                          </label>
                          <input
                            type="text"
                            value={competition}
                            onChange={(e) => setCompetition(e.target.value)}
                            required
                            className="border-2 border-secondary p-2 rounded-md w-full bg-slate-800 text-destructive"
                          />
                        </div>
                        <div className="flex flex-row gap-x-2 w-fit">
                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Year:
                            </label>
                            <input
                              type="text"
                              value={Year}
                              onChange={(e) => setYear(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md w-full bg-slate-800 text-destructive"
                            />
                          </div>

                          <div className="flex flex-col mb-3">
                            <label className="relative top-3 bg-slate-800 w-fit left-2 px-1 text-destructive">
                              Medal:
                            </label>
                            <input
                              type="text"
                              value={medal}
                              onChange={(e) => setmedal(e.target.value)}
                              required
                              className="border-2 border-secondary p-2 rounded-md w-full bg-slate-800 text-destructive"
                            />
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
              {user.Achievement.map((achievement, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-slate-900 rounded-md mt-2 border border-secondary"
                >
                  <p className="bg-sky-700 rounded-t-md text-center p-1 text-lg font-semibold text-white font-custom">
                    Achievement
                  </p>
                  <p className="text-center text-destructive">
                    {achievement.competition}
                  </p>
                  <div className="flex flex-row justify-center items-center gap-8 pb-2">
                    <p className="text-destructive">
                      <span className="font-semibold text-secondary">
                        Medal :{" "}
                      </span>
                      {achievement.medal}
                    </p>

                    <p className="text-destructive">
                      <span className="font-semibold text-secondary">
                        Year :{" "}
                      </span>
                      {achievement.year}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <button className="p-1 pl-2 pr-2 rounded-md bg-[#2b6759] text-white">
                      Edit
                    </button>
                    <button className="p-1 pl-2 pr-2 rounded-md bg-white text-black">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Profile;
