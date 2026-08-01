"use client";

import React, { useState } from "react";
import { useClock } from "../hooks/useClock";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentTime = useClock();

  const navLinks = [
    { index: "01", label: "Works", href: "#works" },
    { index: "02", label: "Skills", href: "#skills" },
    { index: "03", label: "About", href: "#about" },
    { index: "04", label: "Contact", href: "#contact" },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 w-full bg-transparent">
      <div className="max-w-[1340px] py-6 min-[810px]:py-9 px-[15px] min-[810px]:px-[15px] mx-auto flex items-center justify-between">
        
        {/* Desktop Left Navigation */}
        <nav aria-label="Main Navigation" className="hidden min-[810px]:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.index}
              onClick={() => handleScroll(link.href)}
              className="nav-link-underline group flex items-center gap-1.5 cursor-pointer text-left focus:outline-none focus:ring-1 focus:ring-[#F598F2]"
            >
              <span className="text-[8px] leading-3 tracking-[-0.08px] font-medium uppercase text-[#8E8E93] group-hover:text-[#F598F2] transition-colors">
                {link.index} /
              </span>
              <span className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-white group-hover:text-white transition-colors">
                {link.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile Left Menu Trigger */}
        <div className="min-[810px]:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-white hover:text-[#F598F2] transition-colors cursor-pointer py-1"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Desktop & Mobile Right Navigation */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/chiragdebugs"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-underline text-xs leading-4 tracking-[-0.12px] font-medium text-white hover:text-[#F598F2] transition-colors"
          >
            github.com/chiragdebugs
          </a>

          <div className="flex items-center gap-1 text-xs leading-4 tracking-[-0.12px] font-medium text-[#8E8E93]">
            <span className="text-[#8E8E93]">IND</span>
            <span className="text-white font-mono">{currentTime || "12:00:00"}</span>
          </div>
        </div>

      </div>

      {/* Mobile Accordion Menu Overlay */}
      <div
        className={`min-[810px]:hidden grid transition-[grid-template-rows] duration-[420ms] [transition-timing-function:var(--ease-spring)] ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } overflow-hidden bg-[#0C0C0C]/95 backdrop-blur-xl border-b border-white/10`}
      >
        <div className="min-h-0 px-[18px] py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.index}
              onClick={() => handleScroll(link.href)}
              className="flex items-baseline gap-3 text-left cursor-pointer group"
            >
              <span className="text-xs font-medium text-[#F598F2]">
                {link.index} /
              </span>
              <span className="text-[28px] leading-8 tracking-[-0.84px] font-medium uppercase text-white group-hover:text-[#F598F2] transition-colors">
                {link.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
