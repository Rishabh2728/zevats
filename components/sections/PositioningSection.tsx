"use client";

import React from "react";
import { motion } from "framer-motion";

export const PositioningSection: React.FC = () => {
  const line1 = ["Software", "is", "easy", "to", "build."];
  const line2 = ["Useful", "software", "is", "harder."];

  return (
    <section className="relative py-28 md:py-40 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] overflow-hidden transition-colors duration-500">
      {/* Background Architectural Watermark */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.025] dark:opacity-[0.035] text-[18vw] font-bold font-mono tracking-tighter text-[var(--text-primary)] transition-opacity duration-500">
        ZEVATS
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold mb-8 transition-colors duration-500"
          >
            Positioning & Perspective
          </motion.span>

          {/* Main Statement with word-by-word reveal */}
          <div className="space-y-2 md:space-y-4">
            {/* Line 1 */}
            <div className="flex flex-wrap gap-x-3 md:gap-x-4 text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight">
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.25, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="text-[var(--text-muted)] dark:text-[var(--text-secondary)] transition-colors duration-300"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Line 2 */}
            <div className="flex flex-wrap gap-x-3 md:gap-x-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              {line2.map((word, i) => {
                const isHarder = word.toLowerCase().includes("harder");
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0.2, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease: "easeOut" }}
                    className={
                      isHarder
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-zevats-purple to-zevats-deep dark:from-[#9333EA] dark:to-[#D8B4FE] font-bold"
                        : "text-[var(--text-primary)]"
                    }
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          </div>

          {/* Supporting Statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 md:mt-16 pt-8 border-t border-[var(--border-subtle)] max-w-2xl transition-colors duration-500"
          >
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
              Zevats combines product thinking, engineering and applied AI to build systems that
              solve actual business problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
