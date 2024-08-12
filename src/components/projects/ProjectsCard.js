import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import openLink from "../../openLink";

const ProjectsCard = ({ title, des, src, github }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-lg flex flex-col bg-gradient-to-b from-gradientStart from-75% to-gradientEnd group hover:bg-gradient-to-b hover:from-gradientEnd hover:to-gradientStart transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg uppercase text-designColor font-normal group-hover:text-gradientStart group-hover:font-bold">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-designColor text-gradientStart inline-flex justify-center items-center group-hover:bg-gradientStart hover:-translate-y-1 transition-all group-hover:text-designColor duration-300 cursor-pointer">
                <BsGithub onClick={() => openLink(github)} />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
