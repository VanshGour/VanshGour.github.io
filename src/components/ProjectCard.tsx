import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { UpiVisual, BoltlyVisual, PacketVisual, DsaVisual } from "./ProjectVisuals";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const renderVisual = () => {
    switch (project.type) {
      case "fintech":
        return <UpiVisual />;
      case "ev":
        return <BoltlyVisual />;
      case "network":
        return <PacketVisual />;
      case "dsa":
        return <DsaVisual />;
      default:
        return null;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative rounded-3xl bg-[#080808]/85 border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_30px_rgba(229,9,20,0.1)] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Details & Category */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#E50914] px-2.5 py-0.5 rounded bg-[#E50914]/10 border border-[#E50914]/30">
              {project.number}
            </span>
            <span className="font-mono text-xs text-[#737373] uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#E50914] transition-colors" />
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-[#B3B3B3] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technology Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-[#B3B3B3] group-hover:text-white group-hover:border-white/15 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[10px] font-mono text-[#737373]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Embedded Project Visual Simulator */}
      <div className="my-3 rounded-2xl overflow-hidden border border-white/[0.06] shadow-inner bg-black/40">
        {renderVisual()}
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF1A1A] transition-colors cursor-pointer"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/[0.03] hover:bg-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 text-[#B3B3B3] hover:text-white transition-colors"
            title="View GitHub Repository"
            aria-label={`View GitHub repository for ${project.title}`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};
