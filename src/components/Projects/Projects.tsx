import vidWave from "../../assets/projects/vidwave.webp";
import leetcloneImg from "../../assets/projects/leetclone.webp";
import whiteboardImg from "../../assets/projects/whiteboard.webp";
import tweaker from "../../assets/projects/tweaker.webp";
import useeform from "../../assets/projects/useeform.webp";

const projects: {
  title: string;
  description: string;
  link: string;
  image: string;
}[] = [
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
  {
    title: "Image Tweaker",
    description:
      "A powerful image optimization tool that reduces file sizes while maintaining quality. It supports compression, resizing, and format conversion, utilizing FFmpeg, ImageMagick, and Jimp. Containerized with Docker for easy deployment, it enhances performance across web and mobile applications by optimizing images efficiently.",
    link: "https://github.com/Pulkitxm/image-tweaker",
    image: tweaker,
  },
  {
    title: "Whiteboard Application (Canvas API)",
    description:
      "A Whiteboard app built with React, TypeScript, Express, and MongoDB, enabling creative drawing, saving, and updating. Features include JWT authentication, undo/redo with keyboard shortcuts, and download options for drawings in multiple formats. Optimized for performance and open for contributions.",
    link: "https://github.com/Pulkitxm/whiteboard",
    image: whiteboardImg,
  },
];
export default projects;
