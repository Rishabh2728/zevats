"use client";

import React, { useState } from "react";

interface BeliefItem {
  id: string;
  title: string;
  sentence: string;
}

const beliefs: BeliefItem[] = [
  {
    id: "clarity",
    title: "Clarity over complexity",
    sentence: "Build the simplest system that solves the problem completely.",
  },
  {
    id: "useful",
    title: "Useful over impressive",
    sentence: "Software should make real work easier, not simply look impressive in a presentation.",
  },
  {
    id: "people",
    title: "Built around people",
    sentence: "Interfaces should adapt to the people using them, not force people to adapt to the software.",
  },
  {
    id: "workflow",
    title: "Designed for real work",
    sentence: "Good software reflects how work actually happens — including exceptions, edge cases and imperfect situations.",
  },
  {
    id: "purpose",
    title: "Technology with purpose",
    sentence: "Choose technology for durability, performance and maintainability, not because it happens to be fashionable.",
  },
];

export const AboutBeliefs: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-[#0E0E10] text-[#FAF9F6] relative overflow-hidden border-t border-[rgba(255,255,255,0.06)]">
      {/* Background ambient Zevats purple glow on the right */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-zevats-purple/[0.08] blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="zevats-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Fixed / Sticky Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#888888] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>What We Believe</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#FAF9F6] leading-[1.04]">
              Good software should feel obvious once it{" "}
              <span className="text-zevats-purple">exists.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#999999] font-normal leading-relaxed">
              The best systems do not ask people to think about the software. They let people think about the work.
            </p>
          </div>

          {/* Right Column: Five Sequential Principles with Active Purple Accent */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 pt-4 lg:pt-0">
            {beliefs.map((belief, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={belief.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`p-6 sm:p-8 rounded-sm transition-all duration-300 cursor-pointer relative ${
                    isActive
                      ? "bg-[#16161A] border-l-4 border-zevats-purple shadow-[0_0_30px_-10px_rgba(123,44,246,0.3)]"
                      : "bg-[#111113]/40 hover:bg-[#141417] border-l-2 border-[rgba(255,255,255,0.08)] opacity-60 hover:opacity-90"
                  }`}
                >
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#D0CFC8]"
                  }`}>
                    {belief.title}
                  </h3>

                  <p className={`mt-3 text-base sm:text-lg leading-relaxed transition-colors duration-200 ${
                    isActive ? "text-[#E2DFD8]" : "text-[#777777]"
                  }`}>
                    {belief.sentence}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
