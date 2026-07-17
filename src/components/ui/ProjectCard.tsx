"use client";

import { motion } from "framer-motion";
import { Repository } from "@/types";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ProjectCardProps {
  project: Repository;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="glass-panel rounded-2xl p-6 flex flex-col h-full group glass-panel-hover relative overflow-hidden"
    >
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <span className="font-heading font-bold text-lg text-primary">
              {project.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-white group-hover:text-primary transition-colors">
              {project.name.replace(/-/g, " ")}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                {project.language}
              </span>
              {project.stars > 0 && (
                <span className="text-xs font-medium flex items-center gap-1 text-zinc-400">
                  <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
                  {project.stars}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {project.homepage && (
            <Link 
              href={project.homepage} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
              aria-label="Visit live site"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
          <Link 
            href={project.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
            aria-label="View source code"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
        {project.description || "An innovative project built with modern technologies focusing on clean architecture and user experience."}
      </p>

      {project.topics && project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {project.topics.slice(0, 4).map((topic) => (
            <span 
              key={topic} 
              className="text-xs text-zinc-500 bg-black/40 px-2 py-1 rounded-md"
            >
              #{topic}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
