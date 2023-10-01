"use client";

import Link from "next/link";
import { RevealList } from "next-reveal";
import { Image } from "@unpic/react";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    title: "Simplified i-Ma'luum",
    description: "A simplified version of student portal for my university!",
    link: "https://github.com/qryskalyst20/simplified-imaluum",
    image: "/Screenshot 2023-09-19 221003.png",
  },
  {
    title: "X Profile",
    description: "Showcase your profile in a unique way!",
    link: "https://github.com/Youth-Icon/xprofile",
    image: "/Screenshot 2023-10-01 233300.png",
  },
  {
    title: "FuelMY",
    description: "A fuel price tracker mobile app in Malaysia!",
    link: "https://github.com/qryskalyst20/fuelmy",
    image: "/fuelmy.png",
  },
  {
    title: "DragonDex",
    description: "A Pokedex for Dragon City fans!",
    link: "https://github.com/qryskalyst20/dragondex",
    image: "/dd.png",
  },
  {
    title: "Rapidramatic",
    description: "Tracks RapidKL's breakdowns and delays!",
    link: "https://github.com/qryskalyst20/rapidramatic",
    image: "/Screenshot 2023-10-01 231459.png",
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
        interval={100}
        delay={100}
        reset={true}
        easing="ease-in-out"
        origin="bottom"
        className="invisible w-full flex flex-row flex-wrap gap-2"
      >
        {projects.map((project: any, index: number) => (
          <div
            key={index}
            className={`py-10 flex ${
              index % 2 === 0 ? `flex-row` : `flex-row-reverse`
            } w-full`}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-3">
              <h1 className="font-bold text-5xl text-zinc-800 dark:text-slate-100">
                {project.title}
              </h1>
              <p className="font-bold text-2xl text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
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
            <div className="flex-1 flex items-center justify-center">
              <div className="rounded-lg overflow-hidden h-fit w-[500px]">
                <Image
                  src={project.image}
                  alt=""
                  width={0}
                  height={0}
                  className="w-full h-fill object-contain drop-shadow"
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
