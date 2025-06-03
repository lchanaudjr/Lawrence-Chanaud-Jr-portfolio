import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiDotnet,
  SiDocker,
  SiAzurefunctions,
  SiVite,
} from "react-icons/si";
import openLink from "../../openLink";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Engineer",
      "Software Developer",
      "Technology Enthusiest",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 3000,
  });
  return (
    <div className="w-full p-5 sm:p-0 lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">MEET YOUR NEWEST RECRUIT</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Lawrence Chanaud Jr.
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white sm:min-h-[80px]">
          <span className="sm:min-h-24">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#f5d366"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate about exploring the latest in technology, I thrive on
          tackling complex problems and creating innovative solutions. With a
          strong foundation in software development, I bring a unique blend of
          technical expertise and creative thinking to every project. From
          requirements gathering to deployment, I am dedicated to delivering
          high-quality results that exceed expectations.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div className="mr-5">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span
              className="bannerIcon"
              onClick={() => {
                openLink(
                  "https://www.linkedin.com/in/lawrence-chanaud-jr-b75962151/"
                );
              }}
            >
              <FaLinkedinIn />
            </span>
            <span
              className="bannerIcon"
              onClick={() => {
                openLink("https://github.com/lchanaudjr");
              }}
            >
              <FaGithub />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            HANDS ON EXPERIENCE WITH
          </h2>
          <div className="flex gap-4">
            <span
              className="bannerIcon"
              onClick={() => {
                openLink("https://react.dev/");
              }}
            >
              <FaReact />
            </span>
            <span
              className="bannerIcon"
              onClick={() => {
                openLink("https://nextjs.org/");
              }}
            >
              <SiNextdotjs />
            </span>
            <span
              className="bannerIcon"
              onClick={() => {
                openLink("https://vite.dev/");
              }}
            >
              <SiVite />
            </span>
            <span
              className="bannerIcon"
              onClick={() => {
                openLink("https://dotnet.microsoft.com/en-us/");
              }}
            >
              <SiDotnet />
            </span>
            <span
              className="bannerIcon"
              onClick={() => {
                openLink("https://www.docker.com/");
              }}
            >
              <SiDocker />
            </span>
            <span
              className="bannerIcon"
              onClick={() => {
                openLink(
                  "https://azure.microsoft.com/en-us/products/functions"
                );
              }}
            >
              <SiAzurefunctions />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
