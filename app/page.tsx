import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillSection from "@/sections/SkillSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dotted-spacing-4 dark:bg-dotted-zinc-800 bg-dotted-slate-300 bg-slate-100 dark:bg-zinc-900 px-5 md:px-24">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
    </main>
  );
}
