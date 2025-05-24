import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative  w-full flex  border-b-1  items-center  px-6">
      {/* Sidebar-width title */}
      <div className="text-2xl w-1/6 font-bold">
        <span className="text-[#01dfef]">Health</span>
        <span className="text-[#35316a]">care.</span>
      </div>
      <div className="w-3/6  rounded-lg p-4 flex  justify-between items-center">
        <CiSearch size={22} className="relative -right-6" />
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-200 w-full pl-8 py-2 rounded-lg"
        />

        <FaBell className="text-blue-800 relative right-6" size={18} />
      </div>
      <div className="w-2/6 flex items-center  justify-end">
        <img
          className="rounded-full w-8 h-8"
          src="https://pnghq.com/wp-content/uploads/pnghq.com-profile-avatar-png-768x804.png"
          alt="profile-image"
        />
        <span className=" h-9 w-9 bg-blue-800 text-2xl text-white text-center rounded-md ml-4">
          +
        </span>
      </div>
    </header>
  );
};

export default Header;
