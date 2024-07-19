import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import HeroSection from "../components/Header/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </>
  );
}
