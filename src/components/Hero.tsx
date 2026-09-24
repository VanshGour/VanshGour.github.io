import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/profile";

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background ambient glowing orbs ── */}
      <div className="absolute top-10 right-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-[#E50914]/8 blur-[140px] pointer-events-none animate-orb-1" />
      <div className="absolute bottom-20 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#8B0000]/12 blur-[120px] pointer-events-none animate-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* ── Main Hero Grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[80vh]">

          {/* ═══ LEFT COLUMN: Name + Greeting ═══ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-start lg:items-start text-left lg:pr-4 order-1 lg:order-1"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#E50914]/40 backdrop-blur-md mb-6 transition-colors shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50914] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1A1A] shadow-[0_0_8px_#FF1A1A]" />
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#B3B3B3]">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-[#B3B3B3] mb-2 tracking-wide">
              Hello, I'm
            </h3>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-white leading-[0.9] mb-4">
              <span className="text-gradient-red">Vansh</span>
              <br />
              Gour
            </h1>

            <p className="text-base sm:text-lg text-[#B3B3B3] leading-relaxed max-w-sm mb-8">
              <strong className="text-white font-medium">B.Tech Data Science Engineering</strong> student at{" "}
              <span className="text-white">{profile.college}</span>, focused on Java, DSA, and modern web technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C1121F] via-[#E50914] to-[#FF1A1A] text-white text-sm font-semibold shadow-[0_0_24px_rgba(229,9,20,0.45)] hover:shadow-[0_0_36px_rgba(229,9,20,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E50914]/50 text-white text-sm font-semibold backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <FileText className="w-4 h-4 text-[#E50914]" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 text-[#B3B3B3] hover:text-white transition-all" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 text-[#B3B3B3] hover:text-white transition-all" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 text-[#B3B3B3] hover:text-white transition-all" aria-label="LeetCode">
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* ═══ CENTER COLUMN: Profile Image with Blob Glow ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 flex items-center justify-center order-2 lg:order-2 relative"
          >
            {/* Animated blob glow behind image */}
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full bg-gradient-to-br from-[#E50914]/25 via-[#8B0000]/15 to-[#C1121F]/20 blur-[80px] animate-orb-1 pointer-events-none" />
            <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-tr from-[#FF1A1A]/15 via-transparent to-[#E50914]/10 blur-[60px] animate-orb-2 pointer-events-none" />

            {/* Outer ring glow */}
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#E50914]/20 shadow-[0_0_60px_rgba(229,9,20,0.15),inset_0_0_60px_rgba(229,9,20,0.08)] pointer-events-none" />

            {/* Profile Image */}
            <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_80px_rgba(229,9,20,0.25),0_25px_60px_rgba(0,0,0,0.7)] z-10">
              <img
                src="/profile.png"
                alt="Vansh Gour — Software Developer"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />

              {/* Subtle gradient overlay at bottom for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating tech badges around image */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 left-4 sm:left-0 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-[#E50914]/40 backdrop-blur-md text-[11px] font-mono text-white shadow-[0_0_15px_rgba(229,9,20,0.25)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
              JAVA
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-8 -right-2 sm:right-0 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1A1A]" />
              DSA
            </motion.div>

            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -left-4 sm:-left-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F]" />
              REACT
            </motion.div>

            <motion.div
              animate={{ y: [6, -4, 6] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-1 right-6 sm:right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-[#E50914]/40 backdrop-blur-md text-[11px] font-mono text-white shadow-[0_0_15px_rgba(229,9,20,0.2)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
              SQL
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-1/2 -right-6 sm:-right-8 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              SPRING BOOT
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT COLUMN: Role + Info ═══ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right lg:pl-4 order-3 lg:order-3"
          >
            <h3 className="text-base sm:text-lg font-medium text-[#737373] mb-1 font-mono tracking-widest uppercase">
              Creative
            </h3>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter text-white leading-[0.9] mb-6">
              Software
              <br />
              <span className="text-gradient-red">Developer</span>
            </h2>

            {/* Quick fact cards */}
            <div className="space-y-3 w-full max-w-xs lg:ml-auto mb-8">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E50914]/30 transition-colors">
                <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest block mb-0.5">EDUCATION</span>
                <span className="text-sm font-medium text-white">{profile.education}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E50914]/30 transition-colors">
                <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest block mb-0.5">INSTITUTE</span>
                <span className="text-sm font-medium text-white">{profile.college}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E50914]/30 transition-colors">
                <span className="text-[10px] font-mono text-[#E50914] uppercase tracking-widest block mb-0.5">CORE STACK</span>
                <span className="text-sm font-medium text-white">Java • DSA • React • SQL</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom Stats Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {profile.stats.map((stat) => (
            <div
              key={stat.number}
              className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E50914]/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#E50914] font-semibold tracking-wider">
                  {stat.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#E50914] transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                {stat.label}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
