import HeroSection from "@/components/Header/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blogs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Blog />
    </>
  );
}
