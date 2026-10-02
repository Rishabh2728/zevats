"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Sliders, ArrowRight, Layers, FileCheck, CheckCircle2, Shield, Database, Boxes } from "lucide-react";

export const CustomMotionPreview: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t1 = setTimeout(() => setActiveStage(1), 1800);
    const t2 = setTimeout(() => setActiveStage(2), 3600);

    const loop = setInterval(() => {
      setActiveStage(0);
      setTimeout(() => setActiveStage(1), 1800);
      setTimeout(() => setActiveStage(2), 3600);
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(loop);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-[400px] bg-[#FFFFFF] text-[#111111] border border-[rgba(17,17,17,0.1)] rounded-sm overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.03)] select-none text-left">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(17,17,17,0.08)] shrink-0">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-zevats-purple font-semibold block">
            Custom Business System
          </span>
          <h3 className="text-base font-semibold text-[#111111] tracking-tight">
            Order Routing &amp; Margin Calculation Engine
          </h3>
        </div>

        <div className="flex items-center space-x-2 text-[10.5px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[#111111] font-medium">Proprietary Business Logic</span>
        </div>
      </div>

      {/* Actual Software Interface Workspace */}
      <div className="my-auto py-2 space-y-3.5">
        
        {/* Order Details Context Bar */}
        <div className="p-3 bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] rounded-xs flex flex-wrap items-center justify-between text-xs gap-2">
          <div className="flex items-center space-x-3">
            <span className="text-[#686868]">Active Batch:</span>
            <span className="font-semibold text-[#111111]">#ORD-4092 (Meridian Corp)</span>
            <span className="px-2 py-0.5 rounded-xs bg-[#EAE6DE] text-[10px] text-[#111111] font-medium">
              3,200 Custom Units
            </span>
          </div>

          <div className="text-[11px] text-[#686868]">
            Rule Matrix: <span className="text-[#111111] font-medium">Bespoke Wholesale Tier</span>
          </div>
        </div>

        {/* 3 Step Interactive Workflow States */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Card 1: Inflow */}
          <div
            className={`p-3.5 rounded-xs border transition-all duration-300 space-y-2 ${
              activeStage >= 0
                ? "bg-[#FAF9F6] border-zevats-purple/50 shadow-xs"
                : "bg-white border-[rgba(17,17,17,0.08)]"
            }`}
          >
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zevats-purple font-semibold uppercase tracking-wider">1. Intake Data</span>
              <Check className="w-3 h-3 text-zevats-purple" />
            </div>
            <span className="text-xs font-semibold text-[#111111] block">Order Specifications</span>
            <div className="text-[10.5px] text-[#686868] space-y-0.5">
              <div className="flex justify-between">
                <span>Material:</span>
                <span className="text-[#111111] font-medium">Anodized Alloy</span>
              </div>
              <div className="flex justify-between">
                <span>Base Total:</span>
                <span className="text-[#111111] font-medium">$48,000.00</span>
              </div>
            </div>
          </div>

          {/* Card 2: Custom Business Logic */}
          <div
            className={`p-3.5 rounded-xs border transition-all duration-300 space-y-2 ${
              activeStage >= 1
                ? "bg-[#FAF9F6] border-zevats-purple shadow-sm"
                : "bg-white border-[rgba(17,17,17,0.08)] opacity-60"
            }`}
          >
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zevats-purple font-semibold uppercase tracking-wider">2. Tailored Logic</span>
              <Sliders className="w-3 h-3 text-zevats-purple" />
            </div>
            <span className="text-xs font-semibold text-[#111111] block">Margin Algorithm</span>
            <div className="text-[10.5px] text-[#686868] space-y-0.5">
              <div className="flex justify-between">
                <span>Volume Tier:</span>
                <span className="text-emerald-700 font-medium">12% Applied</span>
              </div>
              <div className="flex justify-between">
                <span>Locked Margin:</span>
                <span className="text-[#111111] font-semibold">32.4% Verified</span>
              </div>
            </div>
          </div>

          {/* Card 3: Execution & Dispatch */}
          <div
            className={`p-3.5 rounded-xs border transition-all duration-300 space-y-2 ${
              activeStage === 2
                ? "bg-[#FAF9F6] border-emerald-600 shadow-sm"
                : "bg-white border-[rgba(17,17,17,0.08)] opacity-60"
            }`}
          >
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-emerald-700 font-semibold uppercase tracking-wider">3. Automated Dispatch</span>
              {activeStage === 2 ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <FileCheck className="w-3 h-3 text-[#8A8A8A]" />
              )}
            </div>
            <span className="text-xs font-semibold text-[#111111] block">Floor Execution</span>
            <div className="text-[10.5px] text-[#686868] space-y-0.5">
              <div className="flex justify-between">
                <span>Bay Route:</span>
                <span className="text-[#111111] font-medium">Terminal Bay 3</span>
              </div>
              <div className="flex justify-between">
                <span>Invoice:</span>
                <span className={activeStage === 2 ? "text-emerald-700 font-semibold" : "text-[#8A8A8A]"}>
                  {activeStage === 2 ? "Sent to Accounting" : "Queued"}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Status Bar */}
      <div className="pt-3 border-t border-[rgba(17,17,17,0.08)] flex items-center justify-between text-[11px] text-[#686868] shrink-0">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
          <span>Workflow progressing: Order Specs → Formula Execution → Automated Dispatch</span>
        </div>
        <span className="text-[#111111] font-medium">100% Client IP Ownership</span>
      </div>
    </div>
  );
};
