"use client";

import React, { useState } from "react";
import { Sliders, GitBranch, ArrowRight, RefreshCw, Key, Check } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";

interface CustomCapability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metaphor: React.ReactNode;
}

const capabilities: CustomCapability[] = [
  {
    id: "logic",
    title: "Proprietary business logic",
    tagline: "Tailored algorithms that encode your competitive advantage",
    description:
      "We encode your specialized operational calculations, multi-tier volume discounts, freight rules, and compliance checks directly into software.",
    metaphor: (
      <div className="flex items-center justify-between text-xs font-mono text-[#888888] pt-3 border-t border-[rgba(255,255,255,0.08)]">
        <span>Rule calculation:</span>
        <span className="text-purple-300 font-semibold bg-zevats-purple/20 px-2 py-0.5 rounded-xs border border-zevats-purple/40">
          Tier Discount = 12% Volume Lock
        </span>
      </div>
    ),
  },
  {
    id: "workflows",
    title: "Custom workflows",
    tagline: "Software shaped around how your team handles orders and dispatches",
    description:
      "Build applications around the reality of your daily operations—handling exceptions, role-based handoffs, and multi-step reviews without rigid SaaS templates.",
    metaphor: (
      <div className="flex items-center space-x-2 text-[11px] pt-3 border-t border-[rgba(255,255,255,0.08)]">
        <span className="px-2 py-0.5 rounded-xs bg-[#1E1E28] text-white">Intake</span>
        <ArrowRight className="w-3 h-3 text-zevats-purple" />
        <span className="px-2 py-0.5 rounded-xs bg-zevats-purple/25 text-purple-200 font-semibold border border-zevats-purple/40">
          Custom Rules
        </span>
        <ArrowRight className="w-3 h-3 text-zevats-purple" />
        <span className="px-2 py-0.5 rounded-xs bg-emerald-950 text-emerald-300 font-semibold border border-emerald-800">
          Dispatched
        </span>
      </div>
    ),
  },
  {
    id: "apis",
    title: "Bespoke APIs & integrations",
    tagline: "Direct bridges between existing databases, ERPs, and carriers",
    description:
      "Seamlessly connect your internal operational tools with shipping carriers, accounting systems, payment gateways, and legacy databases.",
    metaphor: (
      <div className="flex items-center justify-between text-xs font-mono text-[#888888] pt-3 border-t border-[rgba(255,255,255,0.08)]">
        <span>Sync Protocol:</span>
        <span className="text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-xs">
          Bi-directional Webhook · 0ms Drift
        </span>
      </div>
    ),
  },
  {
    id: "modernization",
    title: "Legacy modernization",
    tagline: "Replace fragile spreadsheets without pausing daily business",
    description:
      "Gradually modernize fragile legacy databases and chaotic spreadsheet chains into resilient, web-accessible systems step-by-step with zero downtime.",
    metaphor: (
      <div className="flex items-center justify-between text-xs pt-3 border-t border-[rgba(255,255,255,0.08)]">
        <span className="line-through text-[#666666]">Outdated spreadsheet file</span>
        <span className="text-white font-semibold flex items-center space-x-1.5">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Modern Web System</span>
        </span>
      </div>
    ),
  },
  {
    id: "ownership",
    title: "Full client ownership",
    tagline: "100% sovereign intellectual property with zero per-user seat taxes",
    description:
      "You own all source code, database architectures, and digital assets. No vendor lock-in, no unpredictable tier upgrades, and complete operational independence.",
    metaphor: (
      <div className="flex flex-wrap items-center justify-between text-xs pt-3 border-t border-[rgba(255,255,255,0.08)] text-[#888888]">
        <span>Repository transfer: 100% Client Sovereign IP</span>
        <span className="font-semibold text-purple-300">Zero recurring seat fees</span>
      </div>
    ),
  },
];

export const CustomCapabilitiesInteractive: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("logic");

  return (
    <div className="space-y-3 pt-6">
      {capabilities.map((cap) => {
        const isActive = activeId === cap.id;
        return (
          <div
            key={cap.id}
            onClick={() => setActiveId(cap.id)}
            onMouseEnter={() => setActiveId(cap.id)}
            className={`p-5 sm:p-6 rounded-sm transition-all duration-300 cursor-pointer select-none border ${
              isActive
                ? "bg-[#181820] border-l-4 border-zevats-purple shadow-[0_0_30px_-10px_rgba(123,44,246,0.3)] border-r-[rgba(255,255,255,0.08)] border-t-[rgba(255,255,255,0.08)] border-b-[rgba(255,255,255,0.08)]"
                : "bg-[#111114]/50 border-l-2 border-[rgba(255,255,255,0.08)] hover:bg-[#15151A] opacity-65 hover:opacity-100"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3
                  className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#D0CFC8]"
                  }`}
                >
                  {cap.title}
                  {isActive && <span className="text-zevats-purple ml-1">.</span>}
                </h3>
                <p className={`text-xs sm:text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-purple-300" : "text-[#777777]"
                }`}>
                  {cap.tagline}
                </p>
              </div>

              <div className="pt-1 shrink-0">
                <span
                  className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-zevats-purple scale-125 shadow-[0_0_10px_rgba(123,44,246,0.9)]"
                      : "bg-[#444444]"
                  }`}
                />
              </div>
            </div>

            <ExpandablePanel isOpen={isActive} className="pt-3 space-y-3">
              <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
                {cap.description}
              </p>
              {cap.metaphor}
            </ExpandablePanel>
          </div>
        );
      })}
    </div>
  );
};
