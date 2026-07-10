import React from "react";
import InjuryAndIllnessForm from "@/components/aidSComponents/injuryAndIllnessForm";
import { CgClose } from "react-icons/cg";
import IsSubmitting from "../isSubmitting";
import toast from "react-hot-toast";
import { axiosInstant } from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
function InjuryData({ injury }) {
  const injuryId = injury.id;
  console.log(injuryId);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axiosInstant.delete(`/aid/injuries/${injuryId}`);
      toast.success("Injury deleted successfully");
      console.log(response.data);
      navigate(0);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error deleting injury");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className=" text-sm text-secondary">
            <th>Parameter Type</th>
            <th>Value</th>
            <th>Parameter Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold text-muted">Injury-type </td>
            <td>{injury.type}</td>
            <td className="font-semibold text-muted">Body part </td>
            <td>{injury.bodyPart}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Affected tissues </td>
            <td>{injury.tissueType}</td>
            <td className="font-semibold text-muted">Injury </td>
            <td>{injury.injuryName}</td>{" "}
          </tr>

          <tr>
            <td className="font-semibold text-muted">Sport </td>
            <td>{injury.sport}</td>
            <td className="font-semibold text-muted">Activity </td>

            <td>{injury.activity}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Cause of injury </td>
            <td>{injury.mechanism}</td>
            <td className="font-semibold text-muted">Severity</td>
            <td>{injury.severity || "N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Training Status </td>
            <td>{injury.trainingStatus}</td>
            <td className="font-semibold text-muted">Injury date </td>
            <td>{new Date(injury.date).toDateString() || "Invalid Date"}</td>
          </tr>

          <tr>
            {" "}
            <td className="font-semibold text-muted">Presonal program </td>
            <td>{injury.personalProgram || "Not provided..."}</td>
            <td className="font-semibold text-muted">Comments</td>
            <td>{injury.comment || "No comment!"}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button className="btn btn-error" onClick={handleDelete}>
          {loading && <IsSubmitting />}
          Delete
        </button>
      </div>
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
          <InjuryAndIllnessForm />
        </div>
      </dialog>
    </div>
  );
}
export default InjuryData;
