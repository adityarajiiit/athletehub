import React from "react";

const EventCard = ({ events }) => {
  return (
    <div className="w-full mx-auto flex flex-col p-6 rounded-lg shadow-md border">
      <h2 className="text-2xl font-poppins font-bold mb-4 text-primary">
        {events.eventName || "Event Name"}
      </h2>
      <strong className="font-poppins">Type</strong>
      <span className="mb-2 font-poppins text-sm text-accent font-medium">
        {events.eventType || "N/A"}
      </span>
      <strong className="font-poppins">Sports Category</strong>
      <span className="mb-2 font-poppins text-sm text-accent font-medium">
        {events.Sports || "N/A"}
      </span>
      <strong className="font-poppins">Date</strong>
      <span className="mb-2 font-poppins text-sm text-accent font-medium">
        {events.startDate || "Start"} – {events.endDate || "End"}
      </span>
      <strong className="font-poppins">Location</strong>
      <span className="mb-2 font-poppins text-sm text-accent font-medium">
        {events.eventLocation || "N/A"}
      </span>
      <strong className="font-poppins">Organizer</strong>
      <span className="mb-2 font-poppins text-sm text-accent font-medium">
        {events.organizerName || "N/A"}
      </span>
    </div>
  );
};

export default EventCard;
