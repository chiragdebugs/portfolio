import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaJava, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, 
  SiJavascript, SiAngular, SiFastapi 
} from "react-icons/si";
import { Code2, Layout, Server, Terminal, Wrench, Lightbulb } from "lucide-react";

export const personalInfo = {
  name: "Chirag Tapre",
  role: "Aspiring Full Stack Developer | Python Stack Developer | AI & Full Stack Enthusiast",
  location: "Nashik, Maharashtra, India",
  bio: "Pre-final year Electronics & Communication Engineering student with hands-on experience building scalable full-stack applications. Currently developing an enterprise Vendor Reliability Intelligence Platform using Angular, FastAPI, and PostgreSQL. I am deeply interested in Full Stack Development, Artificial Intelligence, DevOps, and building robust, production-ready software.",
  email: "taprechirag150@gmail.com",
  github: "https://github.com/chiragdebugs",
  linkedin: "https://www.linkedin.com/in/chirag-tapre-47a426192/",
  resume: "/resume.pdf", 
};

export const skills = {
  "Programming": [
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
  ],
  "Frontend": [
    { name: "React.js", icon: FaReact },
    { name: "Angular", icon: SiAngular },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
  ],
  "Backend": [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Java (Full Stack)", icon: FaJava },
    { name: "FastAPI", icon: SiFastapi },
    { name: "REST API Integration", icon: Server },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
  ],
  "DevOps": [
    { name: "Docker", icon: FaDocker },
    { name: "CI/CD Fundamentals", icon: Terminal },
  ],
  "Cloud": [
    { name: "AWS (Learning)", icon: FaAws },
  ],
  "Tools": [
    { name: "Git/GitHub", icon: FaGithub },
    { name: "n8n", icon: Wrench },
  ],
  "Core Concepts": [
    { name: "Data Structures & Algorithms (Python)", icon: Code2 },
    { name: "System Design Fundamentals", icon: Layout },
    { name: "Agile/Scrum", icon: Lightbulb },
  ]
};

export const experience = [
  {
    id: 1,
    role: "Python Stack Developer Intern",
    company: "Infosys Springboard",
    duration: "June 2026 - Present",
    project: "Vendor Reliability Intelligence Platform",
    techStack: ["Angular", "FastAPI", "PostgreSQL"],
    responsibilities: [
      "Developing a full-stack Vendor Reliability Intelligence & Procurement Risk Management Platform using Angular, FastAPI, and PostgreSQL.",
      "Implementing vendor management, procurement workflows, and performance tracking modules with role-based authentication.",
      "Building reliability scoring logic and analytics dashboards to surface actionable procurement insights.",
      "Collaborating on API design and database schema to ensure scalable, maintainable full stack architecture."
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    major: "Electronics & Communication Engineering",
    institution: "Savitribai Phule Pune University",
    duration: "2024 - 2028"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
  },
  {
    id: 2,
    title: "Deloitte Australia Cyber Job Simulation",
    issuer: "Deloitte",
  },
  {
    id: 3,
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata",
  },
  {
    id: 4,
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
  },
  {
    id: 5,
    title: "Cybersecurity for Everyone",
    issuer: "University of Maryland",
  }
];

export const achievements = [
  {
    id: 1,
    title: "Python Stack Internship",
    description: "Secured a competitive internship at Infosys Springboard to build enterprise full-stack solutions."
  },
  {
    id: 2,
    title: "AI Projects",
    description: "Built practical AI applications including BillBuddy AI and a Voice Assistant."
  },
  {
    id: 3,
    title: "Full Stack Projects",
    description: "Developed robust full-stack platforms using React, Node.js, FastAPI, and PostgreSQL."
  },
  {
    id: 4,
    title: "Hackathon Participation",
    description: "Actively participated in hackathons, focusing on rapid prototyping and modern web development."
  }
];
