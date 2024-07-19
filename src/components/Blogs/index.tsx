import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Blog from "./Blog";
import { BlogType, validateBlog } from "./types";

const GET_USER_ARTICLES = `
query Publication($id: ObjectId = "66213f8be5371b46eac0e05e") {
  publication(id: $id) {
    posts(first: 3) {
      edges {
        node {
          title
          url
          views
          coverImage {
            url
          }
          publishedAt,
          readTimeInMinutes
        }
      }
    }
  }
}
`;

export default function HorizontalSection() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);

  const fetchBlogs = useCallback(async (query: string) => {
    const res = await axios.post("https://gql.hashnode.com/", {
      query,
    });
    const resp: BlogType[] = [];
    for (const edge of res.data.data.publication.posts.edges) {
      const parsedNode = validateBlog.safeParse(edge.node);
      if (parsedNode.success) {
        resp.push(parsedNode.data);
      }
    }
    return resp;
  }, []);

  useEffect(() => {
    fetchBlogs(GET_USER_ARTICLES)
      .then((data) => setBlogs(data))
      .finally(() => setLoading(false));
  }, [fetchBlogs]);
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
