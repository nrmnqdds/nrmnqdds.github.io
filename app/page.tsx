import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dotted-spacing-4 dark:bg-dotted-zinc-800 bg-dotted-slate-300 bg-slate-100 dark:bg-zinc-900 px-24">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
