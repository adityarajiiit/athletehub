import React, { useEffect } from "react";
import Header from "@/components/navbar";
import Card from "@/components/ProfileCard";
import Footer from "@/components/footer";
import { useState } from "react";
import { injuryData } from "@/constants/data";
import medical from "@/assets/medical.jpg";
import treatment from "@/assets/treatment.jpg";
import no_data from "/no-data.png";
import { CgClose } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";
import { Carousel, CarouselCard } from "@/shadcnComponents/ui/carousel";
import InjuryData from "@/components/aidSComponents/injuryData";
import Illnessdata from "@/components/aidSComponents/Illnessdata";
import { illnessesByCategory } from "@/constants/data";
import IsSubmitting from "@/components/isSubmitting";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/shadcnComponents/ui/pagination";
import injuryImage from "/injury.jpg";
import illnessImage from "/illness.jpg";
import InjuryAndIllnessForm from "@/components/aidSComponents/injuryAndIllnessForm";
import { axiosInstant } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import KineticDotsLoader from "@/components/loading";
function Aid() {
  const [doctors, setDoctors] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      setPageLoading(true);
      try {
        const [doctorData, injuryData, illnessData] = await Promise.all([
          axiosInstant
            .get("/doctors")
            .then((response) => response.data)
            .catch((error) => {
              console.error("Error fetching doctors:", error);
              return [];
            }),
          axiosInstant
            .get("/aid/injuries")
            .then((response) => response.data.injuries)
            .catch((error) => {
              console.error("Error fetching injury data:", error);
              return [];
            }),
          axiosInstant
            .get("/aid/illnesses")
            .then((response) => response.data.illnesses)
            .catch((error) => {
              console.error("Error fetching illness data:", error);
              return [];
            }),
        ]);

        if (cancelled) return;

        setDoctors(doctorData);
        setInjury(injuryData);
        setIllness(illnessData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (!cancelled) {
          setPageLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  const [injury, setInjury] = useState([]);
  const [illness, setIllness] = useState([]);

  const [bodyPart, setbodyPart] = useState("");
  const [tissueType, settissueType] = useState("");
  const [injuryName, setInjuryName] = useState("");
  const [category, setcategory] = useState("");
  const [illnessName, setillnessName] = useState("");
  const [type, settype] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setdate] = useState("");
  const [note, setNote] = useState("");

  const rowperpage = 6;
  const totalPages = Math.ceil(doctors.length / rowperpage);
  const [currentPage, setCurrentPage] = useState(0);
  const startindex = currentPage * rowperpage;
  const endindex = Math.min(startindex + rowperpage, doctors.length);
  const [loading, setLoading] = useState(false);
  let payload = {
    type,
    date,
    startTime,
    endTime,
    note,
  };
  if (type === "Injury") {
    payload = {
      ...payload,
      bodyPart,
      tissueType,
      injuryName,
    };
  }
  if (type === "Illness") {
    payload = {
      ...payload,
      category,
      illnessName,
    };
  }

  const cardsData = [
    ...injury.map((inj) => ({
      category: "Injury",
      title: inj.injuryName,
      src: injuryImage,
      content: <InjuryData injury={inj} />,
    })),
    ...illness.map((ill) => ({
      category: "Illness",
      title: ill.illnessName,
      src: illnessImage,
      content: <Illnessdata illness={ill} />,
    })),
  ];
  const cards = cardsData.map((card, index) => (
    <CarouselCard key={`${card.title}-${index}`} card={card} index={index} />
  ));

  if (pageLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <KineticDotsLoader />
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <div className="bg-background h-full pt-24">
        <div className="flex flex-col justify-center items-center relative">
          <img
            src={medical}
            alt=""
            className="md:flex flex-col justify-center relative  w-full md:h-[145vh] hidden object-cover xl:h-[110vh]"
          />
          <div className="md:absolute flex flex-col justify-center items-center p-4  inset-0 bg-gradient-to-t from-primary-foreground to-black/20 w-full top-0">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-6 mt-4">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold font-poppins  xl:pr-6 xl:border-r-2 p-2 border-r-secondary uppercase">
                  our doctors
                </h1>
                <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 xl:hidden" />
              </div>
              <p className="max-w-xl md:max-w-2xl text-center xl:text-left">
                Contact with Doctors for treatments of any kind of injuries and
                illness . You can chat with them using our chat features.{" "}
              </p>
            </div>
            {doctors.length > 0 && (
              <div className=" mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-muted/50 rounded-xl p-4">
                  {doctors.slice(startindex, endindex).map((user, index) => (
                    <div key={index} className="">
                      <Card
                        key={user?.id || index}
                        user={user}
                        handleclick={() =>
                          document.getElementById(`model_${index}`).showModal()
                        }
                      />
                      <dialog id={`model_${index}`} className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              <CgClose className="size-5" />
                            </button>
                          </form>
                          <form
                            action=""
                            className="dialog"
                            onSubmit={async (e) => {
                              e.preventDefault();
                              try {
                                setLoading(true);
                                const appointmentData = await axiosInstant.post(
                                  `/appointment/create/${user.id}`,
                                  payload,
                                );
                                toast.success(
                                  "Appointment created successfully",
                                );
                                console.log(
                                  "Appointment created:",
                                  appointmentData.data,
                                );
                              } catch (error) {
                                console.error(
                                  "Error creating appointment:",
                                  error,
                                );
                                toast.error("Failed to create appointment");
                              } finally {
                                setLoading(false);
                              }
                            }}
                          >
                            <div className="grid grid-cols-2 gap-x-4 w-full">
                              <div className="form-control w-full">
                                <label className="label font-poppins text-sm font-medium">
                                  Date:
                                </label>
                                <input
                                  type="date"
                                  value={date}
                                  onChange={(e) => setdate(e.target.value)}
                                  required
                                  className="input input-bordered w-full"
                                />
                              </div>
                              <div className="form-control w-full">
                                <label className="label font-poppins text-sm font-medium">
                                  Injury or Illness :
                                </label>
                                <select
                                  value={type}
                                  onChange={(e) => settype(e.target.value)}
                                  required
                                  className="select select-bordered"
                                >
                                  <option value="">
                                    Select the type of trouble
                                  </option>
                                  <option value="Illness">Illness</option>
                                  <option value="Injury">Injury</option>
                                </select>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full">
                              <div className="form-control w-full shrink">
                                <label className="label font-medium text-sm">
                                  Start (from):
                                </label>
                                <input
                                  type="time"
                                  value={startTime}
                                  onChange={(e) => setStartTime(e.target.value)}
                                  required
                                  className="input input-bordered w-full shrink"
                                />
                              </div>
                              <div className="form-control w-full shrink">
                                <label className="label font-medium text-sm">
                                  End(till):
                                </label>
                                <input
                                  type="time"
                                  value={endTime}
                                  onChange={(e) => setEndTime(e.target.value)}
                                  required
                                  className="input input-bordered w-full shrink"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row gap-x-4 w-full"></div>
                            {type === "Injury" && (
                              <div className="flex flex-col justify-center items-center w-full ">
                                <div className="grid grid-cols-2 gap-2 w-full ">
                                  <div className="form-control w-full">
                                    <label className="label font-poppins text-sm font-medium">
                                      Body Part:
                                    </label>
                                    <select
                                      value={bodyPart}
                                      onChange={(e) =>
                                        setbodyPart(e.target.value)
                                      }
                                      required
                                      className="select select-bordered"
                                    >
                                      <option value="">Select type</option>
                                      {injuryData.map((organData, organIndex) =>
                                        Object.keys(organData).map((organ) => (
                                          <option
                                            key={organIndex}
                                            value={organ}
                                            className=" custom-scrollbar overflow-y-auto"
                                          >
                                            {organ}
                                          </option>
                                        )),
                                      )}
                                    </select>
                                  </div>

                                  <div className="form-control">
                                    <label className="label font-poppins text-sm font-medium">
                                      Affected Organ:
                                    </label>
                                    <select
                                      value={tissueType}
                                      onChange={(e) =>
                                        settissueType(e.target.value)
                                      }
                                      required
                                      className="select select-bordered"
                                    >
                                      <option value="">Select type</option>
                                      {injuryData.map((organData, organindex) =>
                                        Object.entries(organData).map(
                                          ([organ, suborgan], index) =>
                                            organ === bodyPart
                                              ? Object.keys(suborgan).map(
                                                  (Affected, index) => (
                                                    <option value={Affected}>
                                                      {Affected}
                                                    </option>
                                                  ),
                                                )
                                              : null,
                                        ),
                                      )}
                                    </select>
                                  </div>
                                </div>
                                <div className="form-control w-full">
                                  <label className="label font-poppins text-sm font-medium">
                                    Injury:
                                  </label>
                                  <select
                                    value={injuryName}
                                    onChange={(e) =>
                                      setInjuryName(e.target.value)
                                    }
                                    required
                                    className="select select-bordered"
                                  >
                                    <option value="">Select type</option>
                                    {injuryData.map((organData, organIndex) =>
                                      Object.entries(organData).map(
                                        ([organ, suborgans]) =>
                                          organ === bodyPart
                                            ? Object.entries(suborgans).map(
                                                ([suborgan, injuryList]) =>
                                                  suborgan === tissueType
                                                    ? injuryList.map(
                                                        (
                                                          injury,
                                                          injuryIndex,
                                                        ) => (
                                                          <option
                                                            key={`${organIndex}-${organ}-${suborgan}-${injuryIndex}`}
                                                            value={injury}
                                                          >
                                                            {injury}{" "}
                                                          </option>
                                                        ),
                                                      )
                                                    : null,
                                              )
                                            : null,
                                      ),
                                    )}
                                  </select>
                                </div>
                              </div>
                            )}
                            {type === "Illness" && (
                              <div className="grid grid-cols-2 gap-2 w-full">
                                <div className="form-control">
                                  <label className="label font-poppins text-sm font-medium">
                                    Illness category:
                                  </label>
                                  <select
                                    value={category}
                                    onChange={(e) =>
                                      setcategory(e.target.value)
                                    }
                                    required
                                    className="select select-bordered"
                                  >
                                    <option value="">Select type</option>
                                    {illnessesByCategory.map(
                                      (illness, illnessindex) =>
                                        Object.keys(illness).map(
                                          (illnessname) => (
                                            <option
                                              key={illnessindex}
                                              value={illnessname}
                                              className=" custom-scrollbar overflow-y-auto"
                                            >
                                              {illnessname}
                                            </option>
                                          ),
                                        ),
                                    )}
                                  </select>
                                </div>

                                <div className="form-control">
                                  <label className="label font-poppins text-sm font-medium">
                                    Name of Illness:
                                  </label>
                                  <select
                                    value={illnessName}
                                    onChange={(e) =>
                                      setillnessName(e.target.value)
                                    }
                                    required
                                    className="select select-bordered"
                                  >
                                    <option value="">Select type</option>
                                    {illnessesByCategory.map((illnessdata) =>
                                      Object.entries(illnessdata).map(
                                        ([illness, illnessname], index) =>
                                          illness === category
                                            ? illnessname.map(
                                                (illnessnames, index) => (
                                                  <option value={illnessnames}>
                                                    {illnessnames}
                                                  </option>
                                                ),
                                              )
                                            : null,
                                      ),
                                    )}
                                  </select>
                                </div>
                              </div>
                            )}
                            <label className="label poppins text-sm">
                              Note
                            </label>
                            <textarea
                              className="textarea textarea-bordered w-full"
                              placeholder="Note"
                              value={note}
                              onChange={(e) => setNote(e.target.value)}
                            ></textarea>
                            <button
                              type="submit"
                              className="mt-6 mb-2 btn bg-base-content text-base-300 ont-semibold rounded-md w-full  transition hover:bg-base-content/80"
                            >
                              {loading && <IsSubmitting />}Book Appointment
                            </button>
                          </form>
                        </div>
                      </dialog>
                    </div>
                  ))}
                </div>

                <Pagination className="mt-4">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        className={
                          currentPage === 0
                            ? "pointer-events-none opacity-50 font-semibold text-accent"
                            : "text-accent text-primary"
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
                            ? "pointer-events-none opacity-50 font-semibold text-accent"
                            : "text-accent text-primary"
                        }
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(totalPages - 1, prev + 1),
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
                  Currently no doctor available...
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col justify-center items-center relative">
          <img
            src={treatment}
            alt=""
            className="w-full flex h-[105vh] md:h-[115vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-foreground to-black/20  pl-4 w-full flex flex-col items-center p-4  top-0">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-6 mt-4">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold font-poppins  xl:pr-6 xl:border-r-2 p-2 border-r-secondary uppercase text-center xl:text-left">
                  INJURY & <br />
                  ILLNESS RECORD
                </h1>
                <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 xl:hidden" />
              </div>
              <p className="max-w-xl font-poppins md:max-w-2xl text-center xl:text-left">
                Easily maintain a detailed record of all your past injuries and
                illnesses, allowing you to manage and monitor your health
                history more effectively. Fill the form by clicking the button
                provided below.
              </p>
            </div>
            <button
              className="btn btn-info text-info-content border-0 rounded-full pl-1 mt-4 "
              onClick={() =>
                document.getElementById("my_health_data").showModal()
              }
            >
              <IoIosAddCircle className="size-10" />
              Add Injuries or Illness
            </button>
            <dialog id="my_health_data" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    <CgClose className="size-5" />
                  </button>
                </form>
                <p className="text-sm font-inter font-medium">
                  Press ESC key or click on ✕ button to close
                </p>
                <InjuryAndIllnessForm />
              </div>
            </dialog>
            <div className="mt-4 w-full">
              {" "}
              <Carousel items={cards} />
            </div>
            {injury.length + illness.length === 0 && (
              <div className="flex flex-col justify-center items-center mt-6 backdrop-blur-sm p-10 rounded-xl md:w-[30rem] h-[25rem] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] border border-[rgba(255,255,255,0.10)]">
                <img src={no_data} alt="no data" className="size-32" />
                <h1 className="text-2xl font-semibold font-poppins text-center uppercase">
                  No data found
                </h1>
                <h1 className="text-base italic text-accent-foreground font-base text-center mt-2">
                  Currently no injury and illness data available...
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Aid;
