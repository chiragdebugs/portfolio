"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full ${
            scrolled 
              ? "px-6 py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-3xl" 
              : "px-6 py-4 bg-transparent border-transparent w-full max-w-5xl"
          }`}
        >
          <Link href="/" className="text-lg font-semibold tracking-tight text-white hover:text-white/80 transition-colors">
            Chirag<span className="text-zinc-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resume} 
              target="_blank" 
              rel="noreferrer" 
              className="text-black px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 transition-colors font-medium"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A]/90 flex flex-col justify-center px-6"
          >
            <button 
              className="absolute top-8 right-8 p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8 text-2xl font-medium tracking-tight">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-zinc-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4"
              >
                <a 
                  href={personalInfo.resume} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center text-black px-6 py-3 rounded-full bg-white hover:bg-zinc-200 transition-colors font-semibold"
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
