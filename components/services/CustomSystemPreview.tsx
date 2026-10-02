"use client";

import React from "react";
import { Check, Shield, ArrowRight } from "lucide-react";

interface CustomSystemPreviewProps {
  dark?: boolean;
}

export const CustomSystemPreview: React.FC<CustomSystemPreviewProps> = ({ dark = false }) => {
  return (
    <div
      className={`w-full rounded-sm p-6 sm:p-7 space-y-6 select-none text-left border transition-all duration-300 ${
        dark
          ? "bg-[#141418] text-[#FAF9F6] border-[rgba(255,255,255,0.08)] shadow-[0_12px_36px_rgba(0,0,0,0.3)]"
          : "bg-[#FFFFFF] text-[#111111] border-[rgba(17,17,17,0.08)] shadow-[0_12px_36px_rgba(0,0,0,0.02)]"
      }`}
    >
      {/* Console Top Header */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b gap-3 ${
          dark ? "border-[rgba(255,255,255,0.08)]" : "border-[rgba(17,17,17,0.08)]"
        }`}
      >
        <div>
          <span className="text-[10px] uppercase tracking-wider text-zevats-purple font-semibold block flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
            <span>Dedicated Internal System</span>
          </span>
          <h3 className={`text-base sm:text-lg font-semibold tracking-tight mt-0.5 ${dark ? "text-white" : "text-[#111111]"}`}>
            Proprietary Operations &amp; Supply Chain Engine
          </h3>
        </div>

        <div className={`flex items-center space-x-2 text-[10.5px] ${dark ? "text-[#999999]" : "text-[#686868]"}`}>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Tailored to Company Workflow</span>
        </div>
      </div>

      {/* 3 Step Connected Workflow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className={`p-4 rounded-xs space-y-2 border ${
            dark
              ? "bg-[#181820] border-[rgba(255,255,255,0.06)]"
              : "bg-[#FAF9F6] border-[rgba(17,17,17,0.08)]"
          }`}
        >
          <span className="text-[9.5px] uppercase tracking-wider text-zevats-purple font-semibold block">
            Step 1 · Ingestion
          </span>
          <span className={`text-xs font-semibold block ${dark ? "text-white" : "text-[#111111]"}`}>
            Legacy ERP Bridge
          </span>
          <p className={`text-[11px] leading-relaxed ${dark ? "text-[#888888]" : "text-[#686868]"}`}>
            Pulls legacy order files, external distributor feeds, and warehouse inventories into one clean, normalized system.
          </p>
        </div>

        <div
          className={`p-4 rounded-xs space-y-2 border ${
            dark
              ? "bg-[#1B1B26] border-zevats-purple shadow-[0_0_20px_-8px_rgba(123,44,246,0.4)]"
              : "bg-[#FAF9F6] border-zevats-purple/50 shadow-xs"
          }`}
        >
          <span className="text-[9.5px] uppercase tracking-wider text-purple-300 font-semibold block">
            Step 2 · Proprietary Logic
          </span>
          <span className={`text-xs font-semibold block ${dark ? "text-white" : "text-[#111111]"}`}>
            Custom Pricing Algorithm
          </span>
          <p className={`text-[11px] leading-relaxed ${dark ? "text-[#AAAAAA]" : "text-[#686868]"}`}>
            Evaluates multi-tier volume discounts, freight surcharges, and customer credit limits in milliseconds with zero manual math.
          </p>
        </div>

        <div
          className={`p-4 rounded-xs space-y-2 border ${
            dark
              ? "bg-[#181820] border-[rgba(255,255,255,0.06)]"
              : "bg-[#FAF9F6] border-[rgba(17,17,17,0.08)]"
          }`}
        >
          <span className={`text-[9.5px] uppercase tracking-wider font-semibold block ${dark ? "text-[#CCCCCC]" : "text-[#111111]"}`}>
            Step 3 · Automated Action
          </span>
          <span className={`text-xs font-semibold block ${dark ? "text-white" : "text-[#111111]"}`}>
            Dispatch &amp; Accounting
          </span>
          <p className={`text-[11px] leading-relaxed ${dark ? "text-[#888888]" : "text-[#686868]"}`}>
            Directly updates fulfillment floor queues, notifies field personnel, and pushes approved balances to bookkeeping.
          </p>
        </div>
      </div>

      {/* Bottom Guarantee Strip */}
      <div
        className={`pt-3 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
          dark ? "border-[rgba(255,255,255,0.08)] text-[#888888]" : "border-[rgba(17,17,17,0.08)] text-[#686868]"
        }`}
      >
        <div className="flex items-center space-x-2">
          <Check className="w-3.5 h-3.5 text-zevats-purple" />
          <span className={dark ? "text-[#CCCCCC]" : "text-[#111111]"}>
            No monthly per-user licensing fees · 100% Client IP Ownership
          </span>
        </div>
        <span className="font-medium text-zevats-purple">
          Replaces 4 disconnected software subscriptions
        </span>
      </div>
    </div>
  );
};
