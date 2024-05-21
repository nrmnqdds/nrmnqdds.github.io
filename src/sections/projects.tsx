import Lenis from "@studio-freight/lenis";
import { Image } from "@unpic/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const image2 = [
	{
		src: "imaluum.nrmnqdds.com_.png",
		href: "https://imaluum.nrmnqdds.com",
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
		src: "cbl-staging.nrmnqdds.com_auth_login.png",
		href: "https://cbl-staging.nrmnqdds.com",
	},
	{
		src: "imaluum.nrmnqdds.com_.png",
		href: "https://imaluum.nrmnqdds.com",
	},
	{
		src: "ideaspace.nrmnqdds.com_.png",
		href: "https://ideaspace.nrmnqdds.com",
	},
	{
		src: "hangnadim.vercel.app_.png",
		href: "https://hangnadim.vercel.app",
	},
	{
		src: "studyjom.nrmnqdds.com_.png",
		href: "https://studyjom.nrmnqdds.com",
	},
	{
		src: "fuelmy.png",
		href: "https://github.com/nrmnqdds/fuelmy",
	},
	{
		src: "studyjom.nrmnqdds.com_.png",
		href: "https://studyjom.nrmnqdds.com",
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
				<Image
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
				<Column images={[image2[0], image2[1], image2[2]]} y={y} />
				<Column images={[image2[3], image2[4], image2[5]]} y={y2} />
				<Column images={[image2[6], image2[7], image2[8]]} y={y3} />
				<Column images={[image2[9], image2[10], image2[11]]} y={y4} />
			</div>
		</section>
	);
}

const Column = ({
	images,
	y,
}: {
	images: { src: string; href: string }[];
	y: any;
}) => {
	return (
		<motion.div
			className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] [&:nth-of-type(1)]:top-[-45%] [&:nth-of-type(2)]:top-[-95%] [&:nth-of-type(3)]:top-[-45%] [&:nth-of-type(4)]:top-[-75%]"
			style={{ y }}
		>
			{images.map((src, i) => {
				return (
					<a
						key={i}
						href={src.href}
						target="_blank"
						rel="noreferrer noopener"
						className="group h-full w-full relative rounded-[1vw] overflow-hidden hover:opacity-70 transition-opacity duration-100"
					>
						<Image
							src={`/images/${src.src}`}
							layout="fullWidth"
							alt="image"
							className="w-full h-full group-hover:scale-110 transition-all duration-100"
						/>
					</a>
				);
			})}
		</motion.div>
	);
};
