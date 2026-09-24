import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Quick, premium entrance under ~900ms
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 400);
    }, 750);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          {/* Subtle ambient red glow behind logo */}
          <div className="absolute w-72 h-72 rounded-full bg-[#E50914]/10 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center text-center z-10"
          >
            {/* VG Monogram Badge */}
            <div className="w-16 h-16 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(229,9,20,0.15)]">
              <span className="font-display font-bold text-2xl tracking-tighter text-white">
                V<span className="text-[#E50914]">G</span>
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold tracking-[0.3em] uppercase text-white mb-1.5"
            >
              VANSH GOUR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[11px] font-mono tracking-widest uppercase text-[#737373] mb-6"
            >
              SOFTWARE DEVELOPER
            </motion.p>

            {/* Expanding thin red loading line */}
            <div className="w-48 h-[2px] bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#8B0000] via-[#E50914] to-[#FF1A1A] shadow-[0_0_10px_#E50914]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
