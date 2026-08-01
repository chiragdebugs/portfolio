import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white relative font-sans overflow-x-hidden selection:bg-[#F598F2] selection:text-black">
      <Hero />
      <SelectedWork />
      <Skills />
      <About />
      <Experience />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}
