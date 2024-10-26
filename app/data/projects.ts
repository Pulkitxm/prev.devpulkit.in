import deployit from "@/assets/projects/deployit.webp";
import vidWave from "@/assets/projects/vidwave.webp";
import leetcloneImg from "@/assets/projects/leetclone.webp";
import tweaker from "@/assets/projects/tweaker.webp";
import useeform from "@/assets/projects/useeform.webp";
import { StaticImageData } from "next/image";

const projects: {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
}[] = [
  {
    title: "Deployit: (Reactjs deployment platform)",
    description:
      "DeployIt is an optimized platform for deploying React projects effortlessly. It provides features like easy deployment, private project options, custom URLs, and seamless collaboration. With built-in support for environment variables, global CDN, instant deployments, and robust security, DeployIt ensures your projects are always accessible and secu",
    link: "https://deployit.live",
    image: deployit,
  },
  {
    title: "Image Tweaker",
    description:
      "A powerful image optimization tool that reduces file sizes while maintaining quality. It supports compression, resizing, and format conversion, utilizing FFmpeg, ImageMagick, and Jimp. Containerized with Docker for easy deployment, it enhances performance across web and mobile applications by optimizing images efficiently.",
    link: "https://image-tweaker.devpulkit.in/",
    image: tweaker,
  },
  {
    title: "VidWave: (HLS Video Streaming)",
    description:
      "Vidwave is a video streaming platform inspired by YouTube, allowing users to upload, transcode, stream, and manage video content. This project leverages modern web technologies and cloud services to provide a seamless video sharing experience.",
    link: "https://github.com/Pulkitxm/vidwave",
    image: vidWave,
  },
  {
    title: "useeForm React hook(npm library)",
    description:
      "useeform is a custom React hook designed to simplify form handling in React applications. It provides an easy way to manage form state, handle form submissions, and validate form data. This hook is built to be flexible and can be integrated into any form structure you're working with.",
    link: "https://www.npmjs.com/package/useeform",
    image: useeform,
  },
  {
    title: "Leetclone (Remote Code Execution)",
    description:
      "A LeetCode clone using React, Express.js, Redis, and PostgreSQL, providing instant code execution feedback. Includes 15 coding problems, JWT authentication, and scalable server architecture. Room for UI enhancements.",
    link: "https://github.com/Pulkitxm/leetclone",
    image: leetcloneImg,
  },
];
export default projects;
