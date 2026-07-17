"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = [
  "Full Stack Development",
  "Python Development",
  "AI-powered Applications",
  "DevOps Learning",
  "Scalable Software Engineering"
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500); // Pause at end of word
      return;
    }

    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 150));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="inline-flex items-center min-h-[32px] md:min-h-[40px]">
      <span className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
        {words[index].substring(0, subIndex)}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-6 md:h-8 bg-zinc-400 ml-1"
      />
    </div>
  );
}
