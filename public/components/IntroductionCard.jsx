import React, { Component, useState } from "react";
import localFont from "next/font/local";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const SFMedium = localFont({ src: "../fonts/SF-Pro-Display-Medium.otf" });
const GeneralSansSemiBold = localFont({
  src: "../fonts/GeneralSans-Semibold.otf",
});
const GeneralSansRegular = localFont({
  src: "../fonts/GeneralSans-Regular.otf",
});

function IntroductionCard() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.ul
      className="bg-[#121212] w-[95%] rounded-[40px] flex flex-col items-center p-5 overflow-hidden"
      transition={{
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }}
    >
      <motion.li
        animate={{
          y: [20, 0],
          opacity: [0, 0.1, 0.2, 0.3, 1],
        }}
        transition={{
          duration: 5,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
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
        animate={{
          y: [20, 0],
          opacity: [0, 0.2, 0.5, 1],
        }}
        transition={{
          duration: 3,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
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

      <motion.li
        animate={{
          y: [20, 0],
          opacity: [0, 0.2, 0.5, 1],
        }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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
      </motion.li>
      <motion.li
        animate={{
          y: [20, 0],
          opacity: [0, 0.2, 0.5, 1],
        }}
        transition={{
          duration: 3,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex gap-4 w-full"
      >
        <ProjectCard
          title="IIUM-Student-Services App"
          link="/projects/IIUM-Student-Services"
          image="/images/65968.jpg"
        />
        <ProjectCard
          title="RTWordle"
          link="/projects/RTWordle"
          image="/images/download20230100021620.png"
        />
      </motion.li>
    </motion.ul>
  );
}

export default IntroductionCard;
