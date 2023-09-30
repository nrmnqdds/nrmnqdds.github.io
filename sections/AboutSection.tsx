"use client";

import { Image } from "@unpic/react";
import { RevealList } from "next-reveal";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col py-14 h-auto items-center justify-center"
    >
      <RevealList
        interval={200}
        delay={100}
        reset={true}
        easing="ease-in-out"
        origin="bottom"
        className="invisible flex flex-col md:flex-row  items-center justify-center"
      >
        <Image
          src="/20230929_160932615_iOS.png"
          alt=""
          width={0}
          height={0}
          className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-contain drop-shadow"
        />
        <p className="font-bold text-md md:text-xl lg:text-3xl drop-shadow text-zinc-800 dark:text-slate-100">
          I&apos;m <span className="text-purple-600">Quddus</span>, a Full Stack{" "}
          <span className="text-purple-600">Software Developer</span> from
          Malaysia. Currently a <span className="text-purple-600">student</span>{" "}
          in one of the local university here. I enjoy building things that live
          on the internet, whether that be{" "}
          <span className="text-purple-600">websites</span>,{" "}
          <span className="text-purple-600">applications</span>, or anything in
          between. My goal is to always build{" "}
          <span className="text-purple-600">products</span> that provide
          pixel-perfect, performant experiences.
        </p>
      </RevealList>
    </section>
  );
};

export default AboutSection;
