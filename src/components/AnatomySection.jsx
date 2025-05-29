import React from "react";
import bodyImage from "../assets/humanBody.png"; // Importing the body image asset
import { FaHeart } from "react-icons/fa"; // Importing heart icon (not used in the code)

const AnatomySection = () => {
  return (
    // Main container: positioned relatively, flexible width (full on small screens, 2/3 on medium screens)
    <div className="relative w-full md:w-2/3 flex items-center justify-center p-6 rounded-lg bg-[#f6faff] shadow-md mt-2">
      {/* Anatomical Body Image */}
      <img className="" src={bodyImage} alt="Anatomy-image" />

      {/* Healthy Heart Label */}
      <div className="absolute top-30 -right-1 p-1 rounded-lg bg-blue-900 text-white flex items-center justify-between">
        <span className="ml-1 text-xs p-1">❤️Healthy Heart</span>
      </div>

      {/* Healthy Leg Label */}
      <p className="absolute bottom-30 left-0 p-1 rounded-lg bg-cyan-300 flex items-center justify-between text-[#3734a9]">
        <span className="ml-1 text-xs p-1">🦵Healthy Leg</span>
      </p>
    </div>
  );
};

export default AnatomySection;
