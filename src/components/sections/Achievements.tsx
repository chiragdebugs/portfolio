"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            Highlights
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
            Key Achievements
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl border border-white/[0.08] bg-[#0A0A0A] hover:bg-white/[0.03] transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-300">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
