"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navigations = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: "easeInOut",
    },
  },
};

const Navbar = () => {
  return (
    <nav className="z-50 fixed w-full top-5 flex item-center justify-center">
      <motion.div
        className="bg-zinc-950 rounded-full border border-zinc-600 flex flex-row gap-10 items-center justify-center"
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
      >
        {navigations.map((navigation, index) => (
          <Link
            key={index}
            href={navigation.href}
            className="text-zinc-100 font-bold px-5 py-3 rounded-md hover:text-purple-600"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(navigation.href);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {navigation.name}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
