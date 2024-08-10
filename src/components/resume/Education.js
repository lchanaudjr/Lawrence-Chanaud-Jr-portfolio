import React from "react";
import { motion } from "framer-motion";
import { ResumeCard, mapDesc } from "./ResumeCard";

const collegeDesc = [
  {
    index: 1,
    item: "Studies in the design, implementation and support of software programs in preparation for high-demand jobs.",
  },
];

const highSchoolDesc = [
  {
    index: 1,
    item: "Standard high school education with a focus on advanced mathematics, and accounting courses.",
  },
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-6 items-center font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-6 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-20">
          <ResumeCard
            title="B.Sc. Computer Science; Minor: Mathematics"
            subTitle="Towson University (2016 - 2020)"
            result="3.37"
            des={mapDesc(collegeDesc)}
          />
          <ResumeCard
            title="High School Diploma"
            subTitle="Queen Anne's County High School (2012 - 2016)"
            result="3.74"
            des={mapDesc(highSchoolDesc)}
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
