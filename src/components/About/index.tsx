import { TextGenerateEffect } from "./TextReveal";

const words = `I'm Pulkit, a technology enthusiast with a passion for exploring the digital landscape. While I'm not diving into code or navigating through APIs, you'll often find me having fun with friends and family. I also enjoy watching TV shows, and I often read tech blogs. Balancing my technical skills with creativity and introspection fuels my journey in both professional and personal endeavors.`;

export default function TextGenerateEffectDemo() {
  return (
    <div id="about" className="bg-black text-white py-10 md:py-40 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">A Bit About me</h1>
      <div className=" w-[85%] md:w-[70%] mx-auto opacity-70">
        <TextGenerateEffect className="text-center" words={words} />
      </div>
    </div>
  );
}
