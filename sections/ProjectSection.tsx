"use client";

import Link from "next/link";
import { RevealList } from "next-reveal";
import { Image } from "@unpic/react";
import { AiFillGithub } from "react-icons/ai";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGoogleCloud,
  BiLogoDocker,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiExpo,
  SiVite,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const projects = [
  {
    title: "Simplified i-Ma'luum",
    description: "A simplified version of student portal for my university!",
    link: "https://github.com/qryskalyst20/simplified-imaluum",
    image: "/Screenshot 2023-09-19 221003.png",
    tech: [
      <BiLogoTypescript key="ts" className="text-blue-500" />,
      <BiLogoReact key="react" className="text-blue-500" />,
      <SiNextdotjs key="next" className="text-gray-600" />,
      <BiLogoTailwindCss key="tailwind" className="text-cyan-600" />,
      <BiLogoGoogleCloud key="gcp" className="text-blue-500" />,
      <BiLogoDocker key="docker" className="text-blue-500" />,
      <FaGitAlt key="git" className="text-orange-600" />,
    ],
  },
  {
    title: "X Profile",
    description: "Showcase your profile in a unique way!",
    link: "https://github.com/Youth-Icon/xprofile",
    image: "/Screenshot 2023-10-01 233300.png",
    tech: [
      <BiLogoTypescript key="ts" className="text-blue-500" />,
      <BiLogoReact key="react" className="text-blue-500" />,
      <SiNextdotjs key="next" className="text-gray-600" />,
      <BiLogoTailwindCss key="tailwind" className="text-cyan-600" />,
      <BiLogoFirebase key="firebase" className="text-yellow-500" />,
      <SiVercel key="vercel" className="text-gray-600" />,
      <FaGitAlt key="git" className="text-orange-600" />,
    ],
  },
  {
    title: "FuelMY",
    description: "A fuel price tracker mobile app in Malaysia!",
    link: "https://github.com/qryskalyst20/fuelmy",
    image: "/fuelmy.png",
    tech: [
      <BiLogoJavascript key="js" className="text-yellow-500" />,
      <BiLogoReact key="react" className="text-blue-500" />,
      <SiExpo key="expo" className="text-gray-500" />,
      <BiLogoTailwindCss key="tailwind" className="text-cyan-600" />,
      <FaGitAlt key="git" className="text-orange-600" />,
    ],
  },
  {
    title: "DragonDex",
    description: "A Pokedex for Dragon City fans!",
    link: "https://github.com/qryskalyst20/dragondex-web",
    image: "/dd.png",
    tech: [
      <BiLogoJavascript key="js" className="text-yellow-500" />,
      <BiLogoReact key="react" className="text-blue-500" />,
      <SiNextdotjs key="next" className="text-gray-600" />,
      <SiExpo key="expo" className="text-gray-500" />,
      <BiLogoTailwindCss key="tailwind" className="text-cyan-600" />,
      <SiSupabase key="supabase" className="text-green-500" />,
      <SiVercel key="vercel" className="text-gray-600" />,
      <FaGitAlt key="git" className="text-orange-600" />,
    ],
  },
  {
    title: "Rapidramatic",
    description: "Tracks RapidKL's breakdowns and delays!",
    link: "https://github.com/qryskalyst20/rapidramatic",
    image: "/Screenshot 2023-10-01 231459.png",
    tech: [
      <BiLogoJavascript key="js" className="text-yellow-500" />,
      <BiLogoReact key="react" className="text-blue-500" />,
      <SiVite key="vite" className="text-yellow-500" />,
      <BiLogoTailwindCss key="tailwind" className="text-cyan-600" />,
      <SiVercel key="vercel" className="text-gray-600" />,
      <FaGitAlt key="git" className="text-orange-600" />,
    ],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="flex flex-col gap-5 h-auto py-14">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl drop-shadow font-bold text-zinc-800 dark:text-slate-100">
            Projects
          </h1>
          <p className="text-lg md:text-3xl drop-shadows font-bold text-zinc-600 dark:text-zinc-400 leading-tight">
            Check out some of the projects I&apos;ve worked with!
          </p>
        </div>
        <Image
          src="/20230929_160941104_iOS.png"
          alt=""
          width={0}
          height={0}
          className="w-[100px] h-[100px] object-contain drop-shadow"
        />
      </div>

      <RevealList
        interval={200}
        delay={200}
        reset={true}
        easing="ease-in-out"
        origin="bottom"
        className="invisible w-full flex flex-col"
      >
        {projects.map((project: any, index: number) => (
          <div
            key={index}
            className={`py-10 flex flex-col ${
              index % 2 === 0 ? `md:flex-row` : `md:flex-row-reverse`
            } w-full my-5 gap-5 md:gap-0`}
          >
            <div className="md:flex-1 flex flex-col items-center justify-center gap-3">
              <h1 className="font-bold text-3xl md:text-5xl text-zinc-800 dark:text-slate-100">
                {project.title}
              </h1>
              <p className="font-bold text-lg md:text-2xl text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-row gap-2 text-4xl">{project.tech}</div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 text-slate-100 bg-purple-700 py-3 px-2 rounded-xl hover:bg-purple-800"
              >
                <AiFillGithub size={20} />
                <span>View on GitHub</span>
              </Link>
            </div>
            <div className="md:flex-1 flex items-center justify-center">
              <div className="rounded-lg overflow-hidden h-fit w-[300px] md:w-[500px]">
                <Image
                  src={project.image}
                  alt=""
                  width={0}
                  height={0}
                  className="w-full h-fill object-contain drop-shadow"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </RevealList>
    </section>
  );
};

export default ProjectSection;
