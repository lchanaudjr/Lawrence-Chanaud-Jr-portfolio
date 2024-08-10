import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiCsharp, SiDotnet, SiDocker, SiAzurefunctions } from "react-icons/si";
import openLink from '../../openLink';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Engineer.", "Software Engineer.", "Technology Enthusiest."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">MEET YOUR NEWEST RECRUIT</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Lawrence Chanaud Jr.</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate about exploring the latest in technology, I thrive on tackling complex problems and creating innovative solutions. With a strong foundation in software development, I bring a unique blend of technical expertise and creative thinking to every project. From requirements gathering to deployment, I am dedicated to delivering high-quality results that exceed expectations.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaLinkedinIn onClick={() => {
                  openLink('https://www.linkedin.com/in/lawrence-chanaud-jr-b75962151/')
                }}/>
            </span>
            <span className="bannerIcon"> 
              <FaGithub onClick={() => {openLink('https://github.com/lchanaudjr');
                }}/>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            HANDS ON EXPERIENCE WITH
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact onClick={() => {openLink('https://react.dev/')}}/>
            </span>
            <span className="bannerIcon">
              <SiNextdotjs onClick={() => {openLink('https://nextjs.org/')}}/>
            </span>
            <span className="bannerIcon">
              <SiCsharp onClick={() => {openLink('https://learn.microsoft.com/en-us/dotnet/csharp/')}}/>
            </span>
            <span className="bannerIcon">
              <SiDotnet onClick={() => {openLink('https://dotnet.microsoft.com/en-us/')}}/>
            </span>
            <span className="bannerIcon">
              <SiDocker onClick={() => {openLink('https://www.docker.com/')}}/>
            </span>
            <span className="bannerIcon">
              <SiAzurefunctions onClick={() => {openLink('https://azure.microsoft.com/en-us/products/functions')}}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner