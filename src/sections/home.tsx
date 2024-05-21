import { Image } from "@unpic/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

const fadeInAnimationVariants1 = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1,
			duration: 0.5,
			type: "easeInOut",
		},
	},
};

const fadeInAnimationVariants2 = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
			duration: 0.5,
			type: "easeInOut",
		},
	},
};

const fadeInAnimationVariants3 = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
			duration: 0.5,
			type: "easeInOut",
		},
	},
};

const Home = () => {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => {
					direction = e.direction * -1;
				},
			},
			x: "-500px",
		});
		requestAnimationFrame(animate);
	}, [direction]);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.1 * direction;
	};

	return (
		<section id="home" className="h-screen overflow-hidden relative">
			<div className="absolute flex flex-col md:flex-row items-center justify-center w-full h-full">
				<div className="md:flex-1 flex items-center justify-center">
					<motion.div
						className="space-y-10"
						variants={fadeInAnimationVariants1}
						initial="initial"
						animate="animate"
					>
						<h1 className="font-bold text-5xl md:text-9xl text-zinc-900 [text-shadow:-3px_-3px_0_#FFF,3px_-3px_0_#FFF,_-3px_3px_0_#FFF,3px_3px_0_#FFF] mb-5">
							I&apos;m Quddus
						</h1>
						<span className="text-xl md:text-2xl lg:text-4xl font-bold text-zinc-600 dark:text-zinc-400 drop-shadow">
							<Typewriter
								options={{
									strings: [
										"Full Stack Developer.",
										"Graphic Designer.",
										"Tech Enthusiast.",
									],
									autoStart: true,
									loop: true,
									delay: 50,
									deleteSpeed: 30,
								}}
							/>
						</span>
					</motion.div>
				</div>
				<div className="md:flex-1 flex items-center justify-center">
					<motion.div
						variants={fadeInAnimationVariants2}
						initial="initial"
						animate="animate"
					>
						<Image
							src="/20230929_160804026_iOS.png"
							alt="memoji"
							width={300}
							height={300}
							className="w-auto object-contain pb-24"
						/>
					</motion.div>
				</div>
			</div>
			<motion.div
				className="absolute top-[calc(100vh-300px)]"
				variants={fadeInAnimationVariants3}
				initial="initial"
				animate="animate"
			>
				<div ref={slider} className="relative flex whitespace-nowrap">
					<p
						ref={firstText}
						className="text-white/10 font-[500] text-5xl md:text-[230px]"
					>
						Software Developer -
					</p>

					<p
						ref={secondText}
						className="absolute left-[100%] text-white/10 font-[500] text-5xl md:text-[230px]"
					>
						Software Developer -
					</p>
				</div>
			</motion.div>
		</section>
	);
};

export default Home;
