import React from "react";

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    // Card container with light background color, padding, rounded corners, and flexible sizing
    <div className="bg-[#f6faff] p-3 rounded-lg flex-1">
      {/* Layout with gap between elements */}
      <div className="flex items-center gap-2">
        {/* Appointment Details */}
        <div>
          <div className="text-sm font-medium">{title}</div>{" "}
          {/* Appointment Title */}
          <div className="text-xs text-gray-500">{time}</div>{" "}
          {/* Scheduled Time */}
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
