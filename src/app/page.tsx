import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatusBar from "@/components/sections/StatusBar";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Experience from "@/components/sections/Experience";
import GithubActivity from "@/components/sections/GithubActivity";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090A] text-[#F5F7FA] relative font-sans overflow-x-hidden">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <StatusBar />
      <About />
      <TechStack />
      <ProjectShowcase />
      <Experience />
      <GithubActivity />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
