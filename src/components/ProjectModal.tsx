import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Layers, 
  Cpu, 
  ShieldAlert
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { UpiVisual, BoltlyVisual, PacketVisual, DsaVisual } from "./ProjectVisuals";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ESC key listener & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = (type: string) => {
    switch (type) {
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050505]/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.12)] overflow-y-auto z-10 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#E50914] px-2.5 py-1 rounded bg-[#E50914]/10 border border-[#E50914]/30">
                {project.number}
              </span>
              <span className="font-mono text-xs text-[#737373] uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-[#B3B3B3] hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-base text-[#B3B3B3]">
                {project.tagline}
              </p>
            </div>

            {/* Interactive Visual Box */}
            <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {renderVisual(project.type)}
            </div>

            {/* Tech Stack Badges */}
            <div>
              <span className="text-xs font-mono text-[#E50914] uppercase tracking-wider block mb-3">
                TECHNOLOGIES USED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Approach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-[#E50914] text-xs font-mono font-bold tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>ENGINEERING APPROACH</span>
                </div>
                <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Architecture Details */}
            {project.architectureDetails && (
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-white text-xs font-mono font-bold tracking-wider mb-2">
                  <Layers className="w-4 h-4 text-[#E50914]" />
                  <span>SYSTEM ARCHITECTURE</span>
                </div>
                <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed mb-4">
                  {project.architectureDetails}
                </p>
                {project.architectureDiagram && (
                  <pre className="p-4 rounded-lg bg-black/60 border border-white/[0.06] text-[11px] font-mono text-emerald-400 overflow-x-auto leading-tight">
                    {project.architectureDiagram}
                  </pre>
                )}
              </div>
            )}

            {/* Key Features List */}
            <div>
              <span className="text-xs font-mono text-[#E50914] uppercase tracking-wider block mb-3">
                KEY FEATURES & CAPABILITIES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#B3B3B3] leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenges */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold tracking-wider mb-3">
                  <ShieldAlert className="w-4 h-4" />
                  <span>KEY CHALLENGES SOLVED</span>
                </div>
                <ul className="space-y-2 text-xs text-[#B3B3B3]">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold tracking-wider mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>WHAT I LEARNED</span>
                </div>
                <ul className="space-y-2 text-xs text-[#B3B3B3]">
                  {project.learnings.map((l, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer / Action Links */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E50914]/50 text-white text-xs font-semibold transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E50914] hover:bg-[#FF1A1A] text-white text-xs font-semibold shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-[#737373]">
                    Live demo: Local/Architecture Simulation
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-xs font-medium text-white transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
