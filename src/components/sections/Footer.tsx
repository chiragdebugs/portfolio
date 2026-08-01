"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#08090A] py-10 px-4 sm:px-8 font-mono-code text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Left Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-bold text-white tracking-wider">CHIRAG TAPRE</span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="text-zinc-400">Full Stack Developer</span>
        </div>

        {/* Center Text */}
        <div className="text-zinc-500 text-[11px]">
          Designed &amp; built by Chirag Tapre. © {new Date().getFullYear()}
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/chiragdebugs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-tapre-47a426192/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
