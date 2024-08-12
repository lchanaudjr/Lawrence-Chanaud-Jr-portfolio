import React from "react";
import { motion } from "framer-motion";
import { ResumeCard, mapDesc } from "./ResumeCard";

const cpowerDesc = [
  {
    index: 1,
    item: "Maintaining Windows Presentation Foundation(WPF) clients and IIS services in C# .NET with MVVM architecture.",
  },
  {
    index: 2,
    item: "Creating and maintaining stored procedures in Oracle Database.",
  },
  {
    index: 3,
    item: "Using Azure DevOps for Branching, Pipelines, creating Work Items and requirements documentation.",
  },
  {
    index: 4,
    item: "Participating in the agile development process(Planning, Grooming, Scrum, Demo, Retrospective).",
  },
];

const amyntaDesc = [
  {
    index: 1,
    item: "Creating and managing front-end pages using Typescript React with Next.js server side rendering and client-side data fetching.",
  },
  {
    index: 2,
    item: "Creating and managing API endpoints written in C# ASP.NET Core.",
  },
  {
    index: 3,
    item: "Creating and managing .NET Azure functions with various triggers(blob, http, time).",
  },
  {
    index: 4,
    item: "Managing database architecture using Entity Framework Core.",
  },
  {
    index: 5,
    item: "Managing Docker configurations for Microsoft Azure hosting and monitoring with App Insights.",
  },
];

const performaDesc = [
  {
    index: 1,
    item: "Using Visual Studio to debug internal C# .NET extensions and workflows.",
  },
  {
    index: 2,
    item: "Using SQL Server Management Studio to create stored procedures and manage OLAP data cubes.",
  },
  {
    index: 3,
    item: "Managing initial deployment and continued support of our Tennessee Budget Division production environment.",
  },
  {
    index: 4,
    item: "Creating and documenting processes for deploying new environments.",
  },
  {
    index: 5,
    item: "Using Azure DevOps to track bugs, manage branches/deployments, and make pull requests.",
  },
];

const sinclairDesc = [
  {
    index: 1,
    item: "Independently creating a Progressive Web App (PWA) using JavaScript React hosted within Microsoft Azure.",
  },
  {
    index: 2,
    item: "Using xlsx(SheetJS) to create a formatted Excel file from input data.",
  },
  {
    index: 3,
    item: "Implementing OAuth SSO to upload files to ServiceNow REST API.",
  },
  {
    index: 4,
    item: "Creating business requirement documentation for the PWA Project.",
  },
  {
    index: 5,
    item: "Communicating with infrastructure and security teams to discuss project deployment",
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lgl:gap-20 "
    >
      <div>
        <div className="py-6 lgl:py-6 items-center font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - NOW</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 mb-6 lgl:mt-6 w-full h-[1000px] border-l-[6px] border-gradientEnd border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="CPower Energy - (11/23-7/24)"
            result="Baltimore, MD"
            des={mapDesc(cpowerDesc)}
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Amynta Group - (9/21-11/23)"
            result="Hunt Valley, MD"
            des={mapDesc(amyntaDesc)}
          />
          <ResumeCard
            title="Junior Software Developer"
            subTitle="The Performa Group - (6/20-9/21)"
            result="Annapolis, MD"
            des={mapDesc(performaDesc)}
          />
          <ResumeCard
            title="Software Developer Intern"
            subTitle="Sinclair Broadcast Group - (6/19-8/19)"
            result="Hunt Valley, MD"
            des={mapDesc(sinclairDesc)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
