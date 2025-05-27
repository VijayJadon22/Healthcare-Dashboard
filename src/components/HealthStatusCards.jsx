import React from "react";

const HealthStatusCards = ({ data }) => {
  return (
    <div className="flex flex-col rounded-lg bg-[#f6faff] p-2 shadow-md">
      <div className="w-full flex items-center justify-start mb-2">
        <img src={data.image} alt="organ-image" width={40} />
        <p className="font-semibold ml-2">{data.organ}</p>
      </div>
      <div className="text-gray-400 text-sm font-semibold flex items-center justify-center mb-2">
        Date: {data.Date}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full`}
          style={{ width: `${data.percentage}%`, backgroundColor:data.color}}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatusCards;
