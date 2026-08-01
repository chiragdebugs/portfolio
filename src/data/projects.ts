export interface Project {
  index: string;
  title: string;
  problem: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  variant: "stacked" | "split-right" | "full-width" | "split-left";
}

export const projectsData: Project[] = [
  {
    index: "01",
    title: "RepoLens AI",
    problem: "Navigating and understanding unfamiliar software repositories requires hours of manual code inspection.",
    description: "An AI-powered GitHub repository intelligence platform that synthesizes automated architecture diagrams, health scores, reading lists, and dependency analysis for public GitHub codebases.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini API", "Upstash Redis", "Vercel"],
    image: "/images/repolens-ai.png",
    githubUrl: "https://github.com/chiragdebugs/repolens-ai",
    liveUrl: "https://repolens-ai-coral.vercel.app/",
    variant: "stacked",
  },
  {
    index: "02",
    title: "BillBuddy AI",
    problem: "Splitting shared group expenses and tracking debt settlements across multiple peers is manual and error-prone.",
    description: "Enterprise-grade expense sharing and financial tracking web application. Enables automated bill splits, participant settlement calculations, payment tracking, and dynamic financial dashboards.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/chiragdebugs/billbuddy-ai",
    variant: "split-right",
  },
  {
    index: "03",
    title: "Slash URL Shortener",
    problem: "Standard link shorteners lack real-time clickstream analytics and interactive WebGL experiences.",
    description: "Enterprise-grade URL shortener & real-time analytics platform featuring living 3D WebGL translucent slash planes rendered with custom GLSL shaders, Supabase Cloud Postgres, and Tailwind v4.",
    techStack: ["Next.js 16", "Three.js", "Supabase", "Tailwind v4", "WebGL"],
    image: "https://raw.githubusercontent.com/chiragdebugs/urlshortner/main/public/images/hero.png",
    githubUrl: "https://github.com/chiragdebugs/urlshortner",
    liveUrl: "https://slash-urlshortner.vercel.app/",
    variant: "full-width",
  },
  {
    index: "04",
    title: "AnkiDroid Android",
    problem: "Retaining complex technical information and information overload requires superhuman spaced-repetition algorithms.",
    description: "Open-source contribution to AnkiDroid, the flashcard application for Android helping users retain information through spaced repetition and open-source Android SDK enhancements.",
    techStack: ["Java", "Android SDK", "Git", "Open Source"],
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/chiragdebugs/Anki-Android",
    variant: "split-left",
  },
];
