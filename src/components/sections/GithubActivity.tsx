"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaGitAlt } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function GithubActivity() {
  const stats = [
    { label: "Public Repositories", value: "5+", icon: FaCodeBranch },
    { label: "Primary Language", value: "TypeScript / Python", icon: FaGithub },
    { label: "Code Commits", value: "Active Shipping", icon: FaGitAlt },
    { label: "GitHub Stars", value: "Featured Work", icon: FaStar },
  ];

  return (
    <section className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-6 h-[1px] bg-[#00F0FF]" />
              <span>05 / ENGINEERING ACTIVITY</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-sans"
            >
              OPEN SOURCE & <span className="accent-glow-text">GITHUB SHIP LOGS.</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://github.com/chiragdebugs"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="VIEW ↗"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs transition-colors w-fit"
          >
            <FaGithub className="w-4 h-4 text-[#00F0FF]" />
            <span>VIEW GITHUB PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[#0D0F12] border border-white/10 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                  <Icon className="w-4 h-4 text-[#00F0FF]" />
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono-code text-white">
                  {stat.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Graph / Repo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-[#0D0F12] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-left">
            <h3 className="text-xl font-bold text-white font-mono-code flex items-center gap-2">
              <FaGithub className="w-5 h-5 text-[#00F0FF]" />
              <span>github.com/chiragdebugs</span>
            </h3>
            <p className="text-sm text-zinc-400 font-light max-w-xl">
              Exploring full stack architectures, building production-grade AI web tools, and shipping transparent source code.
            </p>
          </div>

          <a
            href="https://github.com/chiragdebugs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/30 font-mono-code text-xs font-bold transition-all whitespace-nowrap"
          >
            Explore Repositories ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
}
