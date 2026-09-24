import React from "react";
import { Timeline } from "./Timeline";
import { Briefcase } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#E50914]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#E50914] mb-3">
              <span>04</span>
              <span className="text-white/30">—</span>
              <span className="text-white/80">EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-3">
              Learning by doing.
            </h2>
            <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl">
              Practical engineering experience developed through real-world software projects and campus leadership.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-[#737373]">
            <Briefcase className="w-4 h-4 text-[#E50914]" />
            <span>Practicum & Campus Leadership</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl">
          <Timeline />
        </div>

      </div>
    </section>
  );
};
