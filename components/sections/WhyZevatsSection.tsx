"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";

interface PhilosophyPrinciple {
  id: "business" | "simplicity" | "durability" | "collaboration";
  title: string;
  statement: string;
  narrative: string;
}

const principles: PhilosophyPrinciple[] = [
  {
    id: "business",
    title: "Business first",
    statement: "We understand the problem before choosing the technology.",
    narrative:
      "We analyze your business reality, commercial objectives, and existing team habits before selecting software frameworks or architectural patterns. Technology is chosen to serve the business, never the other way around.",
  },
  {
    id: "simplicity",
    title: "Simple experiences",
    statement: "Simplicity is the hardest part of software engineering.",
    narrative:
      "A system can have deep architectural sophistication under the hood, but the person using it should never feel overwhelmed by needless technical clutter. We engineer software to feel fast, effortless, and intuitive.",
  },
  {
    id: "durability",
    title: "Long-term thinking",
    statement: "Built for durability, not temporary technology hype.",
    narrative:
      "We choose established, battle-tested standards, strict typing, and clean relational schemas so your software remains reliable, secure, and maintainable for years without needing costly rewrites.",
  },
  {
    id: "collaboration",
    title: "Direct collaboration",
    statement: "You work directly with the senior engineers building your software.",
    narrative:
      "No middle managers, sales buffers, or junior handoffs. When you work with Zevats, you communicate directly with senior technologists who understand product design, systems architecture, and business goals.",
  },
];

export const WhyZevatsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("business");
  const activePrinciple = principles.find((p) => p.id === activeId) || principles[0];

  return (
    <section className="w-full relative py-12 sm:py-16 md:py-24 bg-[#111111] text-[#F4F1EA] overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-grid-architectural-dark opacity-30 pointer-events-none" />

      {/* Controlled subtle purple lighting depth */}
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-zevats-purple/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 zevats-container">
        {/* Section Header Statement */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-zevats-purple font-medium block mb-3 sm:mb-4">
            Working Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#F4F1EA] leading-[1.1]">
            Technology should make things clearer, not more complicated.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#A8A49E] leading-[1.65] font-normal">
            We reject unnecessary complexity and transient hype. We engineer dependable digital technology around genuine operational needs.
          </p>
        </div>

        {/* Principle Exploration: Interactive Selector & Large Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Selectable Principles */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {principles.map((principle) => {
              const isActive = principle.id === activeId;
              return (
                <div
                  key={principle.id}
                  onClick={() => setActiveId(principle.id)}
                  className={`p-4 sm:p-5 rounded-sm border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#1A1A1A] border-zevats-purple/60 text-[#F4F1EA]"
                      : "bg-transparent border-[rgba(244,241,234,0.08)] text-[#A8A49E] hover:text-[#F4F1EA] hover:border-[rgba(244,241,234,0.2)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-semibold tracking-tight">
                      {principle.title}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform shrink-0 ${
                        isActive ? "text-zevats-purple translate-x-1 opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Inline Details on Mobile & Tablet (<lg) */}
                  <ExpandablePanel isOpen={isActive} className="block lg:hidden pt-3 border-t border-[rgba(244,241,234,0.08)] mt-3 space-y-2">
                    <p className="text-sm font-medium text-[#FAF9F6] italic leading-snug">
                      &ldquo;{principle.statement}&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-[#A8A49E] leading-relaxed">
                      {principle.narrative}
                    </p>
                  </ExpandablePanel>
                </div>
              );
            })}
          </div>

          {/* Right Column: Expansive Editorial Principle Statement (Desktop only) */}
          <div className="hidden lg:block lg:col-span-8 bg-[#161616] p-8 sm:p-12 md:p-16 rounded-sm border border-[rgba(244,241,234,0.1)] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePrinciple.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                <span className="text-xs uppercase tracking-widest text-zevats-purple font-semibold block">
                  {activePrinciple.title}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F4F1EA] tracking-tight leading-[1.2]">
                  &ldquo;{activePrinciple.statement}&rdquo;
                </h3>

                <p className="text-base sm:text-lg text-[#A8A49E] leading-[1.7] font-normal pt-2">
                  {activePrinciple.narrative}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
