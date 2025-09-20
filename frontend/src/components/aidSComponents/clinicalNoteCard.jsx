import React from "react";

function ClinicalNoteCard({ appointment }) {
  return (
    <div className="overflow-x-auto p-3 py-4 bg-base-100 rounded-xl w-fit">
      {" "}
      <table className="table table-xs">
        <thead></thead>
        <tbody>
          <tr>
            <td className="font-semibold text-muted">Appointment Date </td>
            <td>{appointment.date}</td>
            <td className="font-semibold text-muted">Appointment Time </td>
            <td>{appointment.time}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Duration </td>
            <td>{appointment.duration}</td>
            <td className="font-semibold text-muted">Task </td>
            <td>{appointment.task}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Note </td>
            <td>{appointment.note}</td>
            <td className="font-semibold text-muted">Objective </td>

            <td>{appointment.objective}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Subjective</td>
            <td>{appointment.subjective}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Assessment </td>
            <td>{appointment.assessment}</td>
          </tr>
          <tr>
            <td className="font-semibold text-muted">Plan </td>
            <td>{appointment.plan}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ClinicalNoteCard;
