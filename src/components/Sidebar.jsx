import React from "react";
import { RxDashboard } from "react-icons/rx"; // Dashboard icon
import { VscHistory } from "react-icons/vsc"; // History icon
import { IoCalendarNumber } from "react-icons/io5"; // Calendar icon
import { BsFillPlusSquareFill } from "react-icons/bs"; // Appointments icon
import { FcStatistics } from "react-icons/fc"; // Statistics icon
import { BsChatDotsFill } from "react-icons/bs"; // Chat icon
import { BsFillTelephoneFill } from "react-icons/bs"; // Support icon
import { IoSettings } from "react-icons/io5"; // Settings icon

const Sidebar = () => {
  return (
    // Sidebar container: hidden on small screens (sm:hidden), displayed on larger screens (sm:flex)
    <div className="hidden sm:flex w-2/5 md:w-1/5 text-gray-400 p-6 flex-col justify-start">
      {/* General Section */}
      <div className="flex flex-col justify-between h-55 pl-4">
        <h1 className="text-sm mb-2">General</h1>

        {/* Dashboard Link */}
        <div className="flex items-center justify-start text-blue-500">
          <RxDashboard /> {/* Dashboard Icon */}
          <span className="font-semibold ml-2">Dashboard</span> {/* Label */}
        </div>

        {/* History Link */}
        <div className="flex items-center justify-start">
          <VscHistory /> {/* History Icon */}
          <span className="ml-2">History</span>
        </div>

        {/* Calendar Link */}
        <div className="flex items-center justify-start">
          <IoCalendarNumber /> {/* Calendar Icon */}
          <span className="ml-2">Calendar</span>
        </div>

        {/* Appointments Link */}
        <div className="flex items-center justify-start">
          <BsFillPlusSquareFill /> {/* Appointments Icon */}
          <span className="ml-2">Appointments</span>
        </div>

        {/* Statistics Link */}
        <div className="flex items-center justify-start">
          <FcStatistics /> {/* Statistics Icon */}
          <span className="ml-2">Statistics</span>
        </div>
      </div>

      {/* Tools Section */}
      <div className="w-2/3 flex flex-col justify-between h-24 mt-6 pl-4">
        <h1 className="text-sm">Tools</h1>

        {/* Chat Link */}
        <div className="flex items-center justify-start">
          <BsChatDotsFill /> {/* Chat Icon */}
          <span className="ml-2">Chat</span>
        </div>

        {/* Support Link */}
        <div className="flex items-center justify-start">
          <BsFillTelephoneFill /> {/* Support Icon */}
          <span className="ml-2">Support</span>
        </div>
      </div>

      {/* Settings Section */}
      <div className="flex items-center justify-start mt-20 pl-4">
        <IoSettings /> {/* Settings Icon */}
        <span className="ml-2">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
