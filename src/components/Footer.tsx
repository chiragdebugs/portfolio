"use client";

import React from "react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 py-10 px-[18px] min-[810px]:px-[15px]">
      <div className="max-w-[1340px] mx-auto flex flex-col min-[810px]:flex-row items-center justify-between gap-6 text-xs font-mono text-[#8E8E93]">
        
        {/* Left */}
        <div>
          © {new Date().getFullYear()} CHIRAG TAPRE
        </div>

        {/* Center */}
        <div className="uppercase tracking-wider">
          DESIGNED &amp; BUILT WITH INTENTION
        </div>

        {/* Right */}
        <button
          onClick={handleScrollToTop}
          className="uppercase tracking-wider text-white hover:text-[#F598F2] transition-colors cursor-pointer"
        >
          BACK TO TOP ↑
        </button>

      </div>
    </footer>
  );
}
