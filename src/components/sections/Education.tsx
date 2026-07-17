"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            Education
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
            Academic Background
          </h3>
        </motion.div>

        <div className="flex flex-col gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-start justify-between gap-6 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex gap-6 items-start">
                <div className="hidden sm:flex w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 items-center justify-center shrink-0 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">{item.degree}</h3>
                  <p className="text-lg text-blue-400 font-medium mb-3">{item.major}</p>
                  <div className="flex flex-wrap items-center gap-4 text-zinc-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-zinc-500" />
                      {item.institution}
                    </span>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center self-start md:self-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 tracking-wide">
                {item.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
