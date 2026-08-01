"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, Sparkles, ShieldCheck, Link2, Code2 } from "lucide-react";

export interface ProjectItem {
  id: string;
  name: string;
  category: "AI / ML" | "Full-Stack" | "Analytics" | "Open Source";
  problem: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const getIcon = () => {
    switch (project.category) {
      case "AI / ML": return Sparkles;
      case "Full-Stack": return ShieldCheck;
      case "Analytics": return Link2;
      default: return Code2;
    }
  };

  const Icon = getIcon();

  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={1000} className="h-full">
        <div className="h-full rounded-3xl bg-[#0D0F12] border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl hover:border-[#00F0FF]/40 transition-all group overflow-hidden relative">
          
          {/* Top Image Preview */}
          <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden relative bg-[#131720] border border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-transparent opacity-60" />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono-code text-[#00F0FF]">
              {project.category}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-2 font-sans">
                <Icon className="w-5 h-5 text-[#00F0FF]" />
                <span>{project.name}</span>
              </h3>

              <p className="text-xs font-mono-code text-zinc-400">
                <span className="text-[#00F0FF] font-bold">PROBLEM: </span>
                {project.problem}
              </p>

              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-white/5 border border-white/10 text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LIVE ↗"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#00F0FF] hover:bg-[#38BDF8] text-black font-bold text-xs font-mono-code transition-all shadow-md"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB ↗"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>

        </div>
      </Tilt>
    </motion.div>
  );
}
