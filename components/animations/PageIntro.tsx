"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ZevatsLogo } from "../ui/ZevatsLogo";

interface PageIntroProps {
  onComplete?: () => void;
}

export const PageIntro: React.FC<PageIntroProps> = ({ onComplete }) => {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState<"intro" | "letters" | "assembled" | "docking">("intro");

  useEffect(() => {
    const seen = typeof window !== "undefined" ? sessionStorage.getItem("zevats_intro_seen") : null;

    if (prefersReducedMotion || seen === "true") {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    setIsVisible(true);
    setStage("letters");

    // Timeline:
    // 0ms - 1300ms: Letters animate into place
    // 1300ms - 1750ms: Assembled hold (450ms)
    // 1750ms - 2500ms: Docking towards navbar position + background expansion
    // 2550ms: Complete and hand over to live navbar
    const assembleTimer = setTimeout(() => {
      setStage("assembled");
    }, 1300);

    const dockingTimer = setTimeout(() => {
      setStage("docking");
    }, 1750);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("zevats_intro_seen", "true");
      onComplete?.();
    }, 2550);

    return () => {
      clearTimeout(assembleTimer);
      clearTimeout(dockingTimer);
      clearTimeout(completeTimer);
    };
  }, [prefersReducedMotion, onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("zevats_intro_seen", "true");
    setIsVisible(false);
    onComplete?.();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="brand-intro"
          initial={{ opacity: 1 }}
          animate={{
            opacity: stage === "docking" ? 0 : 1,
            transition: { duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
          }}
          exit={{ opacity: 0 }}
          onClick={handleSkip}
          className="fixed inset-0 z-[100] bg-[var(--bg-primary)] select-none cursor-pointer overflow-hidden pointer-events-auto"
        >
          {/* Subtle architectural atmosphere */}
          <div className="absolute inset-0 bg-grid-architectural opacity-40 pointer-events-none" />

          {/* Central Diffused Ambient Purple Light Field that expands outward */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.2 }}
            animate={{
              scale: stage === "docking" ? 2.2 : stage === "assembled" ? 1.2 : 1,
              opacity: stage === "docking" ? 0 : 0.45,
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[340px] bg-zevats-purple/25 blur-[140px] rounded-full pointer-events-none"
          />

          {/* Floating Logo Container transitioning from Center to Navbar Position */}
          <motion.div
            initial={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              scale: 1,
            }}
            animate={
              stage === "docking"
                ? {
                    top: "32px",
                    left: "calc(max(24px, (100vw - 1280px) / 2 + 24px))",
                    x: "0%",
                    y: "0%",
                    scale: 0.45,
                    transition: {
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
                : {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    scale: 1,
                  }
            }
            className="absolute z-20 origin-top-left flex flex-col items-center justify-center"
          >
            <ZevatsLogo size="xl" animated={true} />

            {/* Subtle Brand Tenet - Fades out before docking */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: stage === "assembled" ? 1 : 0,
                y: stage === "assembled" ? 0 : 8,
              }}
              transition={{ duration: 0.35 }}
              className="mt-6 flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>Software & Digital Technology</span>
            </motion.div>
          </motion.div>

          {/* Skip cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === "docking" ? 0 : 0.6 }}
            className="absolute bottom-8 right-8 text-[11px] font-mono text-[var(--text-muted)] tracking-wider"
          >
            Click to enter ↵
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
