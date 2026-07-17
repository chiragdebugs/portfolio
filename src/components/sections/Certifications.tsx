"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award, ShieldCheck } from "lucide-react";
import { MouseEvent } from "react";

function CertCard({ item, index }: { item: { id: number; title: string; issuer: string }; index: number }) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/[0.08] bg-[#0A0A0A] overflow-hidden p-6 hover:border-white/20 transition-colors cursor-default h-full flex flex-col justify-between"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 40%
            )
          `,
        }}
      />
      <div className="relative z-20 flex flex-col h-full justify-between">
        <div className="mb-6">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-yellow-500/80 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white leading-snug">{item.title}</h3>
        </div>
        
        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.05]">
          <ShieldCheck className="w-4 h-4 text-green-500/70" />
          <p className="text-zinc-400 text-sm font-medium">{item.issuer}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            Milestones
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
            Certifications
          </h3>
          <p className="text-zinc-400 max-w-2xl text-lg mx-auto md:mx-0">
            Verified credentials and job simulations demonstrating my commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item, index) => (
            <CertCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
