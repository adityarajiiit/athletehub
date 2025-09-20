import React from "react";
import { useState } from "react";
import { sportActivities } from "@/constants/data";
function EventForm() {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [Sports, setSports] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  return (
    <form action="" className="font-poppins text-sm">
      <div className="flex flex-col justify-center items-center  p-2  w-fit ">
        <div className="flex flex-row gap-x-2 w-full">
          <div className="form-control w-full max-w-xs">
            <label className="label">Event Name:</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">Event Type:</label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
              className="select input-bordered w-full"
            >
              <option value="">Select type</option>
              <option value="Seminar">Seminar</option>
              <option value="Workshop">Workshop</option>
              <option value="Festival">Festival</option>
              <option value="Competition">Competition</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 w-full">
          <div className="form-control w-full max-w-xs">
            <label className="label">Sports:</label>
            <select
              value={Sports}
              onChange={(e) => setSports(e.target.value)}
              required
              className="input input-bordered w-full"
            >
              <option value="">Select type</option>
              {sportActivities.map((sports, sportsindex) =>
                Object.keys(sports).map((sport, sportindex) => (
                  <option
                    key={`${sportindex}`}
                    value={sport}
                    className="bg-black text-destructive custom-scrollbar"
                  >
                    {sport}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">Start Date :</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex flex-row gap-x-2 w-full">
          <div className="form-control w-full ">
            <label className="label">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">Event Location:</label>
            <input
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">Organisation Name :</label>
          <input
            type="text"
            value={organizerName}
            onChange={(e) => setOrganizerName(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mt-2">
          <label className="label gap-4">
            <input
              type="checkbox"
              value={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.value)}
              required
              className="p-2 h-4 w-4"
            />
            I agree to the terms and conditions
          </label>
        </div>
      </div>
      <button type="submit" className="mt-4 btn btn-info w-full">
        Submit
      </button>
    </form>
  );
}

export default EventForm;
