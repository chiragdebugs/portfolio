"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import DeveloperGraph from "./DeveloperGraph";
import Terminal from "./Terminal";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-8 relative flex flex-col justify-center bg-[#08090A] overflow-hidden">
      {/* Background Subtle Radial Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Headline & Introduction */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6">
          
          {/* Small Intro Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#00F0FF] w-fit"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>HELLO, I&apos;M CHIRAG TAPRE.</span>
          </motion.div>

          {/* Large Engineering Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans"
          >
            I BUILD SOFTWARE <br className="hidden sm:inline" />
            THAT SOLVES <br className="hidden sm:inline" />
            <span className="accent-glow-text">REAL PROBLEMS.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-300 font-medium max-w-xl"
          >
            Full Stack Developer exploring DevOps, Cloud and intelligent software systems.
          </motion.p>

          {/* Detailed Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-light"
          >
            I don&apos;t just make websites. I build complete software products across modern frontend frameworks (React, Angular), high-performance backend APIs (FastAPI, Node.js), PostgreSQL/MongoDB databases, AI model integrations, and cloud deployments.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={scrollToProjects}
              data-cursor="EXPLORE"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00F0FF] hover:bg-[#38BDF8] text-black font-semibold text-sm transition-all shadow-lg shadow-[#00F0FF]/20 hover:shadow-[#00F0FF]/40 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://github.com/chiragdebugs"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/chirag-tapre-47a426192/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </motion.div>

          {/* Hero Terminal Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-4 max-w-lg"
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Right Column - Architecture Visual Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <DeveloperGraph />
        </motion.div>

      </div>
    </section>
  );
}
