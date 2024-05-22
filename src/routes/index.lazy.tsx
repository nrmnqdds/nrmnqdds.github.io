import ScrollProgress from "@/components/scroll-progress";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import Home from "@/sections/home";
import ProjectNew from "@/sections/project-new";
// import Projects from "@/sections/projects";
import Skills from "@/sections/skills";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<>
			<ScrollProgress />
			<Home />
			<About />
			{/* <Projects /> */}
			<ProjectNew />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}
