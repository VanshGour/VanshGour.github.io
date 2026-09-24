import React, { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { FolderGit2 } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#E50914]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#E50914] mb-3">
              <span>03</span>
              <span className="text-white/30">—</span>
              <span className="text-white/80">SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-3">
              Things I've built.
            </h2>
            <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl">
              A selection of projects exploring software development, backend systems, networking, and problem solving.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-[#737373]">
            <FolderGit2 className="w-4 h-4 text-[#E50914]" />
            <span>Case Studies & Architectures</span>
          </div>
        </div>

        {/* 2x2 Grid of Large Featured Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
              index={index}
            />
          ))}
        </div>

      </div>

      {/* Full Glass Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
