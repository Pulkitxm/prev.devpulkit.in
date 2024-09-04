"use client";

import TextGenerateEffect from "./TextReveal";
import Pulkit from "@/assets/pulkit.webp";
import Image from "next/image";

const words = `I'm Pulkit, a technology enthusiast with a passion for exploring the digital landscape. While I'm not diving into code or navigating through APIs, you'll often find me having fun with friends and family. I also enjoy watching TV shows, and I often read tech blogs. Balancing my technical skills with creativity and introspection fuels my journey in both professional and personal endeavors.`;

export default function TextGenerateEffectDemo() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center bg-black py-10 text-white md:py-40"
    >
      <h1 className="mb-10 text-2xl font-bold md:text-4xl">A Bit About me</h1>
      <div className="flex w-screen max-w-[1200px] flex-col items-center justify-center space-y-10 md:flex-row md:space-x-10 md:space-y-0 lg:w-[80vw]">
        <div className="mx-auto w-[85%] opacity-70 md:w-[70%]">
          <TextGenerateEffect className="text-center" words={words} />
        </div>
        <Image
          src={Pulkit}
          alt="Pulkit"
          className="pointer-events-none z-20 h-[200px] w-[200px] rounded-full brightness-90 md:h-[300px] md:w-[300px]"
        />
      </div>
    </div>
  );
}
