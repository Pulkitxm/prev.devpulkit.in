"use client";

import NpxDevpulkit from "./NpxDevpulkit";
import TypewriterEffect from "./Typewriter";
import GridBackground from "./GridBackground";

export default function HeroSection() {
  return (
    <>
      <div id="home" className="h-screen w-screen" />
      <div className="absolute left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-2 text-4xl font-bold text-transparent sm:text-7xl">
          Hey, I am Pulkit
        </p>
        <TypewriterEffect />
        <NpxDevpulkit />
      </div>
      <GridBackground />
    </>
  );
}
