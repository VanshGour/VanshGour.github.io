import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive, .glass-panel'
      );
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Tiny white center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 450,
          mass: 0.1,
        }}
      />

      {/* Thin red outer ring with subtle glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-[#E50914]/70"
        style={{
          boxShadow: isHovered
            ? "0 0 20px rgba(229, 9, 20, 0.45), inset 0 0 10px rgba(229, 9, 20, 0.2)"
            : "0 0 10px rgba(229, 9, 20, 0.2)",
          backgroundColor: isHovered ? "rgba(229, 9, 20, 0.08)" : "transparent",
        }}
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? "rgba(255, 40, 40, 0.9)" : "rgba(229, 9, 20, 0.5)",
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 300,
          mass: 0.2,
        }}
      />
    </>
  );
};
