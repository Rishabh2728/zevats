"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const WebsitesMotionPreview: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [scrollStep, setScrollStep] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setScrollStep((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-[400px] bg-[#FAF9F6] border-l border-t sm:border border-[rgba(17,17,17,0.1)] overflow-hidden flex flex-col select-none text-left">
      {/* Living Browser Chrome */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-[rgba(17,17,17,0.08)] bg-[#F4F1EA]/80 backdrop-blur-xs text-[11px] shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="flex space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.25)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.25)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.25)]" />
          </div>
          <span className="text-[rgba(17,17,17,0.2)]">|</span>
          <span className="font-mono text-[10px] text-[#686868] font-medium tracking-tight">
            meridian-studio.co
          </span>
        </div>

        <div className="flex items-center space-x-2 text-[10px] text-[#686868]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium">Live Website</span>
        </div>
      </div>

      {/* Website Navigation */}
      <div className="flex items-center justify-between px-7 py-3.5 border-b border-[rgba(17,17,17,0.06)] bg-[#FAF9F6] shrink-0">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-xs tracking-tight text-[#111111]">
            MERIDIAN
          </span>
        </div>

        <nav className="flex items-center space-x-5 text-[11px] text-[#686868] font-medium">
          <span className="hover:text-[#111111] transition-colors cursor-default">Selected Work</span>
          <span className="hover:text-[#111111] transition-colors cursor-default">Practice</span>
          <span className="hover:text-[#111111] transition-colors cursor-default">Writing</span>
          <span className="inline-flex items-center space-x-1 text-[#FAF9F6] bg-[#111111] px-2.5 py-1 rounded-xs text-[10px] font-semibold">
            <span>Inquire</span>
            <ArrowUpRight className="w-3 h-3 text-zevats-purple" />
          </span>
        </nav>
      </div>

      {/* Animated Scroll Viewport */}
      <div className="flex-1 relative overflow-hidden">
        <motion.div
          animate={{
            y: prefersReducedMotion ? 0 : scrollStep === 1 ? -85 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="px-7 pt-6 pb-12 space-y-8"
        >
          {/* Section 1: Hero */}
          <div className="space-y-3.5 max-w-lg">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zevats-purple block">
              Spatial Architecture &amp; Materiality
            </span>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] leading-[1.08]">
              Spaces designed for how life unfolds.
            </h3>

            <p className="text-xs sm:text-sm text-[#686868] leading-relaxed font-normal">
              We collaborate with developers and architects to build spaces with acoustic clarity, daylight precision, and enduring materials.
            </p>

            <div className="flex items-center space-x-4 pt-1">
              <span className="px-4 py-2 text-[10.5px] font-semibold text-[#FAF9F6] bg-[#111111] rounded-xs inline-flex items-center space-x-2 shadow-xs">
                <span>View Selected Projects</span>
                <ArrowRight className="w-3 h-3 text-zevats-purple" />
              </span>
              <span className="text-xs text-[#111111] font-medium underline underline-offset-4">
                Our Practice
              </span>
            </div>
          </div>

          {/* Section 2: Selected Work (Slides into view during scroll) */}
          <div className="pt-6 border-t border-[rgba(17,17,17,0.08)] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#111111] uppercase tracking-wider text-[10px]">
                Featured Commissions
              </span>
              <span className="text-[#8A8A8A] text-[10.5px]">2024–2026 Archive</span>
            </div>

            <div className="grid grid-cols-3 gap-3.5">
              <div className="p-3 bg-[#FFFFFF] border border-[rgba(17,17,17,0.08)] rounded-xs space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-zevats-purple block font-medium">
                  Pavilion
                </span>
                <span className="text-xs font-semibold text-[#111111] block">Nordic Forum</span>
                <span className="text-[10px] text-[#8A8A8A] block">Oslo, Norway</span>
              </div>

              <div className="p-3 bg-[#FFFFFF] border border-[rgba(17,17,17,0.08)] rounded-xs space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-zevats-purple block font-medium">
                  Cultural
                </span>
                <span className="text-xs font-semibold text-[#111111] block">Kanso Gallery</span>
                <span className="text-[10px] text-[#8A8A8A] block">Kyoto, Japan</span>
              </div>

              <div className="p-3 bg-[#FFFFFF] border border-[rgba(17,17,17,0.08)] rounded-xs space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-zevats-purple block font-medium">
                  Residential
                </span>
                <span className="text-xs font-semibold text-[#111111] block">Sora Estate</span>
                <span className="text-[10px] text-[#8A8A8A] block">Zurich, Switzerland</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cropped Bottom Fade Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
      </div>

      {/* Living Preview Footer Bar */}
      <div className="px-5 py-2 border-t border-[rgba(17,17,17,0.08)] bg-[#F4F1EA]/60 flex items-center justify-between text-[10.5px] text-[#686868] shrink-0">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
          <span>Interactive website viewport · Automatic scroll progression</span>
        </div>
        <span className="font-mono text-[10px] text-[#8A8A8A]">
          {scrollStep === 0 ? "Hero view" : "Content reveal"}
        </span>
      </div>
    </div>
  );
};
