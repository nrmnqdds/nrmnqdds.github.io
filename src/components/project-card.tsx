import { cn } from "@/lib/cn";
import { Image } from "@unpic/react";

type ProjectCardProps = {
	imageURI: string;
	title: string;
	desc: string;
	techs: string[];
	className?: string;
	source?: string;
	live?: string;
};

const ProjectCard = ({
	imageURI,
	title,
	desc,
	techs,
	className,
	source,
	live,
}: ProjectCardProps) => {
	return (
		<div
			className={cn(
				"bg-zinc-950 border border-zinc-700 p-3 rounded-2xl h-[700px] flex flex-col justify-between",
				className,
			)}
		>
			<div className="w-full h-2/3 relative overflow-hidden rounded-2xl">
				<Image
					src={imageURI}
					alt="project-image"
					layout="fullWidth"
					className="rounded-2xl absolute -translate-y-10"
				/>
			</div>
			<h1 className="text-white font-bold text-4xl">{title}</h1>
			<p className="text-white">{desc}</p>
			<div className="flex flex-row gap-2">
				{techs.map((tech, i) => (
					<span key={i} className="text-white bg-zinc-700 px-2 py-1 rounded-lg">
						{tech}
					</span>
				))}
			</div>
			<div className="flex flex-row gap-2">
				{source && (
					<a
						href={source}
						target="_blank"
						rel="noreferrer"
						className="text-white bg-purple-700 hover:bg-purple-800 px-2 py-1 rounded-lg"
					>
						Source Code
					</a>
				)}
				{live && (
					<a
						href={live}
						target="_blank"
						rel="noreferrer"
						className="text-white bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded-lg"
					>
						Live
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
