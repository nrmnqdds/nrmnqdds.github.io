"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Syasyatopnav from "../../../public/components/Syasyatopnav";
import Syasyasidenav from "../../../public/components/Syasyasidenav";
import SyasyaLogin from "../../../public/components/SyasyaLogin";
import SyasyaCustomerFeedback from "../../../public/components/SyasyaCustomerFeedback";

export default function Syasya() {
  const [showLogin, setShowLogin] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  return (
    <div className="bg-white max-w-screen min-h-screen">
      <Syasyatopnav />
      <motion.div
        className="float-right w-[10%] bg-gray-300 flex items-center justify-center h-screen text-black z-[1]"
        whileHover={{ width: "15%" }}
      >
        Advertisement
      </motion.div>
      <motion.div
        className="float-left w-[10%] bg-gray-300 "
        whileHover={{ width: "15%" }}
      >
        <Syasyasidenav showLogin showFeedback />
      </motion.div>

      {showLogin && <SyasyaLogin />}
      {showFeedback && <SyasyaCustomerFeedback />}
      {/* <SyasyaLogin />
      <SyasyaCustomerFeedback /> */}
    </div>
  );
}
