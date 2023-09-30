"use client";

import { GoRepo } from "react-icons/go";
import Link from "next/link";
import { RevealList } from "next-reveal";
import { Image } from "@unpic/react";

const projects = [
  {
    title: "Simplified i-Ma'luum",
    description: "A simplified version of student portal for my university!",
    link: "https://github.com/qryskalyst20/simplified-imaluum",
  },
  {
    title: "X Profile",
    description: "Showcase your profile in a unique way!",
    link: "https://github.com/Youth-Icon/xprofile",
  },
  {
    title: "FuelMY",
    description: "A fuel price tracker mobile app in Malaysia!",
    link: "https://github.com/qryskalyst20/fuelmy",
  },
  {
    title: "DragonDex",
    description: "A Pokedex for Dragon City fans!",
    link: "https://github.com/qryskalyst20/fuelmy",
  },
  {
    title: "Rapidramatic",
    description: "Tracks RapidKL's breakdowns and delays!",
    link: "https://github.com/qryskalyst20/rapidramatic",
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
        {projects.map((project: any) => (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            className="bg-slate-300 dark:bg-zinc-950 border-2 border-solid border-purple-700 rounded-md drop-shadow-lg p-5 hover:bg-slate-400 dark:hover:bg-zinc-900"
          >
            <span className="flex items-center gap-2 text-purple-700 text-2xl">
              <GoRepo />
              <h1 className="font-bold">{project.title}</h1>
            </span>

            <p className="text-lg text-zinc-800 dark:text-slate-100">
              {project.description}
            </p>
          </Link>
        ))}
      </RevealList>
    </section>
  );
};

export default ProjectSection;
