"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaJava, FaHtml5 
} from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiJavascript, SiAngular, SiFastapi 
} from "react-icons/si";

interface SkillNode {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps & Cloud";
  level: string;
  icon: React.ComponentType<{ className?: string }>;
  connections: string[];
}

const skillNodes: SkillNode[] = [
  { id: "react", name: "React.js", category: "Frontend", level: "Advanced", icon: FaReact, connections: ["ts", "tailwind", "fastapi"] },
  { id: "angular", name: "Angular", category: "Frontend", level: "Intermediate", icon: SiAngular, connections: ["ts", "fastapi"] },
  { id: "ts", name: "TypeScript", category: "Frontend", level: "Advanced", icon: SiTypescript, connections: ["react", "angular", "node"] },
  { id: "js", name: "JavaScript", category: "Frontend", level: "Advanced", icon: SiJavascript, connections: ["react", "node"] },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", level: "Advanced", icon: SiTailwindcss, connections: ["react", "html"] },
  { id: "html", name: "HTML5 / CSS3", category: "Frontend", level: "Advanced", icon: FaHtml5, connections: ["tailwind"] },
  
  { id: "python", name: "Python", category: "Backend", level: "Advanced", icon: FaPython, connections: ["fastapi", "postgres"] },
  { id: "fastapi", name: "FastAPI", category: "Backend", level: "Advanced", icon: SiFastapi, connections: ["python", "postgres", "react"] },
  { id: "node", name: "Node.js", category: "Backend", level: "Advanced", icon: FaNodeJs, connections: ["js", "mongo"] },
  { id: "java", name: "Java (Full Stack)", category: "Backend", level: "Intermediate", icon: FaJava, connections: ["postgres"] },
  
  { id: "postgres", name: "PostgreSQL", category: "Database", level: "Advanced", icon: SiPostgresql, connections: ["fastapi", "python"] },
  { id: "mongo", name: "MongoDB", category: "Database", level: "Intermediate", icon: SiMongodb, connections: ["node"] },
  
  { id: "docker", name: "Docker", category: "DevOps & Cloud", level: "Intermediate", icon: FaDocker, connections: ["fastapi", "aws"] },
  { id: "aws", name: "AWS", category: "DevOps & Cloud", level: "Learning", icon: FaAws, connections: ["docker"] },
  { id: "git", name: "Git / GitHub", category: "DevOps & Cloud", level: "Advanced", icon: FaGithub, connections: ["react", "python"] },
];

export default function Skills() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const activeSkill = skillNodes.find((s) => s.id === activeNode);

  return (
    <section id="skills" className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
      <div className="max-w-6xl mx-auto space-y-16">
        
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
            <span>02 / TECHNICAL CONSTELLATION</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-sans">
            INTERACTIVE <span className="accent-glow-text">SKILL CONSTELLATION.</span>
          </h2>
          <p className="text-sm text-zinc-400 font-mono-code">
            Hover over any node to highlight architecture dependencies and connection links.
          </p>
        </div>

        {/* Skill Nodes Grid / Constellation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skillNodes.map((node) => {
            const Icon = node.icon;
            const isConnected = activeSkill && (activeSkill.id === node.id || activeSkill.connections.includes(node.id));

            return (
              <motion.div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`p-5 rounded-2xl bg-[#0D0F12] border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 ${
                  isConnected
                    ? "border-[#00F0FF] shadow-xl shadow-[#00F0FF]/20 bg-[#131720]"
                    : "border-white/10 opacity-80 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-6 h-6 ${isConnected ? "text-[#00F0FF]" : "text-zinc-300"}`} />
                  <span className="text-[10px] font-mono-code text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
                    {node.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold font-mono-code text-white">{node.name}</h3>
                  <p className="text-[10px] font-mono-code text-zinc-400">{node.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
