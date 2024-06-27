import NpxDevpulkit from "../Header/NpxDevpulkit";
import { TypewriterEffectSmoothDemo } from "../Typewriter";
import GridBackground from "./GridBackground";

export default function HeroSection() {
  return (
    <>
      <div id="home" className="h-screen w-screen " />
      <div className="absolute h-screen w-screen top-0 left-0 flex flex-col items-center justify-center z-20">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
          Hey, I am Pulkit
        </p>
        <TypewriterEffectSmoothDemo />
        <NpxDevpulkit />
      </div>
      <GridBackground />
    </>
  );
}
