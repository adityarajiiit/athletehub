import React from "react";

const EventCard = ({
  eventName,
  eventType,
  Sports,
  startDate,
  endDate,
  eventLocation,
  organizerName,
  agreeTerms,
}) => {
  return (
    <div className="w-full mx-auto mt-6 p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        {eventName || "Event Name"}
      </h2>

      <div className="mb-2">
        <strong>Type:</strong> {eventType || "N/A"}
      </div>

      <div className="mb-2">
        <strong>Sports Category:</strong> {Sports || "N/A"}
      </div>

      <div className="mb-2">
        <strong>Date:</strong> {startDate || "Start"} – {endDate || "End"}
      </div>

      <div className="mb-2">
        <strong>Location:</strong> {eventLocation || "N/A"}
      </div>

      <div className="mb-2">
        <strong>Organizer:</strong> {organizerName || "N/A"}
      </div>
    </div>
  );
};

export default EventCard;
