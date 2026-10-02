"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AviCharacter } from "./AviCharacter";
import { useAvi } from "./AviContext";

interface AviLauncherButtonProps {
  className?: string;
}

export const AviLauncherButton: React.FC<AviLauncherButtonProps> = ({ className = "" }) => {
  const { openChat, expression } = useAvi();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 select-none ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 14 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="relative flex items-center justify-center"
      >
        {/* Subtle Tooltip: "Talk to AVI" */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -6, scale: 0.95 }}
              animate={{ opacity: 1, x: -12, scale: 1 }}
              exit={{ opacity: 0, x: -4, scale: 0.95 }}
              transition={{ duration: 0.16 }}
              className="absolute right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#171720] text-[#F4F1EA] text-[11px] font-medium py-1.5 px-3 rounded-sm shadow-lg border border-[rgba(244,241,234,0.16)] pointer-events-none flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>Talk to AVI</span>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-y-3 border-y-transparent border-l-4 border-l-[#171720]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular Dock Capsule Button: Lighter dark graphite surface for clear silhouette contrast against near-black AVI */}
        <motion.button
          onClick={() => openChat()}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", damping: 20, stiffness: 320 }}
          aria-label="Talk to AVI"
          className="relative w-14 h-14 rounded-full border border-[rgba(255,255,255,0.20)] hover:border-zevats-purple/60 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-zevats-purple/50 overflow-visible transition-colors duration-200"
          style={{
            background: "linear-gradient(145deg, #3C3C4C 0%, #323240 55%, #292936 100%)",
            boxShadow:
              "inset 0 1px 1.5px rgba(255, 255, 255, 0.28), inset 0 -2px 4px rgba(0, 0, 0, 0.45), 0 10px 28px rgba(0, 0, 0, 0.38)",
          }}
        >
          {/* Concentric Soft Keylight behind AVI for crisp silhouette definition */}
          <div
            className="absolute inset-1 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 60%, transparent 100%)",
            }}
          />

          {/* Ambient Purple Glow on Hover */}
          <div
            className={`absolute inset-0 rounded-full bg-zevats-purple/20 blur-md transition-opacity duration-300 pointer-events-none ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* 42px Sitting AVI Character - Dark obsidian body sits clearly inside lighter graphite circle */}
          <div className="relative z-10 w-10 h-10 flex items-center justify-center">
            <AviCharacter
              size={42}
              expression={isHovered ? "happy" : expression}
              pose="sitting"
              isHovered={isHovered}
              lookDirection={isHovered ? { x: -0.3, y: -0.2 } : { x: 0, y: 0 }}
            />
          </div>

          {/* Status Indicator Dot (Active Online) */}
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#292936] shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
        </motion.button>
      </motion.div>
    </div>
  );
};
