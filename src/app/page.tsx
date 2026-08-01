import BackgroundScene from "@/components/3d/BackgroundScene";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import AboutTimeline from "@/components/sections/AboutTimeline";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#08090A] text-[#F5F7FA] relative font-sans overflow-x-hidden">
        <BackgroundScene />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <AboutTimeline />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
