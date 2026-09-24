import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scrollspy active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-3 sm:pt-5 transition-all duration-300">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full max-w-6xl rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
            isScrolled
              ? "bg-[#0A0A0A]/85 backdrop-blur-xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(229,9,20,0.06)]"
              : "bg-[#0A0A0A]/50 backdrop-blur-md border-white/8"
          }`}
        >
          {/* Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#E50914]/50 flex items-center justify-center transition-colors">
              <span className="font-display font-bold text-xs tracking-tighter text-white">
                V<span className="text-[#E50914]">G</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-wider text-white group-hover:text-white/90">
                VANSH GOUR
              </span>
              <span className="text-[10px] font-mono text-[#737373] tracking-wider uppercase -mt-0.5">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] p-1 rounded-xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#B3B3B3] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#E50914]/10 border border-[#E50914]/40 rounded-lg -z-10 shadow-[0_0_12px_rgba(229,9,20,0.3)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action: Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/[0.04] hover:bg-[#E50914]/15 border border-white/10 hover:border-[#E50914]/60 text-white transition-all duration-200 shadow-sm hover:shadow-[0_0_16px_rgba(229,9,20,0.3)] group"
            >
              <FileText className="w-3.5 h-3.5 text-[#E50914] group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#737373] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden rounded-2xl bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(229,9,20,0.15)]"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                      isActive
                        ? "bg-[#E50914]/15 border border-[#E50914]/40 text-white"
                        : "text-[#B3B3B3] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
                    )}
                  </button>
                );
              })}

              <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#E50914] text-white text-sm font-semibold shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
