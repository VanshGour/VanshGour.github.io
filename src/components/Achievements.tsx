import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../data/education";
import { Code2, Target, Layers, Users, Sparkles } from "lucide-react";

const achievementIcons: Record<string, React.ElementType> = {
  "dsa-practice": Code2,
  leetcode: Target,
  "practical-projects": Layers,
  "campus-tedx": Users,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#E50914] mb-3">
            <span>06</span>
            <span className="text-white/30">—</span>
            <span className="text-white/80">ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-3">
            Progress, not just credentials.
          </h2>
          <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl">
            Disciplined daily practice, meaningful campus contributions, and hands-on software development milestones.
          </p>
        </div>

        {/* 4 Authentic Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => {
            const Icon = achievementIcons[item.id] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-xl shadow-lg hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(229,9,20,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#E50914]/50 group-hover:bg-[#E50914]/10 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5 text-white/80 group-hover:text-[#E50914] transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#E50914] tracking-widest uppercase block mb-1.5 font-semibold">
                    {item.category}
                  </span>

                  <h3 className="font-display font-bold text-lg text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#B3B3B3] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-[#737373]">VERIFIED MILESTONE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
