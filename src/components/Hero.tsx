"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import { useVideoPreload } from "../hooks/useVideoPreload";
import { useReveal } from "../hooks/useReveal";

const RAW_VIDEO_URLS = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_030107_874273ea-684a-4e90-bb96-8fdfde48d53d.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260627_094019_4214ea73-b963-46a4-8327-61489192de99.mp4",
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoSources = useVideoPreload(RAW_VIDEO_URLS);
  const { ref: heroRef, isRevealed } = useReveal(0.35);

  const videoSelectors = [
    { index: "01", label: "BUILD" },
    { index: "02", label: "EXPERIMENT" },
    { index: "03", label: "SHIP" },
  ];

  const handleScrollToWorks = () => {
    const worksElement = document.getElementById("works");
    if (worksElement) {
      worksElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-[#0C0C0C]"
    >
      {/* Background Videos Stack */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {videoSources.map((src, i) => (
          <video
            key={i}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              activeSlide === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 z-[1] bg-black/10 pointer-events-none" />
      </div>

      {/* Navbar overlay */}
      <Navbar />

      {/* Main Hero Content */}
      <div className="max-w-[1340px] h-full flex flex-col justify-end items-end gap-[72px] min-[810px]:gap-[100px] min-[1200px]:gap-[150px] pt-[140px] min-[810px]:pt-[190px] px-[18px] min-[810px]:px-[15px] mx-auto relative z-[2] pb-[44px] min-[810px]:pb-[52px] min-[1200px]:pb-[60px]">
        
        {/* Upper Area: Video Switcher & Availability */}
        <div className="w-full flex flex-col min-[810px]:flex-row justify-between items-start min-[810px]:items-center gap-7 min-[810px]:gap-0">
          
          {/* Left Column: Interactive Video Selectors */}
          <div className="flex flex-wrap items-center gap-6 min-[810px]:gap-8 flex-[4]">
            {videoSelectors.map((item, idx) => (
              <button
                key={item.index}
                onClick={() => setActiveSlide(idx)}
                className={`role-link text-xs leading-4 tracking-[-0.12px] font-medium uppercase ${
                  activeSlide === idx
                    ? "opacity-100 text-white"
                    : "opacity-55 text-white hover:opacity-75"
                }`}
              >
                <span className="text-[#8E8E93] text-[10px]">{item.index} /</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right Column: Availability Indicator */}
          <div className="flex items-center gap-2.5 flex-1 min-[810px]:justify-end">
            <span
              className="w-[7px] h-[7px] rounded-full inline-block transition-colors duration-500"
              style={{
                backgroundColor: activeSlide === 0 ? "#F598F2" : "#FFFFFF",
                animation: "dotPulse 1.6s infinite ease-in-out",
              }}
            />
            <span className="text-xs leading-4 tracking-[-0.12px] font-medium text-white">
              Available for opportunities
            </span>
          </div>

        </div>

        {/* Bottom Area: Name & Positioning Statement */}
        <div className="w-full grid grid-cols-1 min-[810px]:grid-cols-12 gap-8 min-[810px]:gap-0 items-end">
          
          {/* Left Column: Giant Name */}
          <div className="min-[810px]:col-span-7 min-[1200px]:col-span-8 flex flex-col justify-end">
            <h1
              className="font-medium uppercase tracking-[-4.8px] min-[810px]:tracking-[-7.7px] min-[1200px]:tracking-[-6px] text-[clamp(68px,21vw,80px)] min-[810px]:text-[129.6px] min-[1200px]:text-[200px] leading-[96px] min-[810px]:leading-[113.4px] min-[1200px]:leading-[81%] text-white transition-all"
              style={{
                animation: isRevealed ? "revealUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
              }}
            >
              CHIRAG
              <span
                className="transition-colors duration-500"
                style={{ color: activeSlide === 0 ? "#F598F2" : "#FFFFFF" }}
              >
                .
              </span>
            </h1>
          </div>

          {/* Right Column: Intro Paragraph & CTA */}
          <div
            className="min-[810px]:col-span-5 min-[1200px]:col-span-4 min-[810px]:pl-[24px] min-[1200px]:pl-[50px] flex flex-col items-start gap-6"
            style={{
              animation: isRevealed ? "revealRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.08s forwards" : "none",
            }}
          >
            <p className="text-sm min-[810px]:text-base leading-6 tracking-[-0.16px] font-medium text-[#D1D1D6] max-w-[420px]">
              I build modern digital products across software, AI and cloud — turning ideas into fast, useful and thoughtfully crafted experiences.
            </p>

            <button
              onClick={handleScrollToWorks}
              className="cta-button-fill px-6 py-3 rounded-full text-xs font-medium lowercase tracking-tight cursor-pointer"
            >
              <span>explore my work</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
