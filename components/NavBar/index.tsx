"use client";

import { useEffect, useState } from "react";
import FloatingNavBar from "./FloatingNavBar";

export default function NavBar() {
  const [expaned, setExpanded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    function handleScrollUpdate() {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    }
    window.addEventListener("scroll", handleScrollUpdate);
    return () => {
      window.removeEventListener("scroll", handleScrollUpdate);
    };
  }, []);

  return (
    <div className="relative w-full">
      <FloatingNavBar expaned={expaned} />
    </div>
  );
}
