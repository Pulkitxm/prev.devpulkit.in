import { useCallback, useEffect, useMemo, useState } from "react";
import ProjectStack from "./ProjectStack";
import ProjectCards from "./ProjectCards";

export default function CardHoverEffectDemo() {
  const [width, setWidth] = useState(window.innerWidth);
  const showStack = useMemo(() => width > 768, [width]);
  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, width]);
  useEffect(() => {
    handleResize();
  }, [handleResize]);
  return (
    <div className="text-white" id="projects">
      <h1
        className={`text-2xl md:text-4xl font-bold text-center ${
          showStack ? "" : "mb-10"
        }`}
      >
        Some of my Cool Projects
      </h1>
      {showStack ? <ProjectStack /> : <ProjectCards />}
    </div>
  );
}
