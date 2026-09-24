import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
}

const initialLogs: CommandLog[] = [
  { command: "whoami", output: "vansh-gour" },
  { command: "role", output: "software-developer" },
  { command: "education", output: "B.Tech Data Science Engineering" },
  { command: "institute", output: "IPS Academy, Indore" },
  { command: "primary-stack", output: "Java • DSA • React • SQL" },
  { command: "status", output: "open-to-opportunities" },
];

export const Terminal: React.FC = () => {
  const [logs, setLogs] = useState<CommandLog[]>(initialLogs);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: React.ReactNode = "";

    switch (cleanCmd) {
      case "help":
        response = (
          <div className="text-xs space-y-1 text-[#B3B3B3]">
            <p>Available commands:</p>
            <p className="text-white font-mono">whoami, role, education, institute, stack, projects, contact, clear, resume</p>
          </div>
        );
        break;
      case "whoami":
        response = "vansh-gour";
        break;
      case "role":
        response = "Software Developer (Final Year B.Tech CSE/Data Science)";
        break;
      case "education":
        response = "B.Tech Data Science Engineering @ IPS Academy, Indore";
        break;
      case "institute":
        response = "IPS Academy, Indore, Madhya Pradesh, India";
        break;
      case "stack":
      case "primary-stack":
      case "skills":
        response = "Java, Spring Boot, DSA, React, JavaScript, SQL, MySQL, Git";
        break;
      case "projects":
        response = "1. UPI Payment System  2. Boltly EV Hub  3. Network Packet Analyzer  4. DSA Practice Lab";
        break;
      case "contact":
      case "email":
        response = "vanshgour.dev@gmail.com | Open to SDE & Engineering Internships";
        break;
      case "resume":
        window.open(profile.resume, "_blank");
        response = "Opening resume in new tab...";
        break;
      case "status":
        response = "open-to-opportunities";
        break;
      case "clear":
        setLogs([]);
        setInputVal("");
        return;
      default:
        response = `Command not found: ${cleanCmd}. Type 'help' for options.`;
    }

    setLogs((prev) => [...prev, { command: cleanCmd, output: response }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="relative w-full max-w-lg mx-auto select-text">
      {/* Floating Glass Tech Badges around Terminal */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-[#E50914]/40 backdrop-blur-md text-[11px] font-mono text-white shadow-[0_0_15px_rgba(229,9,20,0.25)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
        JAVA
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden sm:flex absolute -top-3 -right-3 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-white/10 hover:border-[#E50914]/40 backdrop-blur-md text-[11px] font-mono text-white shadow-lg transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF1A1A]" />
        DSA
      </motion.div>

      <motion.div
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden sm:flex absolute top-1/2 -right-6 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-white/10 hover:border-[#E50914]/40 backdrop-blur-md text-[11px] font-mono text-white shadow-lg transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F]" />
        SPRING BOOT
      </motion.div>

      <motion.div
        animate={{ y: [6, -4, 6] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="hidden sm:flex absolute -bottom-4 -left-3 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-white/10 hover:border-[#E50914]/40 backdrop-blur-md text-[11px] font-mono text-white shadow-lg transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
        REACT
      </motion.div>

      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="hidden sm:flex absolute -bottom-3 -right-4 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A]/90 border border-[#E50914]/40 backdrop-blur-md text-[11px] font-mono text-white shadow-[0_0_15px_rgba(229,9,20,0.2)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
        SQL
      </motion.div>

      {/* Main Glass Terminal Box */}
      <div className="relative rounded-2xl bg-[#080808]/90 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.7),0_0_30px_rgba(229,9,20,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0F0F0F]/80 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
            <span className="ml-2 font-mono text-[11px] text-[#737373] tracking-wide flex items-center gap-1">
              <TerminalIcon className="w-3 h-3 text-[#E50914]" />
              vansh@developer-console: ~
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#737373]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            interactive
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalBodyRef}
          className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed max-h-[360px] overflow-y-auto space-y-3.5"
          onClick={() => inputRef.current?.focus()}
        >
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-[#B3B3B3]">
                <span className="text-[#E50914] font-bold">$</span>
                <span className="text-white font-medium">{log.command}</span>
              </div>
              <div className="pl-4 text-[#B3B3B3] border-l border-white/[0.06]">
                {log.output === "open-to-opportunities" ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    open-to-opportunities
                  </span>
                ) : (
                  log.output
                )}
              </div>
            </div>
          ))}

          {/* Prompt line with cursor */}
          <div className="flex items-center gap-2 text-[#B3B3B3] pt-1">
            <span className="text-[#E50914] font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              className="bg-transparent border-none outline-none text-white font-mono text-xs sm:text-[13px] w-full placeholder:text-[#555555] focus:ring-0"
              autoComplete="off"
              spellCheck="false"
            />
            {inputVal === "" && (
              <span className="w-2 h-4 bg-[#E50914] animate-pulse inline-block -ml-2" />
            )}
          </div>
        </div>

        {/* Quick Command Pills Footer */}
        <div className="px-4 py-2.5 bg-[#0A0A0A] border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-2 text-[11px] font-mono">
          <span className="text-[#737373] hidden sm:inline flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#E50914]" /> Quick tags:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {["stack", "projects", "contact", "clear"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleCommand(tag)}
                className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-[#E50914]/20 border border-white/[0.08] hover:border-[#E50914]/50 text-[#B3B3B3] hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
