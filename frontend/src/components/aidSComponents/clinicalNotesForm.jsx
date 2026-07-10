import React from "react";
import { useState } from "react";
import { tasksforrecovery } from "@/constants/data";
import { axiosInstant } from "@/lib/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import IsSubmitting from "../isSubmitting";
function ClinicalNotes({ appointmentId }) {
  const [task, settask] = useState("");
  const [subjective, setsubjective] = useState("");
  const [objective, setobjective] = useState("");
  const [assessment, setassessment] = useState("");
  const [plan, setplan] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleAccept = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const response = await axiosInstant.put(
        `/appointment/accept/${appointmentId}`,
        {
          task,
          subjective,
          objective,
          assessment,
          plan,
        },
      );
      console.log(response.data);
      navigate(0);
      toast.success("Appointment accepted and notes added successfully");
    } catch (error) {
      toast.error("Failed to accept appointment");
      console.error("Error accepting appointment:", error);
    } finally {
      setloading(false);
    }
  };
  return (
    <form action="" className="">
      <div className="form-control w-full">
        <label className="label-text font-poppins font-medium text-sm my-1">
          Tasks:
        </label>
        <select
          value={task}
          onChange={(e) => settask(e.target.value)}
          required
          className="select select-bordered font-poppins"
        >
          <option value="">Select type</option>
          {tasksforrecovery.map((task) => (
            <option value={task} key={task}>
              {task}
            </option>
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
              placeholder="objective observations and measurements"
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
              placeholder="subjective information from the patient"
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
            placeholder="Instant tasks & assessments"
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
            placeholder="Plans for faster recovery"
            onChange={(e) => setplan(e.target.value)}
            required
            className="input input-bordered"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 btn btn-info w-full"
        onClick={handleAccept}
      >
        {loading && <IsSubmitting />}Send
      </button>
    </form>
  );
}

export default ClinicalNotes;
