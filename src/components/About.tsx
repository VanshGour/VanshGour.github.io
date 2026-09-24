import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Landmark, MapPin, Target, TerminalSquare, FileText } from "lucide-react";
import { profile } from "../data/profile";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      label: "EDUCATION",
      value: profile.education,
      detail: "Computer Science & Engineering specialization"
    },
    {
      icon: Landmark,
      label: "INSTITUTE",
      value: profile.college,
      detail: "Department of Computer Science & Engineering"
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Indore, Madhya Pradesh, India",
      detail: "Active & Available for relocation"
    },
    {
      icon: Target,
      label: "CURRENT FOCUS",
      value: profile.currentFocus,
      detail: "Core Java • DSA • Backend Microservices • Web Apps"
    }
  ];

  const cycleWords = [
    { word: "BUILD", desc: "Translating concepts into clean, functional code." },
    { word: "LEARN", desc: "Exploring CS fundamentals, algorithms & protocols." },
    { word: "SOLVE", desc: "Decomposing complex problems with optimized logic." },
    { word: "REPEAT", desc: "Iterating consistently with daily deliberate practice." }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#E50914]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#8B0000]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#E50914] mb-3">
            <span>01</span>
            <span className="text-white/30">—</span>
            <span className="text-white/80">ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            <span className="text-gradient-red">Creativity</span>
            <br />
            Is My Passion
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Profile Image + Narrative */}
          <div className="lg:col-span-6 space-y-8">
            {/* Profile Image with dual blob glow (matching Pinterest About section) */}
            <div className="relative flex justify-center lg:justify-start mb-4">
              <div className="absolute w-[260px] h-[280px] rounded-full bg-gradient-to-br from-[#E50914]/20 via-[#8B0000]/10 to-transparent blur-[70px] animate-orb-2 -top-6 -left-4 pointer-events-none" />
              <div className="absolute w-[200px] h-[220px] rounded-full bg-gradient-to-tl from-[#FF1A1A]/12 to-transparent blur-[50px] animate-orb-1 bottom-0 right-8 pointer-events-none" />

              <div className="relative w-[260px] h-[310px] sm:w-[300px] sm:h-[360px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(229,9,20,0.15)] z-10">
                <img
                  src="/profile.png"
                  alt="Vansh Gour"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <p className="text-lg text-[#B3B3B3] leading-relaxed">
              I'm a <strong className="text-white">Software Developer</strong> passionate about experimenting
              with new <strong className="text-white">skills and creativity.</strong>{" "}
              Driven by learning and curiosity, I'm always looking to explore
              and learn new development techniques.
            </p>

            <p className="text-base text-[#B3B3B3] leading-relaxed">
              {profile.bio2}
            </p>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C1121F] via-[#E50914] to-[#FF1A1A] text-white text-sm font-semibold shadow-[0_0_24px_rgba(229,9,20,0.45)] hover:shadow-[0_0_36px_rgba(229,9,20,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* Section 15: Abstract Glass Card (BUILD • LEARN • SOLVE • REPEAT) */}
            <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <TerminalSquare className="w-4 h-4 text-[#E50914]" />
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase text-white/90">
                    ENGINEERING PRINCIPLE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#737373]">CONTINUOUS LOOP</span>
              </div>

              <div className="space-y-4">
                {cycleWords.map((item, idx) => (
                  <div key={item.word} className="group">
                    <div className="flex items-baseline justify-between">
                      <motion.span
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#E50914] transition-colors inline-block"
                      >
                        {item.word}
                      </motion.span>
                      <span className="text-xs font-mono text-[#737373] group-hover:text-[#B3B3B3] transition-colors text-right pl-4">
                        {item.desc}
                      </span>
                    </div>

                    {/* Red line separator */}
                    {idx < cycleWords.length - 1 && (
                      <div className="my-3.5 h-[1px] bg-gradient-to-r from-[#E50914]/50 via-white/10 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Four Glass Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-xl shadow-lg hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(229,9,20,0.1)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#E50914]/50 group-hover:bg-[#E50914]/10 flex items-center justify-center mb-5 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white/80 group-hover:text-[#E50914] transition-colors" />
                  </div>

                  <span className="block text-[11px] font-mono tracking-widest text-[#E50914] font-semibold mb-1.5">
                    {item.label}
                  </span>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                    {item.value}
                  </h3>

                  <p className="text-xs text-[#737373] leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
