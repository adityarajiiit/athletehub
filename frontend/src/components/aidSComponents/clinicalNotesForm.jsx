import React from "react";
import { useState } from "react";
import { tasksforrecovery } from "@/constants/data";
function ClinicalNotes() {
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [duration, setduration] = useState("");
  const [notes, setnotes] = useState("");
  const [tasks, settasks] = useState("");
  const [painlevel, setpainlevel] = useState("");
  const [painSensation, setpainSensation] = useState("");
  const [subjective, setsubjective] = useState("");
  const [objective, setobjective] = useState("");
  const [assessment, setassessment] = useState("");
  const [plan, setplan] = useState("");
  return (
    <form action="" className="">
      <div className="flex flex-row gap-x-2 w-full">
        <div className="form-control w-full ">
          <label className="label-text font-poppins font-medium text-sm my-1">
            Appt. Date:
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
            placeholder="Appointment date"
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control w-full ">
          <label className="label-text font-poppins font-medium text-sm my-1">
            Appt. Time:
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => settime(e.target.value)}
            placeholder="Appointment time"
            required
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="form-control w-full ">
        <label className="label-text font-poppins font-medium text-sm my-1">
          Duration:
        </label>
        <input
          type="time"
          value={duration}
          onChange={(e) => setduration(e.target.value)}
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control w-full">
        <label className="label-text font-poppins font-medium text-sm my-1">
          Notes :
        </label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setnotes(e.target.value)}
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control w-full">
        <label className="label-text font-poppins font-medium text-sm my-1">
          Tasks:
        </label>
        <select
          value={tasks}
          onChange={(e) => settasks(e.target.value)}
          required
          className="select select-bordered font-poppins"
        >
          <option value="">Select type</option>
          {tasksforrecovery.map((tasks, taskindex) => (
            <option value={tasks}>{tasks}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-4">
        <h1 className="text-xl font-bold font-poppins uppercase">Soap Notes</h1>
        <div className="flex flex-col gap-x-2 w-full">
          <div className="form-control w-full">
            <label className="label-text font-poppins font-medium text-sm my-1">
              Objective:
            </label>
            <input
              type="text"
              value={objective}
              onChange={(e) => setobjective(e.target.value)}
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control w-full">
            <label className="label-text font-poppins font-medium text-sm my-1">
              Subjective :
            </label>
            <input
              type="text"
              value={subjective}
              onChange={(e) => setsubjective(e.target.value)}
              required
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label-text font-poppins font-medium text-sm my-1">
            Assessment:
          </label>
          <input
            type="text"
            value={assessment}
            onChange={(e) => setassessment(e.target.value)}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control w-full">
          <label className="label-text font-poppins font-medium text-sm my-1">
            Plan :
          </label>
          <input
            type="text"
            value={plan}
            onChange={(e) => setplan(e.target.value)}
            required
            className="input input-bordered"
          />
        </div>
      </div>
      <button type="submit" className="mt-6 btn btn-info w-full">
        Send
      </button>
    </form>
  );
}

export default ClinicalNotes;
