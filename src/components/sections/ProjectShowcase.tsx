"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, Sparkles, ShieldCheck, Link2, DollarSign } from "lucide-react";

interface Project {
  id: string;
  name: string;
  category: string;
  problem: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    id: "01",
    name: "RepoLens AI",
    category: "AI / DEVELOPER TOOL",
    problem: "Understanding unfamiliar software repositories takes hours of manual code traversal.",
    description: "AI-powered repository intelligence platform that analyzes public GitHub codebases and synthesizes automated architecture diagrams, health scores, reading lists, and dependency insights.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini API", "GitHub API", "Upstash Redis", "Vercel"],
    image: "/images/repolens-ai.png",
    liveUrl: "https://repolens-ai-coral.vercel.app/",
    githubUrl: "https://github.com/chiragdebugs/repolens-ai",
    icon: Sparkles,
  },
  {
    id: "02",
    name: "BillBuddy AI",
    category: "FULL STACK / FINTECH",
    problem: "Splitting group expenses and managing debt settlements across multiple peers is manual and error-prone.",
    description: "Enterprise-grade expense sharing and financial tracking web application. Enables automated bill splits, participant settlement calculations, payment tracking, and dynamic dashboards.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/chiragdebugs/billbuddy-ai",
    icon: ShieldCheck,
  },
  {
    id: "03",
    name: "Slash URL Shortener",
    category: "ANALYTICS / WEBGL",
    problem: "Standard link shorteners lack real-time clickstream analytics and interactive visual experiences.",
    description: "Enterprise-grade URL shortener & real-time analytics platform featuring living 3D WebGL translucent slash planes rendered with custom GLSL shaders, Supabase Cloud Postgres, and Tailwind v4.",
    techStack: ["Next.js 16", "Three.js", "Supabase", "Tailwind v4", "WebGL"],
    image: "https://raw.githubusercontent.com/chiragdebugs/urlshortner/main/public/images/hero.png",
    liveUrl: "https://slash-urlshortner.vercel.app/",
    githubUrl: "https://github.com/chiragdebugs/urlshortner",
    icon: Link2,
  },
  {
    id: "04",
    name: "Shadow Spending Detector",
    category: "FINTECH / INTELLIGENCE",
    problem: "Unnoticed recurring subscriptions and micro-transactions silently drain monthly financial budgets.",
    description: "Fintech intelligence application designed to scan CSV transaction histories, flag recurring subscription charges, identify hidden fees, and calculate potential monthly savings.",
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/chiragdebugs/shadow-spending-detector",
    icon: DollarSign,
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
      <div className="max-w-6xl mx-auto space-y-20">
        
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
            <span>03 / SELECTED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-sans"
          >
            PROJECTS BUILT <br />
            <span className="accent-glow-text">TO SOLVE SOMETHING.</span>
          </motion.h2>
        </div>

        {/* Editorial Alternating Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-[#0D0F12] border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300 group shadow-2xl`}
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-7 overflow-hidden rounded-2xl border border-white/10 relative h-[280px] sm:h-[360px] bg-[#111318] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Info Section */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-wider font-bold">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono-code text-zinc-500 font-bold">
                        {project.id}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00F0FF] transition-colors font-sans flex items-center gap-2">
                      <Icon className="w-5 h-5 text-[#00F0FF]" />
                      <span>{project.name}</span>
                    </h3>

                    {/* Problem Statement */}
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs font-mono-code text-zinc-300">
                      <span className="text-[#00F0FF] font-bold">PROBLEM: </span>
                      {project.problem}
                    </div>

                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="LIVE Demo ↗"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00F0FF] hover:bg-[#38BDF8] text-black font-semibold text-xs font-mono-code transition-all shadow-md"
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
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-code text-xs transition-colors"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
