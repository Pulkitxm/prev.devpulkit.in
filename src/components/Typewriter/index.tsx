
import { TypewriterEffectSmooth } from "./Typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I",
    },
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "web",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "apps",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}