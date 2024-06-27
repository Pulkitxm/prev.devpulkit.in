import leetcloneImg from "../../assets/projects/leetclone.png";
import whiteboardImg from "../../assets/projects/whiteboard.png";
import blogsImg from "../../assets/projects/blogs.png";
import whatsappImg from "../../assets/projects/whatsapp.png";

const projects: {
  title: string;
  description: string;
  link: string;
  image: string;
}[] = [
  {
    title: "Leetclone (Remote Code Execution)",
    description:
      "A LeetCode clone using React, Express.js, Redis, and PostgreSQL, providing instant code execution feedback. Includes 15 coding problems, JWT authentication, and scalable server architecture. Room for UI enhancements.",
    link: "https://github.com/Pulkitxm/leetclone",
    image: leetcloneImg,
  },
  {
    title: "Whiteboard Application (Canvas API)",
    description:
      "A Whiteboard app built with React, TypeScript, Express, and MongoDB, enabling creative drawing, saving, and updating. Features include JWT authentication, undo/redo with keyboard shortcuts, and download options for drawings in multiple formats. Optimized for performance and open for contributions.",
    link: "https://github.com/Pulkitxm/leetclone",
    image: whiteboardImg,
  },
  {
    title: "Medium Blogging APP (Serverless + In House Text Editor)",
    description:
      "A Medium-inspired blogging website using TypeScript and React frontend, Hono.js backend, deployed on Cloudflare Workers. Features include a native text editor with text alignment, image/URL embedding, and horizontal rule functionalities. Available for deployment on AWS and CloudFlare.",
    link: "https://github.com/Pulkitxm/medium-100xDevs",
    image: blogsImg,
  },
  {
    title: "Whatsapp Clone (Real-time Chat Application)",
    description:
      "A real-time chat application using the MERN stack (MongoDB, Express.js, React, Node.js). Features include user authentication, chat refresh for new messages, local storage for data efficiency, and a user-friendly interface for managing conversations. An innovative approach to real-time messaging without Socket.IO.",
    link: "https://github.com/Pulkitxm/Whatsapp",
    image: whatsappImg,
  },
];
export default projects;
