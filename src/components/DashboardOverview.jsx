import React from "react";
import AnatomySection from "./AnatomySection"; // Importing the anatomical visualization section
import HealthStatusCards from "./HealthStatusCards"; // Importing health status cards component
import boneImage from "../assets/bone.png"; // Importing bone image asset
import lungsImage from "../assets/lungs.png"; // Importing lungs image asset
import teethImage from "../assets/teeth.png"; // Importing teeth image asset
import { RiArrowDropDownLine } from "react-icons/ri"; // Importing dropdown icon for selecting the week

// Health status data for different organs
const healthStatusData = [
  {
    organ: "Lungs",
    Date: "26 Okt 2021",
    image: lungsImage, // Associated image
    color: "red", // Color representing the organ's health status
    percentage: 60, // Percentage indicating health level
  },
  {
    organ: "Teeth",
    Date: "26 Okt 2021",
    image: teethImage,
    color: "green",
    percentage: 70,
  },
  {
    organ: "Bone",
    Date: "26 Okt 2021",
    image: boneImage,
    color: "orange",
    percentage: 50,
  },
];

// DashboardOverview Component
const DashboardOverview = () => {
  return (
    // Main container for the dashboard overview
    <main className="w-full">
      {/* Header section */}
      <div className="flex p-2 justify-between items-center">
        <h1 className="text-[#35316a] font-bold text-lg">Dashboard</h1>{" "}
        {/* Title */}
        <div className="flex items-center justify-center">
          <span className="text-blue-500 text-sm font-semibold">This Week</span>{" "}
          {/* Week selection */}
          <RiArrowDropDownLine size={20} /> {/* Dropdown icon */}
        </div>
      </div>

      {/* Content Section: Anatomy visualization & health status cards */}
      <div className="flex flex-col md:flex-row gap-4 justify-between w-full p-2">
        {/* Anatomy visualization */}
        <AnatomySection />

        {/* Health Status Cards - Displayed in a flex column layout */}
        <div className="w-full md:w-1/3 md:ml-2 mt-2 flex flex-col gap-6">
          {healthStatusData?.map((data, index) => (
            <HealthStatusCards data={data} key={index} /> // Mapping health status data to individual cards
          ))}
        </div>
      </div>
    </main>
  );
};

export default DashboardOverview;
