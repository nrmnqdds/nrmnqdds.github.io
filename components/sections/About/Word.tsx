import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className="flex text-3xl md:text-6xl leading-none p-10 max-w-7xl flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const purple = ["Quddus,", "Malaysia.", "studying", "live", "websites,"];

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mt-3 mr-3">
      <span className="absolute opacity-5">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={purple.includes(children) ? "text-purple-600" : "text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};
