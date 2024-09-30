import { useEffect, useRef } from "react";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const loader = loaderRef.current;
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 1000);
      }, 1500);
    }
  }, []);
  return (
    <div
      className="fixed z-[1000] flex h-screen w-screen items-center justify-center bg-black text-gray-100 transition-opacity duration-1000"
      ref={loaderRef}
    >
      <svg
        className="h-16 w-16 animate-bump md:h-20 md:w-20 lg:h-24 lg:w-24"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(193,90%,55%)" />
            <stop offset="100%" stopColor="hsl(223,90%,55%)" />
          </linearGradient>
        </defs>
        <circle
          className="pl__ring"
          r="56"
          cx="64"
          cy="64"
          fill="none"
          stroke="rgb(255, 255, 255, 0.3)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          className="pl__worm animate-worm"
          d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
          fill="none"
          stroke="url(#pl-grad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="44 1111"
          strokeDashoffset="10"
        />
      </svg>
    </div>
  );
}
