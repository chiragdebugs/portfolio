"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, CornerDownLeft } from "lucide-react";
import confetti from "canvas-confetti";

export default function DevTerminalModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: "welcome",
      output: (
        <div className="text-zinc-400 space-y-1">
          <p className="text-[#00F0FF] font-bold">Chirag Tapre Interactive Dev Terminal v2.5</p>
          <p>Type <span className="text-amber-400 font-mono-code font-bold">help</span> to view available system commands.</p>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-[#00F0FF] font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-emerald-400">whoami</span> - Display developer profile</p>
            <p><span className="text-emerald-400">projects</span> - List verified GitHub software projects</p>
            <p><span className="text-emerald-400">skills</span> - Display core technical stack</p>
            <p><span className="text-emerald-400">sudo hire</span> - Trigger instant offer response</p>
            <p><span className="text-emerald-400">contact</span> - Display email and LinkedIn links</p>
            <p><span className="text-emerald-400">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;
      case "whoami":
        output = (
          <div className="text-zinc-300 space-y-1">
            <p className="text-white font-bold">Chirag Tapre — Full Stack &amp; AI Tools Developer</p>
            <p className="text-zinc-400">B.E. Electronics &amp; Communication Engineering @ SPPU</p>
            <p className="text-zinc-400">Python Stack Developer Intern @ Infosys Springboard</p>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="text-zinc-300 space-y-1">
            <p className="text-[#00F0FF]">1. RepoLens AI (github.com/chiragdebugs/repolens-ai)</p>
            <p className="text-[#00F0FF]">2. BillBuddy AI (github.com/chiragdebugs/billbuddy-ai)</p>
            <p className="text-[#00F0FF]">3. Slash URL Shortener (github.com/chiragdebugs/urlshortner)</p>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="text-zinc-300">
            React • Angular • TypeScript • Python • FastAPI • Node.js • PostgreSQL • MongoDB • Docker • AWS
          </div>
        );
        break;
      case "sudo hire":
      case "hire":
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        output = (
          <div className="text-emerald-400 font-bold space-y-1">
            <p>🚀 ACCESS GRANTED! Let&apos;s build something incredible together.</p>
            <p className="text-zinc-300 font-normal">Direct Email: taprechirag150@gmail.com</p>
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="text-zinc-300 space-y-1">
            <p>Email: taprechirag150@gmail.com</p>
            <p>GitHub: github.com/chiragdebugs</p>
            <p>LinkedIn: linkedin.com/in/chirag-tapre-47a426192/</p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = (
          <div className="text-red-400">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-amber-400">help</span> for command list.
          </div>
        );
    }

    setHistory((prev) => [...prev, { cmd: input, output }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-2xl bg-[#0C0F14] border border-[#00F0FF]/30 rounded-2xl shadow-2xl shadow-[#00F0FF]/10 overflow-hidden font-mono-code text-xs text-zinc-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131720] border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00F0FF]" />
                <span className="font-bold text-white">developer_terminal.sh</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content History */}
            <div className="p-4 h-80 overflow-y-auto space-y-4">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span>chirag@portfolio:~$</span>
                    <span className="text-white font-bold">{item.cmd}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-[#131720] border-t border-white/10">
              <span className="text-emerald-400 font-bold">chirag@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help'..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-zinc-600 font-mono-code"
                autoFocus
              />
              <button type="submit" className="text-zinc-400 hover:text-[#00F0FF]">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
