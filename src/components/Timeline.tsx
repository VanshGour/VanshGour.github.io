import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { Calendar, MapPin, CheckCircle2, Code2, Users } from "lucide-react";

export const Timeline: React.FC = () => {
  return (
    <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#E50914] before:via-[#8B0000] before:to-transparent">
      {experiences.map((exp, index) => {
        const isLeadership = exp.type.includes("Leadership");

        return (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Glowing Red Node on Timeline */}
            <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#E50914] flex items-center justify-center shadow-[0_0_15px_rgba(229,9,20,0.6)] group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-[#FF1A1A] animate-pulse" />
            </div>

            {/* Glass Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_24px_rgba(229,9,20,0.1)] transition-all duration-300">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.06]">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-[11px] font-mono text-[#FF1A1A] mb-2">
                    {isLeadership ? <Users className="w-3 h-3" /> : <Code2 className="w-3 h-3" />}
                    <span>{exp.badge}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {exp.role}
                  </h3>
                  <span className="font-medium text-sm text-[#B3B3B3]">
                    {exp.organization}
                  </span>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-[#737373] gap-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E50914]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#737373]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#B3B3B3] leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-[#B3B3B3]"
                  >
                    {s}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
