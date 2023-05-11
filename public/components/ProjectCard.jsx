import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";

function ProjectCard({ title, link }) {
  return (
    <Link href={`${link}`} className="flex-1 my-5">
      <motion.button
        className="w-full h-[300px] bg-white rounded-[40px]"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <p className="text-black">{title}</p>
      </motion.button>
    </Link>
  );
}

export default ProjectCard;
