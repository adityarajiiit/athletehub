import React from "react";
import InjuryAndIllnessForm from "@/components/aidSComponents/injuryAndIllnessForm";
import { CgClose } from "react-icons/cg";
function InjuryData({ injury }) {
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
            <td>{injury.InjuryName}</td>{" "}
          </tr>
          <tr>
            <td className="font-semibold text-muted">New injury </td>
            <td>{injury.newInjury}</td>
            <td className="font-semibold text-muted">Priority </td>
            <td>{injury.Priority}</td>
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
            <td className="font-semibold text-muted">Level of pain </td>
            <td>{injury.levelofPain}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Training Status </td>
            <td>{injury.trainingstatus}</td>
            <td className="font-semibold text-muted">Injury date </td>
            <td>{injury.dateofInjury}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Recovery date </td>
            <td>{injury.healthproblemresolved}</td>
            <td className="font-semibold text-muted">Training restriction </td>
            <td>{injury.trainingrestriction}</td>
          </tr>
          <tr>
            {" "}
            <td className="font-semibold text-muted">Details </td>
            <td>{injury.details}</td>
            <td className="font-semibold text-muted">Presonal program </td>
            <td>{injury.personnalprogram}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">
              Additional information{" "}
            </td>
            <td>{injury.additionalinformation}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="btn px-6 btn-neutral"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Edit
        </button>
        <button className="btn btn-error">Delete</button>
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
