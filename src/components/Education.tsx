import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/education";
import { GraduationCap, BookOpen, Building } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E50914]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#E50914] mb-3">
            <span>05</span>
            <span className="text-white/30">—</span>
            <span className="text-white/80">EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-3">
            Academic foundation.
          </h2>
          <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl">
            Core computer science and engineering coursework backing my practical development.
          </p>
        </div>

        {/* Large Glass Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.04] border border-white/10 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Col: University & Degree Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E50914]/15 border border-[#E50914]/40 flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.25)]">
                  <GraduationCap className="w-6 h-6 text-[#FF1A1A]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#E50914] uppercase tracking-wider font-semibold">
                    {education.status}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Building className="w-4 h-4 text-[#E50914]" />
                  <span>{education.institute}</span>
                </div>
                <p className="text-xs font-mono text-[#737373] pl-6">
                  {education.location}
                </p>
              </div>

              {/* Editable Placeholders for Graduation Year & CGPA */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block mb-1">
                    EXPECTED GRADUATION
                  </span>
                  <span className="font-display font-bold text-lg text-white">
                    {education.graduationYearPlaceholder}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block mb-1">
                    ACADEMIC STATUS
                  </span>
                  <span className="font-display font-bold text-sm text-emerald-400">
                    Final Year Standing
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Coursework & Abstract Visual */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#B3B3B3] uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4 text-[#E50914]" />
                <span>CORE COMPUTER SCIENCE COURSEWORK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/10 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                    <span className="text-xs font-medium text-white/90">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
