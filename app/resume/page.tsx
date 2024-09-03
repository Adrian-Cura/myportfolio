"use client";

import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am Italian-Argentine with European citizenship. My first computer was a Pentium under Windows 95 when I was a child and I’ve never let go of it since. If you had asked me at ten years old what I wanted to be when I grew up, I would have said, 'a video game creator.' In the 90s in Argentina, where I was born, programming was little known, and the career I dreamed of didn’t even exist in my country. So, while I never abandoned my love for computers, my studies took a different path, and my other great passion—music—took center stage during my youth. I sang in Argentina and later in the Czech Republic, and I worked as an Ontological Coach and Spanish teacher. But a few years ago, I felt something was missing—finally learning to program, returning to that childhood dream. Programming and technology were always in my essence, so I fully committed to this new path. Spending long hours in front of a computer was never something that bothered me—in fact, quite the opposite. With dedication, I can now say I’m prepared and more motivated than ever!",

  info: [
    { fieldName: "Name", fieldValue: "Adrian Cura" },
    {
      fieldName: "Nationality",
      fieldValue: "Italian/Argentine",
    },
    {
      fieldName: "Languages",
      fieldValue: "English/Spanish",
    },
    {
      fieldName: "Personality Type",
      fieldValue:
        "Mediator (INFP-A) - Known for empathy, creativity, and a collaborative approach.",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "These are some of the technologies I enjoy working with, but I am not limited to them.",
  list: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiTypescript className="h-[52.5px] w-[52.5px]" />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NEXT.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const softskills = {
  title: "Soft Skills",
  description:
    "I’ve always had a natural gift for empathy and effective communication, often being the one who listens and provides thoughtful advice to friends. This inclination led me to pursue Ontological Coaching at the esteemed Instituto de Capacitación Profesional (ICP) in Buenos Aires, Argentina. Through this training, I honed soft skills that significantly benefit both my personal and professional life. With over three years of experience in Customer Service for companies as Jobandtalent, I have become proficient in working under pressure and consistently achieving KPIs, driven by my passion for problem-solving and dedication to excellence.",

  items: [
    {
      skill: "Empathy",
    },
    {
      skill: "Leadership",
    },
    {
      skill: "Teamwork",
    },
    {
      skill: "Effective Communication",
    },
    {
      skill: "Kindness",
    },
    {
      skill: "Emotional Management",
    },
    {
      skill: "Active Listening",
    },
    {
      skill: "Conflict Resolution",
    },
    {
      skill: "Adaptability",
    },
    {
      skill: "Problem-Solving",
    },
  ],
};

const education = {
  title: "Education",
  description:
    "I can sum up my educational journey in one word: self-taught. Just kidding! Of course, being self-taught doesn’t mean I learned everything on my own without any resources. With dedication and the vast opportunities offered by the internet, I’ve been able to dive deep into programming. I’ve benefited from many resources, most of them free, such as FreeCodeCamp, YouTube, official documentation, books, Google, and, most importantly, practice—lots of practice. Recently, ChatGPT has been invaluable in helping me clarify doubts, learn new concepts, and improve both my code and my programming logic. While many free resources don’t provide a certificate, I do have some from both free and paid courses. However, I prefer not to list them here, as we both know that certificates alone don’t always reflect the true value of the learning experience. If you’d like to see some of the certificates I’ve earned, feel free to check out my LinkedIn profile. Below, you’ll find information on the formal studies I’ve pursued in other fields, which have greatly contributed to the development of my soft skills.",

  items: [
    {
      institution: "ICP",
      degree: "Ontological Coach",
      year: "2016 - 2019",
    },
    {
      institution: "International House",
      degree: "Spanish teacher as a foreigner language",
      year: "2019",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="softskills">Soft Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          {/* About */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="about" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ScrollArea className="h-[200px]">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="font-bold text-4xl">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.list.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[140px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Soft Skills  */}
            <TabsContent value="softskills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{softskills.title}</h3>
                <ScrollArea className="h-[150px]">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {softskills.description}
                  </p>
                </ScrollArea>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {softskills.items.map((item, index: number) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[80px]  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <h3 className="text-xl max-w-[160px] min-h-[30px] text-center lg:text-left">
                              {item.skill}
                            </h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*Education */}
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[150px]">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                </ScrollArea>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px]  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[30px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

{
  /*  
  
  About Me: Primero, porque es donde presentas quién eres. Es la introducción ideal para que los empleadores te conozcan.
Skills: Después, para mostrar rápidamente tus competencias técnicas.
Soft Skills: Luego, para complementar las habilidades técnicas con las blandas, destacando tu capacidad de trabajar en equipo y liderar.
Education: Finalmente, cerrás con tu formación, mostrando tanto tu autodidactismo en programación como tu experiencia en Coaching.
  
  */
}
