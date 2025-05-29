import React from "react";
import { RxDashboard } from "react-icons/rx";
import { VscHistory } from "react-icons/vsc";
import { IoCalendarNumber } from "react-icons/io5";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
import { BsChatDotsFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex w-2/5 md:w-1/5  text-gray-400 p-6  flex-col justify-start ">
      <div className=" flex flex-col justify-between h-1/3  pl-4">
        <h1 className="text-sm mb-2">General</h1>
        <div className="flex items-center justify-start text-blue-500">
          <RxDashboard />
          <span className=" font-semibold ml-2">Dashboard</span>
        </div>
        <div className="flex items-center justify-start">
          <VscHistory />
          <span className="ml-2">History</span>
        </div>
        <div className="flex items-center justify-start">
          <IoCalendarNumber />
          <span className="ml-2">Calender</span>
        </div>
        <div className="flex items-center justify-start">
          <BsFillPlusSquareFill />
          <span className="ml-2">Appointments</span>
        </div>
        <div className="flex items-center justify-start">
          <FcStatistics />
          <span className="ml-2">Statistics</span>
        </div>
      </div>
      <div className="w-2/3 flex flex-col justify-between h-24  mt-6  pl-4">
        <h1 className="text-sm">Tools</h1>
        <div className="flex items-center justify-start">
          <BsChatDotsFill />
          <span className="ml-2">Chat</span>
        </div>
        <div className="flex items-center justify-start">
          <BsFillTelephoneFill />
          <span className="ml-2">Support</span>
        </div>
      </div>
      <div className="flex items-center justify-start mt-20  pl-4">
        <IoSettings />
        <span className="ml-2">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
