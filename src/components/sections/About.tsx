"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Zap, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Concise Bio */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-widest flex items-center gap-2"
          >
            <span className="w-6 h-[1px] bg-[#00F0FF]" />
            <span>01 / ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-sans"
          >
            ENGINEER BY CURIOSITY. <br />
            <span className="accent-glow-text">BUILDER BY CHOICE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light"
          >
            I&apos;m a pre-final year Electronics & Communication Engineering student at Savitribai Phule Pune University and a Full Stack Developer passionate about building scalable, high-performance software products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light"
          >
            My core strength lies in combining modern frontend frameworks like React and Angular with resilient backend services built in FastAPI, Node.js, and PostgreSQL. As I expand into DevOps, Docker, and AWS, I focus on building software end-to-end—from initial architecture to production deployment.
          </motion.p>
        </div>

        {/* Right Column: Floating Engineering Context Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ y: -5, borderColor: "rgba(0, 240, 255, 0.4)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-5 rounded-2xl bg-[#0D0F12] border border-white/10 flex flex-col justify-between space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono-code text-zinc-500 uppercase tracking-wider">CURRENTLY</span>
              <Terminal className="w-4 h-4 text-[#00F0FF]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase font-mono-code">Python Stack Intern</h3>
              <p className="text-xs text-zinc-400 mt-1">Infosys Springboard</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.4)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-2xl bg-[#0D0F12] border border-white/10 flex flex-col justify-between space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono-code text-zinc-500 uppercase tracking-wider">PRIMARY FOCUS</span>
              <Layers className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase font-mono-code">Full Stack + DevOps</h3>
              <p className="text-xs text-zinc-400 mt-1">APIs, Cloud & Infrastructure</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, borderColor: "rgba(245, 158, 11, 0.4)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-2xl bg-[#0D0F12] border border-white/10 flex flex-col justify-between space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono-code text-zinc-500 uppercase tracking-wider">BUILDING</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase font-mono-code">AI & Fintech Apps</h3>
              <p className="text-xs text-zinc-400 mt-1">RepoLens AI & BillBuddy AI</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 rounded-2xl bg-[#0D0F12] border border-white/10 flex flex-col justify-between space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono-code text-zinc-500 uppercase tracking-wider">CORE STACK</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase font-mono-code">React • FastAPI</h3>
              <p className="text-xs text-zinc-400 mt-1">Postgres • Docker • AWS</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
