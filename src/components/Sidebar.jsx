import React from "react";
import { RxDashboard } from "react-icons/rx";
import { VscHistory } from "react-icons/vsc";
import { IoCalendarNumber } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { BsChatDotsFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="hidden sm:block w-2/5 md:w-1/5 border text-gray-400 p-6 ">
      <div className="w-1/2">
        <h1 className="text-sm mb-2">General</h1>
        <div className="flex items-center justify-start">
          <RxDashboard color="blue" />
          <span className="text-gray-600 font-semibold ml-2">Dashboard</span>
        </div>
        <div className="flex items-center justify-start">
          <VscHistory />
          <span className="ml-2">History</span>
        </div>
        <p>Calender</p>
        <p>Appointments</p>
        <p>Statistics</p>
      </div>
      <div>
        <h1 className="text-sm">Tools</h1>
        <p>Chat</p>
        <p>Support</p>
      </div>
    </div>
  );
};

export default Sidebar;
