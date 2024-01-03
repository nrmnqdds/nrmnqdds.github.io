"use client";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skills = [
  "HTML",
  "CSS",
  "Typescript",
  "Javascript",
  "React",
  "Nextjs",
  "Vuejs",
  "React Native",
  "Expo",
  "Tailwindcss",
  "Nestjs",
  "MongoDB",
  "Supabase",
  "Prisma",
  "Git",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col gap-10 items-center justify-center h-fit p-24"
    >
      <h1 className="text-white font-bold text-5xl">Skills</h1>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-5">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-zinc-600 dark:bg-zinc-400 text-zinc-900 font-bold px-5 py-3 rounded-md"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
