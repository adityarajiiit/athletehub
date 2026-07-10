import React from "react";
import InjuryAndIllnessForm from "@/components/aidSComponents/injuryAndIllnessForm";
import { CgClose } from "react-icons/cg";
import IsSubmitting from "../isSubmitting";
import toast from "react-hot-toast";
import { axiosInstant } from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
function Illnessdata({ illness }) {
  const illnessId = illness.id;
  console.log(illnessId);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axiosInstant.delete(`/aid/illnesses/${illnessId}`);
      toast.success("illness deleted successfully");
      console.log(response.data);
      navigate(0);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error deleting illness");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="overflow-x-auto">
      {" "}
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
            <td className="font-semibold text-muted">Injury-category </td>
            <td>{illness.category}</td>
            <td className="font-semibold text-muted">Illness </td>
            <td>{illness.illnessName}</td>
          </tr>

          <tr>
            <td className="font-semibold text-muted">Severity</td>
            <td>{illness.severity || "N/A"}</td>
            <td className="font-semibold text-muted">Recovered from illness</td>
            <td>{illness.isrecovered ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Date of illness</td>
            <td>
              {new Date(illness.date).toLocaleDateString() || "Invalid Date"}
            </td>
            <td className="font-semibold text-muted">Training Status </td>
            <td>{illness.trainingStatus}</td>
          </tr>

          <tr>
            <td className="font-semibold text-muted">Personal program </td>
            <td>{illness.personalProgram || "No data provided"}</td>
            <td className="font-semibold text-muted">Comment </td>
            <td>{illness.comments || "No comments by user"}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button className="btn btn-error" onClick={handleDelete}>
          {loading && <IsSubmitting />}Delete
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

export default Illnessdata;
