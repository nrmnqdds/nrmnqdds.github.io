import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { AiOutlineArrowRight } from "react-icons/ai";

const GeneralSansSemiBold = localFont({
  src: "../fonts/GeneralSans-Semibold.otf",
});

function ProjectCard({ title, link, image }) {
  return (
    <Link href={`${link}`} className="flex-1 my-5 ">
      <motion.button
        className="w-full h-[500px] bg-white relative rounded-[40px] overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src={`${image}`}
          // width={500}
          // height={500}
          alt="Picture of the author"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute flex bottom-0 left-0 right-0 py-4 px-6 text-white z-10 justify-between items-center">
          <p className={`${GeneralSansSemiBold.className} text-xl`}>{title}</p>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
            <AiOutlineArrowRight
              color="rgb(252, 116, 66)"
              size={20}
              className="text-white"
            />
          </div>
        </div>
      </motion.button>
    </Link>
  );
}

export default ProjectCard;
