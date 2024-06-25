import NpxDevpulkit from "../Header/NpxDevpulkit";
import { TypewriterEffectSmoothDemo } from "../Typewriter";

export default function HeroSection() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
        Hey, I am Pulkit
      </p>
      <TypewriterEffectSmoothDemo />
      <NpxDevpulkit />
    </div>
  );
}
