"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const WebsitesStudioPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[360px] bg-[#FAF9F6] border border-[rgba(17,17,17,0.1)] rounded-sm overflow-hidden flex flex-col shadow-[0_12px_36px_rgba(0,0,0,0.03)] select-none text-left"
    >
      {/* Browser address bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[rgba(17,17,17,0.06)] bg-[#F4F1EA]/70 text-[10px] shrink-0">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.2)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.2)]" />
            <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.2)]" />
          </div>
          <span className="text-[rgba(17,17,17,0.25)]">|</span>
          <span className="text-[#686868] font-medium text-[9.5px]">meridian.studio</span>
        </div>
        <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] font-medium">Digital Flagship</span>
      </div>

      {/* Embedded Website Navigation */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-[rgba(17,17,17,0.06)] bg-[#FAF9F6] shrink-0">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-xs tracking-tight text-[#111111]">
            MERIDIAN
          </span>
        </div>

        <nav className="flex items-center space-x-4 text-[10.5px] text-[#686868] font-medium">
          <span className="hover:text-[#111111] transition-colors">Work</span>
          <span className="hover:text-[#111111] transition-colors">Services</span>
          <span className="hover:text-[#111111] transition-colors">Studio</span>
          <span className="inline-flex items-center space-x-1 text-[#FAF9F6] bg-[#111111] px-2.5 py-1 rounded-xs text-[9.5px] font-semibold">
            <span>Contact</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </span>
        </nav>
      </div>

      {/* Website Body: Editorial Hero & Cropped Lower Content */}
      <div className="flex-1 px-6 pt-5 pb-2 flex flex-col justify-between overflow-hidden relative">
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zevats-purple block">
            Architectural Lighting &amp; Spatial Systems
          </span>

          <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#111111] leading-[1.08] max-w-md">
            Spaces designed for how life unfolds.
          </h3>

          <p className="text-xs sm:text-sm text-[#686868] max-w-sm leading-relaxed font-normal">
            We collaborate with developers and architects to build spaces with acoustic clarity, daylight precision, and enduring materials.
          </p>

          <div className="flex items-center space-x-4 pt-1">
            <span className="px-3.5 py-1.5 text-[10px] font-semibold text-[#FAF9F6] bg-[#111111] rounded-xs inline-flex items-center space-x-1.5">
              <span>View Selected Projects</span>
              <ArrowRight className="w-3 h-3" />
            </span>
            <span className="text-[11px] text-[#111111] font-medium underline underline-offset-2">
              Our Practice
            </span>
          </div>
        </div>

        {/* Lower section extending beyond the frame with subtle fade */}
        <div className="pt-4 border-t border-[rgba(17,17,17,0.06)] grid grid-cols-3 gap-3">
          <div className="p-3 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs">
            <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] block">Selected Work</span>
            <span className="text-[11px] font-semibold text-[#111111] block mt-1">Nordic Pavilion</span>
            <span className="text-[9.5px] text-[#686868] block mt-0.5">Oslo, Norway</span>
          </div>
          <div className="p-3 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs">
            <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] block">Selected Work</span>
            <span className="text-[11px] font-semibold text-[#111111] block mt-1">Kanso Gallery</span>
            <span className="text-[9.5px] text-[#686868] block mt-0.5">Kyoto, Japan</span>
          </div>
          <div className="p-3 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs">
            <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] block">Selected Work</span>
            <span className="text-[11px] font-semibold text-[#111111] block mt-1">Sora Residence</span>
            <span className="text-[9.5px] text-[#686868] block mt-0.5">Zurich, Switzerland</span>
          </div>
        </div>

        {/* Cropped continuation gradient */}
        <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};
