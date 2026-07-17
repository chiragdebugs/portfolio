"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { GitPullRequest, Star, GitCommit } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

// Dynamically import GitHubCalendar to prevent SSR hydration mismatch
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false, loading: () => <div className="animate-pulse bg-white/5 rounded-md w-full h-[150px]"></div> }
);

export default function GithubStats() {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            Contributions
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
            GitHub Activity
          </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 p-8 rounded-xl border border-white/[0.08] bg-[#0A0A0A]"
          >
            <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
              <div className="min-w-[700px] flex justify-center">
                <GitHubCalendar 
                  username={personalInfo.github.split("/").pop() || "chiragdebugs"}
                  colorScheme="dark"
                  theme={{
                    dark: ['#111111', '#27272a', '#52525b', '#a1a1aa', '#f4f4f5'],
                  }}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                  blockRadius={2}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-72 flex flex-col gap-4"
          >
            {[
              { label: "Total Stars", icon: Star, value: "120+" },
              { label: "Commits", icon: GitCommit, value: "1,200+" },
              { label: "PRs Merged", icon: GitPullRequest, value: "45+" },
              { label: "Repositories", icon: FaGithub, value: "30+" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-5 rounded-xl border border-white/[0.08] bg-[#0A0A0A] hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-3 text-zinc-400">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
                <span className="text-lg font-medium text-white">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
