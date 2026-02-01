import { ThemeToggle } from "../context/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Toaster } from "@/components/ui/toaster";
import { UXSection } from "@/components/UXSection";


export const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      {/* 🌌 Background */}
      <StarBackground />

      {/* 🧭 UI */}
      <div className="relative z-20">
        <Navbar />

        {/* 🌗 Theme Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
      </div>

      {/* 📄 Content */}
      <main className="relative z-10 pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection/>
        <UXSection/>
        <ContactSection/>
        <Toaster/>
      </main>
    </div>
  );
};
