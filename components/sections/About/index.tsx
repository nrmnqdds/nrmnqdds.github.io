"use client";

import { Image } from "@unpic/react";
import Word from "./Word";

const paragraph =
  "I'm Quddus, a developer from Malaysia. Currently studying in university. I enjoy building things that live on the internet, whether that be websites, applications, or anything in between.";

export default function Home() {
  return (
    <section
      id="about"
      className="flex flex-row items-center justify-center h-screen py-24"
    >
      <Word paragraph={paragraph} />
      <Image
        src="20230929_160932615_iOS.png"
        alt="memoji"
        width={300}
        height={300}
        className="hidden md:block object-contain w-auto"
      />
    </section>
  );
}
