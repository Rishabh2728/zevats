"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sliders, Layers, FileCheck } from "lucide-react";

export const CustomStudioPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[360px] bg-[#16161F] text-[#FAF9F6] border border-[#262635] rounded-sm overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] select-none text-left"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#262635] shrink-0">
        <div className="space-y-0.5">
          <span className="text-[9.5px] uppercase tracking-wider text-zevats-purple font-medium block">
            Bespoke Operating System
          </span>
          <span className="text-sm font-semibold text-white tracking-tight">
            Order Routing &amp; Margin Engine
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-xs bg-[#242433] text-emerald-400 font-medium border border-[#323246]">
          Live Operational System
        </span>
      </div>

      {/* Visual Business Workflow (Not a flowchart - realistic cards showing the progression) */}
      <div className="my-auto py-2 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
        
        {/* Step 1: Business Inflow */}
        <div className="p-3 bg-[#1F1F2B] border border-[#2E2E3E] rounded-xs space-y-2">
          <div className="flex items-center justify-between text-[9px] text-[#A8A49E]">
            <span className="text-zevats-purple font-semibold">1. INFLOW</span>
            <Layers className="w-3 h-3 text-[#A8A49E]" />
          </div>
          <span className="text-xs font-semibold text-white block">
            Commercial Order
          </span>
          <div className="text-[10px] text-[#A8A49E] space-y-0.5">
            <div className="flex justify-between">
              <span>Account:</span>
              <span className="text-white">Meridian Corp</span>
            </div>
            <div className="flex justify-between">
              <span>Units:</span>
              <span className="text-white">2,400 specialized</span>
            </div>
          </div>
        </div>

        {/* Step 2: Proprietary Rules */}
        <div className="p-3 bg-[#242434] border border-zevats-purple/50 rounded-xs space-y-2 shadow-xs">
          <div className="flex items-center justify-between text-[9px] text-zevats-purple font-medium">
            <span>2. CUSTOM LOGIC</span>
            <Sliders className="w-3 h-3" />
          </div>
          <span className="text-xs font-semibold text-white block">
            Pricing &amp; Margin Rules
          </span>
          <div className="text-[10px] text-[#A8A49E] space-y-0.5">
            <div className="flex justify-between">
              <span>Tier Discount:</span>
              <span className="text-emerald-400">12.5% applied</span>
            </div>
            <div className="flex justify-between">
              <span>Margin Target:</span>
              <span className="text-white">Protected (31.8%)</span>
            </div>
          </div>
        </div>

        {/* Step 3: Actionable Output */}
        <div className="p-3 bg-[#1F1F2B] border border-[#2E2E3E] rounded-xs space-y-2">
          <div className="flex items-center justify-between text-[9px] text-[#A8A49E]">
            <span className="text-emerald-400 font-semibold">3. EXECUTION</span>
            <FileCheck className="w-3 h-3 text-emerald-400" />
          </div>
          <span className="text-xs font-semibold text-white block">
            Automated Dispatch
          </span>
          <div className="text-[10px] text-[#A8A49E] space-y-0.5">
            <div className="flex justify-between">
              <span>Warehouse:</span>
              <span className="text-white">Allocated Bay 3</span>
            </div>
            <div className="flex justify-between">
              <span>Invoice:</span>
              <span className="text-emerald-400">Sent &amp; Logged</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Statement */}
      <div className="pt-3 border-t border-[#262635] flex items-center justify-between text-[11px] text-[#A8A49E]">
        <span>Built around your team&apos;s exact calculation rules</span>
        <span className="text-white font-medium">Zero vendor lock-in</span>
      </div>
    </motion.div>
  );
};
