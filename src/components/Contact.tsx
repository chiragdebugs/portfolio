"use client";

import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { ref: sectionRef, isRevealed } = useReveal(0.25);
  const [copied, setCopied] = useState(false);
  const email = "taprechirag150@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] py-24 min-[810px]:py-36 px-[18px] min-[810px]:px-[15px] border-t border-white/10"
    >
      <div className="max-w-[1340px] mx-auto space-y-16 min-[810px]:space-y-24">
        
        {/* Section Label */}
        <span className="text-[10px] min-[810px]:text-xs leading-4 tracking-[-0.12px] font-medium uppercase text-[#F598F2] block">
          06 / CONTACT
        </span>

        {/* Large Statement & Content */}
        <div
          className="space-y-10"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s var(--ease-spring)",
          }}
        >
          <h2 className="text-4xl min-[810px]:text-6xl min-[1200px]:text-8xl font-medium tracking-[-2px] min-[1200px]:tracking-[-4px] leading-[0.95] uppercase text-white">
            HAVE AN IDEA? <br />
            LET&apos;S BUILD <span className="text-[#F598F2]">IT.</span>
          </h2>

          <p className="text-base min-[810px]:text-xl text-[#D1D1D6] font-normal max-w-2xl leading-relaxed">
            I&apos;m always interested in ambitious projects, internships and opportunities to build useful technology.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href={`mailto:${email}`}
              className="cta-button-fill px-8 py-4 rounded-full text-xs font-medium uppercase tracking-wider cursor-pointer"
            >
              <span>{email}</span>
            </a>

            <button
              onClick={handleCopy}
              className="px-6 py-4 rounded-full border border-white/20 text-xs font-medium uppercase tracking-wider text-white hover:border-[#F598F2] hover:text-[#F598F2] transition-colors cursor-pointer"
            >
              <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 pt-8 border-t border-white/10">
            <a
              href="https://www.linkedin.com/in/chirag-tapre-47a426192/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-wider text-white hover:text-[#F598F2] transition-colors flex items-center gap-1 group"
            >
              <span>LINKEDIN</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>

            <a
              href="https://github.com/chiragdebugs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-wider text-white hover:text-[#F598F2] transition-colors flex items-center gap-1 group"
            >
              <span>GITHUB</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
