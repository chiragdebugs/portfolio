"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Sparkles, Cloud } from "lucide-react";

export default function DeveloperGraph() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: "frontend",
      title: "FRONTEND",
      subtitle: "React / TypeScript / Angular",
      icon: Layout,
      color: "border-[#00F0FF]/30 hover:border-[#00F0FF]",
      badgeColor: "bg-[#00F0FF]/10 text-[#00F0FF]",
      x: "50%",
      y: "10%",
    },
    {
      id: "api",
      title: "BACKEND API",
      subtitle: "FastAPI / Node.js / Java",
      icon: Server,
      color: "border-[#0A84FF]/30 hover:border-[#0A84FF]",
      badgeColor: "bg-[#0A84FF]/10 text-[#0A84FF]",
      x: "50%",
      y: "38%",
    },
    {
      id: "database",
      title: "DATABASE",
      subtitle: "PostgreSQL / MongoDB",
      icon: Database,
      color: "border-[#8B5CF6]/30 hover:border-[#8B5CF6]",
      badgeColor: "bg-[#8B5CF6]/10 text-[#8B5CF6]",
      x: "25%",
      y: "66%",
    },
    {
      id: "ai",
      title: "AI INTEGRATION",
      subtitle: "Gemini API / LLM Logic",
      icon: Sparkles,
      color: "border-amber-500/30 hover:border-amber-400",
      badgeColor: "bg-amber-500/10 text-amber-300",
      x: "75%",
      y: "66%",
    },
    {
      id: "deploy",
      title: "CLOUD & DEVOPS",
      subtitle: "Docker / AWS / CI/CD",
      icon: Cloud,
      color: "border-emerald-500/30 hover:border-emerald-400",
      badgeColor: "bg-emerald-500/10 text-emerald-300",
      x: "50%",
      y: "90%",
    },
  ];

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-2xl glass-panel p-6 flex flex-col justify-between overflow-hidden border border-white/10 shadow-2xl">
      {/* Background Subtle Grid & Radial Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between z-10 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-xs font-mono-code uppercase tracking-wider text-zinc-400">
            System Architecture Pipeline
          </span>
        </div>
        <span className="text-[10px] font-mono-code text-zinc-500 bg-white/5 px-2 py-1 rounded">
          LIVE DEPLOYMENT METRICS
        </span>
      </div>

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0A84FF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="50%" y1="0%" x2="25%" y2="100%">
            <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="50%" y1="0%" x2="75%" y2="100%">
            <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Lines connecting nodes */}
        <line x1="50%" y1="18%" x2="50%" y2="38%" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="50%" y1="46%" x2="28%" y2="66%" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="50%" y1="46%" x2="72%" y2="66%" stroke="url(#lineGrad3)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="28%" y1="74%" x2="50%" y2="90%" stroke="#8B5CF6" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="72%" y1="74%" x2="50%" y2="90%" stroke="#F59E0B" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>

      {/* Nodes Container */}
      <div className="relative w-full h-full z-10 flex flex-col justify-between py-2">
        {/* Row 1: Frontend */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setActiveNode("frontend")}
            onHoverEnd={() => setActiveNode(null)}
            className={`cursor-pointer px-4 py-2.5 rounded-xl bg-[#0D0F12]/90 border transition-all duration-300 ${nodes[0].color} shadow-lg`}
          >
            <div className="flex items-center gap-2.5">
              <Layout className="w-4 h-4 text-[#00F0FF]" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono-code font-bold text-white tracking-wide">FRONTEND</span>
                <span className="text-[10px] text-zinc-400 font-mono-code">React • TS • Angular</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Backend API */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setActiveNode("api")}
            onHoverEnd={() => setActiveNode(null)}
            className={`cursor-pointer px-4 py-2.5 rounded-xl bg-[#0D0F12]/90 border transition-all duration-300 ${nodes[1].color} shadow-lg`}
          >
            <div className="flex items-center gap-2.5">
              <Server className="w-4 h-4 text-[#0A84FF]" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono-code font-bold text-white tracking-wide">BACKEND API</span>
                <span className="text-[10px] text-zinc-400 font-mono-code">FastAPI • Node.js • REST</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Database & AI */}
        <div className="flex justify-between items-center px-2 sm:px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setActiveNode("database")}
            onHoverEnd={() => setActiveNode(null)}
            className={`cursor-pointer px-4 py-2.5 rounded-xl bg-[#0D0F12]/90 border transition-all duration-300 ${nodes[2].color} shadow-lg`}
          >
            <div className="flex items-center gap-2.5">
              <Database className="w-4 h-4 text-[#8B5CF6]" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono-code font-bold text-white tracking-wide">DATABASE</span>
                <span className="text-[10px] text-zinc-400 font-mono-code">PostgreSQL • Mongo</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setActiveNode("ai")}
            onHoverEnd={() => setActiveNode(null)}
            className={`cursor-pointer px-4 py-2.5 rounded-xl bg-[#0D0F12]/90 border transition-all duration-300 ${nodes[3].color} shadow-lg`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono-code font-bold text-white tracking-wide">AI LOGIC</span>
                <span className="text-[10px] text-zinc-400 font-mono-code">Gemini API • LLM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 4: Deployment */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setActiveNode("deploy")}
            onHoverEnd={() => setActiveNode(null)}
            className={`cursor-pointer px-4 py-2.5 rounded-xl bg-[#0D0F12]/90 border transition-all duration-300 ${nodes[4].color} shadow-lg`}
          >
            <div className="flex items-center gap-2.5">
              <Cloud className="w-4 h-4 text-emerald-400" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono-code font-bold text-white tracking-wide">CONTAINER & CLOUD</span>
                <span className="text-[10px] text-zinc-400 font-mono-code">Docker • AWS • CI/CD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
