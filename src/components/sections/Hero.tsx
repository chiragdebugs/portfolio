"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, ChevronDown, Terminal, Database, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";
import Typewriter from "@/components/ui/Typewriter";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  // Floating animation for tech icons
  const floatAnimation = (delay: number) => ({
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      delay,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, transparent 60%)",
          backgroundSize: "200% 200%"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 text-xs font-medium text-zinc-400 tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Aspiring Software Engineer
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-white leading-[1.1]"
            >
              Hi, I&apos;m <br className="hidden md:block" />
              <span className="text-zinc-400">Chirag Tapre.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8 h-[40px]">
              <Typewriter />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-zinc-400 mb-12 max-w-xl leading-relaxed"
            >
              I am a pre-final year engineering student currently working as a Python Stack Developer Intern. I specialize in building scalable web applications and am deeply interested in Artificial Intelligence and DevOps.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-4 w-full">
              {/* Primary: View Projects */}
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              {/* Secondary: Download Resume */}
              <motion.a 
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm"
              >
                <FileText className="w-4 h-4" />
                Resume
              </motion.a>

              {/* Social/Icon Buttons */}
              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <motion.a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white transition-colors backdrop-blur-sm"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white transition-colors backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white transition-colors backdrop-blur-sm"
                  aria-label="Contact Me"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end items-center h-[400px] md:h-[500px]"
          >
            {/* Floating Tech Icons */}
            <motion.div animate={floatAnimation(0)} className="absolute top-10 left-10 md:left-20 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
              <FaPython className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div animate={floatAnimation(1)} className="absolute bottom-20 left-4 md:left-10 p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
              <FaReact className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <motion.div animate={floatAnimation(2)} className="absolute top-24 right-4 md:right-10 p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
              <Terminal className="w-6 h-6 text-zinc-300" />
            </motion.div>
            <motion.div animate={floatAnimation(1.5)} className="absolute bottom-32 right-0 md:right-12 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
              <Database className="w-8 h-8 text-green-400" />
            </motion.div>

            {/* Profile Image Placeholder / Glass Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden group"
            >
              {/* Internal glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500/50">
                CT
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
