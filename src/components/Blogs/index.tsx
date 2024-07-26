import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Blog from "./Blog";
import { BlogType } from "./types";
import { fetchBlogs } from "./blogs";

export default function HorizontalSection() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);

  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogs(data))
      .finally(() => setLoading(false));
  }, []);
  if (blogs.length === 0 && !loading) return null;
  return (
    <section ref={targetRef} className="relative h-[300vh] md:h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <motion.div
            style={{ x }}
            className="w-[300px] text-3xl md:text-4xl flex items-center text-white"
          >
            Read my blogs
          </motion.div>
          {blogs.map((blog, index) => (
            <Blog key={index} blog={blog} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
