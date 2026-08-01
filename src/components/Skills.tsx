"use client";

import React from "react";
import { skillsData } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const { ref: sectionRef, isRevealed } = useReveal(0.25);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] py-24 min-[810px]:py-36 px-[18px] min-[810px]:px-[15px] border-t border-white/10"
    >
      <div className="max-w-[1340px] mx-auto space-y-16 min-[810px]:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] min-[810px]:text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-[#F598F2]">
            02 / TECHNICAL INDEX
          </span>
          <h2 className="text-3xl min-[810px]:text-5xl font-medium tracking-[-1.5px] text-white">
            SKILLS &amp; TECHNOLOGIES<span className="text-[#F598F2]">.</span>
          </h2>
        </div>

        {/* Technical Editorial Index Rows */}
        <div
          className="divide-y divide-white/10 border-y border-white/10"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s var(--ease-spring)",
          }}
        >
          {skillsData.map((row) => (
            <div
              key={row.category}
              className="py-8 min-[810px]:py-10 grid grid-cols-1 min-[810px]:grid-cols-12 gap-4 min-[810px]:gap-8 items-start hover:bg-white/[0.02] transition-colors group cursor-default"
            >
              {/* Category Title Left */}
              <div className="min-[810px]:col-span-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#F598F2] font-medium group-hover:translate-x-1 transition-transform">
                  /
                </span>
                <h3 className="text-sm min-[810px]:text-base font-medium tracking-wider uppercase text-white font-mono">
                  {row.category}
                </h3>
              </div>

              {/* Technologies List Right */}
              <div className="min-[810px]:col-span-8 flex flex-wrap gap-[10px] min-[810px]:gap-3 items-center">
                {row.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs min-[810px]:text-sm font-normal text-[#D1D1D6] group-hover:text-white transition-colors bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
