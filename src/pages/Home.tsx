import About from "../components/About";
import Contact from "../components/Contact";
import HeroSection from "../components/Header/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <div className="h-screen bg-red-500" />
      <Contact />
    </>
  );
}
