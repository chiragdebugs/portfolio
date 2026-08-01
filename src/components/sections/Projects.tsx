"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { ProjectItem } from "./ProjectCard";

const verifiedProjects: ProjectItem[] = [
  {
    id: "01",
    name: "RepoLens AI",
    category: "AI / ML",
    problem: "Understanding unfamiliar repositories takes hours of manual code inspection.",
    description: "AI-powered GitHub repository intelligence platform that synthesizes automated architecture diagrams, health scores, reading lists, and dependency analysis.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini API", "Upstash Redis", "Vercel"],
    image: "/images/repolens-ai.png",
    liveUrl: "https://repolens-ai-coral.vercel.app/",
    githubUrl: "https://github.com/chiragdebugs/repolens-ai",
  },
  {
    id: "02",
    name: "BillBuddy AI",
    category: "Full-Stack",
    problem: "Calculating shared group expenses and debt settlements is cumbersome.",
    description: "Full-stack expense tracking platform designed for managing shared bills, calculating exact settlements, dynamic dashboards, and payment reminders.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/chiragdebugs/billbuddy-ai",
  },
  {
    id: "03",
    name: "Slash URL Shortener",
    category: "Analytics",
    problem: "Standard link shorteners lack real-time clickstream analytics and WebGL interactivity.",
    description: "Enterprise-grade URL shortener & real-time analytics platform built with Next.js 16 App Router, Three.js 3D WebGL shaders, Supabase Cloud Postgres, and Tailwind v4.",
    techStack: ["Next.js 16", "Three.js", "Supabase", "Tailwind v4", "WebGL"],
    image: "https://raw.githubusercontent.com/chiragdebugs/urlshortner/main/public/images/hero.png",
    liveUrl: "https://slash-urlshortner.vercel.app/",
    githubUrl: "https://github.com/chiragdebugs/urlshortner",
  },
  {
    id: "04",
    name: "AnkiDroid Android",
    category: "Open Source",
    problem: "Superhuman flashcard memory retention on mobile devices.",
    description: "Open-source contribution to AnkiDroid, the flashcard application for Android helping users retain complex concepts through spaced repetition.",
    techStack: ["Java", "Android SDK", "Git", "Open Source"],
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/chiragdebugs/Anki-Android",
  },
];

const categories = ["All", "AI / ML", "Full-Stack", "Analytics", "Open Source"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = verifiedProjects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
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
              <span>FEATURED REPOSITORIES</span>
            </motion.div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-sans">
              VERIFIED GITHUB <br />
              <span className="accent-glow-text">SOFTWARE PROJECTS.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#00F0FF] text-black font-bold shadow-lg shadow-[#00F0FF]/20"
                    : "bg-white/5 hover:bg-white/10 text-zinc-400 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
