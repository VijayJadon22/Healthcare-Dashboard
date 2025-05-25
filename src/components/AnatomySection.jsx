import React from "react";
import bodyImage from "../assets/humanBody.png";
import { FaHeart } from "react-icons/fa";

const AnatomySection = () => {
  return (
    <div className="relative w-full sm:w-3/5 flex items-center justify-center p-6 rounded-lg bg-[#f6faff]">
      <img src={bodyImage} alt="Anantomy-image"  />
      <div className="absolute top-30 -right-6 px-2 py-1 rounded-lg bg-blue-900  text-white flex items-center justify-between">
        <span>❤️</span>
        <span className="ml-1 text-xs">Healthy Heart</span>
      </div>
      <p className="absolute bottom-25 left-0 px-2 py-1 rounded-lg bg-cyan-300 flex items-center justify-between text-[#3734a9]">
        <span>🦵</span>
        <span className="ml-1 text-xs">Healthy Leg</span>
      </p>
    </div>
  );
};

export default AnatomySection;
