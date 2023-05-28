"use client";

import React from "react";
import localFont from "next/font/local";
import GHContributonGraph from "../../public/components/GHContributionGraph";
import HiImage from "../../public/images/hi.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { SocialIcon } from "react-social-icons";

const SFBold = localFont({
  src: "../../public/fonts/SF-Pro-Text-Bold.otf",
  display: "swap",
});

export default function Home() {
  return (
    <div
      className={`${SFBold.className} flex flex-col min-h-screen w-screen bg-[#121212] p-10`}
    >
      <Marquee speed={100}>
        Website is still under constructions. You are experiencing the beta
        version right now.
      </Marquee>
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
          {/* <p className="text-[#515151]">20 years old IIUM Student</p> */}
          <div className="text-[#515151]">
            <Typewriter
              options={{
                strings: [
                  "20 years old IIUM Student",
                  "An engineering student by day",
                  "A hobbyist developer by night",
                  "Welcome to my profile",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
              }}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <SocialIcon
            url="https://www.github.com/qryskalyst20"
            bgColor="transparent"
            fgColor="#515151"
          />
          <SocialIcon
            url="https://www.instagram.com/nrmnqdds"
            bgColor="transparent"
            fgColor="#515151"
          />
          <SocialIcon
            url="https://www.twitter.com/nrmnqdds"
            bgColor="transparent"
            fgColor="#515151"
          />
          <SocialIcon
            url="https://www.snapchat.com/add/nrmnqdds?share_id=sB8NYcLkwL0&locale=en-MY"
            bgColor="transparent"
            fgColor="#515151"
          />
        </div>
      </motion.div>

      <div className="flex flex-row gap-5">
        <GHContributonGraph />
        <GHContributonGraph />
        <GHContributonGraph />
      </div>
    </div>
  );
}
