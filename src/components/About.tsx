"use client";

import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const { ref: sectionRef, isRevealed } = useReveal(0.25);

  const metadata = [
    { label: "LOCATION", value: "BASED IN INDIA" },
    { label: "AVAILABILITY", value: "OPEN TO OPPORTUNITIES" },
    { label: "DOMAINS", value: "SOFTWARE / AI / CLOUD" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] py-24 min-[810px]:py-36 px-[18px] min-[810px]:px-[15px] border-t border-white/10"
    >
      <div className="max-w-[1340px] mx-auto space-y-16 min-[810px]:space-y-24">
        
        {/* Section Label */}
        <span className="text-[10px] min-[810px]:text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-[#F598F2] block">
          03 / ABOUT
        </span>

        {/* Editorial Main Statement & Bio Grid */}
        <div
          className="grid grid-cols-1 min-[810px]:grid-cols-12 gap-10 min-[810px]:gap-16 items-start"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s var(--ease-spring)",
          }}
        >
          {/* Left Column: Oversized Statement */}
          <div className="min-[810px]:col-span-7 space-y-6">
            <h2 className="text-3xl min-[810px]:text-5xl min-[1200px]:text-6xl font-medium tracking-[-1.5px] min-[1200px]:tracking-[-2px] leading-[1.1] text-white">
              ENGINEERING IDEAS INTO <br className="hidden min-[810px]:inline" />
              PRODUCTS PEOPLE CAN <br className="hidden min-[810px]:inline" />
              ACTUALLY USE<span className="text-[#F598F2]">.</span>
            </h2>
          </div>

          {/* Right Column: Concise Biography */}
          <div className="min-[810px]:col-span-5 space-y-6 text-sm min-[810px]:text-base leading-relaxed text-[#D1D1D6] font-normal">
            <p>
              I&apos;m a pre-final year Electronics &amp; Communication Engineering student at Savitribai Phule Pune University and a Full Stack Developer dedicated to crafting intelligent software tools and scalable digital products.
            </p>
            <p>
              My focus bridges resilient full-stack architecture—combining React, Angular, FastAPI, and PostgreSQL—with AI API integrations and cloud infrastructure. I approach software engineering end-to-end, prioritizing performance, reliability, and clean execution.
            </p>
          </div>
        </div>

        {/* Bottom Metadata Tags */}
        <div
          className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s var(--ease-spring) 0.15s",
          }}
        >
          {metadata.map((item) => (
            <div key={item.label} className="space-y-1">
              <span className="text-[10px] text-[#8E8E93] uppercase block">{item.label}</span>
              <span className="text-white font-medium">{item.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
