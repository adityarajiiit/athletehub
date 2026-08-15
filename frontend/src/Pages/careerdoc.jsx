import React, { useEffect } from "react";
import Header from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useState } from "react";
import no_data from "/no-data.png";
import { Carousel, CarouselCard } from "@/shadcnComponents/ui/carousel";
import appointmentImg from "/appointment.jpg";
import Appointmentcard from "@/components/appointmentcard";
import ClinicalNotes from "@/components/aidSComponents/clinicalNotesForm";
import { axiosInstant } from "@/lib/axiosInstance";
import KineticDotsLoader from "@/components/ui/loading";
function Careerdoc() {
  const [appointment, setAppointments] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const getAppointments = async () => {
    setPageLoading(true);
    try {
      const response = await axiosInstant.get("/appointment/get/appointments");
      console.log(response.data);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setPageLoading(false);
    }
  };
  useEffect(() => {
    getAppointments();
  }, []);

  const cardsData = appointment.map((appointmentdata, index) => ({
    category: "Appointment Details",
    title: appointmentdata?.athlete?.user?.name || "Unknown Athlete",
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
            <ClinicalNotes appointmentId={appointmentdata.id} />
          </div>
        </dialog>
      </div>
    ),
  }));

  const cards = cardsData.map((card, index) => (
    <CarouselCard key={`${card.title}-${index}`} card={card} index={index} />
  ));

  if (pageLoading) {
    return (
      <div className="flex h-screen flex-col justify-between items-center">
        <div className="flex flex-1 items-center justify-center">
          <KineticDotsLoader />
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col justify-between items-center min-h-screen">
      <Header></Header>

      <div className="flex flex-col justify-center items-center mt-28 w-full">
        <div className="flex flex-col justify-center items-start w-full">
          <div className="flex flex-col items-start justify-start p-4 w-full">
            <h1 className="text-4xl font-bold font-poppins ">APPOINTMENTS</h1>
            <hr className="h-0 border-2 border-secondary w-20 rounded-full mt-2 " />
            <p className=" max-w-lg mt-4">
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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Careerdoc;
