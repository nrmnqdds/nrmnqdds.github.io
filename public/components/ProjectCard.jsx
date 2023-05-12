import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { AiOutlineArrowRight } from "react-icons/ai";
import LearnMoreButton from "./LearnMoreButton";

const GeneralSansSemiBold = localFont({
  src: "../fonts/GeneralSans-Semibold.otf",
});

function ProjectCard({ title, link, image }) {
  return (
    <Link href={`${link}`} className="flex-1 my-5">
      <button className="w-full h-[500px] bg-white relative rounded-[40px] overflow-hidden cursor-default">
        <Image
          src={`${image}`}
          // width={500}
          // height={500}
          alt="Picture of the author"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute flex flex-row bottom-0 w-full py-4 px-6 text-white z-10">
          <div className="flex flex-1 items-center justify-start">
            <p className={`${GeneralSansSemiBold.className} text-xl`}>
              {title}
            </p>
          </div>

          {/* <AiOutlineArrowRight
              color="rgb(252, 116, 66)"
              size={20}
              className="text-white"
            /> */}
          <div className="flex flex-1 items-center justify-end">
            <LearnMoreButton />
          </div>
        </div>
      </button>
    </Link>
  );
}

export default ProjectCard;
