import { TextGenerateEffect } from "./TextReveal";
import Pulkit from "../../assets/pulkit.webp";

const words = `I'm Pulkit, a technology enthusiast with a passion for exploring the digital landscape. While I'm not diving into code or navigating through APIs, you'll often find me having fun with friends and family. I also enjoy watching TV shows, and I often read tech blogs. Balancing my technical skills with creativity and introspection fuels my journey in both professional and personal endeavors.`;

export default function TextGenerateEffectDemo() {
  return (
    <div
      id="about"
      className="bg-black text-white py-10 md:py-40 flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-10">A Bit About me</h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-x-10 md:space-y-0 items-center justify-center w-screen lg:w-[80vw] max-w-[1200px]">
        <div className="w-[85%] md:w-[70%] mx-auto opacity-70">
          <TextGenerateEffect className="text-center" words={words} />
        </div>
        <img
          src={Pulkit}
          alt="Pulkit"
          className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] z-20 rounded-full brightness-90 pointer-events-none"
        />
      </div>
    </div>
  );
}
