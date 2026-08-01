"use client";

import React from "react";
import { projectsData } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

export default function SelectedWork() {
  const { ref: sectionRef, isRevealed } = useReveal(0.2);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] py-24 min-[810px]:py-36 px-[18px] min-[810px]:px-[15px] border-t border-white/10"
    >
      <div className="max-w-[1340px] mx-auto space-y-24 min-[810px]:space-y-36">
        
        {/* Section Title Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] min-[810px]:text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-[#F598F2]">
            01 / SELECTED WORK
          </span>
          <h2 className="text-3xl min-[810px]:text-5xl font-medium tracking-[-1.5px] text-white">
            PROJECTS BUILT TO SOLVE REAL PROBLEMS.
          </h2>
        </div>

        {/* Editorial Project Showcase List */}
        <div className="space-y-32 min-[810px]:space-y-44">
          {projectsData.map((project) => (
            <ProjectShowcaseItem key={project.index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectShowcaseItem({ project }: { project: typeof projectsData[0] }) {
  const { ref: itemRef, isRevealed } = useReveal(0.25);

  if (project.variant === "full-width") {
    return (
      <div
        ref={itemRef}
        className="space-y-8 group transition-opacity duration-700"
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s var(--ease-spring)",
        }}
      >
        {/* Large Full Width Image */}
        <div className="w-full aspect-[16/9] max-h-[640px] rounded-xl overflow-hidden bg-[#161618] border border-white/10 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Info Area */}
        <div className="grid grid-cols-1 min-[810px]:grid-cols-12 gap-6 items-start">
          <div className="min-[810px]:col-span-4 space-y-2">
            <span className="text-xs font-mono text-[#F598F2] font-medium">{project.index} /</span>
            <h3 className="text-3xl min-[810px]:text-4xl font-medium tracking-tight text-white group-hover:text-[#F598F2] transition-colors">
              {project.title}
            </h3>
          </div>

          <div className="min-[810px]:col-span-5 space-y-3">
            <p className="text-xs font-mono text-[#8E8E93] uppercase">
              <span className="text-[#F598F2]">PROBLEM: </span>{project.problem}
            </p>
            <p className="text-sm min-[810px]:text-base leading-relaxed text-[#D1D1D6] font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#8E8E93]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="min-[810px]:col-span-3 flex flex-wrap min-[810px]:flex-col gap-3 min-[810px]:items-end justify-start">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white hover:text-[#F598F2] transition-colors group/link"
              >
                <span>Live Demo</span>
                <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#8E8E93] hover:text-white transition-colors group/link"
            >
              <span>GitHub</span>
              <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (project.variant === "split-right") {
    return (
      <div
        ref={itemRef}
        className="grid grid-cols-1 min-[810px]:grid-cols-12 gap-10 min-[810px]:gap-16 items-center group"
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s var(--ease-spring)",
        }}
      >
        {/* Info Left */}
        <div className="min-[810px]:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#F598F2] font-medium">{project.index} /</span>
            <h3 className="text-3xl min-[810px]:text-4xl font-medium tracking-tight text-white group-hover:text-[#F598F2] transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-xs font-mono text-[#8E8E93] uppercase">
            <span className="text-[#F598F2]">PROBLEM: </span>{project.problem}
          </p>

          <p className="text-sm min-[810px]:text-base leading-relaxed text-[#D1D1D6] font-normal">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#8E8E93]">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white hover:text-[#F598F2] transition-colors group/link"
              >
                <span>Live Demo</span>
                <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#8E8E93] hover:text-white transition-colors group/link"
            >
              <span>GitHub</span>
              <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* Image Right */}
        <div className="min-[810px]:col-span-7 aspect-[16/10] rounded-xl overflow-hidden bg-[#161618] border border-white/10 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    );
  }

  // Default Stacked / Split Left
  return (
    <div
      ref={itemRef}
      className="space-y-8 group"
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s var(--ease-spring)",
      }}
    >
      <div className="w-full aspect-[16/9] max-h-[560px] rounded-xl overflow-hidden bg-[#161618] border border-white/10 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />
      </div>

      <div className="grid grid-cols-1 min-[810px]:grid-cols-12 gap-6 items-start">
        <div className="min-[810px]:col-span-5 space-y-2">
          <span className="text-xs font-mono text-[#F598F2] font-medium">{project.index} /</span>
          <h3 className="text-3xl min-[810px]:text-4xl font-medium tracking-tight text-white group-hover:text-[#F598F2] transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="min-[810px]:col-span-5 space-y-3">
          <p className="text-xs font-mono text-[#8E8E93] uppercase">
            <span className="text-[#F598F2]">PROBLEM: </span>{project.problem}
          </p>
          <p className="text-sm min-[810px]:text-base leading-relaxed text-[#D1D1D6]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#8E8E93]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="min-[810px]:col-span-2 flex min-[810px]:flex-col gap-4 min-[810px]:items-end justify-start">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white hover:text-[#F598F2] transition-colors group/link"
            >
              <span>Live Demo</span>
              <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#8E8E93] hover:text-white transition-colors group/link"
          >
            <span>GitHub</span>
            <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
