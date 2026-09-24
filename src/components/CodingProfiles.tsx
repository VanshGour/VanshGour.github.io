import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Code2, ArrowUpRight, Activity } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const CodingProfiles: React.FC = () => {
  const profiles = [
    {
      id: "github",
      icon: GithubIcon,
      name: "GitHub",
      tagline: "Projects, source code, and development work.",
      url: profile.github,
      action: "Open GitHub",
      accent: "from-white/10 to-white/[0.02]",
      status: "Public Repositories & Commits",
      mockBadge: "git push origin main"
    },
    {
      id: "leetcode",
      icon: Code2,
      name: "LeetCode",
      tagline: "DSA practice and algorithmic problem solving.",
      url: profile.leetcode,
      action: "Open LeetCode",
      accent: "from-[#FFA116]/15 to-transparent",
      status: "Algorithmic Problem Practice",
      mockBadge: "Java • Solutions • Patterns"
    },
    {
      id: "linkedin",
      icon: LinkedinIcon,
      name: "LinkedIn",
      tagline: "Professional profile and career updates.",
      url: profile.linkedin,
      action: "Open LinkedIn",
      accent: "from-[#0A66C2]/15 to-transparent",
      status: "Career Opportunities & Network",
      mockBadge: "Software Developer Candidate"
    }
  ];

  return (
    <section id="code" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#E50914]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#E50914] mb-3">
            <span>07</span>
            <span className="text-white/30">—</span>
            <span className="text-white/80">CODE & PROFILES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-3">
            Find me online.
          </h2>
          <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl">
            Explore my repositories, algorithmic problem-solving logs, and professional background.
          </p>
        </div>

        {/* 3 Large Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {profiles.map((p, index) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] hover:from-white/[0.07] hover:to-white/[0.02] border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_24px_rgba(229,9,20,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Status */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-[#E50914]/50 group-hover:bg-[#E50914]/10 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-6 h-6 text-white group-hover:text-[#E50914] transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-[#737373] px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05]">
                      {p.mockBadge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-white transition-colors">
                    {p.name}
                  </h3>

                  <p className="text-sm text-[#B3B3B3] leading-relaxed mb-6">
                    {p.tagline}
                  </p>

                  {/* Section 32: Coding Activity Architecture Placeholder */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-6">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-1.5">
                      <Activity className="w-3 h-3 text-[#E50914]" />
                      <span>CODING ACTIVITY</span>
                    </div>
                    <p className="text-xs font-mono text-[#B3B3B3]">
                      Connect profile to display live statistics.
                    </p>
                  </div>
                </div>

                {/* Open Button */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.03] group-hover:bg-[#E50914] border border-white/10 group-hover:border-[#FF1A1A] text-white text-xs font-semibold shadow-sm group-hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all duration-300"
                >
                  <span>{p.action}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
