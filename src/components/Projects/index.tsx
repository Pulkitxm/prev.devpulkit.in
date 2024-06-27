import { HoverEffect } from "./CardHoverEffect";
import projects from "./Projects";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Some of my Cool Projects
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
