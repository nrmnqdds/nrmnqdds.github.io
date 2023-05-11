import React, { Component } from "react";
import localFont from "next/font/local";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const SFMedium = localFont({ src: "../fonts/SF-Pro-Display-Medium.otf" });

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

class IntroductionCard extends Component {
  state = {};
  render() {
    return (
      <motion.ul
        className="bg-[#121212] w-[80%] rounded-xl flex flex-col items-center p-5 overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={item}>
          <h1 className={`${SFMedium.className} text-6xl text-center`}>
            Designing a better future <br /> through code and creativity!
          </h1>
        </motion.li>
        <motion.li className="flex items-center w-[70%] m-4" variants={item}>
          <p className={`${SFMedium.className} text-[#515151] text-center`}>
            A hobbyist developer and freelancing in graphic design. Combining
            coding and creativity, I have the skills to design and develop
            innovative solutions that make a positive impact on the world.
          </p>
        </motion.li>

        <div className="flex flex-row">
          <ProjectCard />
          <ProjectCard />
        </div>
      </motion.ul>
    );
  }
}

export default IntroductionCard;
