"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

interface ProjectData {
  id: string;
  name: string;
  category: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  demoUrl?: string;
  description: string;
  techStack: string[];
}

const projectsData: ProjectData[] = [
  {
    id: "01",
    name: "RepoLens AI",
    category: "AI / FULL STACK",
    description: "AI-powered application that analyzes public GitHub repositories and generates structured architecture reports, repository health scores, learning paths, and dependency analysis.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini API", "Upstash Redis"],
    col1Image1: "/images/repolens-ai.png",
    col1Image2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col2Image: "/images/repolens-ai.png",
    demoUrl: "https://repolens-ai-coral.vercel.app/",
  },
  {
    id: "02",
    name: "BillBuddy AI",
    category: "FULL STACK / FINTECH",
    description: "Full-stack expense sharing and bill management platform designed for tracking group expenses, calculating exact settlements, and managing payments.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay"],
    col1Image1: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    col1Image2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col2Image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    demoUrl: "https://github.com/chiragdebugs/billbuddy-ai",
  },
  {
    id: "03",
    name: "Slash URL Shortener",
    category: "FINTECH / FULL STACK",
    description: "Enterprise-grade URL shortener and real-time clickstream analytics platform featuring custom WebGL shaders, Supabase Cloud Postgres, and Next.js 16.",
    techStack: ["Next.js 16", "Three.js", "Supabase", "Tailwind v4", "WebGL"],
    col1Image1: "https://raw.githubusercontent.com/chiragdebugs/urlshortner/main/public/images/hero.png",
    col1Image2: "https://raw.githubusercontent.com/chiragdebugs/urlshortner/main/public/images/features.png",
    col2Image: "https://raw.githubusercontent.com/chiragdebugs/urlshortner/main/public/images/cta.png",
    demoUrl: "https://slash-urlshortner.vercel.app/",
  },
];

function Card({
  project,
  index,
  totalCards,
}: {
  project: ProjectData;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-32 h-[85vh] flex items-center justify-center mb-12 sm:mb-16"
      style={{ top: `calc(5rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] leading-none text-[clamp(2.5rem,5vw,5.5rem)]">
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="font-light uppercase tracking-widest text-[#D7E2EA]/70 text-xs sm:text-sm">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-white text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.demoUrl} />
        </div>

        {/* Bottom Row - Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 flex-1 overflow-hidden">
          {/* Left Column (40% width / 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] h-[clamp(130px,16vw,230px)]"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex-1 min-h-[140px] sm:min-h-[180px]"
            />
          </div>

          {/* Right Column (60% width / 7 cols) */}
          <div className="md:col-span-7 h-full flex flex-col gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] min-h-[220px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 py-20 px-4 sm:px-6 md:px-10 select-none">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Project
          </h2>
        </FadeIn>

        <div className="relative pb-24">
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
