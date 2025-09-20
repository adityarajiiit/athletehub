import React from "react";
import { BellRing } from "lucide-react";
function Appointmentcard({ props, handleclick }) {
  return (
    <div className="flex flex-col justify-between bg-base-100 rounded-xl mt-2   h-full p-4 ">
      <div className="flex justify-center items-center gap-2 p-2">
        <BellRing className="stroke-warning size-5"></BellRing>
        <p className=" text-lg font-semibold text-accent uppercase font-poppins">
          Appointment
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table font-poppins">
          <thead>
            <tr className=" text-sm text-muted">
              <th>Parameter Type</th>
              <th>Value</th>
              <th>Parameter Type</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold text-secondary">Patient Name </td>
              <td>{props.patientname}</td>{" "}
              <td className="font-semibold text-secondary">Category </td>
              <td>{props.category}</td>
            </tr>
            {props.category === "Injury" && (
              <tr>
                <td className="font-semibold text-secondary">Body part </td>
                <td>{props.bodyPart}</td>{" "}
                <td className="font-semibold text-secondary">
                  Affected tissues
                </td>
                <td>{props.tissueType}</td>
              </tr>
            )}
            {props.category === "Injury" && (
              <tr>
                <td className="font-semibold text-secondary">Injury </td>
                <td>{props.InjuryName}</td>
              </tr>
            )}
            {props.category === "Illness" && (
              <tr>
                {" "}
                <td className="font-semibold text-secondary">
                  Illness category{" "}
                </td>
                <td>{props.illnesscategory}</td>
                <td className="font-semibold text-secondary">Illness name</td>
                <td>{props.illnessname}</td>
              </tr>
            )}
            <tr>
              {" "}
              <td className="font-semibold text-secondary">Date </td>
              <td>{props.date}</td>
            </tr>
            <tr>
              <td className="font-semibold text-secondary">Start time </td>
              <td>{props.startTime}</td>
              <td className="font-semibold text-secondary">End time </td>
              <td>{props.endTime}</td>
            </tr>
            <tr>
              <td className="text-secondary font-semibold ">Note</td>
              <td>{props.note || "N/A"}</td>
            </tr>
          </tbody>
        </table>
        {props.status === "Schedule" ? (
          <div className="flex  justify-start items-center gap-6 mt-4">
            <button className="btn btn-primary" onClick={handleclick}>
              Accept & Send Note
            </button>

            <button className="btn btn-error w-40">Decline</button>
          </div>
        ) : (
          <button className="btn btn-info mt-4">{props.status} </button>
        )}
      </div>
    </div>
  );
}

export default Appointmentcard;
