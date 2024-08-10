import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import openLink from "../../openLink";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-lg flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Lawrence Chanaud Jr.</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm always excited to explore new opportunities that allow me to
          leverage my skills and passion for technology. Each new challenge is a
          chance to grow and contribute in innovative ways.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">lawrencechanaud@yahoo.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaLinkedinIn
              onClick={() => {
                openLink(
                  "https://www.linkedin.com/in/lawrence-chanaud-jr-b75962151/",
                );
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
