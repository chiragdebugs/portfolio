"use client";

import React from "react";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

export default function ContactSection() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] py-24 px-6 md:px-10 border-t border-white/5 relative z-20 text-center select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight">
            Let&apos;s Work Together
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="text-[#D7E2EA]/80 font-light text-base sm:text-lg max-w-xl">
            Have a project in mind or want to collaborate on 3D, branding, or full-stack web experiences? Get in touch today.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <ContactButton onClick={() => {
            window.location.href = "mailto:taprechirag150@gmail.com";
          }} />
        </FadeIn>

        <div className="pt-16 mt-8 border-t border-white/10 w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-widest font-light">
          <p>© {new Date().getFullYear()} Chirag Tapre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/chiragdebugs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/chirag-tapre-47a426192/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
