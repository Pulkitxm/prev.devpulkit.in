import { TextGenerateEffect } from "./TextReveal";

const words = `Hi there! My name is Pulkit, and I'm a passionate and enthusiastic web developer. I love creating beautiful and interactive websites that provide a great user experience. Besides this I like content creation on youtube, Video Editing . I started my journey in web development a few years ago, and I have been continuously learning and improving my skills ever since. Besides coding, I enjoy exploring new technologies, attending tech meetups, and contributing to open-source projects. In my free time, you'll often find me reading tech blogs, playing video games, or spending quality time with friends and family. My ultimate goal is to leverage my skills to build innovative web applications that solve real-world problems and positively impact people's lives. I'm always open to new opportunities and collaborations, so feel free to reach out if you'd like to connect or work together on exciting projects.`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="bg-black text-white py-10 md:py-40 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">A Bit About me</h1>
      <div className=" w-[85%] md:w-[70%] mx-auto opacity-70">
        <TextGenerateEffect className="text-center" words={words} />
      </div>
    </div>
  );
}
