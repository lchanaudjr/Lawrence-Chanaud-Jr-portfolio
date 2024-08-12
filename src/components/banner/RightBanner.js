import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[350px] lgl:w-[500px] lgl:h-[575px] bg-gradient-to-tr from-gradientStart from-70% to-gradientEnd shadow-lg flex justify-center items-center"></div> */}
    </div>
  );
};

export default RightBanner;
