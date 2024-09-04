"use client";

import React from "react";
import { useEffect, useState } from "react";

export default function GridBackground() {
  const param = 40;
  const [noOfBoxes, setNoOfBoxes] = useState({
    rows: 30,
    columns: 30,
  });

  useEffect(() => {
    if (typeof window == "undefined") return;

    const handleResize = () => {
      setNoOfBoxes({
        rows: Math.floor(window.innerHeight / param),
        columns: Math.floor(window.innerWidth / param),
      });
    };

    // Initial Call
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="absolute left-0 top-0 grid h-screen w-screen bg-black"
      style={{
        gridTemplateColumns: `repeat(${noOfBoxes.columns}, 1fr)`,
        gridTemplateRows: `repeat(${noOfBoxes.rows}, 1fr)`,
      }}
    >
      {Array(noOfBoxes.columns * noOfBoxes.rows)
        .fill(0)
        .map((_, j) => (
          <div key={j} className="h-full w-full border border-gray-700"></div>
        ))}
    </div>
  );
}
