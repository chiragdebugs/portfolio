"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StatusBar() {
  const statusItems = [
    {
      label: "BUILDING",
      value: "Full Stack Products",
      dotColor: "bg-emerald-400 animate-pulse",
    },
    {
      label: "CURRENT",
      value: "Python Stack Intern @ Infosys Springboard",
      dotColor: "bg-[#00F0FF]",
    },
    {
      label: "EXPLORING",
      value: "DevOps / AWS / System Design",
      dotColor: "bg-purple-400",
    },
    {
      label: "LOCATION",
      value: "Pune, India",
      dotColor: "bg-amber-400",
    },
  ];

  return (
    <div className="w-full border-y border-white/10 bg-[#0B0D10] py-3.5 px-4 sm:px-8 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 font-mono-code text-xs">
        {statusItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5"
          >
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
              <span className="text-zinc-500 font-bold tracking-wider">{item.label}</span>
            </div>
            <span className="text-zinc-300 font-medium truncate">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
