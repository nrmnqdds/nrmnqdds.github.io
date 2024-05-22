import ProjectCard from "@/components/project-card";

const projects = [
	{
		id: 0,
		title: "IdeaSpace",
		desc: "A platform for non-developers to share their ideas and collaborate with others.",
		techs: ["Reactjs", "Next.js", "Tailwind CSS", "PostgresQL", "Prisma ORM"],
		imageURI: "/shotsso/ideaspace.png",
		source: "https://github.com/nrmnqdds/ideaspace",
		live: "https://ideaspace.nrmnqdds.com",
	},
	{
		id: 1,
		title: "Simplified i-Ma'luum",
		desc: "A more friendlier version of i-Ma'luum.",
		techs: ["Reactjs", "Next.js", "Tailwind CSS"],
		imageURI: "/shotsso/imaluum.png",
		source: "https://github.com/nrmnqdds/simplified-imaluum",
		live: "https://imaluum.nrmnqdds.com",
	},
	{
		id: 2,
		title: "Studyjom",
		desc: "A gamified study platform for students with AI features to chat with notes.",
		techs: [
			"Reactjs",
			"Next.js",
			"TRPC",
			"Tailwind CSS",
			"PostgresQL",
			"Drizzle ORM",
		],
		imageURI: "/shotsso/studyjom.png",
		// source: "https://github.com/nrmnqdds/studyjom-v3",
		live: "https://studyjom.nrmnqdds.com",
	},
	{
		id: 3,
		title: "i-Hax 2023",
		desc: "Official website for i-Hax 2023 event.",
		techs: ["Reactjs", "Next.js", "Tailwind CSS"],
		imageURI: "/shotsso/ihax.png",
		live: "https://ihaxiium.com",
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
		<section id="projects" className="w-full py-10 grid grid-cols-2 gap-3">
			{projects.map((project, i) => (
				<ProjectCard key={i} {...project} />
			))}
		</section>
	);
};

export default ProjectNew;
