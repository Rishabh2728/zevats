"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Workflow, 
  ArrowRight, 
  Boxes, 
  Database
} from "lucide-react";

export const CustomSoftwarePreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[340px] bg-[#14141E] border border-[#282838] rounded-sm overflow-hidden flex flex-col justify-between p-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.08)] select-none text-left"
    >
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-architectural-dark opacity-35 pointer-events-none" />

      {/* 1. Header Bar: Architecture Type & IP Ownership */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-[#252536] shrink-0">
        <div className="flex items-center space-x-2">
          <Workflow className="w-3.5 h-3.5 text-zevats-purple" />
          <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#FAF9F6] font-semibold">
            Purpose-Built Operational Engine
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1 text-[8.5px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% Client IP Owned</span>
          </span>
        </div>
      </div>

      {/* 2. Structured Operational Workflow Pipeline */}
      <div className="relative z-10 my-auto py-1 flex items-center justify-between gap-2">

        {/* Node 1: Legacy Integration & Ingestion */}
        <div className="w-[130px] p-2.5 bg-[#1B1B28] border border-[#2A2A3C] rounded-xs space-y-1.5 shadow-xs shrink-0">
          <div className="flex items-center justify-between text-[7.5px] font-mono text-[#A8A49E]">
            <span className="text-zevats-purple font-semibold">01 INGESTION</span>
            <Database className="w-2.5 h-2.5" />
          </div>

          <span className="text-[10.5px] font-semibold text-white block leading-tight">
            Legacy ERP Streams
          </span>

          <p className="text-[8px] text-[#A8A49E] leading-relaxed">
            Direct SQL bridge &amp; telemetry normalization.
          </p>

          <div className="pt-1 flex items-center justify-between text-[7.5px] font-mono text-[#7A7A8A] border-t border-[#252538]">
            <span>Latency</span>
            <span className="text-emerald-400">4ms Ingress</span>
          </div>
        </div>

        {/* Pipeline Bridge 1 */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="w-5 h-[1.5px] bg-[#2E2E42] relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-ping" />
          </div>
          <ArrowRight className="w-3 h-3 text-zevats-purple/80 -mt-1.5" />
        </div>

        {/* Node 2: Central Proprietary Business Logic Engine - HERO NODE */}
        <div className="flex-1 p-2.5 bg-[#20202F] border-2 border-zevats-purple/70 rounded-xs space-y-1.5 shadow-[0_8px_24px_rgba(123,44,246,0.18)] relative">
          <div className="flex items-center justify-between text-[7.5px] font-mono">
            <span className="text-zevats-purple font-bold tracking-wider">02 PROPRIETARY LOGIC</span>
            <span className="bg-zevats-purple/20 text-purple-200 px-1 py-0.5 rounded-xs font-semibold">
              Tailored Rules
            </span>
          </div>

          <span className="text-[11px] font-bold text-white block leading-tight">
            Custom Pricing &amp; Margin Engine
          </span>

          {/* Code Execution Representation */}
          <div className="bg-[#12121B] rounded-xs p-1.5 border border-[#2C2C40] font-mono text-[7.5px] text-[#C4C0B8] space-y-0.5 leading-snug">
            <div className="text-[#7A7A8A]">Tailored operational calculations</div>
            <div>
              <span className="text-purple-400">const</span> margin = rule.<span className="text-emerald-400">evaluate</span>(tier, vol);
            </div>
            <div className="text-[#A8A49E]">dispatchQueue.<span className="text-blue-400">commit</span>(margin);</div>
          </div>

          <div className="flex items-center justify-between text-[7.5px] font-mono text-[#7A7A8A]">
            <span>Execution</span>
            <span className="text-white font-semibold">Zero-Vendor Limits</span>
          </div>
        </div>

        {/* Pipeline Bridge 2 */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="w-5 h-[1.5px] bg-[#2E2E42] relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
          </div>
          <ArrowRight className="w-3 h-3 text-zevats-purple/80 -mt-1.5" />
        </div>

        {/* Node 3: Purpose-Built Output System */}
        <div className="w-[125px] p-2.5 bg-[#1B1B28] border border-[#2A2A3C] rounded-xs space-y-1.5 shadow-xs shrink-0">
          <div className="flex items-center justify-between text-[7.5px] font-mono text-[#A8A49E]">
            <span className="text-zevats-purple font-semibold">03 DISPATCH</span>
            <Boxes className="w-2.5 h-2.5" />
          </div>

          <span className="text-[10.5px] font-semibold text-white block leading-tight">
            Operational App
          </span>

          <p className="text-[8px] text-[#A8A49E] leading-relaxed">
            Private tool with role permissions.
          </p>

          <div className="pt-1 flex items-center justify-between text-[7.5px] font-mono text-[#7A7A8A] border-t border-[#252538]">
            <span>Bespoke API</span>
            <span className="text-emerald-400">Live</span>
          </div>
        </div>

      </div>

      {/* 3. Bottom Architectural Details Ribbon */}
      <div className="relative z-10 pt-1.5 border-t border-[#252536] flex items-center justify-between text-[8px] font-mono text-[#8E8A82] shrink-0">
        <div className="flex items-center space-x-2">
          <span className="text-white">Architecture: Dedicated Private Cluster</span>
          <span>·</span>
          <span>Zero Vendor Lock-in</span>
        </div>
        <span className="text-zevats-purple font-medium">Bespoke REST &amp; Event Streams</span>
      </div>
    </motion.div>
  );
};
