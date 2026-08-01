"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaJava, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiJavascript, SiAngular, SiFastapi 
} from "react-icons/si";

export default function TechStack() {
  const categories = [
    {
      title: "FRONTEND",
      skills: [
        { name: "React.js", icon: FaReact, color: "hover:text-[#61DAFB]" },
        { name: "Angular", icon: SiAngular, color: "hover:text-[#DD0031]" },
        { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
        { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#38BDF8]" },
        { name: "HTML5 / CSS3", icon: FaHtml5, color: "hover:text-[#E34F26]" },
      ],
    },
    {
      title: "BACKEND & APIs",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "hover:text-[#339933]" },
        { name: "FastAPI", icon: SiFastapi, color: "hover:text-[#009688]" },
        { name: "Java (Full Stack)", icon: FaJava, color: "hover:text-[#007396]" },
        { name: "REST Architecture", icon: FaPython, color: "hover:text-[#3776AB]" },
      ],
    },
    {
      title: "DATABASES",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1]" },
        { name: "MongoDB", icon: SiMongodb, color: "hover:text-[#47A248]" },
      ],
    },
    {
      title: "DEVOPS & CLOUD",
      skills: [
        { name: "Docker", icon: FaDocker, color: "hover:text-[#2496ED]" },
        { name: "AWS", icon: FaAws, color: "hover:text-[#FF9900]" },
        { name: "Git / GitHub", icon: FaGithub, color: "hover:text-white" },
        { name: "CI/CD Fundamentals", icon: FaPython, color: "hover:text-[#00F0FF]" },
      ],
    },
  ];

  const pipelineStages = [
    { stage: "IDEA", desc: "System Design & Architecture" },
    { stage: "FRONTEND", desc: "React / Angular UI" },
    { stage: "API", desc: "FastAPI / Node REST API" },
    { stage: "DATABASE", desc: "PostgreSQL / MongoDB" },
    { stage: "CONTAINER", desc: "Dockerized Build" },
    { stage: "CLOUD", desc: "AWS Deployment" },
  ];

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
            <span>02 / TECHNICAL ARSENAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-sans"
          >
            TOOLS I USE TO <br />
            <span className="accent-glow-text">TURN IDEAS INTO SYSTEMS.</span>
          </motion.h2>
        </div>

        {/* Visual Application Lifecycle Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full p-6 rounded-2xl bg-[#0D0F12] border border-white/10 overflow-x-auto"
        >
          <div className="text-xs font-mono-code text-zinc-500 uppercase tracking-widest mb-6">
            // Full Stack Application Development Pipeline
          </div>
          <div className="flex items-center min-w-[700px] justify-between relative">
            {pipelineStages.map((p, idx) => (
              <React.Fragment key={p.stage}>
                <div className="flex flex-col items-center text-center space-y-2 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#161922] border border-white/10 flex items-center justify-center font-mono-code text-xs font-bold text-[#00F0FF]">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-mono-code font-bold text-white uppercase">{p.stage}</span>
                  <span className="text-[10px] text-zinc-400 font-mono-code">{p.desc}</span>
                </div>
                {idx < pipelineStages.length - 1 && (
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00F0FF]/60 to-purple-500/60 mx-2 relative -top-3">
                    <div className="w-2 h-2 rounded-full bg-[#00F0FF] absolute -top-0.5 left-1/2 -translate-x-1/2 animate-ping" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0D0F12] border border-white/10 flex flex-col space-y-4 hover:border-white/20 transition-all"
            >
              <div className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-wider font-bold border-b border-white/5 pb-3">
                {cat.title}
              </div>

              <div className="flex flex-col space-y-3">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
                    >
                      <Icon className={`w-4 h-4 transition-colors ${skill.color}`} />
                      <span className="text-sm font-mono-code group-hover:translate-x-1 transition-transform">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
