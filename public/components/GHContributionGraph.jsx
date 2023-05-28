"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

// Custom component for image element
const Image = ({ node, ...props }) => {
  return <img style={{ borderRadius: "10px" }} {...props} />;
};

export default function GHContributonGraph() {
  return (
    <motion.div
      className="w-[30%] rounded-xl"
      initial={{
        y: 30,
        opacity: 0,
      }}
      whileInView={{
        y: [30, 20, 10, 0],
        opacity: [0, 0.1, 0.2, 0.3, 1],
        duration: 5,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <ReactMarkdown
        components={{
          // Use the custom component for image element
          img: Image,
        }}
      >
        [![Ashutosh's github activity
        graph](https://github-readme-activity-graph.vercel.app/graph?username=qryskalyst20&bg_color=ffcfe9&color=9e4c98&line=9e4c98&point=403d3d&area=true&hide_border=true&padding=20&hide_title=true&hide_legend=true&hide_labels=true)](https://github.com/qryskalyst20)
      </ReactMarkdown>
    </motion.div>
  );
}
