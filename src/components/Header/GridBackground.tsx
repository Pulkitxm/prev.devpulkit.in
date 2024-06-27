import { useEffect, useState } from "react";

export default function GridBackground() {
  const param = 70;
  const [noOfBoxes, setNoOfBoxes] = useState({
    rows: Math.floor(window.innerHeight / param),
    columns: Math.floor(window.innerWidth / param),
  });

  useEffect(() => {
    const handleResize = () => {
      setNoOfBoxes({
        rows: Math.floor(window.innerHeight / param),
        columns: Math.floor(window.innerWidth / param),
      });
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [param]);

  return (
    <div
      className="absolute h-screen w-screen top-0 left-0 grid bg-black"
      style={{
        gridTemplateColumns: `repeat(${noOfBoxes.columns}, 1fr)`,
        gridTemplateRows: `repeat(${noOfBoxes.rows}, 1fr)`,
      }}
    >
      {Array(noOfBoxes.columns * noOfBoxes.rows)
        .fill(0)
        .map((_, j) => (
          <div key={j} className="border border-gray-700 w-full h-full"></div>
        ))}
    </div>
  );
}
