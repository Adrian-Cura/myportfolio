"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import SliderButtons from "@/components/features/SliderButtons";

interface SwiperProps {
  activeIndex: number;
}

const projectList = [
  {
    num: "01",
    category: "FullStack",
    title: "Docs4All",
    description:
      "A fullstack project utilizing shadcn for UI, Firebase for backend, Liveblocks for real-time collaboration, and AI features powered by Gemini API.",
    stack: [
      { name: "Typescript" },
      { name: "NEXT.js" },
      { name: "tailwindcss" },
      { name: "Firebase" },
    ],
    image: "/assets/docs4all.png",
    live: "https://docs4all.vercel.app",
    github: "https://github.com/Adrian-Cura/Docs4All",
  },
  {
    num: "02",
    category: "Frontend",
    title: "ShadowTube",
    description:
      "A frontend project that fetches YouTube videos via RapidAPI, using DaisyUI for UI components and Axios for data handling.",
    stack: [{ name: "Typescript" }, { name: "Tailwind" }, { name: "NEXT.js" }],
    image: "/assets/shadowtube.png",
    live: "https://shadowtube.vercel.app",
    github: "https://github.com/Adrian-Cura/ShadowTube",
  },
];

const Portfolio = () => {
  const [project, setProject] = useState(projectList[0]);

  const handleSlideChange = (swiper: SwiperProps) => {
    //get current slide index

    const currentIndex = swiper.activeIndex;
    setProject(projectList[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Section: Textual Content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Num */}
              <div className="text-8xl leading-none font-thin text-white/60 ">
                {project.num}
              </div>
              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.category} project
              </h2>
              {/* Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4 items-center">
                {/* live button */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.live}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github button */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.github}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section: Swiper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectList.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-black rounded-lg">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full ">
                      <Image
                        src={project.image}
                        fill
                        className="object-fill rounded-lg"
                        alt="project preview"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
