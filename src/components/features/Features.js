import React from 'react'
import { FaGlobe, FaDatabase } from "react-icons/fa";
import {  SiMicrosoftteams, SiPostman, SiReact } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="API Development"
          des="Create and manage API endpoints with C# ASP.NET Core, ensuring robust and secure data exchange. Focus on scalability and efficiency for growing application demands."
          icon={<SiPostman />}
        />
        <Card
          title="Front-End Development"
          des="Design and implement front-end pages using TypeScript React and Next.js. Ensure responsive, user-friendly interfaces across various devices."
          icon={<SiReact />}
        />
        <Card
          title="Database Management"
          des="Develop and maintain stored procedures in Oracle Database and SQL Server. Optimize queries for performance and implement best practices for data architecture."
          icon={<FaDatabase />}
        />
        <Card
          title="Agile Development"
          des="Participate in agile processes, collaborating with teams to deliver high-quality software. Use Azure DevOps for task tracking, branch management, and CI/CD."
          icon={<SiMicrosoftteams />}
        />
        <Card
          title="Docker and Azure Integration"
          des="Manage Docker configurations and deployments for Azure hosting. Monitor and troubleshoot with App Insights to ensure smooth, scalable performance."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features