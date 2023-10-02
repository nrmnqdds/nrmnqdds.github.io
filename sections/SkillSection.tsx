import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGoogleCloud,
  BiLogoDocker,
  BiLogoHeroku,
  BiLogoWindows,
  BiLogoPython,
  BiLogoNodejs,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiExpo,
  SiVite,
  SiVercel,
  SiSupabase,
  SiPostman,
  SiArchlinux,
  SiKalilinux,
} from "react-icons/si";
import { FaGitAlt, FaUbuntu } from "react-icons/fa";
import Link from "next/link";
import { Image } from "@unpic/react";
import { RevealWrapper } from "next-reveal";

const skills = [
  {
    name: "Typescript",
    logo: <BiLogoTypescript key="ts" className="text-blue-500" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    logo: <BiLogoJavascript key="js" className="text-yellow-500" />,
    link: "https://www.javascript.com/",
  },
  {
    name: "Python",
    logo: <BiLogoPython key="python" className="text-blue-500" />,
    link: "https://www.python.org/",
  },
  {
    name: "C++",
    logo: <BiLogoCPlusPlus key="c++" className="text-blue-500" />,
    link: "https://www.cplusplus.com/",
  },
  {
    name: "React",
    logo: <BiLogoReact key="react" className="text-blue-500" />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    logo: <SiNextdotjs key="next" className="text-gray-600" />,
    link: "https://nextjs.org/",
  },
  {
    name: "Vite",
    logo: <SiVite key="vite" className="text-yellow-500" />,
    link: "https://vitejs.dev/",
  },
  {
    name: "React Native",
    logo: <BiLogoReact key="react" className="text-blue-500" />,
    link: "https://reactnative.dev/",
  },
  {
    name: "Expo",
    logo: <SiExpo key="expo" className="text-gray-500" />,
    link: "https://expo.dev/",
  },
  {
    name: "Tailwind CSS",
    logo: <BiLogoTailwindCss key="tailwind" className="text-cyan-600" />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Docker",
    logo: <BiLogoDocker key="docker" className="text-blue-500" />,
    link: "https://www.docker.com/",
  },
  {
    name: "Google Cloud",
    logo: <BiLogoGoogleCloud key="gcp" className="text-blue-500" />,
    link: "https://cloud.google.com/",
  },
  {
    name: "Vercel",
    logo: <SiVercel key="vercel" className="text-gray-600" />,
    link: "https://vercel.com/",
  },
  {
    name: "Heroku",
    logo: <BiLogoHeroku key="heroku" className="text-purple-600" />,
    link: "https://www.heroku.com/",
  },
  {
    name: "Node.js",
    logo: <BiLogoNodejs key="js" className="text-green-500" />,
    link: "https://nodejs.org/",
  },
  {
    name: "Git",
    logo: <FaGitAlt key="git" className="text-orange-600" />,
    link: "https://git-scm.com/",
  },
  {
    name: "Postman",
    logo: <SiPostman key="postman" className="text-orange-600" />,
    link: "https://www.postman.com/",
  },
  {
    name: "Firebase",
    logo: <BiLogoFirebase key="firebase" className="text-yellow-500" />,
    link: "https://firebase.google.com/",
  },
  {
    name: "Supabase",
    logo: <SiSupabase key="supabase" className="text-green-500" />,
    link: "https://supabase.io/",
  },
  {
    name: "Windows",
    logo: <BiLogoWindows key="windows" className="text-blue-500" />,
    link: "https://www.microsoft.com/en-us/windows/",
  },
  {
    name: "Ubuntu",
    logo: <FaUbuntu key="ubuntu" className="text-orange-600" />,
    link: "https://ubuntu.com/",
  },
  {
    name: "Arch Linux",
    logo: <SiArchlinux key="arch" className="text-blue-500" />,
    link: "https://archlinux.org/",
  },
  {
    name: "Kali Linux",
    logo: <SiKalilinux key="kali" className="text-zinc-900" />,
    link: "https://www.kali.org/",
  },
];

const SkillSection = () => {
  return (
    <section id="skill" className="flex flex-col h-auto py-14 gap-5">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl drop-shadow font-bold text-zinc-800 dark:text-slate-100">
            Tech Stack
          </h1>
          <p className="text-lg md:text-3xl drop-shadows font-bold text-zinc-600 dark:text-zinc-400 leading-tight">
            Technologies I&apos;m familiar with!
          </p>
        </div>
        <Image
          src="/20230929_160956503_iOS.png"
          alt=""
          width={0}
          height={0}
          className="w-[100px] h-[100px] object-contain drop-shadow"
        />
      </div>
      <RevealWrapper
        easing="ease-in-out"
        origin="bottom"
        className="invisible flex flex-row flex-wrap w-full items-center justify-center"
      >
        {skills.map((skill) => (
          <Link
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            key={skill.link}
            className="flex flex-col items-center justify-center rounded-xl gap-2 m-2 text-4xl bg-zinc-900 dark:bg-slate-100 w-24 h-24 hover:scale-105"
          >
            {skill.logo}
            <p className="text-sm dark:text-zinc-900 text-slate-100">
              {skill.name}
            </p>
          </Link>
        ))}
      </RevealWrapper>
    </section>
  );
};

export default SkillSection;
