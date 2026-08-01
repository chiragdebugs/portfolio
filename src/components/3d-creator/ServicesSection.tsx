"use client";

import React from "react";
import FadeIn from "./FadeIn";

const expertiseItems = [
  {
    id: "01",
    name: "Full Stack Development",
    description: "Building complete web applications with modern frontend and backend technologies, focusing on performance, scalability and maintainable architecture.",
  },
  {
    id: "02",
    name: "Frontend Development",
    description: "Creating responsive and modern user interfaces using React, Angular, TypeScript and Tailwind CSS with strong attention to user experience.",
  },
  {
    id: "03",
    name: "Backend & APIs",
    description: "Developing backend services, REST APIs and application logic using Node.js, FastAPI, Java and modern database systems.",
  },
  {
    id: "04",
    name: "DevOps & Cloud",
    description: "Working with Docker, Git/GitHub, CI/CD fundamentals and AWS while continuously expanding knowledge of cloud-native development and deployment.",
  },
  {
    id: "05",
    name: "AI-Powered Applications",
    description: "Building intelligent software experiences by integrating AI models, APIs and automation into practical full-stack applications.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 select-none">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
            Expertise
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {expertiseItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1} y={20}>
              <div className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
                <div className="font-black text-[#0C0C0C] leading-none text-[clamp(3rem,10vw,140px)] min-w-[120px]">
                  {item.id}
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] mb-2">
                    {item.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
