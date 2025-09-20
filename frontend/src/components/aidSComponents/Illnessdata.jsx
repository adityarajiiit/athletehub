import React from "react";
import InjuryAndIllnessForm from "@/components/aidSComponents/injuryAndIllnessForm";
import { CgClose } from "react-icons/cg";
function Illnessdata({ illness }) {
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
            <td className="font-semibold text-muted">New illness </td>
            <td>{illness.newIllness}</td>
            <td className="font-semibold text-muted">Priority </td>
            <td>{illness.Priority}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Level of pain </td>
            <td>{illness.levelofPain}</td>
            <td className="font-semibold text-muted">
              Return to partial training
            </td>
            <td>{illness.returntopartialtraining}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">
              Return to full training
            </td>
            <td>{illness.returntofulltraining}</td>
            <td className="font-semibold text-muted">Return to cometition</td>
            <td>{illness.returntocompetition}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Training Status </td>
            <td>{illness.trainingstatus}</td>
            <td className="font-semibold text-muted">Illness date </td>
            <td>{illness.dateofIllness}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Recovery date </td>
            <td>{illness.healthproblemresolved}</td>
            <td className="font-semibold text-muted">Personal program </td>
            <td>{illness.personnalprogram}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Comment </td>
            <td>{illness.comments}</td>
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

export default Illnessdata;
