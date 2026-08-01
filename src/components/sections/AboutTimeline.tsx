"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export default function AboutTimeline() {
  const milestones = [
    {
      type: "EXPERIENCE",
      title: "Python Stack Developer Intern",
      organization: "Infosys Springboard",
      date: "June 2026 – Present",
      icon: Briefcase,
      color: "border-[#00F0FF] text-[#00F0FF]",
      description: "Building Vendor Reliability Intelligence & Procurement Risk Management Platform using Angular, FastAPI, and PostgreSQL.",
      bullets: [
        "Developing full-stack vendor workflows and risk scoring dashboards.",
        "Designing scalable REST APIs and PostgreSQL database schemas.",
        "Implementing role-based authentication and analytics logic."
      ]
    },
    {
      type: "EDUCATION",
      title: "Bachelor of Engineering (B.E.)",
      organization: "Savitribai Phule Pune University (SPPU)",
      date: "2024 – 2028",
      icon: GraduationCap,
      color: "border-purple-500 text-purple-400",
      description: "Pre-final year student majoring in Electronics & Communication Engineering.",
      bullets: [
        "Focusing on Full Stack Web Architecture, Data Structures, and Cloud Infrastructure.",
        "Building practical software applications combining AI APIs and web logic.",
        "Participating actively in technical software challenges."
      ]
    }
  ];

  return (
    <section id="about" className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-widest flex items-center gap-2"
          >
            <span className="w-6 h-[1px] bg-[#00F0FF]" />
            <span>04 / EXPERIENCE &amp; EDUCATION</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-sans">
            ENGINEERING JOURNEY &amp; <br />
            <span className="accent-glow-text">CAREER MILESTONES.</span>
          </h2>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-[2px] before:bg-white/10">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-12 sm:pl-16 space-y-4"
              >
                {/* Node Marker */}
                <div className={`absolute left-0 top-1 w-8 h-8 sm:w-12 sm:h-12 rounded-2xl bg-[#0D0F12] border-2 ${item.color} flex items-center justify-center -translate-x-1/2 shadow-xl`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0F12] border border-white/10 space-y-4 shadow-xl hover:border-white/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                    <div>
                      <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#00F0FF]">
                        {item.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-0.5">{item.title}</h3>
                      <p className="text-sm font-mono-code text-zinc-400">{item.organization}</p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-zinc-400 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 font-light leading-relaxed">{item.description}</p>

                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
