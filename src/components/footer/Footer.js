import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-10 h-auto border-b-[1px] border-b-black ">
      <div className="w-full h-full flex inline justify-center">
        <img className="w-32 mr-3 inline" src={logo} alt="logo" />
        <div className="flex justify-between">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
