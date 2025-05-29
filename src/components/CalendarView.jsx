import React from "react"; // Importing React for component functionality

// CalendarView Component
const CalendarView = () => {
  return (
    // Main container with a white background, rounded corners, and padding
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
        <div className="text-xs text-gray-500 text-center py-2">Mon</div>
        <div className="text-xs text-gray-500 text-center py-2">Tues</div>
        <div className="text-xs text-gray-500 text-center py-2">Wed</div>
        <div className="text-xs text-gray-500 text-center py-2">Thurs</div>
        <div className="text-xs text-gray-500 text-center py-2">Fri</div>
        <div className="text-xs text-gray-500 text-center py-2">Sat</div>
        <div className="text-xs text-gray-500 text-center py-2">Sun</div>

        {/* Calendar Days with a highlighted active day (28) */}
        <div className="text-center py-2 text-sm">25</div>
        <div className="text-center py-2 text-sm">26</div>
        <div className="text-center py-2 text-sm">27</div>
        <div className="text-center py-2 text-sm bg-blue-500 text-white rounded">
          28
        </div>
        <div className="text-center py-2 text-sm">29</div>
        <div className="text-center py-2 text-sm">30</div>
        <div className="text-center py-2 text-sm">31</div>
      </div>

      {/* Time Schedule Section - Aligned with calendar grid */}
      <div className="grid grid-cols-7 gap-1 text-xs mb-6">
        {/* Row 1: Time slots */}
        <div className="text-center py-1 text-gray-500">10:00</div>
        <div className="text-center py-1 text-gray-500">08:00</div>
        <div className="text-center py-1 text-gray-500">12:00</div>
        <div className="text-center py-1 text-gray-500">10:00</div>
        <div className="text-center py-1 bg-purple-100 text-purple-700 px-2 py-1 rounded">
          15:00
        </div>
        <div className="text-center py-1 text-gray-500">09:00</div>
        <div className="text-center py-1 text-gray-500">09:00</div>

        {/* Row 2: Additional time slots with highlighted schedules */}
        <div className="text-center py-1 text-gray-500">11:00</div>
        <div className="text-center py-1 bg-blue-500 text-white px-2 py-1 rounded">
          09:00
        </div>
        <div className="text-center py-1 text-gray-500">—</div>
        <div className="text-center py-1 bg-purple-100 text-purple-700 px-2 py-1 rounded">
          11:00
        </div>
        <div className="text-center py-1 text-gray-500">14:00</div>
        <div className="text-center py-1 text-gray-500">14:00</div>
        <div className="text-center py-1 text-gray-500">10:00</div>
      </div>
    </div>
  );
};

export default CalendarView;
