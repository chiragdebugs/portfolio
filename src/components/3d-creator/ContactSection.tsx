"use client";

import React from "react";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function ContactSection() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] py-24 px-6 md:px-10 border-t border-white/5 relative z-20 select-none">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
        
        {/* Experience & Education Highlights */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
          <FadeIn delay={0.1} y={20} className="w-full">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-purple-400 text-sm font-medium uppercase tracking-widest">
                <FaBriefcase className="w-4 h-4" /> Experience
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">Python Stack Intern</h3>
              <p className="text-sm font-medium text-zinc-400">Infosys Springboard • June 2026 - Present</p>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mt-1">
                Developing Vendor Reliability Intelligence & Procurement Risk Management Platform using Angular, FastAPI, and PostgreSQL. Implementing role-based auth, scoring analytics, and scalable REST APIs.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="w-full">
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-blue-400 text-sm font-medium uppercase tracking-widest">
                <FaGraduationCap className="w-4 h-4" /> Education
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">B.E. Electronics & Communication</h3>
              <p className="text-sm font-medium text-zinc-400">Savitribai Phule Pune University (SPPU) • 2024 - 2028</p>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mt-1">
                Pre-final year engineering student focused on full stack development, cloud infrastructure, AI integrations, data structures, and system design fundamentals.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* CTA Heading */}
        <FadeIn delay={0.3} y={30}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight">
            Let&apos;s Work Together
          </h2>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg max-w-xl">
            Interested in building scalable full stack systems, AI applications, or cloud solutions? Let&apos;s connect.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => {
            window.location.href = "mailto:taprechirag150@gmail.com";
          }} />
        </FadeIn>

        {/* Footer Bottom Bar */}
        <div className="pt-16 mt-8 border-t border-white/10 w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-widest font-light">
          <p>© {new Date().getFullYear()} Chirag Tapre. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/chiragdebugs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chirag-tapre-47a426192/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="mailto:taprechirag150@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaEnvelope className="w-4 h-4" /> Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
