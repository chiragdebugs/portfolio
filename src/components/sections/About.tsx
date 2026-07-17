"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { MapPin, Briefcase, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            About
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
            Background & Bio
          </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Bio Text Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-2/3 p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl hover:border-white/20 transition-colors"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
              Building scalable full-stack applications with a focus on robust architecture and premium user experiences.
            </h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Quick Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3 p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-[#0A0A0A] hover:bg-white/[0.02] transition-colors flex flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-0.5">Role</p>
                  <p className="font-medium text-white">Aspiring Full Stack Dev</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-0.5">Location</p>
                  <p className="font-medium text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm">
                <Sparkles className="w-4 h-4" />
                Open to Internships
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
