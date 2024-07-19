import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAmount() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "102%"]);
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 md:h-1.5 z-50 bg-white brightness-75 rounded-r-full"
      style={{ width }}
    />
  );
}
