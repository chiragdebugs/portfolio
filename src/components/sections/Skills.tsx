"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
            Technical Stack
          </h3>
          <p className="text-zinc-400 max-w-2xl text-lg mx-auto md:mx-0">
            A comprehensive overview of the languages, frameworks, and tools I use to build robust, scalable software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
            >
              <h4 className="text-lg font-medium text-white mb-6 pb-4 border-b border-white/[0.05] tracking-wide">{category}</h4>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 group-hover:border-white/20"
                  >
                    <skill.icon className="w-4 h-4 text-zinc-400" />
                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
