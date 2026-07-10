import React, { useState } from "react";
import { BellRing } from "lucide-react";
import { axiosInstant } from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import IsSubmitting from "./isSubmitting";
function Appointmentcard({ props, handleclick }) {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const handleDecline = async () => {
    try {
      setloading(true);
      await axiosInstant.put(`/appointment/decline/${props.id}`);
      toast.success("Appointment declined successfully");
      navigate(0);
    } catch (error) {
      toast.error("Failed to decline appointment");
      console.error("Error declining appointment:", error);
    } finally {
      setloading(false);
    }
  };
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
              <td>{props?.athlete?.user?.name}</td>{" "}
              <td className="font-semibold text-secondary">Issue type</td>
              <td>{props.type}</td>
            </tr>
            {props.type === "Injury" && (
              <tr>
                <td className="font-semibold text-secondary">Body part </td>
                <td>{props.bodyPart}</td>{" "}
                <td className="font-semibold text-secondary">
                  Affected tissues
                </td>
                <td>{props.tissueType}</td>
              </tr>
            )}
            {props.type === "Injury" && (
              <tr>
                <td className="font-semibold text-secondary">Injury </td>
                <td>{props.injuryName}</td>
              </tr>
            )}
            {props.type === "Illness" && (
              <tr>
                {" "}
                <td className="font-semibold text-secondary">
                  Illness category{" "}
                </td>
                <td>{props.category}</td>
                <td className="font-semibold text-secondary">Illness name</td>
                <td>{props.illnessName}</td>
              </tr>
            )}
            <tr>
              {" "}
              <td className="font-semibold text-secondary">Date </td>
              <td>{new Date(props.date).toDateString()}</td>
            </tr>
            <tr>
              <td className="font-semibold text-secondary">Start time </td>
              <td>{new Date(props.startTime).toLocaleTimeString()}</td>
              <td className="font-semibold text-secondary">End time </td>
              <td>{new Date(props.endTime).toLocaleTimeString()}</td>
            </tr>
            <tr>
              <td className="text-secondary font-semibold ">Note</td>
              <td>{props.note || "N/A"}</td>
            </tr>
          </tbody>
        </table>
        {props.status === "pending" ? (
          <div className="flex  justify-start items-center gap-6 mt-4">
            <button className="btn btn-primary" onClick={handleclick}>
              Accept & Send Note
            </button>

            <button className={`btn btn-error w-40 `} onClick={handleDecline}>
              {loading && <IsSubmitting />}Decline
            </button>
          </div>
        ) : (
          <button
            className={`btn  mt-4 ${props.status === "declined" ? "btn-error" : "btn-info"}`}
          >
            {props.status}{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default Appointmentcard;
