import React, { Component } from "react";
import localFont from "next/font/local";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const SFMedium = localFont({ src: "../fonts/SF-Pro-Display-Medium.otf" });
const GeneralSansSemiBold = localFont({
  src: "../fonts/GeneralSans-Semibold.otf",
});
const GeneralSansRegular = localFont({
  src: "../fonts/GeneralSans-Regular.otf",
});

class IntroductionCard extends Component {
  state = {};
  render() {
    return (
      <motion.ul
        className="bg-[#121212] w-[95%] rounded-[40px] flex flex-col items-center p-5 overflow-hidden"
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
        >
          <h1
            className={`${GeneralSansSemiBold.className} text-6xl text-center mt-10`}
          >
            Designing a better future <br /> through code and creativity!
          </h1>
        </motion.li>
        <motion.li
          className="flex items-center w-[70%] m-4"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
        >
          <p
            className={`${GeneralSansRegular.className} text-[#515151] text-center`}
          >
            A hobbyist developer and freelancing in graphic design. Combining
            coding and creativity, I have the skills to design and develop
            innovative solutions that make a positive impact on the world.
          </p>
        </motion.li>

        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </motion.button>

        <div className="flex flex-row">
          <ProjectCard />
          <ProjectCard />
        </div>
      </motion.ul>
    );
  }
}

export default IntroductionCard;
