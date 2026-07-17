"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Mail, FileText, User, Briefcase, Code, Terminal, Trophy, Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Prevent scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const commands = [
    { name: "About Me", icon: User, action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Skills", icon: Terminal, action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Experience", icon: Briefcase, action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Education", icon: Award, action: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Projects", icon: Code, action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Achievements", icon: Trophy, action: () => document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Contact", icon: Mail, action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
    { name: "GitHub Profile", icon: FaGithub, action: () => window.open(personalInfo.github, "_blank") },
    { name: "LinkedIn Profile", icon: FaLinkedin, action: () => window.open(personalInfo.linkedin, "_blank") },
    { name: "Download Resume", icon: FileText, action: () => window.open(personalInfo.resume, "_blank") },
  ];

  const filteredCommands = query === "" 
    ? commands 
    : commands.filter((cmd) => cmd.name.toLowerCase().includes(query.toLowerCase()));

  const handleCommand = (action: () => void) => {
    setOpen(false);
    setQuery("");
    action();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            >
              <div className="flex items-center px-4 border-b border-white/5">
                <Search className="w-5 h-5 text-zinc-500 mr-3 shrink-0" />
                <input
                  autoFocus
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-zinc-500 py-4 outline-none text-lg"
                />
                <div className="text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5 shrink-0">
                  ESC
                </div>
              </div>
              
              <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500">
                    No results found.
                  </div>
                ) : (
                  filteredCommands.map((cmd, i) => (
                    <button
                      key={i}
                      onClick={() => handleCommand(cmd.action)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-left text-zinc-300 hover:text-white transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                        <cmd.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium tracking-wide">{cmd.name}</span>
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
