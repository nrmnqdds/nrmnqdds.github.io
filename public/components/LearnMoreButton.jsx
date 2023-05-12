import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const GeneralSansRegular = localFont({
  src: "../fonts/GeneralSans-Regular.otf",
});

const GeneralSansSemiBold = localFont({
  src: "../fonts/GeneralSans-Semibold.otf",
});

function LearnMoreButton() {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.button
      className="flex items-center flex-row relative justify-center rounded-full bg-white p-2 w-auto overflow-hidden"
      whileHover={{ width: "50%" }}
      transition={{ duration: 0.7 }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      {isHover && (
        <motion.p
          className={`${GeneralSansSemiBold.className} text-orange-600 whitespace-nowrap`}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: "100%" }}
          transition={{ duration: 1 }}
        >
          Learn More
        </motion.p>
      )}
      <AiOutlineArrowRight
        color="rgb(252, 116, 66)"
        size={20}
        className="invisible"
      />
      <div className="absolute flex flex-row justify-end w-full p-2">
        <AiOutlineArrowRight color="rgb(252, 116, 66)" size={20} />
      </div>
    </motion.button>
  );
}

export default LearnMoreButton;
