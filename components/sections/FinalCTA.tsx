"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquareCode, Clock } from "lucide-react";

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-28 md:py-44 bg-[#0D0B12] text-white overflow-hidden border-t border-[var(--border-subtle)]">
      {/* Controlled Ambient Purple Artwork radiating from behind the CTA (Section 19) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-r from-zevats-royal/30 via-zevats-purple/25 to-zevats-vibrant/25 blur-[150px] pointer-events-none" />

      {/* Subtle architectural grid pattern on dark background */}
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none" />

      {/* Geometric framing lines */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-zevats-purple/40 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-[#D8B4FE] font-semibold mb-6">
            Get Started
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.12] text-[#F7F4FC] max-w-3xl mx-auto">
            Have a problem worth building around?
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#B7B0C3] max-w-xl mx-auto font-normal">
            Tell us what you’re trying to build, automate or improve.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              data-cursor="cta"
              className="relative px-8 py-4 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all duration-300 bg-zevats-purple hover:bg-zevats-vibrant text-white shadow-[0_4px_28px_rgba(123,44,246,0.35)] hover:shadow-[0_6px_36px_rgba(123,44,246,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-3 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-light-sweep pointer-events-none" />
              <span className="relative z-10">Start a project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 relative z-10" />
            </button>
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-mono text-[#80798D]">
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#D8B4FE]" />
              <span>Response within 24 business hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquareCode className="w-3.5 h-3.5 text-[#D8B4FE]" />
              <span>Direct technical evaluation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
