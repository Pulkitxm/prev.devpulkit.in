"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Blog from "./Blog";
import { BlogType } from "./types";
import { getBlogs } from "@/app/actions/blogs";

const { VITE_GITHUB_PROFILE_URL: GITHUB_PROFILE } = process.env;

export default function HorizontalSection() {
  const [authorPicUrl, setAuthorPicUrl] = useState("");
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);

  useEffect(() => {
    getBlogs()
      .then((data) => {
        setBlogs(data.blogs);
        setAuthorPicUrl(data.authorPic ?? GITHUB_PROFILE);
      })
      .finally(() => setLoading(false));
  }, []);
  if (blogs.length === 0 && !loading) return null;
  return (
    <section ref={targetRef} className="relative h-[300vh] md:h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <motion.div
            style={{ x }}
            className="flex w-[300px] items-center text-3xl text-white md:text-4xl"
          >
            Read my blogs
          </motion.div>
          {blogs.map((blog, index) => (
            <Blog key={index} blog={blog} authorPicUrl={authorPicUrl} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
