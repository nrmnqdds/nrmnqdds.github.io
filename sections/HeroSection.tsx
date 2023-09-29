"use client";

import { Image } from "@unpic/react";
import { RevealList } from "next-reveal";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="isolate w-full h-screen flex flex-col justify-center">
      <RevealList
        interval={200}
        delay={200}
        easing="ease-in-out"
        origin="bottom"
        className="invisible"
      >
        <div className="flex items-baseline">
          <h1 className="text-8xl font-bold text-zinc-800 dark:text-slate-100">
            Hi there!
          </h1>
          <Image
            src="/20230929_160804026_iOS.png"
            alt=""
            width={120}
            height={120}
            className="object-contain drop-shadow-lg"
          />
        </div>

        <h2 className="text-4xl font-bold text-zinc-800 dark:text-slate-100">
          I&apos;m <span className="text-purple-500">Quddus</span>.
        </h2>
        {/* <h3 className="text-4xl font-bold text-zinc-800 dark:text-slate-100">
          Full Stack Software Developer from Malaysia.
        </h3> */}
        <span className="text-4xl font-bold text-zinc-800 dark:text-slate-100">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer.",
                "Graphic Designer.",
                "Tech Enthusiast.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 40,
            }}
          />
        </span>
      </RevealList>
    </section>
  );
};

export default HeroSection;
