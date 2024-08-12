import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-12 h-80 rounded-lg shadow-lg flex items-center bg-gradient-to-b from-gradientStart from-70% to-gradientEnd group hover:bg-gradient-to-b hover:from-gradientEnd hover:to-gradientStart hover:-translate-y-5 transition-transform duration-500 transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 ">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor group-hover:text-gradientStart">
                {icon}
              </span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-white">
              {title}
            </h2>
            <p className="text-gray-400 group-hover:text-white">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
