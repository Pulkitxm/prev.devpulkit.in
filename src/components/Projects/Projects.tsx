import leetcloneImg from "../../assets/projects/leetclone.png";
import whiteboardImg from "../../assets/projects/whiteboard.png";
import blogsImg from "../../assets/projects/blogs.png";
import tweaker from "../../assets/projects/tweaker.png";
import useeform from "../../assets/projects/useeform.png";

const projects: {
  title: string;
  description: string;
  link: string;
  image: string;
}[] = [
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
  {
    title: "Medium Blogging APP (Serverless + In House Text Editor)",
    description:
      "A Medium-inspired blogging website using TypeScript and React frontend, Hono.js backend, deployed on Cloudflare Workers. Features include a native text editor with text alignment, image/URL embedding, and horizontal rule functionalities. Available for deployment on AWS and CloudFlare.",
    link: "https://github.com/Pulkitxm/medium-100xDevs",
    image: blogsImg,
  },
];
export default projects;
