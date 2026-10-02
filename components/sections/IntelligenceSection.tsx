"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ArrowUpRight, Check, Zap, Share2 } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";

interface ExtensionCapability {
  id: "ai" | "automation" | "integrations";
  title: string;
  role: string;
  description: string;
  useCases: string[];
  businessOutcome: string;
  icon: React.ReactNode;
}

const capabilities: ExtensionCapability[] = [
  {
    id: "ai",
    title: "AI & Machine Intelligence",
    role: "Intelligent Workflows & Document Processing",
    description:
      "We build applied machine intelligence into products where it genuinely saves human hours. Structured data extraction from messy documents, natural language query over proprietary repositories, and contextual in-app guidance.",
    useCases: [
      "Automated extraction from invoices, contracts, and PDFs",
      "Semantic search across internal databases and archives",
      "Assisted triaging for customer service and operational queues",
    ],
    businessOutcome: "Eliminates repetitive data-entry and manual search delays.",
    icon: <Sparkles className="w-5 h-5 text-zevats-purple" />,
  },
  {
    id: "automation",
    title: "Business Automation",
    role: "Event-Driven Background Execution",
    description:
      "Eliminating the manual copy-pasting, CSV exports, and email chasing that quietly slows businesses down. Scheduled workers, event triggers, and automated multi-step verification pipelines running quietly in the background.",
    useCases: [
      "Instant billing generation upon project milestone sign-off",
      "Automated status alerts and notifications across channels",
      "Validation rules preventing erroneous data entry",
    ],
    businessOutcome: "Replaces fragile manual handoffs with continuous 24/7 consistency.",
    icon: <Zap className="w-5 h-5 text-zevats-purple" />,
  },
  {
    id: "integrations",
    title: "APIs & System Integrations",
    role: "Synchronizing Disconnected Tools",
    description:
      "Connecting isolated commercial software into one unified operational loop. Bi-directional data synchronization between your custom application, CRM (HubSpot, Salesforce), ERPs, payment gateways (Stripe), and logistics services.",
    useCases: [
      "Bi-directional customer and invoice synchronization",
      "Webhook listeners for third-party status updates",
      "Consolidated multi-platform reporting feeds",
    ],
    businessOutcome: "Guarantees a single source of operational truth across all software.",
    icon: <Share2 className="w-5 h-5 text-zevats-purple" />,
  },
];

export const IntelligenceSection: React.FC = () => {
  const [activeCapId, setActiveCapId] = useState<"ai" | "automation" | "integrations">("ai");
  const activeCap = capabilities.find((c) => c.id === activeCapId) || capabilities[0];

  return (
    <section className="w-full relative py-12 sm:py-16 md:py-24 bg-[#111111] text-[#F4F1EA] overflow-hidden">
      {/* Subtle architectural grid lines on dark background */}
      <div className="absolute inset-0 bg-grid-architectural-dark opacity-40 pointer-events-none" />

      {/* Controlled subtle ambient purple depth */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-zevats-purple/[0.08] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 zevats-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-zevats-purple font-medium block mb-3 sm:mb-4">
            Capabilities & Extensions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#F4F1EA] leading-[1.08]">
            When software needs to do more.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#A8A49E] leading-[1.65] font-normal">
            AI, automation and integrations can extend the products we build — from intelligent workflows to business systems that connect the tools teams already use.
          </p>
        </div>

        {/* Asymmetrical Visual Composition: Selector on Left, Interactive Engine on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Interactive Capability Selection Strip */}
          <div className="lg:col-span-5 flex flex-col space-y-3 sm:space-y-4">
            {capabilities.map((cap) => {
              const isSelected = cap.id === activeCapId;
              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveCapId(cap.id)}
                  className={`p-5 sm:p-6 rounded-sm border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-[#1A1A1A] border-zevats-purple/60 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                      : "bg-[#141414] border-[rgba(244,241,234,0.08)] hover:border-[rgba(244,241,234,0.2)] opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#A8A49E]">
                      {cap.role}
                    </span>
                    <div className="flex items-center space-x-2">
                      {isSelected && <span className="w-2 h-2 rounded-full bg-zevats-purple shrink-0" />}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform shrink-0 ${
                          isSelected ? "text-zevats-purple translate-x-1" : "text-[#686868]"
                        }`}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#F4F1EA]">
                    {cap.title}
                  </h3>

                  {/* Inline Expanded Outcome on Mobile & Tablet (<lg) */}
                  <ExpandablePanel isOpen={isSelected} className="block lg:hidden pt-4 space-y-4 border-t border-[rgba(244,241,234,0.08)] mt-3">
                    <p className="text-sm text-[#A8A49E] leading-relaxed font-normal">
                      {cap.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] uppercase tracking-wider text-[#686868] font-medium block">
                        Typical Implementations
                      </span>
                      <ul className="space-y-2">
                        {cap.useCases.map((uc) => (
                          <li key={uc} className="flex items-start space-x-2.5 text-xs text-[#F4F1EA]/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple mt-1.5 shrink-0" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-sm bg-[#1C1C1C] border border-[rgba(244,241,234,0.08)] flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full bg-zevats-purple/20 text-zevats-purple flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#686868] block">
                          Verified Outcome
                        </span>
                        <span className="text-xs font-medium text-[#F4F1EA]">
                          {cap.businessOutcome}
                        </span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <Link
                        href={`/services#${cap.id}`}
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-zevats-purple hover:text-white transition-colors min-h-[44px]"
                      >
                        <span>Explore {cap.title} specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </ExpandablePanel>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Outcome Display (Desktop only) */}
          <div className="hidden lg:block lg:col-span-7 bg-[#161616] p-8 sm:p-12 rounded-sm border border-[rgba(244,241,234,0.1)] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCap.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-3 pb-4 border-b border-[rgba(244,241,234,0.08)]">
                  <div className="p-2.5 bg-[#202020] rounded-sm border border-[rgba(244,241,234,0.1)]">
                    {activeCap.icon}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-zevats-purple font-semibold block">
                      Extension Capability
                    </span>
                    <h4 className="text-2xl font-semibold text-[#F4F1EA] tracking-tight">
                      {activeCap.title}
                    </h4>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#A8A49E] leading-relaxed font-normal">
                  {activeCap.description}
                </p>

                {/* Practical Use Cases */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider text-[#686868] font-medium block">
                    Typical Implementations
                  </span>
                  <ul className="space-y-2.5">
                    {activeCap.useCases.map((uc) => (
                      <li key={uc} className="flex items-start space-x-3 text-sm text-[#F4F1EA]/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple mt-2 shrink-0" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tangible Business Outcome Banner */}
                <div className="p-4 rounded-sm bg-[#1C1C1C] border border-[rgba(244,241,234,0.08)] flex items-start space-x-3.5">
                  <div className="w-5 h-5 rounded-full bg-zevats-purple/20 text-zevats-purple flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#686868] block">
                      Verified Business Outcome
                    </span>
                    <span className="text-sm font-medium text-[#F4F1EA]">
                      {activeCap.businessOutcome}
                    </span>
                  </div>
                </div>

                {/* Subpage Link */}
                <div className="pt-2">
                  <Link
                    href={`/services#${activeCap.id}`}
                    className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-zevats-purple hover:text-white transition-colors"
                  >
                    <span>Explore {activeCap.title} specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
