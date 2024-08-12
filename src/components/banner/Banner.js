import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-full p-5 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont rounded-md border-b-black bg-gradient-to-tr from-gradientStart from-60% to-gradientEnd">
        <LeftBanner />
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;
