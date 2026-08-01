"use client";

import React, { useState, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

export default function Terminal() {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const lines = [
    "Full Stack Developer",
    "Building AI-powered products",
    "Learning DevOps & Cloud",
    "Shipping real projects",
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setDisplayedText((prev) => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-xl bg-[#0B0D10] border border-white/10 p-4 font-mono-code text-xs text-zinc-300 shadow-xl overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] text-zinc-500 ml-2 flex items-center gap-1">
            <TerminalIcon className="w-3 h-3 text-[#00F0FF]" /> zsh - bash
          </span>
        </div>
        <span className="text-[10px] text-zinc-600">v2.4.0</span>
      </div>

      <div className="space-y-1.5 text-left">
        <div className="flex items-center gap-2 text-emerald-400">
          <span>chirag@portfolio:~$</span>
          <span className="text-white font-bold">whoami</span>
        </div>

        {displayedText.map((text, index) => (
          <div key={index} className="text-zinc-400 pl-4 flex items-center gap-2">
            <span className="text-[#00F0FF]">&gt;</span>
            <span>{text}</span>
          </div>
        ))}

        <div className="flex items-center gap-2 pl-4 pt-1">
          <span className="w-2 h-4 bg-[#00F0FF] inline-block animate-pulse" />
        </div>
      </div>
    </div>
  );
}
