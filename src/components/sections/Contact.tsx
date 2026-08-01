"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "taprechirag150@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-t from-[#00F0FF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-widest flex items-center justify-center gap-2"
        >
          <span className="w-6 h-[1px] bg-[#00F0FF]" />
          <span>07 / GET IN TOUCH</span>
          <span className="w-6 h-[1px] bg-[#00F0FF]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white leading-tight font-sans"
        >
          LET&apos;S BUILD <br />
          <span className="accent-glow-text">SOMETHING USEFUL.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-300 font-light max-w-xl mx-auto leading-relaxed"
        >
          Have an opportunity, interesting project, or just want to talk tech? I&apos;d love to connect and build together.
        </motion.p>

        {/* Email & Contact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Email Mailto Action */}
          <a
            href={`mailto:${email}`}
            data-cursor="EMAIL ↗"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#00F0FF] hover:bg-[#38BDF8] text-black font-bold text-sm font-mono-code transition-all shadow-xl shadow-[#00F0FF]/20"
          >
            <FaEnvelope className="w-4 h-4" />
            <span>{email}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            data-cursor="COPY"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#0D0F12] hover:bg-[#161922] border border-white/10 text-white font-mono-code text-xs transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <FaCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <FaCopy className="w-3.5 h-3.5 text-zinc-400" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Social Direct Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 pt-4"
        >
          <a
            href="https://github.com/chiragdebugs"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB ↗"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D0F12] hover:bg-[#161922] border border-white/10 text-zinc-300 hover:text-white font-mono-code text-xs transition-colors"
          >
            <FaGithub className="w-4 h-4 text-[#00F0FF]" />
            <span>github.com/chiragdebugs</span>
          </a>

          <a
            href="https://www.linkedin.com/in/chirag-tapre-47a426192/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN ↗"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D0F12] hover:bg-[#161922] border border-white/10 text-zinc-300 hover:text-white font-mono-code text-xs transition-colors"
          >
            <FaLinkedin className="w-4 h-4 text-[#0A84FF]" />
            <span>LinkedIn Profile</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
