import React from "react";
import { profile } from "../data/profile";
import { Code2, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#060606] py-14 overflow-hidden text-white">
      {/* Subtle bottom ambient red reflection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-t from-[#E50914]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <span className="font-display font-bold text-sm text-white">
                V<span className="text-[#E50914]">G</span>
              </span>
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-wider block">
                {profile.name}
              </span>
              <span className="text-xs font-mono text-[#737373]">
                {profile.college}
              </span>
            </div>
          </div>

          {/* Center: Role */}
          <div className="text-center font-mono text-xs text-[#B3B3B3]">
            <span className="text-[#E50914] font-semibold">//</span> {profile.role} • {profile.education}
          </div>

          {/* Right: Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 text-[#B3B3B3] hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 text-[#B3B3B3] hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 text-[#B3B3B3] hover:text-white transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/10 text-[#B3B3B3] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737373]">
          <div>
            © {currentYear} {profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with React, TypeScript & curiosity.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
