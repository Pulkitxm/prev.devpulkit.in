"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import ProjectStack from "./ProjectStack";
import ProjectCards from "./ProjectCards";

export default function Projects() {
  const [width, setWidth] = useState(500);
  const showStack = useMemo(() => width > 768, [width]);
  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, width]);
  useEffect(() => {
    handleResize();
  }, [handleResize]);
  return (
    <div className="text-white" id="projects">
      <h1
        className={`text-center text-2xl font-bold md:text-4xl ${
          showStack ? "" : "mb-10"
        }`}
      >
        Some of my Cool Projects
      </h1>
      {showStack ? <ProjectStack /> : <ProjectCards />}
    </div>
  );
}
