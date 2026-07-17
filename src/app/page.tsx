import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import GithubStats from "@/components/sections/GithubStats";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { getRepositories } from "@/lib/github";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const repositories = await getRepositories();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects repositories={repositories} />
      <Achievements />
      <GithubStats />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
