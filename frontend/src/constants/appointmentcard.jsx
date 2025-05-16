import React from "react";
import { BellRing, XCircle } from "lucide-react";
function Appointmentcard(props) {
  return (
    <div className="flex flex-col justify-between bg-black rounded-md mt-2 border border-secondary/60 h-full p-2 w-fit pl-4">
      <div className="flex justify-center items-center gap-2 p-2">
        <BellRing className="stroke-destructive"></BellRing>
        <p className=" rounded-t-md text-lg font-semibold text-destructive">
          Appointment
        </p>
      </div>

      <div className="flex flex-col justify-center items-start w-full">
        <div>
          <p className="text-destructive">
            <span className="font-semibold text-secondary">
              Patient Name :{" "}
            </span>
            {props.patientname}
          </p>
          <p className="text-destructive">
            <span className="font-semibold text-secondary">Category : </span>
            {props.category}
          </p>
        </div>
        {props.category === "Injury" && (
          <div className="w-full flex  justify-center items-start">
            <div className="grid grid-cols-2 gap-2 w-full">
              <p className="text-destructive">
                <span className="font-semibold text-secondary">
                  Body part :{" "}
                </span>
                {props.bodyPart}
              </p>
              <p className="text-destructive">
                <span className="font-semibold text-secondary">
                  Affected tissues :{" "}
                </span>
                {props.tissueType}
              </p>
            </div>
            <p className="text-destructive">
              <span className="font-semibold text-secondary">Injury : </span>
              {props.InjuryName}
            </p>
          </div>
        )}
        {props.category === "Illness" && (
          <div className="grid grid-cols-2 gap-2 w-full">
            <p className="text-destructive">
              <span className="font-semibold text-secondary">
                Illness category :{" "}
              </span>
              {props.illnesscategory}
            </p>
            <p className="text-destructive">
              <span className="font-semibold text-secondary">
                Illness name :{" "}
              </span>
              {props.illnessname}
            </p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 w-full">
          <p className="text-destructive">
            <span className="font-semibold text-secondary">Date : </span>
            {props.date}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          <p className="text-destructive">
            <span className="font-semibold text-secondary">Start time : </span>
            {props.startTime}
          </p>

          <p className="text-destructive">
            <span className="font-semibold text-secondary">End time : </span>
            {props.endTime}
          </p>
        </div>
        {props.status === "Schedule" ? (
          <div className="flex  justify-around items-center gap-6 mt-2">
            <button
              className="p-1 pl-2 pr-2 rounded-sm  text-white border-2 border-orange-500 hover:bg-orange-500 "
              onClick={props.handleclick}
            >
              Accept & Send Note
            </button>

            <XCircle className="stroke-orange-400 h-9 w-9 stroke-2 hover:opacity-80" />
          </div>
        ) : (
          <p className="text-destructive">
            <span className="font-semibold text-secondary">Status : </span>
            {props.status}
          </p>
        )}
      </div>
    </div>
  );
}

export default Appointmentcard;
