import React from "react";

const CalendarView = () => {
  return (
    // Main container with background, rounded corners, and padding
    <div className="bg-white rounded-lg p-4">

      {/* Header Section: Displays Month and Navigation Buttons */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-gray-800">October 2021</span>
        <div className="flex gap-1">
          {/* Left Navigation Button */}
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

          {/* Right Navigation Button */}
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
        <div className="text-xs text-gray-500 text-center py-2">Mon</div>
        <div className="text-xs text-gray-500 text-center py-2">Tues</div>
        <div className="text-xs text-gray-500 text-center py-2">Wed</div>
        <div className="text-xs text-gray-500 text-center py-2">Thurs</div>
        <div className="text-xs text-gray-500 text-center py-2">Fri</div>
        <div className="text-xs text-gray-500 text-center py-2">Sat</div>
        <div className="text-xs text-gray-500 text-center py-2">Sun</div>

        {/* Calendar Days */}
        <div className="text-center py-2 text-sm">25</div>
        <div className="text-center py-2 text-sm">26</div>
        <div className="text-center py-2 text-sm">27</div>
        <div className="text-center py-2 text-sm bg-blue-500 text-white rounded">28</div>
        <div className="text-center py-2 text-sm">29</div>
        <div className="text-center py-2 text-sm">30</div>
        <div className="text-center py-2 text-sm">31</div>
      </div>

      {/* Time Schedule Section */}
      <div className="grid grid-cols-7 gap-1 text-xs mb-6">
        {/* Row with different time slots */}
        <div className="text-center py-1">10:00</div>
        <div className="text-center py-1">08:00</div>
        <div className="text-center py-1">12:00</div>
        <div className="text-center py-1">10:00</div>
        <div className="text-center py-1 bg-purple-100 text-purple-700 px-2 py-1 rounded">15:00</div>
        <div className="text-center py-1">09:00</div>
        <div className="text-center py-1">09:00</div>
      </div>

      {/* Appointment Details Cards */}
      <div className="space-y-3 flex justify-evenly">
        {/* Dentist Appointment Card */}
        <div className="bg-blue-600 text-white p-2 rounded-xl text-xs flex items-start">
          <div>
            <div className="font-semibold">Dentist</div>
            <div className="text-sm opacity-90">09:00-11:00</div>
            <div className="text-sm opacity-90">Dr Cameron Williamson</div>
          </div>
          <div className="rounded ml-1">🦷</div>
        </div>

        {/* Physiotherapy Appointment Card */}
        <div className="bg-[#f6faff] text-blue-800 p-2 rounded-xl ml-4 text-xs flex items-start">
          <div>
            <div>Physiotherapy Appointment</div>
            <div className="text-sm">11:00-12:00</div>
            <div className="text-sm">Dr Kevin Djoros</div>
          </div>
          <div className="ml-1">💪</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
