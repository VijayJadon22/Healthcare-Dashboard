import React from "react";
import DashboardOverview from "./DashboardOverview"; // Importing the overview section
import ActivityFeed from "./ActivityFeed"; // Importing activity feed
import CalendarView from "./CalendarView.jsx"; // Importing calendar component
import UpcomingSchedule from "./UpcomingSchedule"; // Importing upcoming schedule component

const DashboardMainContent = () => {
  return (
    // Main container: Takes full width and adapts layout for different screen sizes
    <div className="w-full md:w-4/5 flex flex-col lg:flex-row">
      {/* Left Section: Displays Dashboard Overview & Activity Feed */}
      <div className="w-full lg:w-1/2 p-4">
        <DashboardOverview /> {/* Dashboard overview component */}
        <ActivityFeed /> {/* Activity feed showing health-related data */}
      </div>

      {/* Right Section: Displays Calendar & Upcoming Schedule */}
      <div className="w-full lg:w-1/2 p-4 bg-[#f6faff] rounded-lg">
        <CalendarView /> {/* Calendar section for appointments */}
        <UpcomingSchedule /> {/* List of upcoming medical schedules */}
      </div>
    </div>
  );
};

export default DashboardMainContent;
