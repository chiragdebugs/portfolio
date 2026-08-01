"use client";

import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function GitHubSection() {
  const { ref: sectionRef, isRevealed } = useReveal(0.25);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] py-24 min-[810px]:py-36 px-[18px] min-[810px]:px-[15px] border-t border-white/10"
    >
      <div className="max-w-[1340px] mx-auto space-y-12">
        
        {/* Section Header & Large CTA */}
        <div
          className="flex flex-col min-[810px]:flex-row min-[810px]:items-end justify-between gap-8 pb-12 border-b border-white/10"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s var(--ease-spring)",
          }}
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] min-[810px]:text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-[#F598F2]">
              05 / OPEN SOURCE
            </span>
            <h2 className="text-3xl min-[810px]:text-5xl font-medium tracking-[-1.5px] text-white">
              ALWAYS BUILDING<span className="text-[#F598F2]">.</span>
            </h2>
            <p className="text-sm min-[810px]:text-base text-[#D1D1D6] font-normal leading-relaxed">
              Experiments, open-source work and ideas that make it past the notes app.
            </p>
          </div>

          <a
            href="https://github.com/chiragdebugs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-xs font-medium uppercase tracking-wider text-white hover:border-[#F598F2] hover:text-[#F598F2] transition-all group w-fit cursor-pointer"
          >
            <span>VIEW GITHUB</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
