import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left bg-gradient-to-r from-[#8B0000] via-[#E50914] to-[#FF1A1A]"
      style={{
        scaleX,
        boxShadow: "0 0 12px rgba(229, 9, 20, 0.7)",
      }}
    />
  );
};
