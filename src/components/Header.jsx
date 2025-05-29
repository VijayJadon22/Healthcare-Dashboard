import React from "react";
import { CiSearch } from "react-icons/ci"; // Importing Search Icon
import { FaBell } from "react-icons/fa"; // Importing Notification Bell Icon

const Header = () => {
  return (
    // Header container: occupies full width and aligns items horizontally
    <header className="relative w-full flex items-center">
      {/* Sidebar Title (Visible only on larger screens) */}
      <div className="hidden sm:block text-3xl w-1/5 font-bold p-6">
        <span className="text-[#01dfef]">Health</span>
        <span className="text-[#35316a]">care.</span>
      </div>

      {/* Search Bar Section */}
      <div className="w-full sm:w-2/5 rounded-lg p-4 flex justify-between items-center ml-1">
        <CiSearch size={22} className="relative -right-6" /> {/* Search Icon */}
        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-200 w-full pl-8 py-2 rounded-lg"
        />
        <FaBell className="text-blue-800 relative right-6" size={18} />{" "}
        {/* Notification Bell */}
      </div>

      {/* Profile Section (Visible only on larger screens) */}
      <div className="hidden sm:flex w-2/5 items-center justify-end p-6">
        {/* Profile Image */}
        <img
          className="rounded-full w-8 h-8"
          src="https://pnghq.com/wp-content/uploads/pnghq.com-profile-avatar-png-768x804.png"
          alt="profile-image"
        />

        {/* Add New Button */}
        <span className="h-9 w-9 bg-blue-800 text-2xl text-white text-center rounded-md ml-4">
          +
        </span>
      </div>
    </header>
  );
};

export default Header;
