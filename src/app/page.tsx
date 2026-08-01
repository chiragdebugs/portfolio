import HeroSection from "@/components/3d-creator/HeroSection";
import MarqueeSection from "@/components/3d-creator/MarqueeSection";
import AboutSection from "@/components/3d-creator/AboutSection";
import ServicesSection from "@/components/3d-creator/ServicesSection";
import ProjectsSection from "@/components/3d-creator/ProjectsSection";
import ContactSection from "@/components/3d-creator/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip font-sans">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
