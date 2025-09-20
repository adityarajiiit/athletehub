import React from "react";
import { useState } from "react";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
import { IoIosAddCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiCalendarDateRange } from "react-icons/hi2";
import { SiReactivex } from "react-icons/si";
import { CgClose } from "react-icons/cg";
import { Carousel, CarouselCard } from "@/shadcnComponents/ui/carousel";
import { HiMiniTrophy } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Profile() {
  const user = {
    username: "John Doe",
    category: "Athlete",
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
  const [competition, setCompetition] = useState("");
  const [Year, setYear] = useState("");
  const [medal, setmedal] = useState("");
  const cardData = [
    ...user.Achievement.map((achievement) => ({
      category: "Achievement",
      title: achievement.competition,
      src: "/achievement.jpg",
      content: (
        <div className="overflow-x-auto">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <HiMiniTrophy className="size-8" />
              </div>
              <div className="stat-title font-semibold">Competition Result</div>
              <div className="stat-value uppercase">{achievement.medal}</div>
              <div className="stat-desc mt-1">
                On the year {achievement.year}
              </div>
            </div>
          </div>
        </div>
      ),
    })),
  ];
  const cards = cardData.map((card, index) => (
    <CarouselCard key={`${card.title}-${index}`} card={card} index={index} />
  ));
  return (
    <div className="flex flex-col justify-between min-h-screen h-full w-full">
      <Header></Header>
      <div className="pt-28 w-full">
        <div className="flex  flex-col justify-center items-start w-full p-4">
          <div className="p-5 bg-destructive rounded-xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-7 w-full">
              <div className="p-4 flex flex-col justify-center items-start col-span-4">
                <h1 className="text-2xl font-poppins font-bold">
                  Personal <span className="text-warning">Information</span>
                </h1>
                <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                  <img
                    src="/illness.jpg"
                    alt="userimage"
                    className="h-40 w-40 object-cover rounded-full flex-shrink-0"
                  ></img>
                  <div className="flex flex-col justify-center items-start gap-2 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex  items-center gap-2 font-medium font-inter text-sm">
                        <FaUser /> Username :
                      </div>
                      <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4">
                        Username
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex  items-center gap-2 font-medium font-inter text-sm">
                        <MdEmail /> Email :
                      </div>
                      <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4">
                        example@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 col-span-3">
                <h1 className="text-2xl font-poppins font-bold">
                  Account <span className="text-warning">Details</span>
                </h1>
                <div className="flex flex-col justify-center items-start gap-2 w-full mt-4 p-2">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex  items-center gap-2 font-medium font-inter text-sm">
                      <HiCalendarDateRange /> Created At :
                    </div>
                    <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4">
                      29 July 2025
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex  items-center gap-2 font-medium font-inter text-sm">
                      <SiReactivex /> Status :
                    </div>
                    <div className="font-medium font-inter p-2.5 rounded-full bg-muted/20 w-full border border-base-content/10 text-sm px-4 text-success">
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Link to="/onboard" className="btn btn-accent">
                Complete Profile
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full p-4">
            <h1 className="text-4xl font-bold uppercase">
              other <br /> informations
            </h1>
            <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
            {user.category == "Athlete" && (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 w-full mt-4">
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-base font-semibold text-accent">
                    Sport Experience
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">Sport : </span>
                    {user.sport}
                  </p>

                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">Date of Birth : </span>
                    {user.dateofbirth}
                  </p>
                </div>
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-base font-semibold text-accent">
                    Physical Information
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">Weight : </span>
                    {user.weight}
                  </p>

                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">Height : </span>
                    {user.height}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-base font-semibold text-accent">
                    Location
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">Country : </span>
                    {user.country}
                  </p>

                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">State : </span>
                    {user.state}
                  </p>
                </div>
              </div>
            )}
            {user.category === "Doctor" && (
              <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-3 w-full ">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-accent">
                    Sport Experience:
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold"> Specialization : </span>
                    {user.sport}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">Exp (yrs) : </span>
                    {user.experience}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-base font-semibold text-accent">
                    Location :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">Country : </span>
                    {user.country}
                  </p>

                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">State : </span>
                    {user.state}
                  </p>
                </div>

                <div className="flex flex-col justify-between w-full gap-1">
                  <p className="text-base font-semibold text-accent">
                    Education :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">College : </span>
                    {user.college}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">Degree : </span>
                    {user.degree}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">course duration: </span>
                    {user.years}
                  </p>
                </div>

                <div className="flex flex-col gap-y-1">
                  <p className="text-base font-semibold text-accent">
                    Availability :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">
                      {" "}
                      Availability in a week :{" "}
                    </span>
                    {user.days}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">Available from : </span>
                    {user.starttime}
                  </p>

                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">End time : </span>
                    {user.endtime}
                  </p>
                </div>
              </div>
            )}

            {user.category === "Coach" && (
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 w-full ">
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-base font-semibold text-accent">
                    Sport Experience:
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold"> Sport : </span>
                    {user.sport}
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold"> Specialization : </span>
                    {user.sport}
                  </p>

                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">Exp (yrs) : </span>
                    {user.experience}
                  </p>
                </div>
                <div className="flex flex-col w-full justify-center gap-1">
                  <p className="text-base font-semibold text-accent">
                    Availability :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">
                      {" "}
                      Availability in a week :{" "}
                    </span>
                    {user.days}
                  </p>
                  <div className="flex flex-row gap-x-4">
                    <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive w-full">
                      <span className="font-semibold">Available from : </span>
                      {user.starttime}
                    </p>
                  </div>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">End time : </span>
                    {user.endtime}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-base font-semibold text-accent">
                    Location :
                  </p>
                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    <span className="font-semibold">Country : </span>
                    {user.country}
                  </p>

                  <p className="input input-bordered rounded-full flex justify-center items-center gap-2 bg-destructive">
                    {" "}
                    <span className="font-semibold">State : </span>
                    {user.state}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {user.category == "Athlete" ? (
          <div className="w-full p-4 px-8">
            <div className="flex flex-col items-start  w-full mb-4">
              <div className="flex flex-col justify-center items-start  gap-6 mt-4">
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-4xl font-bold font-poppins  border-r-secondary uppercase">
                    Achievement <br className="lg:hidden" />
                    details
                  </h1>
                  <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
                </div>
                <p className="max-w-lg ">
                  A collection of significant accomplishments and recognitions
                  that demonstrate my expertise, dedication, and commitment to
                  excellence throughout my career.
                </p>
              </div>
            </div>
            <div>
              <button
                className="btn btn-info bg-primary text-info-content border-0 rounded-full pl-1 mt-4 "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <IoIosAddCircle className="size-10" />
                Add Achievements
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      <CgClose className="size-5" />
                    </button>
                  </form>
                  <p className="text-sm font-inter font-medium">
                    Press ESC key or click on ✕ button to close
                  </p>
                  <form action="">
                    <div>
                      <h1 className="text-xl font-semibold text-accent">
                        Achievement
                      </h1>
                      <div className="form-control w-full">
                        <label className="label">Competition:</label>
                        <input
                          type="text"
                          value={competition}
                          placeholder="Competition Name"
                          onChange={(e) => setCompetition(e.target.value)}
                          required
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control ">
                        <div className="form-control w-full">
                          <label className="label">Year:</label>
                          <input
                            type="text"
                            value={Year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                            placeholder="Competition Year"
                            className="input input-bordered"
                          />
                        </div>

                        <div className="form-control w-full">
                          <label className="label">Position:</label>
                          <input
                            type="text"
                            value={medal}
                            onChange={(e) => setmedal(e.target.value)}
                            required
                            placeholder="Winner/1st Runner Up/2nd Runner Up"
                            className="input input-bordered"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn bg-base-content w-full mt-4 text-base-300 hover:bg-accent"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
            <Carousel items={cards} />
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
