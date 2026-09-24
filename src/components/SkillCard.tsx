import React from "react";
import { motion } from "framer-motion";
import type { SkillCategory } from "../data/skills";
import { Code, Cpu, Layout, Server, Database, Wrench } from "lucide-react";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const categoryIcons: Record<string, React.ElementType> = {
  programming: Code,
  "core-cs": Cpu,
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const Icon = categoryIcons[category.id] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#C1121F]/60 backdrop-blur-xl p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_24px_rgba(229,9,20,0.15)] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#E50914]/50 group-hover:bg-[#E50914]/10 flex items-center justify-center transition-all duration-300">
            <Icon className="w-5 h-5 text-white/80 group-hover:text-[#E50914] transition-colors" />
          </div>
          <span className="font-mono text-xs text-[#737373] group-hover:text-[#E50914] transition-colors">
            {category.number}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-white transition-colors">
          {category.title}
        </h3>

        <p className="text-xs text-[#737373] mb-6 leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Skills Pill List */}
      <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-white/[0.02] group-hover:bg-white/[0.04] border border-white/[0.04] group-hover:border-white/[0.08] transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]/70 group-hover:bg-[#FF1A1A] transition-colors" />
              <span className="text-xs font-medium text-white/90">
                {skill.name}
              </span>
            </div>
            {skill.description && (
              <span className="text-[10px] font-mono text-[#737373] text-right hidden sm:inline">
                {skill.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
