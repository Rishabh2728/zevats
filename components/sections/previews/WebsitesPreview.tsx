"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Globe } from "lucide-react";

export const WebsitesPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[340px] bg-[#FAF9F6] border border-[rgba(17,17,17,0.12)] rounded-sm overflow-hidden flex flex-col shadow-[0_12px_36px_rgba(0,0,0,0.04)] select-none text-left"
    >
      {/* 1. Subtle Editorial Top Header / Browser Meta Bar */}
      <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-[rgba(17,17,17,0.08)] bg-[#F4F1EA]/80 backdrop-blur-xs text-[10px] shrink-0">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.22)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.22)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.22)]" />
          </div>
          <span className="text-[rgba(17,17,17,0.2)]">|</span>
          <div className="flex items-center space-x-1 font-mono text-[9px] text-[#686868] px-2 py-0.5 rounded-xs bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)]">
            <Globe className="w-2.5 h-2.5 text-zevats-purple/80" />
            <span>flagship.enterprise.co</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-[10px] text-[#686868] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="font-mono text-[9px]">HTTP/3 · 0.24s</span>
        </div>
      </div>

      {/* 2. Embedded Website Navigation */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-[rgba(17,17,17,0.06)] bg-[#FAF9F6] shrink-0">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-[12px] tracking-tight text-[#111111]">
            HORIZON
          </span>
          <span className="text-[8.5px] uppercase tracking-wider text-zevats-purple font-semibold px-1.5 py-0.5 bg-zevats-purple/10 rounded-xs">
            STUDIO
          </span>
        </div>

        <nav className="flex items-center space-x-3.5 text-[10px] text-[#686868] font-medium">
          <span className="hover:text-[#111111] transition-colors cursor-default">Capabilities</span>
          <span className="hover:text-[#111111] transition-colors cursor-default">Solutions</span>
          <span className="hover:text-[#111111] transition-colors cursor-default">About</span>
          <span className="inline-flex items-center space-x-0.5 text-[#111111] font-semibold bg-[#111111] text-[#FAF9F6] px-2 py-0.5 rounded-xs text-[9px]">
            <span>Inquire</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </span>
        </nav>
      </div>

      {/* 3. Scaled Editorial Hero & Content Body (Cropped below to evoke extended real webpage) */}
      <div className="flex-1 px-5 pt-3.5 pb-2 flex flex-col justify-between overflow-hidden relative">
        {/* Subtle grid watermark */}
        <div className="absolute inset-0 bg-grid-architectural opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-2">
          {/* Eyebrow */}
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
            <span className="text-[8.5px] uppercase tracking-[0.2em] font-semibold text-[#686868]">
              Digital Flagship Architecture
            </span>
          </div>

          {/* Hero Typography */}
          <h4 className="text-[17px] sm:text-[19px] font-semibold tracking-[-0.03em] text-[#111111] leading-[1.12] max-w-sm">
            Digital experiences designed to represent your{" "}
            <span className="text-zevats-purple italic font-serif">business</span> clearly.
          </h4>

          {/* Supporting paragraph */}
          <p className="text-[10px] text-[#686868] leading-relaxed max-w-xs font-normal line-clamp-2">
            Bespoke editorial layouts, headless content infrastructure, and sub-second performance built to convert authority into commercial results.
          </p>

          {/* Action Button Row */}
          <div className="flex items-center space-x-3 pt-0.5">
            <span className="px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#FAF9F6] bg-[#111111] rounded-xs shadow-xs inline-flex items-center space-x-1.5">
              <span>Explore Platform</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </span>
            <span className="text-[9.5px] text-[#111111] font-medium underline underline-offset-2">
              Review Case Study
            </span>
          </div>
        </div>

        {/* 4. Lower Sections Cropped at Bottom to show Real Page Continuation */}
        <div className="relative z-10 pt-3 border-t border-[rgba(17,17,17,0.08)] grid grid-cols-3 gap-2.5">
          <div className="p-2 bg-white border border-[rgba(17,17,17,0.08)] rounded-xs shadow-xs">
            <span className="text-[7.5px] uppercase tracking-wider text-[#686868] block">Typography</span>
            <span className="text-[10px] font-semibold text-[#111111] block mt-0.5 truncate">Custom Editorial</span>
            <div className="w-full h-1 bg-zevats-purple/20 rounded-full mt-1.5 overflow-hidden">
              <div className="w-3/4 h-full bg-zevats-purple rounded-full" />
            </div>
          </div>

          <div className="p-2 bg-white border border-[rgba(17,17,17,0.08)] rounded-xs shadow-xs">
            <span className="text-[7.5px] uppercase tracking-wider text-[#686868] block">Architecture</span>
            <span className="text-[10px] font-semibold text-[#111111] block mt-0.5 truncate">Headless CMS</span>
            <span className="text-[8px] text-emerald-600 block mt-1 font-mono">100% Static Edge</span>
          </div>

          <div className="p-2 bg-white border border-[rgba(17,17,17,0.08)] rounded-xs shadow-xs">
            <span className="text-[7.5px] uppercase tracking-wider text-[#686868] block">Speed Index</span>
            <span className="text-[10px] font-semibold text-[#111111] block mt-0.5 truncate">0.24s LCP</span>
            <span className="text-[8px] text-[#686868] block mt-1 font-mono">Zero Bloat</span>
          </div>
        </div>

        {/* Bottom Fade Gradient confirming real cropped continuation */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};
