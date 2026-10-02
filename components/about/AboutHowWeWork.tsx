"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProcessStage {
  id: string;
  name: string;
  description: string;
}

const stages: ProcessStage[] = [
  {
    id: "understand",
    name: "Understand",
    description: "We learn how the business works, where the friction is and what the software actually needs to solve.",
  },
  {
    id: "shape",
    name: "Shape",
    description: "We turn that understanding into a clear product direction, experience and technical foundation.",
  },
  {
    id: "build",
    name: "Build",
    description: "We design and engineer the software with the real users and workflows in mind.",
  },
  {
    id: "refine",
    name: "Refine",
    description: "We test, improve and evolve the product as people begin using it.",
  },
];

export const AboutHowWeWork: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const activeStage = stages[activeStageIdx];

  /* Calculate percentage for progress line based on activeStageIdx */
  const progressPercent = (activeStageIdx / (stages.length - 1)) * 100;

  return (
    <section className="w-full py-14 sm:py-18 md:py-24 border-t border-[rgba(17,17,17,0.08)] relative">
      <div className="zevats-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
          <span>How We Work</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#111111] leading-[1.05] mb-5">
          From idea to{" "}
          <span className="text-zevats-purple">software.</span>
        </h2>
        <p className="text-base sm:text-xl text-[#555555] font-normal leading-relaxed">
          We keep the process simple. Understand the problem, shape the solution, build it carefully, then improve it with real use.
        </p>
      </div>

      {/* Desktop Horizontal Process Line */}
      <div className="hidden lg:block relative pt-6 pb-12">
        {/* Background Neutral Track */}
        <div className="absolute top-[35px] left-0 right-0 h-[2px] bg-[rgba(17,17,17,0.1)]" />

        {/* Dynamic Purple Progress Line travelling across */}
        <motion.div
          className="absolute top-[35px] left-0 h-[2px] bg-zevats-purple shadow-[0_0_12px_rgba(123,44,246,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* 4 Interactive Connected Stages */}
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
                        ? "bg-zevats-purple scale-125 shadow-[0_0_12px_rgba(123,44,246,0.9)]"
                        : isCompleted
                        ? "bg-zevats-purple"
                        : "bg-[#DDDDDD] group-hover:bg-zevats-purple/60"
                    }`}
                  />
                </div>

                {/* Stage Title */}
                <h3
                  className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-200 mb-3 ${
                    isActive ? "text-[#111111]" : "text-[#777777] group-hover:text-[#333333]"
                  }`}
                >
                  {stage.name}
                  {isActive && <span className="text-zevats-purple ml-1">.</span>}
                </h3>

                {/* Stage Description */}
                <p
                  className={`text-sm leading-relaxed transition-colors duration-200 max-w-[260px] ${
                    isActive ? "text-[#222222] font-normal" : "text-[#888888]"
                  }`}
                >
                  {stage.description}
                </p>

                {isActive && (
                  <motion.div
                    layoutId="active-stage-line"
                    className="mt-4 w-12 h-[2px] bg-zevats-purple"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Connected Vertical Timeline */}
      <div className="lg:hidden relative pl-8 space-y-12">
        {/* Neutral Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[rgba(17,17,17,0.1)]" />

        {/* Dynamic Purple Line */}
        <motion.div
          className="absolute left-[7px] top-2 w-[2px] bg-zevats-purple"
          initial={{ height: "0%" }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {stages.map((stage, idx) => (
          <div key={stage.id} className="relative">
            <div className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full bg-zevats-purple ring-4 ring-[#FAF9F6]" />
            <h3 className="text-xl font-semibold text-[#111111] tracking-tight mb-2">
              {stage.name}
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
