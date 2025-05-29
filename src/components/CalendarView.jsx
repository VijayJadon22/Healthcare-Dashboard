import React from "react"; // Importing React for component functionality

// CalendarView Component
const CalendarView = () => {
  return (
    // Main container with background color, rounded corners, and padding
    <div className="bg-white rounded-lg p-4">
      {/* Header Section: Displays the month and navigation buttons */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-gray-800">October 2021</span>
        <div className="flex gap-1">
          {/* Left navigation button for previous month */}
          <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right navigation button for next month */}
          <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-100">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar Grid Section */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {/* Day Headers */}
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-xs text-gray-500 text-center py-2">
            {day}
          </div>
        ))}

        {/* Calendar Days with a highlighted active day (28) */}
        {[25, 26, 27].map((day) => (
          <div key={day} className="text-center py-2 text-sm">
            {day}
          </div>
        ))}
        <div className="text-center py-2 text-sm bg-blue-500 text-white rounded">
          28
        </div>
        {[29, 30, 31].map((day) => (
          <div key={day} className="text-center py-2 text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Time Schedule Section */}
      <div className="grid grid-cols-7 gap-1 text-xs mb-6">
        {/* Row 1: Time slots with a highlighted important time (15:00) */}
        {["10:00", "08:00", "12:00", "10:00", "15:00", "09:00", "09:00"].map(
          (time, idx) => (
            <div key={idx} className="text-center py-1">
              <span
                className={`px-2 py-1 rounded text-xs ${
                  time === "15:00"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-500"
                }`}
              >
                {time}
              </span>
            </div>
          )
        )}

        {/* Row 2: Different times with highlighted important schedules */}
        {["11:00", "09:00", "—", "11:00", "14:00", "14:00", "10:00"].map(
          (time, idx) => (
            <div key={idx} className="text-center py-1">
              <span
                className={`px-2 py-1 rounded text-xs ${
                  time === "09:00" && idx === 1
                    ? "bg-blue-500 text-white"
                    : time === "11:00" && idx === 3
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-500"
                }`}
              >
                {time}
              </span>
            </div>
          )
        )}

        {/* Row 3: Additional scheduled times */}
        {["12:00", "10:00", "13:00", "—", "16:00", "15:00", "11:00"].map(
          (time, idx) => (
            <div key={idx} className="text-center py-1">
              <span className="text-gray-500">{time}</span>
            </div>
          )
        )}
      </div>

      {/* Appointment Cards Section */}
      <div className="flex flex-col sm:flex-row sm:justify-evenly gap-3">
        {/* Dentist Appointment Card */}
        <div className="bg-blue-600 text-white p-3 rounded-xl text-xs flex items-start justify-between w-full sm:w-auto">
          <div>
            <div className="font-semibold">Dentist</div>
            <div className="text-sm opacity-90">09:00-11:00</div>
            <div className="text-sm opacity-90">Dr Cameron Williamson</div>
          </div>
          <div className="ml-2 text-lg">🦷</div>
        </div>

        {/* Physiotherapy Appointment Card */}
        <div className="bg-[#f6faff] text-blue-800 p-3 rounded-xl text-xs flex items-start justify-between w-full sm:w-auto">
          <div>
            <div>Physiotherapy Appointment</div>
            <div className="text-sm">11:00-12:00</div>
            <div className="text-sm">Dr Kevin Djoros</div>
          </div>
          <div className="ml-2 text-lg">💪</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
