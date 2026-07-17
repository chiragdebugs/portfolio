"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
            Professional Journey
          </h3>
          <p className="text-zinc-400 max-w-2xl text-lg">
            My work experience, internships, and the real-world platforms I&apos;ve contributed to.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-4">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16 relative pl-10 last:mb-0 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#0A0A0A] group-hover:scale-150 group-hover:bg-blue-400 transition-all duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-medium text-white mb-1 flex items-center gap-3">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-3 text-zinc-400 font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {item.duration}
                </div>
              </div>
              
              {/* Project Title (if exists) */}
              {item.project && (
                <div className="mb-4 inline-flex px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-400 text-sm font-medium">
                  Project: {item.project}
                </div>
              )}

              {/* Responsibilities */}
              {item.responsibilities && (
                <ul className="space-y-3 mb-6">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start text-zinc-300 group/item">
                      <span className="mr-3 text-blue-500/50 group-hover/item:text-blue-400 transition-colors mt-1.5">▹</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack */}
              {item.techStack && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/[0.03]">
                  {item.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-medium bg-white/[0.03] border border-white/10 rounded-lg text-zinc-400 hover:text-white hover:border-white/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
