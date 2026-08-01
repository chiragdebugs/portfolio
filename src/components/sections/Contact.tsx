"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const email = "taprechirag150@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 relative bg-[#08090A]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-4 text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono-code text-[#00F0FF] uppercase tracking-widest flex items-center gap-2"
          >
            <span className="w-6 h-[1px] bg-[#00F0FF]" />
            <span>05 / GET IN TOUCH</span>
            <span className="w-6 h-[1px] bg-[#00F0FF]" />
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight font-sans">
            LET&apos;S BUILD <br />
            <span className="accent-glow-text">SOMETHING USEFUL.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl">
            Have an opportunity, technical question, or project idea? Send a message below or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0D0F12] border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold font-mono-code text-white">Direct Contact</h3>

              <div className="space-y-4 text-sm font-mono-code">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-4 h-4 text-[#00F0FF]" />
                    <span className="text-zinc-300 text-xs sm:text-sm">{email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 hover:bg-white/10 rounded text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <FaCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <a
                  href="https://github.com/chiragdebugs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="w-4 h-4 text-[#00F0FF]" />
                    <span>github.com/chiragdebugs</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00F0FF] transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/chirag-tapre-47a426192/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="w-4 h-4 text-[#0A84FF]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00F0FF] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[#0D0F12] border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold font-mono-code text-white">Send Message</h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-mono-code space-y-2">
                  <p className="font-bold text-lg">🚀 Message Sent Successfully!</p>
                  <p className="text-xs text-zinc-300">Thank you for reaching out. I will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono-code text-zinc-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#131720] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00F0FF] font-mono-code text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono-code text-zinc-400 uppercase">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#131720] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00F0FF] font-mono-code text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono-code text-zinc-400 uppercase">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Chirag, I'd like to talk about..."
                      className="w-full px-4 py-3 rounded-xl bg-[#131720] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00F0FF] font-mono-code text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="SEND"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#00F0FF] hover:bg-[#38BDF8] text-black font-bold text-sm font-mono-code transition-all shadow-lg shadow-[#00F0FF]/20 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
