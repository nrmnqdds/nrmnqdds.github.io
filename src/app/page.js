"use client";

import React from "react";
import localFont from "next/font/local";
import GHContributonGraph from "../../public/components/GHContributionGraph";
import HiImage from "../../public/images/hi.png";
import Image from "next/image";
import { motion } from "framer-motion";

const SFBold = localFont({
  src: "../../public/fonts/SF-Pro-Text-Bold.otf",
  display: "swap",
});

export default function Home() {
  return (
    <div
      className={`${SFBold.className} flex flex-col min-h-screen w-screen bg-[#121212] p-10`}
    >
      <motion.div
        className="flex flex-row"
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: [0, 0.1, 0.2, 1],
          duration: 5,
        }}
      >
        <Image
          src={HiImage}
          width={110}
          style={{ objectFit: "contain", margin: 10 }}
        />
        <div className="text-left m-10 ml-0">
          <p className="text-6xl">Hello! I am Quddus!</p>
          <p className="text-[#515151]">20 years old IIUM Student</p>
        </div>
      </motion.div>

      <GHContributonGraph />
    </div>
  );
}
