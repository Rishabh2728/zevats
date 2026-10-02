"use client";

import React from "react";
import { ArrowUpRight, Search, Check, ChevronRight } from "lucide-react";

export const HeroSoftwareVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16 select-none">
      {/* Background container frame with layered perspectives */}
      <div className="relative rounded-sm border border-[rgba(17,17,17,0.08)] bg-[#F4F1EA] p-4 sm:p-6 md:p-8 overflow-hidden">
        
        {/* Subtle decorative dot grid background */}
        <div className="absolute inset-0 bg-grid-architectural opacity-25 pointer-events-none" />

        {/* Multi-software composition */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* 1. Web Flagship Representation (Spanning 7 columns) */}
          <div className="md:col-span-7 bg-[#FFFFFF] rounded-sm border border-[rgba(17,17,17,0.08)] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
            {/* Browser chrome header */}
            <div className="px-3.5 py-2 border-b border-[rgba(17,17,17,0.06)] bg-[#FAF9F6] flex items-center justify-between text-[11px] text-[#686868]">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.18)]" />
                  <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.18)]" />
                  <span className="w-2 h-2 rounded-full bg-[rgba(17,17,17,0.18)]" />
                </div>
                <span className="text-[10px] text-[#8A8A8A] font-medium ml-1">acme.co</span>
              </div>
              <span className="text-[9.5px] uppercase tracking-wider text-[#8A8A8A]">Website</span>
            </div>

            {/* Content preview */}
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[rgba(17,17,17,0.06)] pb-3">
                <span className="font-semibold text-xs text-[#111111] tracking-tight">ACME STUDIO</span>
                <div className="flex items-center space-x-3 text-[10px] text-[#686868]">
                  <span>Work</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="space-y-2 py-2">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#111111] leading-tight">
                  Software designed with clarity and purpose.
                </h3>
                <p className="text-xs text-[#686868] max-w-sm leading-relaxed">
                  Elevated digital presence engineered to articulate what your business does without friction.
                </p>
              </div>

              <div className="pt-1 flex items-center justify-between">
                <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-[#111111] bg-[#FAF9F6] px-3 py-1.5 rounded-xs border border-[rgba(17,17,17,0.1)]">
                  <span>Explore products</span>
                  <ArrowUpRight className="w-3 h-3 text-zevats-purple" />
                </span>
                <span className="text-[10px] text-[#8A8A8A]">Desktop &amp; Mobile Ready</span>
              </div>
            </div>
          </div>

          {/* 2. Web App Workspace & Mobile Device Stack (Spanning 5 columns) */}
          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-4">
            
            {/* Operational Cloud Application snippet */}
            <div className="flex-1 bg-[#FFFFFF] text-[#111111] rounded-sm border border-[rgba(17,17,17,0.08)] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-3">
              <div className="flex items-center justify-between border-b border-[rgba(17,17,17,0.06)] pb-2 text-[10px]">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-[#111111]">Operations Console</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A]">Web Application</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#686868] text-[10px]">
                  <span>Active Workflows</span>
                  <span className="text-[#111111] font-mono font-medium">12 Live</span>
                </div>
                <div className="p-2 bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)] rounded-xs flex items-center justify-between text-[11px]">
                  <span className="text-[#111111] font-medium">Order Routing #402</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-xs bg-zevats-purple/10 text-zevats-purple font-medium">
                    Processed
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile App Screen snippet */}
            <div className="flex-1 bg-[#FFFFFF] rounded-sm border border-[rgba(17,17,17,0.08)] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-2.5">
              <div className="flex items-center justify-between text-[10px] border-b border-[rgba(17,17,17,0.06)] pb-2">
                <span className="font-medium text-[#111111]">Field App</span>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A]">iOS &amp; Android</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-xs bg-zevats-purple/10 text-zevats-purple flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5 truncate">
                  <span className="text-[11px] font-semibold text-[#111111] block leading-tight truncate">
                    Job site signature verified
                  </span>
                  <span className="text-[9.5px] text-[#686868] block">Synced to central database</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
