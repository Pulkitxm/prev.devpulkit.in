"use client";

import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Slider() {
  const sliderContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sliderContainer,
    offset: ["start end", "end start"],
  });
  return (
    <div
      ref={sliderContainer}
      className="my-10 w-screen overflow-hidden text-2xl text-white md:my-28 md:text-6xl"
    >
      <MultiplePhrases
        src="Full Stack Developement Software As A Service"
        left={-120}
        progress={scrollYProgress}
        direction={"left"}
      />
      <p className="text-center">Interested in collaboration?</p>
      <MultiplePhrases
        src="Website UI BACKEND Developement"
        left={-100}
        progress={scrollYProgress}
        direction={"right"}
      />
    </div>
  );
}

function MultiplePhrases({
  src,
  left,
  progress,
  direction,
}: {
  src: string;
  left: number;
  progress: MotionValue<number>;
  direction: "left" | "right";
}) {
  const directionX = direction == "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * directionX, -150 * directionX],
  );
  return (
    <motion.div
      className="relative my-3 flex space-x-3 whitespace-nowrap opacity-50 md:my-7"
      style={{ left, x: translateX }}
    >
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
}

function Phrase({ src }: { src: string }) {
  return <p>{src}</p>;
}
