import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const Resume = () => {
  const [experienceData, setExperienceData] = useState(true);
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="5+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 ">
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData ? "-translate-y-2 transition-all" : ""
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData ? "-translate-y-2 transition-all" : ""
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "-translate-y-2 transition-all" : ""
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {experienceData && <Experience />}
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  );
};

export default Resume;
