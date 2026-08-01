"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const handleHoverables = () => {
      const hoverElements = document.querySelectorAll("[data-cursor]");
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const text = el.getAttribute("data-cursor") || "";
          setCursorText(text);
          setIsHovered(true);
        });
        el.addEventListener("mouseleave", () => {
          setCursorText("");
          setIsHovered(false);
        });
      });
    };

    handleHoverables();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 flex items-center justify-center text-[10px] font-mono-code uppercase tracking-wider text-[#00F0FF]"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 8),
          y: mousePosition.y - (isHovered ? 28 : 8),
          width: isHovered ? 56 : 16,
          height: isHovered ? 56 : 16,
          backgroundColor: isHovered ? "rgba(0, 240, 255, 0.15)" : "rgba(0, 240, 255, 0.05)",
          borderColor: isHovered ? "rgba(0, 240, 255, 0.8)" : "rgba(0, 240, 255, 0.4)",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {isHovered && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-bold text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
