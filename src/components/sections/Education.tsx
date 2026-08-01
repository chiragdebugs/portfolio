"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function Education() {
  const educationData = {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Electronics & Communication Engineering",
    institution: "Savitribai Phule Pune University (SPPU)",
    duration: "2024 – 2028",
    description: "Pre-final year engineering student pursuing advanced coursework in full stack software development, computer networks, AI integrations, and embedded systems logic.",
  };

  const certifications = [
    { title: "Introduction to Front-End Development", issuer: "Meta" },
    { title: "Cyber Job Simulation", issuer: "Deloitte Australia" },
    { title: "GenAI Powered Data Analytics", issuer: "Tata" },
    { title: "McKinsey Forward Program", issuer: "McKinsey & Company" },
    { title: "Cybersecurity for Everyone", issuer: "University of Maryland" },
  ];

  return (
    <section className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
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
            <span>06 / ACADEMICS & CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-sans"
          >
            FOUNDATION & <span className="accent-glow-text">CERTIFICATIONS.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-[#0D0F12] border border-white/10 space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-3 text-[#00F0FF] text-xs font-mono-code uppercase tracking-wider font-bold">
              <GraduationCap className="w-5 h-5 text-[#00F0FF]" />
              <span>ACADEMIC DEGREE</span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white font-sans">{educationData.degree}</h3>
              <p className="text-sm font-mono-code text-purple-400 mt-1">{educationData.major}</p>
              <p className="text-xs font-mono-code text-zinc-400 mt-0.5">{educationData.institution} • {educationData.duration}</p>
            </div>

            <p className="text-sm text-zinc-300 font-light leading-relaxed pt-2 border-t border-white/5">
              {educationData.description}
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-400 uppercase tracking-wider font-bold pb-2 border-b border-white/10">
              <Award className="w-4 h-4 text-[#00F0FF]" />
              <span>Industry Certifications & Programs</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-4 rounded-xl bg-[#0D0F12] border border-white/10 space-y-1 hover:border-[#00F0FF]/30 transition-all"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                    <span className="line-clamp-1">{cert.title}</span>
                  </div>
                  <p className="text-[11px] font-mono-code text-zinc-400 pl-5.5">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
