export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "LANGUAGES",
    items: ["TypeScript", "JavaScript", "Python", "Java", "HTML5", "CSS3 / SQL"],
  },
  {
    category: "FRONTEND",
    items: ["React.js", "Angular", "Next.js App Router", "Tailwind CSS", "Three.js / WebGL"],
  },
  {
    category: "BACKEND",
    items: ["FastAPI", "Node.js", "REST APIs", "Express.js", "Role-Based Auth System Design"],
  },
  {
    category: "AI / DATA",
    items: ["Google Gemini API", "LLM Integration", "Prompt Engineering", "JSON Schema Synthesis"],
  },
  {
    category: "CLOUD / DATABASE",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Upstash Redis", "Docker", "AWS Fundamentals"],
  },
  {
    category: "TOOLS",
    items: ["Git & GitHub", "Vercel", "n8n Automation", "Postman", "Figma", "VS Code"],
  },
];
