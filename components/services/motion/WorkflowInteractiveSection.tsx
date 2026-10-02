"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, Sliders, Users, Database, ArrowRight, Check } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";

interface RealityConcept {
  id: number;
  label: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  assembledComponent: string;
}

const concepts: RealityConcept[] = [
  {
    id: 0,
    label: "Your workflow",
    tagline: "The daily steps of your operation",
    description:
      "The specific steps your team takes every day to deliver your products, fulfill client orders, and manage project lifecycles.",
    icon: <Layers className="w-4 h-4 text-zevats-purple" />,
    assembledComponent: "Step-by-step dispatch pipeline",
  },
  {
    id: 1,
    label: "Your rules",
    tagline: "The proprietary business logic",
    description:
      "The pricing formulas, approval chains, volume discounts, and compliance checks unique to your business.",
    icon: <Sliders className="w-4 h-4 text-zevats-purple" />,
    assembledComponent: "Automated calculation engine",
  },
  {
    id: 2,
    label: "Your users",
    tagline: "The people who run the system",
    description:
      "Your customers, operators, and staff who need clear, straightforward interfaces that eliminate friction.",
    icon: <Users className="w-4 h-4 text-zevats-purple" />,
    assembledComponent: "Role-tailored interfaces",
  },
  {
    id: 3,
    label: "Your systems",
    tagline: "The data already in place",
    description:
      "The databases, spreadsheets, accounting packages, and third-party tools your company already depends upon.",
    icon: <Database className="w-4 h-4 text-zevats-purple" />,
    assembledComponent: "Unified database & API bridge",
  },
];

export const WorkflowInteractiveSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % concepts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPaused]);

  const handleStepSelect = (id: number) => {
    setIsPaused(true);
    setActiveStep(id);
  };

  return (
    <section className="w-full relative py-14 sm:py-18 md:py-24 border-t border-[rgba(17,17,17,0.08)]">
      <div className="zevats-container">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
          <span>Operational Alignment</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#111111] leading-[1.05] mb-5">
          Built around the way you{" "}
          <span className="text-zevats-purple relative inline-block">
            work.
            <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/30" />
          </span>
        </h2>
        <p className="text-base sm:text-xl text-[#555555] font-normal leading-relaxed">
          Every business has its own processes, constraints and priorities. We design software around those realities instead of asking your team to change the way they work.
        </p>
      </div>

      {/* Interactive Assembly Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left Column: 4 Progressive Building Blocks */}
        <div className="lg:col-span-7 space-y-3.5">
          {concepts.map((concept) => {
            const isSelected = activeStep === concept.id;
            return (
              <div
                key={concept.id}
                onClick={() => handleStepSelect(concept.id)}
                onMouseEnter={() => handleStepSelect(concept.id)}
                className={`p-5 sm:p-6 rounded-sm border-t border-r border-b border-l-4 cursor-pointer text-left select-none relative transition-[background-color,border-color,opacity,box-shadow] duration-200 ${
                  isSelected
                    ? "bg-[#FFFFFF] border-t-zevats-purple/20 border-r-zevats-purple/20 border-b-zevats-purple/20 border-l-zevats-purple shadow-[0_4px_24px_rgba(123,44,246,0.1)] opacity-100"
                    : "bg-[#FFFFFF]/60 border-t-[rgba(17,17,17,0.08)] border-r-[rgba(17,17,17,0.08)] border-b-[rgba(17,17,17,0.08)] border-l-transparent hover:bg-[#FFFFFF] hover:border-l-zevats-purple/40 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-2.5 rounded-sm transition-colors duration-200 mt-0.5 shrink-0 ${
                        isSelected ? "bg-zevats-purple/15 text-zevats-purple" : "bg-[#F4F1EA] text-[#686868]"
                      }`}
                    >
                      {concept.icon}
                    </div>

                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-200 ${
                          isSelected ? "text-[#111111]" : "text-[#4A4A4A]"
                        }`}
                      >
                        {concept.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#686868] mt-0.5 font-normal">
                        {concept.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 shrink-0">
                    <span
                      className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isSelected
                          ? "bg-zevats-purple scale-125 shadow-[0_0_8px_rgba(123,44,246,0.8)]"
                          : "bg-[#DDDDDD]"
                      }`}
                    />
                  </div>
                </div>

                <ExpandablePanel isOpen={isSelected} className="pt-3.5 border-t border-[rgba(17,17,17,0.06)] mt-3">
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    {concept.description}
                  </p>
                </ExpandablePanel>
              </div>
            );
          })}
        </div>

        {/* Right Column: The Outcome ("One connected product" Assembling) */}
        <div className="lg:col-span-5 bg-[#0E0E10] text-[#FAF9F6] p-5 sm:p-7 md:p-9 rounded-sm border border-[rgba(255,255,255,0.08)] space-y-5 sm:space-y-6 shadow-[0_16px_40px_rgba(0,0,0,0.18)] sticky top-28">
          <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-3">
            <span className="text-xs uppercase tracking-[0.2em] text-zevats-purple font-semibold block flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
              <span>The Outcome</span>
            </span>
            <span className="text-[10.5px] text-[#888888]">Unified Architecture</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
              One connected product.
            </h3>
            <p className="text-sm text-[#999999] leading-relaxed">
              Instead of forcing your staff to navigate five disconnected software subscriptions, we bring your workflow, rules, users, and data into a single, dependable system.
            </p>
          </div>

          {/* Dynamic Layer Assembly Visualization */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] uppercase tracking-wider text-[#777777] block font-semibold">
              Assembled Operational Layers
            </span>
            {concepts.map((item) => {
              const isHighlighted = activeStep === item.id;
              return (
                <motion.div
                  key={item.id}
                  animate={{
                    backgroundColor: isHighlighted ? "#1B1B24" : "#121216",
                    borderColor: isHighlighted ? "rgba(123,44,246,0.6)" : "rgba(255,255,255,0.06)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-3 rounded-xs border flex items-center justify-between text-xs"
                >
                  <div className="flex items-center space-x-2.5">
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isHighlighted ? "bg-zevats-purple shadow-[0_0_8px_rgba(123,44,246,0.9)]" : "bg-[#444444]"
                      }`}
                    />
                    <span className={isHighlighted ? "text-white font-medium" : "text-[#999999]"}>
                      {item.label}
                    </span>
                  </div>
                  <span className={isHighlighted ? "text-purple-300 font-mono text-[11px]" : "text-[#666666] text-[11px]"}>
                    {item.assembledComponent}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[rgba(255,255,255,0.1)] flex items-center justify-between text-xs text-[#888888]">
            <span className="flex items-center space-x-1.5">
              <Check className="w-3.5 h-3.5 text-zevats-purple" />
              <span>Zero manual duplication</span>
            </span>
            <span className="text-white font-medium">Clarity across operations</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
