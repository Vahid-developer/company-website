import { motion, useScroll, useSpring } from "framer-motion";

function ArticleProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-right bg-gradient-to-l from-indigo-500 to-purple-500"
    />
  );
}

export default ArticleProgress;