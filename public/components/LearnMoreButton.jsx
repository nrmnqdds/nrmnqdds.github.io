import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

function LearnMoreButton() {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.button
      className="flex items-center justify-center w-8 h-8 rounded-full bg-white"
      whileHover={{ width: "auto" }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <div className="flex items-center">
        {isHover && (
          <motion.p
            className="mr-1 text-sm font-medium text-gray-700 whitespace-nowrap"
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            Learn More
          </motion.p>
        )}
        <AiOutlineArrowRight color="rgb(252, 116, 66)" size={20} />
      </div>
    </motion.button>
  );
}

export default LearnMoreButton;
