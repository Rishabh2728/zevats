"use client";

import React, { useState } from "react";

interface WorkingRelationshipStatement {
  id: string;
  title: string;
  statement: string;
}

const statements: WorkingRelationshipStatement[] = [
  {
    id: "collaboration",
    title: "Direct collaboration",
    statement: "You work with the people shaping and building the product.",
  },
  {
    id: "ownership",
    title: "Ownership",
    statement: "Your software is built as a long-term business asset, with access to the code and infrastructure.",
  },
  {
    id: "communication",
    title: "Clear communication",
    statement: "Decisions, progress and trade-offs stay visible throughout the project.",
  },
  {
    id: "long-term",
    title: "Long-term thinking",
    statement: "We consider how the product will be maintained, changed and expanded after launch.",
  },
];

export const AboutWorkWithYou: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("collaboration");

  return (
    <section className="w-full py-14 sm:py-18 md:py-24 border-t border-[rgba(17,17,17,0.08)]">
      <div className="zevats-container">
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
          <span>What Makes Zevats Different</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Large Editorial Statement */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#111111] leading-[1.05]">
            How we work with{" "}
            <span className="text-zevats-purple">you.</span>
          </h2>
          <p className="text-lg sm:text-2xl text-[#4A4A4A] font-normal leading-relaxed">
            We keep the relationship direct, the work visible and the software under your control.
          </p>
        </div>

        {/* Right Column: The 4 Points with Active Purple Dot Indicator */}
        <div className="lg:col-span-7 divide-y divide-[rgba(17,17,17,0.08)] border-t border-b border-[rgba(17,17,17,0.08)]">
          {statements.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                className={`py-8 sm:py-10 transition-all duration-300 cursor-pointer flex items-start space-x-5 sm:space-x-6 ${
                  isActive ? "bg-white/80 pl-4 sm:pl-6 -ml-4 sm:-ml-6 pr-4 rounded-sm" : "opacity-70 hover:opacity-100"
                }`}
              >
                {/* Active Purple Indicator Dot */}
                <div className="pt-2 shrink-0">
                  <span
                    className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-zevats-purple scale-125 shadow-[0_0_10px_rgba(123,44,246,0.8)]"
                        : "bg-[#CCCCCC]"
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <h3
                    className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-200 ${
                      isActive ? "text-[#111111]" : "text-[#555555]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-base sm:text-lg leading-relaxed transition-colors duration-200 ${
                      isActive ? "text-[#333333] font-normal" : "text-[#777777]"
                    }`}
                  >
                    {item.statement}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};
