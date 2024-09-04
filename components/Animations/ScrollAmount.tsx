import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAmount() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "102%"]);
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 rounded-r-full bg-white brightness-75 md:h-1.5"
      style={{ width }}
    />
  );
}
