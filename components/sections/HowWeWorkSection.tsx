"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";

interface ProcessStage {
  id: "understand" | "design" | "build" | "launch" | "evolve";
  name: string;
  summary: string;
  narrative: string;
  deliverables: string[];
}

const stages: ProcessStage[] = [
  {
    id: "understand",
    name: "Understand",
    summary: "We learn how the business works.",
    narrative:
      "We interview key stakeholders, shadow daily team operations, and audit existing data flows before proposing architecture. We identify where manual friction lives, map technical dependencies, and define concrete commercial goals.",
    deliverables: [
      "Operational workflow audit",
      "Process & data flow mapping",
      "Technical constraint analysis",
      "Commercial success metrics",
    ],
  },
  {
    id: "design",
    name: "Design",
    summary: "We turn requirements into clear experiences.",
    narrative:
      "We design high-utility, intuitive interfaces focused on clarity, ergonomics, and speed. Every screen is designed to make work faster, eliminate cognitive clutter, and give users immediate confidence in what they are doing.",
    deliverables: [
      "Interactive UI/UX prototypes",
      "Design tokens & component library",
      "API contract specifications",
      "Responsive layout specifications",
    ],
  },
  {
    id: "build",
    name: "Build",
    summary: "We engineer the product with the right technology.",
    narrative:
      "Disciplined engineering by dedicated senior technologists. We write strictly typed code, enforce clean database schemas, and deploy weekly builds to a private staging environment so you can test features as they are built.",
    deliverables: [
      "Production-ready codebase",
      "Automated test coverage",
      "Third-party API integrations",
      "Weekly staging deployments",
    ],
  },
  {
    id: "launch",
    name: "Launch",
    summary: "We take it from development to production.",
    narrative:
      "Zero-downtime cutover, production server provisioning, automated deployment pipelines, and thorough documentation. We ensure your team is trained, supported, and confident on launch day.",
    deliverables: [
      "Cloud infrastructure provisioning",
      "Automated CI/CD deployment pipelines",
      "Operational alert monitoring",
      "Team training & documentation",
    ],
  },
  {
    id: "evolve",
    name: "Evolve",
    summary: "We continue improving as the business grows.",
    narrative:
      "Digital products are living assets. As real customers provide feedback and your business scales, we monitor performance, optimize database queries, and continuously engineer new capabilities.",
    deliverables: [
      "Continuous performance optimization",
      "Iterative roadmap feature updates",
      "Security & dependency maintenance",
      "Infrastructure scaling reviews",
    ],
  },
];

export const HowWeWorkSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>("understand");
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section className="w-full relative py-12 sm:py-16 md:py-24 bg-[#F4F1EA] border-t border-[rgba(17,17,17,0.08)]">
      <div className="zevats-container">
        {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-[rgba(17,17,17,0.08)]">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#686868] font-medium block mb-3">
            Delivery Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#111111]">
            How we work
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm sm:text-base md:text-lg text-[#686868] max-w-md font-normal leading-relaxed">
          From first requirements to long-term operations, our delivery process is structured, transparent, and direct.
        </p>
      </div>

      {/* Vertical Editorial Sequence with Interactive Left Controller */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Stage Selector List */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-[rgba(17,17,17,0.08)]">
          {stages.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <div
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`py-5 sm:py-6 cursor-pointer transition-all duration-300 group ${
                  isActive ? "opacity-100" : "opacity-55 hover:opacity-85"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 shrink-0 ${
                        isActive ? "bg-zevats-purple scale-100" : "bg-transparent scale-0"
                      }`}
                    />
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight transition-colors ${
                        isActive ? "text-[#111111]" : "text-[#111111] group-hover:text-zevats-purple"
                      }`}
                    >
                      {stage.name}
                    </h3>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 shrink-0 ${
                      isActive
                        ? "text-zevats-purple translate-x-1 opacity-100"
                        : "text-[#686868] opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </div>
                <p className="mt-2 text-sm text-[#686868] font-normal pl-5">
                  {stage.summary}
                </p>

                {/* Inline Stage Details on Mobile & Tablet (<lg) */}
                <ExpandablePanel isOpen={isActive} className="block lg:hidden pl-5 pt-4 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#686868] font-medium block">
                      In Practice
                    </span>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">
                      {stage.narrative}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#686868] font-medium block">
                      Tangible Deliverables
                    </span>
                    <ul className="space-y-2">
                      {stage.deliverables.map((del) => (
                        <li key={del} className="flex items-start space-x-2.5 text-xs text-[#111111]">
                          <Check className="w-3.5 h-3.5 text-zevats-purple shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ExpandablePanel>
              </div>
            );
          })}
        </div>

        {/* Right Column: Large Dynamic Editorial Showcase (Desktop only) */}
        <div className="hidden lg:block lg:col-span-7 sticky top-28">
          <div className="rounded-sm bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="border-b border-[rgba(17,17,17,0.08)] pb-5">
                  <span className="text-xs uppercase tracking-widest text-zevats-purple font-semibold block mb-2">
                    Phase Discipline
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-semibold text-[#111111] tracking-tight">
                    {activeStage.name}
                  </h3>
                  <p className="text-base text-[#686868] mt-1 font-medium">
                    {activeStage.summary}
                  </p>
                </div>

                {/* In Practice Narrative */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider text-[#686868] font-medium block">
                    How it happens in practice
                  </span>
                  <p className="text-base sm:text-lg text-[#111111]/85 leading-relaxed font-normal">
                    {activeStage.narrative}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-[rgba(17,17,17,0.08)] space-y-3">
                  <span className="text-xs uppercase tracking-wider text-[#686868] font-medium block">
                    Core Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStage.deliverables.map((d) => (
                      <div key={d} className="flex items-center space-x-2.5 text-sm text-[#111111]">
                        <div className="w-4 h-4 rounded-full bg-zevats-purple/15 text-zevats-purple flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transparency Commitment */}
                <div className="pt-4 border-t border-[rgba(17,17,17,0.08)] flex items-center justify-between text-xs text-[#686868]">
                  <span>Direct senior engineer access</span>
                  <span className="text-[#111111] font-medium">Weekly demo sprints</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
