import React from "react";

const ActivityFeed = () => {
  // Static activity data representing daily bars with different heights and colors
  const activityData = [
    {
      day: "Mon",
      bars: [
        { height: 30, color: "bg-cyan-400" },
        { height: 45, color: "bg-blue-500" },
      ],
    },
    {
      day: "Tue",
      bars: [
        { height: 60, color: "bg-cyan-400" },
        { height: 35, color: "bg-purple-500" },
      ],
    },
    {
      day: "Wed",
      bars: [
        { height: 25, color: "bg-gray-300" },
        { height: 40, color: "bg-cyan-400" },
        { height: 55, color: "bg-blue-500" },
      ],
    },
    {
      day: "Thu",
      bars: [
        { height: 20, color: "bg-gray-300" },
        { height: 50, color: "bg-cyan-400" },
      ],
    },
    {
      day: "Fri",
      bars: [
        { height: 35, color: "bg-cyan-400" },
        { height: 65, color: "bg-green-400" },
        { height: 25, color: "bg-purple-500" },
      ],
    },
    {
      day: "Sat",
      bars: [
        { height: 45, color: "bg-blue-500" },
        { height: 30, color: "bg-gray-300" },
      ],
    },
    {
      day: "Sun",
      bars: [
        { height: 40, color: "bg-cyan-400" },
        { height: 55, color: "bg-blue-500" },
      ],
    },
  ];

  return (
    // Main container with background color, rounded corners, padding, full width, and top margin
    <div className="bg-[#f6faff] rounded-lg p-4 w-full mt-2">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-gray-800">Activity</h3>
        <span className="text-xs text-gray-400">3 appointments this week</span>
      </div>

      {/* Chart Container */}
      <div className="relative h-32">
        {/* Chart Area: Displays bars for each day's activity */}
        <div className="flex items-end justify-between h-full px-2">
          {activityData.map((dayData) => (
            <div key={dayData.day} className="flex flex-col items-center">
              {/* Bars for each day with predefined heights and colors */}
              <div
                className="flex items-end gap-0.5 mb-2"
                style={{ height: "80px" }}
              >
                {dayData.bars.map((bar, barIndex) => (
                  <div
                    key={barIndex}
                    className={`w-2 ${bar.color} rounded-t-sm`}
                    style={{ height: `${bar.height}px` }}
                  ></div>
                ))}
              </div>

              {/* Day label below the bars */}
              <span className="text-xs text-gray-500">{dayData.day}</span>
            </div>
          ))}
        </div>

        {/* Subtle background grid lines for reference */}
        <div className="absolute inset-0 pointer-events-none">
          {[20, 40, 60].map((line) => (
            <div
              key={line}
              className="absolute w-full border-t border-gray-50"
              style={{ bottom: `${line + 20}px` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
