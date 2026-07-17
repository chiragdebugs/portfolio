"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { MouseEvent } from "react";
import { Repository } from "@/types";
import Image from "next/image";

function ProjectCard({ repo, index }: { repo: Repository; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Generate fallback gradients based on index to ensure variety
  const fallbackGradients = [
    "from-blue-500/20 to-purple-500/20",
    "from-emerald-500/20 to-teal-500/20",
    "from-orange-500/20 to-red-500/20",
    "from-pink-500/20 to-rose-500/20",
    "from-indigo-500/20 to-cyan-500/20",
    "from-violet-500/20 to-fuchsia-500/20",
  ];
  const fallbackGradient = fallbackGradients[index % fallbackGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0A0A0A] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Linear-style Interactive Radial Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 40%
            )
          `,
        }}
      />
      
      {/* Image Header Area */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-white/[0.05] bg-[#111]">
        {repo.image ? (
          <Image
            src={repo.image}
            alt={repo.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${fallbackGradient} flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105`}>
            <div className="text-white/20 font-medium text-2xl tracking-widest uppercase">
              {repo.name.replace(/-/g, ' ')}
            </div>
          </div>
        )}
        {/* Subtle overlay gradient to ensure text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-col flex-1 p-6 gap-4">
        <div className="flex justify-between items-start gap-4">
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:underline decoration-white/30 underline-offset-4">
            <h3 className="text-xl font-medium text-white line-clamp-1">{repo.name}</h3>
          </a>
          <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 bg-white/5 px-2 py-1 rounded-md border border-white/5 whitespace-nowrap">
            <Star className="w-3.5 h-3.5" />
            <span>{repo.stars}</span>
          </div>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {repo.description || "An interesting project built with modern technologies. Check out the repository for more detailed information and source code."}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {repo.language && (
            <span className="px-2 py-1 text-xs font-medium bg-blue-500/10 border border-blue-500/20 rounded text-blue-300">
              {repo.language}
            </span>
          )}
          {repo.topics?.slice(0, 3).map((topic) => (
            <span key={topic} className="px-2 py-1 text-xs font-medium bg-white/[0.03] border border-white/[0.05] rounded text-zinc-400">
              {topic}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/[0.05]">
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors">
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-sm font-medium transition-colors">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

import { useState, useMemo } from "react";
import { Search } from "lucide-react";

export default function Projects({ repositories }: { repositories: Repository[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredRepositories = useMemo(() => {
    if (!repositories) return [];
    
    return repositories.filter((repo) => {
      // Search Match
      const searchMatch = 
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category Match
      let categoryMatch = true;
      if (category !== "All") {
        const textToSearch = [repo.language, ...(repo.topics || [])].join(" ").toLowerCase();
        if (category === "AI" && !textToSearch.includes("ai") && !textToSearch.includes("machine-learning")) {
          categoryMatch = false;
        }
        if (category === "Frontend" && !textToSearch.includes("react") && !textToSearch.includes("angular") && !textToSearch.includes("frontend")) {
          categoryMatch = false;
        }
        if (category === "Backend" && !textToSearch.includes("node") && !textToSearch.includes("python") && !textToSearch.includes("fastapi")) {
          categoryMatch = false;
        }
      }

      return searchMatch && categoryMatch;
    });
  }, [repositories, searchQuery, category]);

  if (!repositories || repositories.length === 0) return null;

  return (
    <section id="projects" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
              Featured Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Projects & Case Studies
            </h3>
            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
              A selection of my best technical work, spanning AI applications, full-stack systems, and enterprise tools. Fetched dynamically from GitHub.
            </p>
          </div>
          <a href="https://github.com/chiragdebugs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            View full GitHub Profile <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Filter & Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "AI", "Frontend", "Backend"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl border font-medium text-sm transition-all duration-300 ${
                  category === cat 
                    ? "bg-white text-black border-white" 
                    : "bg-[#0A0A0A] border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {filteredRepositories.length === 0 ? (
          <div className="py-20 text-center text-zinc-500 bg-[#0A0A0A] rounded-2xl border border-white/5">
            No projects found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredRepositories.map((repo, index) => (
              <ProjectCard key={repo.name} repo={repo} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
