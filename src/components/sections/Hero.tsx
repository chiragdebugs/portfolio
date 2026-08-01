"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import DevTerminalModal from "../ui/DevTerminalModal";
import Tilt from "react-parallax-tilt";

const taglines = [
  "Building AI-Powered Developer Tools",
  "Automating Complex Engineering Workflows",
  "Full Stack JS + Python Specialist",
  "Exploring Cloud Architecture & DevOps",
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const nameLetters = "CHIRAG TAPRE".split("");

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 relative z-10">
      <DevTerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text & Taglines */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Staggered Name Reveal */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#00F0FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FULL STACK DEVELOPER &amp; AI BUILDER</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white flex flex-wrap leading-none font-sans">
              {nameLetters.map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className={letter === " " ? "mr-4" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Rotating Tagline */}
          <div className="h-10 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={taglineIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-2xl font-mono-code font-bold text-[#00F0FF] flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                <span>{taglines[taglineIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-xl leading-relaxed">
            Pre-final year Electronics &amp; Communication Engineering student passionate about crafting intelligent software tools, scalable full-stack applications, and automated developer utilities.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              data-cursor="EXPLORE"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#00F0FF] hover:bg-[#38BDF8] text-black font-bold text-sm font-mono-code transition-all shadow-xl shadow-[#00F0FF]/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setTerminalOpen(true)}
              data-cursor="TERMINAL"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-[#0D0F12] hover:bg-[#161922] border border-[#00F0FF]/40 text-[#00F0FF] font-mono-code text-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <TerminalIcon className="w-4 h-4" />
              <span>Launch Terminal CLI</span>
            </button>
          </div>

        </div>

        {/* Right Column Tilt Hero Card */}
        <div className="lg:col-span-5 flex justify-center">
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.02} transitionSpeed={1000} className="w-full max-w-md">
            <div className="p-8 rounded-3xl bg-[#0D0F12]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-2xl group-hover:bg-[#00F0FF]/20 transition-all" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-wider font-bold">DEVELOPER STATUS</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="space-y-3 font-mono-code text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-500">ROLE</span>
                  <span className="text-white font-bold">Software Developer</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-500">INTERNSHIP</span>
                  <span className="text-purple-400 font-bold">Infosys Springboard</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-500">EDUCATION</span>
                  <span className="text-zinc-300">SPPU (2024–2028)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-500">GITHUB</span>
                  <span className="text-[#00F0FF] font-bold">chiragdebugs</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] font-mono-code text-zinc-400">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">CLI</kbd> to execute system commands
                </span>
              </div>
            </div>
          </Tilt>
        </div>

      </div>

      {/* Bouncing Scroll Down Indicator */}
      <div className="flex justify-center pt-8">
        <button
          onClick={() => scrollTo("projects")}
          className="flex flex-col items-center gap-2 text-xs font-mono-code text-zinc-400 hover:text-[#00F0FF] transition-colors cursor-pointer"
        >
          <span>SCROLL DOWN</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown className="w-4 h-4 text-[#00F0FF]" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
