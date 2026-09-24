import React, { useState } from "react";
import { Mail, Send, Check, Copy, Sparkles, MapPin, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import confetti from "canvas-confetti";
import { profile } from "../data/profile";

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (message.trim().length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#E50914", "#FF1A1A", "#FFFFFF"],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-[#E50914]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#E50914] mb-3">
            <span>08</span>
            <span className="text-white/30">—</span>
            <span className="text-white/80">CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-3">
            Let's talk.
          </h2>
          <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl leading-relaxed">
            Whether it's an internship opportunity, software development role, technical collaboration, or an interesting project, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E50914]/10 border border-[#E50914]/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#E50914]" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-[11px] font-mono text-[#B3B3B3] hover:text-white transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block mb-1">
                EMAIL DIRECT
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="font-display font-semibold text-base sm:text-lg text-white hover:text-[#FF1A1A] transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <LinkedinIcon className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
                    PROFESSIONAL NETWORK
                  </span>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-base text-white hover:text-[#E50914] transition-colors"
                  >
                    linkedin.com/in/vanshgour
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <GithubIcon className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
                    DEVELOPER PROFILE
                  </span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-base text-white hover:text-[#E50914] transition-colors"
                  >
                    github.com/vanshgour
                  </a>
                </div>
              </div>
            </div>

            {/* Location Tag */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3 text-xs font-mono text-[#737373]">
              <MapPin className="w-4 h-4 text-[#E50914]" />
              <span>Indore, Madhya Pradesh, India • Open for Relocation</span>
            </div>

          </div>

          {/* Right Column: Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#E50914]" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    DIRECT MESSAGE FORM
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#737373]">MAILTO WORKFLOW</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#B3B3B3] mb-2">
                    YOUR NAME <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#E50914] text-white text-sm outline-none transition-colors placeholder:text-[#555555]"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#FF1A1A] mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#B3B3B3] mb-2">
                    YOUR EMAIL <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#E50914] text-white text-sm outline-none transition-colors placeholder:text-[#555555]"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#FF1A1A] mt-1 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#B3B3B3] mb-2">
                    MESSAGE <span className="text-[#E50914]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Discuss an internship, full-time engineering opportunity, or technical question..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#E50914] text-white text-sm outline-none transition-colors placeholder:text-[#555555] resize-none"
                  />
                  <div className="flex items-center justify-between mt-1 text-[11px] font-mono text-[#737373]">
                    <span>{errors.message ? <span className="text-[#FF1A1A]">{errors.message}</span> : "Min 10 characters"}</span>
                    <span>{message.length} / 1000</span>
                  </div>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C1121F] via-[#E50914] to-[#FF1A1A] text-white text-sm font-semibold shadow-[0_0_24px_rgba(229,9,20,0.4)] hover:shadow-[0_0_36px_rgba(229,9,20,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-white" />
                      <span>Opening your email client...</span>
                    </>
                  ) : status === "sent" ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Email Client Opened!</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] font-mono text-[#737373]">
                  Submitting directly triggers your default email client with your drafted message.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
