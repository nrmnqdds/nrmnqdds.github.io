import React, { Component } from "react";
import { motion } from "framer-motion";

function ProjectCard({ title }) {
  return (
    <motion.button
      className="w-64 h-64 bg-white m-5"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <p className="text-black">{title}</p>
    </motion.button>
  );
}

export default ProjectCard;
