import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { profile } from "../data/profile";

export const ResumeCTA: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width dramatic glass banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#0D0505] via-[#120808] to-[#0A0A0A] border border-[#E50914]/30 backdrop-blur-2xl p-8 sm:p-14 lg:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.15)] overflow-hidden text-center flex flex-col items-center"
        >
          {/* Subtle animated red ambient glow inside card */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#E50914]/20 blur-[100px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E50914]/10 border border-[#E50914]/40 text-xs font-mono text-[#FF1A1A] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping" />
            <span>OPEN TO FULL-TIME & INTERNSHIP ROLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4 max-w-3xl">
            Let's build what's next.
          </h2>

          <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl mb-10 leading-relaxed">
            Explore my resume for a detailed overview of my technical skills, projects, education, and experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C1121F] via-[#E50914] to-[#FF1A1A] text-white text-sm font-semibold shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:shadow-[0_0_40px_rgba(229,9,20,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <button
              type="button"
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E50914]/50 text-white text-sm font-semibold backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#E50914]" />
              <span>Contact Me</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
