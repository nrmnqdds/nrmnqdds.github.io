import ProjectCard from "@/components/project-card";
import { Image } from "@unpic/react";

const projects = [
	{
		id: 0,
		title: "IdeaSpace",
		desc: "A platform for non-developers to share their ideas and collaborate with others.",
		techs: ["React.js", "Next.js", "Tailwind CSS", "PostgresQL", "Prisma ORM"],
		imageURI: "/shotsso/ideaspace.png",
		source: "https://github.com/nrmnqdds/ideaspace",
		live: "https://ideaspace.nrmnqdds.com",
	},
	{
		id: 1,
		title: "Simplified i-Ma'luum",
		desc: "A more friendlier version of i-Ma'luum. Making it easier for students to access their academic information.",
		techs: ["React.js", "Next.js", "Tailwind CSS"],
		imageURI: "/shotsso/imaluum.png",
		source: "https://github.com/nrmnqdds/simplified-imaluum",
		live: "https://imaluum.nrmnqdds.com",
	},
	{
		id: 2,
		title: "Studyjom",
		desc: "🚧 WORK IN PROGRESS. A gamified study platform for students with AI features to chat with notes.",
		techs: [
			"React.js",
			"Next.js",
			"TRPC",
			"Tailwind CSS",
			"PostgresQL",
			"Drizzle ORM",
		],
		imageURI: "/shotsso/studyjom.png",
		source: "https://github.com/nrmnqdds/studyjom-v4",
		live: "https://studyjom.nrmnqdds.com",
	},
	{
		id: 3,
		title: "i-Hax 2023",
		desc: "Official website for IIUM i-Hax 2023 event.",
		techs: ["React.js", "Next.js", "Tailwind CSS"],
		imageURI: "/shotsso/ihax.png",
		live: "https://ihaxiium.com",
	},
	{
		id: 6,
		title: "MaLLam NPM Package",
		desc: "A Javascript wrapper around Malaysia Large Language Model (MaLLaM) API for easy integration.",
		techs: ["Typescript"],
		imageURI: "/shotsso/mallam.png",
		source: "https://github.com/nrmnqdds/mallam-npm",
	},
	{
		id: 7,
		title: "MallamChat",
		desc: "The easiest way to chat with Malaysian AI. Powered by MaLLaM API.",
		techs: [
			"React.js",
			"Next.js",
			"Tailwind CSS",
			"Artificial Intelligence",
			"PostgresQL",
			"Drizzle ORM",
		],
		imageURI: "/shotsso/mallamchat.png",
		source: "https://github.com/nrmnqdds/mallamchat",
	},
	{
		id: 4,
		title: "Fuelmy",
		desc: "A mobile app for tracking fuel expenses and consumption.",
		techs: ["React Native", "Expo", "Tailwind CSS"],
		imageURI: "/shotsso/fuelmy.png",
		source: "https://github.com/nrmnqdds/fuelmy",
	},
	{
		id: 5,
		title: "Dragondex",
		desc: "A Pokedex-like mobile app for the infamous app 'Dragon City'",
		techs: ["React Native", "Expo", "Tailwind CSS"],
		imageURI: "/shotsso/dragondex.png",
		source: "https://github.com/nrmnqdds/dragondex",
	},
];

const ProjectNew = () => {
	return (
		<section
			id="projects"
			className="w-full flex flex-col items-center justify-center"
		>
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
				id="projects"
				className="w-full sm:max-w-6xl py-10 px-5 grid place-items-center grid-cols-1 sm:grid-cols-2 gap-3"
			>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						{...project}
						className={
							project.id === projects.length - 1 && project.id % 2 === 0
								? "sm:col-span-2"
								: "col-span-1"
						}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectNew;
