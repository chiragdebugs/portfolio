"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 pointer-events-none"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-full pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0F12]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="font-mono-code font-bold text-lg text-white group-hover:text-[#00F0FF] transition-colors">
            CT<span className="text-[#00F0FF]">.</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-mono-code text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest border-l border-white/10 pl-2">
            Chirag Tapre
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-mono-code text-zinc-400">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-[#00F0FF] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-[#00F0FF] transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-[#00F0FF] transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#00F0FF] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#00F0FF] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right Socials & CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/chiragdebugs"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB ↗"
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-tapre-47a426192/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN ↗"
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            data-cursor="TALK →"
            className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-code font-medium bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 hover:bg-[#00F0FF] hover:text-black transition-all cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
