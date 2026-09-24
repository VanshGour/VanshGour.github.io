import React, { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { EducationSection } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { CodingProfiles } from "./components/CodingProfiles";
import { ResumeCTA } from "./components/ResumeCTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [, setLoadingComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#FFFFFF] font-sans selection:bg-[#E50914] selection:text-white overflow-x-hidden bg-grid-pattern">
      {/* Short initial loading screen (<1s) */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Single-Page Portfolio Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationSection />
        <Achievements />
        <CodingProfiles />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Minimalist Glass Footer */}
      <Footer />
    </div>
  );
};

export default App;
