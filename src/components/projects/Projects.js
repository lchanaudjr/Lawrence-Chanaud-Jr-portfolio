import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="LEARN ABOUT MY" des="Personal Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gaggiuno"
          des="Making a mid-level espressio machine state-of-the-art by adding a touch screen and an Arduino."
          src={projectOne}
          github={"https://gaggiuino.github.io/#/"}
        />
        <ProjectsCard
          title="AYAB"
          des="Upgrading a knitting machine with an Arduino to allow for modern pattern creation."
          src={projectTwo}
          github={"https://www.ayab-knitting.com/"}
        />
        <ProjectsCard
          title="Docker Server"
          des="Setting up a personal server with Docker to host applications like Wekan, Nginx, PiHole, and game servers."
          src={projectThree}
          github={"https://github.com/lchanaudjr/Docker-Containers"}
        />
      </div>
    </section>
  );
};

export default Projects;
