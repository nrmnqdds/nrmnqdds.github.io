"use client";

import { Image } from "@unpic/react";
import { RevealWrapper } from "next-reveal";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="isolate w-full h-screen flex flex-col items-center justify-center">
      <RevealWrapper easing="ease-in-out" origin="bottom" className="invisible">
        <div className="flex items-baseline">
          <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold text-zinc-800 dark:text-slate-100 drop-shadow-lg">
            Hi there!
          </h1>
          <Image
            src="/20230929_160804026_iOS.png"
            alt=""
            width={120}
            height={120}
            className="object-contain drop-shadow"
          />
        </div>

        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-zinc-600 dark:text-zinc-400 drop-shadow">
          I&apos;m <span className="text-purple-600">Quddus</span>.
        </h2>
        {/* <h3 className="text-4xl font-bold text-zinc-800 dark:text-slate-100">
          Full Stack Software Developer from Malaysia.
        </h3> */}
        <span className="text-xl md:text-2xl lg:text-4xl font-bold text-zinc-600 dark:text-zinc-400 drop-shadow">
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
      </RevealWrapper>
    </section>
  );
};

export default HeroSection;
