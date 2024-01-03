"use client";
import MEMOJI from "@/public/20230929_160956503_iOS.png";
import Lenis from "@studio-freight/lenis";
import { Image as UnpicImage } from "@unpic/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "cbl-staging.nrmnqdds.com_auth_login.png",
  "ihaxiium.com_.png",
  "dragondex-api.nrmnqdds.com_dragons_.png",
  "dragondex-api.nrmnqdds.com_dragons_.png",
  "dd.png",
  "imaluum.nrmnqdds.com_.png",
  "imaluum.nrmnqdds.com_.png",
  "imaluum.nrmnqdds.com_schedule.png",
  "hangnadim.vercel.app_.png",
  "localhost_3000_ (copy 1).png",
  "fuelmy.png",
  "imaluum.nrmnqdds.com_.png",
];

const image2 = [
  {
    src: "cbl-staging.nrmnqdds.com_auth_login.png",
    href: "https://cbl-staging.nrmnqdds.com",
  },
  {
    src: "ihaxiium.com_.png",
    href: "https://ihaxiium.com",
  },
  {
    src: "dragondex-api.nrmnqdds.com_dragons_.png",
    href: "https://dragondex-api.nrmnqdds.com",
  },
  {
    src: "dragondex-api.nrmnqdds.com_dragons_.png",
    href: "https://dragondex-api.nrmnqdds.com",
  },
  {
    src: "dd.png",
    href: "https://github.com/nrmnqdds/Dragondex",
  },
  {
    src: "imaluum.nrmnqdds.com_.png",
    href: "https://imaluum.nrmnqdds.com",
  },
  {
    src: "imaluum.nrmnqdds.com_.png",
    href: "https://imaluum.nrmnqdds.com",
  },
  {
    src: "imaluum.nrmnqdds.com_.png",
    href: "https://imaluum.nrmnqdds.com",
  },
  {
    src: "hangnadim.vercel.app_.png",
    href: "https://hangnadim.vercel.app",
  },
  {
    src: "localhost_3000_ (copy 1).png",
    href: "https://github.com/nrmnqdds/i-study",
  },
  {
    src: "fuelmy.png",
    href: "https://github.com/nrmnqdds/fuelmy",
  },
  {
    src: "imaluum.nrmnqdds.com_.png",
    href: "https://imaluum.nrmnqdds.com",
  },
];

export default function Projects() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="projects">
      <div className="flex flex-row items-center justify-center mb-5">
        <UnpicImage
          src="20230929_160956503_iOS.png"
          alt="memoji"
          width={100}
          height={100}
          className="w-auto object-contain"
        />
        <h1 className="text-white font-bold text-3xl md:text-5xl">
          Check out things I built!
        </h1>
      </div>
      <div
        ref={gallery}
        className="h-[175vh] bg-zinc-950 relative flex gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </section>
  );
}

const Column = ({
  images,
  y,
}: {
  images: string[];
  y: any;
}) => {
  return (
    <motion.div
      className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw]  [&:nth-of-type(1)]:top-[-45%] [&:nth-of-type(2)]:top-[-95%] [&:nth-of-type(3)]:top-[-45%] [&:nth-of-type(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="h-full w-full relative rounded-[1vw] overflow-hidden"
          >
            <Image
              src={`/images/${src}`}
              alt="image"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        );
      })}
    </motion.div>
  );
};
