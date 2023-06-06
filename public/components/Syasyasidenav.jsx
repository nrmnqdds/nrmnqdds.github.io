"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const sidebutton = {
  whileHover: { scale: 1.1, backgroundColor: "#d7a634", margin: "10px" },
  whileTap: { scale: 0.9 },
};

export default function Syasyasidenav() {
  const [showCustomers, setShowCustomers] = useState(false);

  const handleClick = () => {
    setShowCustomers(!showCustomers);
  };

  return (
    <div className="h-screen w-[10%] bg-gray-300 flex flex-col items-center justify-center text-black gap-2">
      <p>Menu</p>
      <motion.button
        className="bg-white border-[1.5px] border-black w-[100px] h-[30px] rounded-lg"
        whileHover={sidebutton.whileHover}
        whileTap={sidebutton.whileTap}
      >
        Home
      </motion.button>
      <motion.button
        className="bg-white border-[1.5px] border-black w-[100px] h-[30px] rounded-lg"
        whileHover={sidebutton.whileHover}
        whileTap={sidebutton.whileTap}
      >
        Cars/Vans
      </motion.button>
      <motion.button
        className="bg-white border-[1.5px] border-black w-[100px] h-[30px] rounded-lg"
        whileHover={sidebutton.whileHover}
        whileTap={sidebutton.whileTap}
        onClick={handleClick}
      >
        Customers
      </motion.button>
      {showCustomers && (
        <ul className="text-[10px] mb-3">
          <li>
            <button className="hover:text-red-600 focus:text-red-600">
              Log In
            </button>
          </li>
          <li>
            <button className="hover:text-red-600 focus:text-red-600">
              Customer Feedback
            </button>
          </li>
        </ul>
      )}
      <motion.button
        className="bg-white border-[1.5px] border-black w-[100px] h-[30px] rounded-lg"
        whileHover={sidebutton.whileHover}
        whileTap={sidebutton.whileTap}
      >
        About
      </motion.button>
      <motion.button
        className="bg-white border-[1.5px] border-black w-[100px] h-[30px] rounded-lg"
        whileHover={sidebutton.whileHover}
        whileTap={sidebutton.whileTap}
      >
        Fun Stuff
      </motion.button>
      <motion.button
        className="bg-white border-[1.5px] border-black w-[100px] h-[30px] rounded-lg"
        whileHover={sidebutton.whileHover}
        whileTap={sidebutton.whileTap}
      >
        Live Stuff
      </motion.button>
    </div>
  );
}
