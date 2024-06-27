import About from "../components/About";
import Contact from "../components/Contact";
import HeroSection from "../components/Header/HeroSection";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
