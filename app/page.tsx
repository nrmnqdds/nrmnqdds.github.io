import ScrollProgress from "@/components/ScrollProgress";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

const Page = () => {
  return (
    <>
      <ScrollProgress />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
