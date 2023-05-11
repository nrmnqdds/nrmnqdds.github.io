import React, { Component } from "react";
import localFont from "next/font/local";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

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
          // hidden: { opacity: 1, scale: 0 },
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
          className="bg-gradient-to-b from-orange-400 to-red-500 py-3 px-4 rounded-full flex flex-row items-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
          <AiOutlineArrowRight
            color="rgb(252, 116, 66)"
            size={20}
            className="bg-white rounded-full mx-2"
          />
        </motion.button>

        <div className="flex flex-row">
          <Link href="/projects/IIUM-Student-Services">
            <ProjectCard title="IIUM-Student-Services App" />
          </Link>

          <ProjectCard title="RTWordle" />
        </div>
      </motion.ul>
    );
  }
}

export default IntroductionCard;
