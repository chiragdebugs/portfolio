"use client";

import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const { ref: sectionRef, isRevealed } = useReveal(0.25);

  const journeyData = [
    {
      year: "2026",
      role: "Python Stack Developer Intern",
      organization: "Infosys Springboard",
      description:
        "Developing a full-stack Vendor Reliability Intelligence & Procurement Risk Management Platform using Angular, FastAPI, and PostgreSQL with role-based auth, scoring logic, and analytics dashboards.",
    },
    {
      year: "2024 – 2028",
      role: "B.E. Electronics & Communication Engineering",
      organization: "Savitribai Phule Pune University (SPPU)",
      description:
        "Pre-final year engineering student focusing on software system architecture, full stack web development, database design, computer networks, and cloud integrations.",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] py-24 min-[810px]:py-36 px-[18px] min-[810px]:px-[15px] border-t border-white/10"
    >
      <div className="max-w-[1340px] mx-auto space-y-16 min-[810px]:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] min-[810px]:text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-[#F598F2]">
            04 / JOURNEY
          </span>
          <h2 className="text-3xl min-[810px]:text-5xl font-medium tracking-[-1.5px] text-white">
            EXPERIENCE &amp; EDUCATION<span className="text-[#F598F2]">.</span>
          </h2>
        </div>

        {/* Timeline Rows */}
        <div
          className="divide-y divide-white/10 border-y border-white/10"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s var(--ease-spring)",
          }}
        >
          {journeyData.map((item) => (
            <div
              key={item.role}
              className="py-10 grid grid-cols-1 min-[810px]:grid-cols-12 gap-6 min-[810px]:gap-8 items-start hover:bg-white/[0.02] transition-colors group"
            >
              {/* Year Left */}
              <div className="min-[810px]:col-span-3 flex items-center gap-2">
                <span className="text-xs font-mono text-[#F598F2] font-medium">•</span>
                <span className="text-sm font-mono text-[#8E8E93] group-hover:text-white transition-colors">
                  {item.year}
                </span>
              </div>

              {/* Role & Org Center */}
              <div className="min-[810px]:col-span-4 space-y-1">
                <h3 className="text-lg font-medium text-white group-hover:text-[#F598F2] transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-[#8E8E93] uppercase">
                  {item.organization}
                </p>
              </div>

              {/* Description Right */}
              <div className="min-[810px]:col-span-5">
                <p className="text-sm leading-relaxed text-[#D1D1D6] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
