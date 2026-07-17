import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm font-medium">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link href={personalInfo.github} target="_blank" aria-label="GitHub Profile" className="text-zinc-500 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href={personalInfo.linkedin} target="_blank" aria-label="LinkedIn Profile" className="text-zinc-500 hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href={`mailto:${personalInfo.email}`} aria-label="Email Me" className="text-zinc-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
