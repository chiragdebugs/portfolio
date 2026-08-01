"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Python Stack Developer Intern",
      company: "Infosys Springboard",
      duration: "June 2026 – Present",
      project: "Vendor Reliability Intelligence Platform",
      techStack: ["Angular", "FastAPI", "PostgreSQL", "REST APIs", "Role-Based Auth"],
      responsibilities: [
        "Developing a full-stack Vendor Reliability Intelligence & Procurement Risk Management Platform using Angular, FastAPI, and PostgreSQL.",
        "Implementing vendor management, procurement workflows, and performance tracking modules with role-based authentication.",
        "Building reliability scoring logic and analytics dashboards to surface actionable procurement insights.",
        "Collaborating on API design and database schema to ensure scalable, maintainable full stack architecture."
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-widest flex items-center gap-2"
          >
            <span className="w-6 h-[1px] bg-[#00F0FF]" />
            <span>04 / EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-sans"
          >
            BUILDING BEYOND <br />
            <span className="accent-glow-text">PERSONAL PROJECTS.</span>
          </motion.h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-[2px] before:bg-white/10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-10 sm:pl-12 space-y-4"
            >
              {/* Timeline Marker Node */}
              <div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0D0F12] border-2 border-[#00F0FF] flex items-center justify-center -translate-x-1/2 shadow-lg shadow-[#00F0FF]/20">
                <Briefcase className="w-3 h-3 text-[#00F0FF]" />
              </div>

              {/* Main Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0F12] border border-white/10 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans uppercase">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono-code text-[#00F0FF] font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-zinc-400 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono-code text-zinc-400 font-bold uppercase tracking-wider">
                    Project: <span className="text-white">{exp.project}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300 font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-white/5 border border-white/10 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
