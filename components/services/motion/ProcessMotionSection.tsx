"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProcessStage {
  id: string;
  name: string;
  oneLiner: string;
  detail: string;
}

const stages: ProcessStage[] = [
  {
    id: "understand",
    name: "Understand",
    oneLiner: "We learn how the business actually works.",
    detail:
      "We study your daily operations, interview your team, review manual workarounds, and map fragmented data flows before writing any code.",
  },
  {
    id: "shape",
    name: "Shape",
    oneLiner: "We define the products and workflows.",
    detail:
      "We establish system scope, data structure, domain models, and interactive user journeys into a clear, validated technical blueprint.",
  },
  {
    id: "build",
    name: "Build",
    oneLiner: "We design and engineer the software.",
    detail:
      "Clean TypeScript code, dependable relational databases, and intuitive interfaces with working demos delivered every single week.",
  },
  {
    id: "refine",
    name: "Refine",
    oneLiner: "We improve it through real use and feedback.",
    detail:
      "We deploy working software to your team, measure real operational feedback, and optimize features until the fit is seamless.",
  },
];

export const ProcessMotionSection: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const activeStage = stages[activeStageIdx];

  const progressPercent = (activeStageIdx / (stages.length - 1)) * 100;

  return (
    <section className="pt-14 sm:pt-18 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-20 max-w-[1400px] mx-auto w-full border-b border-[rgba(17,17,17,0.08)] relative">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-24">
        <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
          <span>Our Process</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#111111] leading-[1.05] mb-5">
          From idea to{" "}
          <span className="text-zevats-purple relative inline-block">
            software.
            <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/30" />
          </span>
        </h2>
        <p className="text-base sm:text-xl text-[#555555] font-normal leading-relaxed">
          A disciplined, collaborative process to turn business requirements into reliable software your team and customers can depend upon.
        </p>
      </div>

      {/* Desktop Horizontal Process Line */}
      <div className="hidden lg:block relative pt-6 pb-12">
        {/* Background Neutral Track */}
        <div className="absolute top-[35px] left-0 right-0 h-[2px] bg-[rgba(17,17,17,0.1)]" />

        {/* Dynamic Purple Progress Line */}
        <motion.div
          className="absolute top-[35px] left-0 h-[2px] bg-zevats-purple"
          initial={{ width: "0%" }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* 4 Interactive Stages */}
        <div className="grid grid-cols-4 gap-8 relative z-10">
          {stages.map((stage, idx) => {
            const isActive = activeStageIdx === idx;
            const isCompleted = activeStageIdx >= idx;

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStageIdx(idx)}
                onMouseEnter={() => setActiveStageIdx(idx)}
                className="cursor-pointer group select-none"
              >
                {/* Stage Node Point */}
                <div className="flex items-center mb-8">
                  <div
                    className={`w-4 h-4 rounded-full ring-4 ring-[#FAF9F6] transition-all duration-300 ${
                      isActive
                        ? "bg-zevats-purple scale-125"
                        : isCompleted
                        ? "bg-zevats-purple"
                        : "bg-[#DDDDDD] group-hover:bg-zevats-purple/60"
                    }`}
                  />
                </div>

                {/* Stage Title */}
                <h3
                  className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-200 mb-2 ${
                    isActive ? "text-[#111111]" : "text-[#777777] group-hover:text-[#333333]"
                  }`}
                >
                  {stage.name}
                  {isActive && <span className="text-zevats-purple ml-1">.</span>}
                </h3>

                {/* Stage One-Liner */}
                <p
                  className={`text-xs font-medium transition-colors duration-200 mb-3 ${
                    isActive ? "text-zevats-purple" : "text-[#888888]"
                  }`}
                >
                  {stage.oneLiner}
                </p>

                {/* Stage Detail */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed transition-colors duration-200 max-w-[260px] ${
                    isActive ? "text-[#222222] font-normal" : "text-[#888888]"
                  }`}
                >
                  {stage.detail}
                </p>

                {isActive && (
                  <motion.div
                    layoutId="active-process-line"
                    className="mt-4 w-12 h-[2px] bg-zevats-purple"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Connected Vertical Timeline */}
      <div className="lg:hidden relative pl-8 space-y-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[rgba(17,17,17,0.1)]" />

        <motion.div
          className="absolute left-[7px] top-2 w-[2px] bg-zevats-purple"
          initial={{ height: "0%" }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {stages.map((stage) => (
          <div key={stage.id} className="relative">
            <div className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full bg-zevats-purple ring-4 ring-[#FAF9F6]" />
            <h3 className="text-xl font-semibold text-[#111111] tracking-tight mb-1">
              {stage.name}
            </h3>
            <p className="text-xs font-medium text-zevats-purple mb-1.5">
              {stage.oneLiner}
            </p>
            <p className="text-sm text-[#555555] leading-relaxed">
              {stage.detail}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};
