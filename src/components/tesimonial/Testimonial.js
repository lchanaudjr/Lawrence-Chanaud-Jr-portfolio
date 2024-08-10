import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import {
  testimonialOne,
  testimonialTwo,
  testimonialThree,
  quote,
} from "../../assets";

const testimonialData = [
  {
    name: "Thomas Wojeck",
    title: "Director Of Information Technology",
    company: "PDP Group - Amynta Group Subsidiary",
    desc: `"Lawrence was a key contributor to our team at Amynta Group. His skills and expertise were evident in the quality of his work. Lawrence effectively managed various tasks and showcased his ability to handle complex projects with ease. His attention to detail, strong problem-solving skills, and proactive approach made him an outstanding team member. Lawrence's ability to work both independently and collaboratively was a major asset to our projects."`,
    img: testimonialOne,
    project: "Full-Stack Development.",
    date: "August, 2021 - November, 2023",
  },
  {
    name: "Zachary Barnett",
    title: "Budget Subject Matter Expert",
    company: "The Performa Group - Tennessee Division",
    desc: `"During his time with The Performa Group, Lawrence consistently demonstrated strong skills and a keen eye for detail. He played a crucial role in maintaining and improving our systems. Lawrence's ability to handle various tasks, manage deployments, and document processes highlighted his comprehensive understanding of his role. His dedication and expertise made him a valuable member of our team."`,
    img: testimonialTwo,
    project: "Software Development & Documentation.",
    date: "June, 2020 - September, 2021",
  },
  {
    name: "Alain Reynoso",
    title: "Senior Software Developer",
    company: "CPower Energy Management",
    desc: `"I had the pleasure of working with Lawrence during his time at CPower. He always demonstrated a strong commitment to his work and produced high-quality results. His ability to quickly understand and apply complex concepts was impressive. Lawrence's collaborative nature and positive attitude made him a valuable member of the team. I am confident that he will excel in any future role and be a significant asset to any organization."`,
    img: testimonialThree,
    project: "Full-Stack Development.",
    date: "August 2021 - November, 2023",
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute bottom-1 right-1/3 cursor-pointer"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute bottom-1 left-1/3 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
                marginBottom: "10px",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
                marginBottom: "10px",
              }
        }
      ></div>
    ),
  };

  function TestimonialCard(name, title, company, desc, img, project, date) {
    return (
      <div className="w-full">
        <div className="w-full h-200 flex lgl:flex-row justify-center pb-5 items-center ">
          <div className="m-5 w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center shadow-lg">
            <img
              className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
              src={img}
              alt={name}
            />
            <div className="w-full flex flex-col justify-end">
              <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                {company}
              </p>
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-base tracking-wide text-gray-500">{title}</p>
            </div>
          </div>
          <div className="w-full lgl:w-[60%] h-full flex flex-col items-center">
            <div className="mr-5 w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg p-4 flex flex-col gap-4 shadow-lg">
              <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                <div>
                  <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                    {project}
                  </h3>
                  <p className="text-base text-gray-400 mt-3">{date}</p>
                </div>
              </div>
              <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT EMPLOYERS SAY" des="Testimonials" />
      </div>
      <div>
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          {testimonialData.map((testimonial) =>
            TestimonialCard(
              testimonial.name,
              testimonial.title,
              testimonial.company,
              testimonial.desc,
              testimonial.img,
              testimonial.project,
              testimonial.date,
            ),
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
