"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface AiCapability {
  id: string;
  title: string;
  detail: string;
}

const aiCapabilities: AiCapability[] = [
  {
    id: "document",
    title: "Document intelligence",
    detail: "Turning unstructured information into useful business data.",
  },
  {
    id: "knowledge",
    title: "Knowledge & search",
    detail: "Making internal information easier to find and understand.",
  },
  {
    id: "workflow",
    title: "Workflow automation",
    detail: "Reducing repetitive operational work.",
  },
];

export const AboutTechAndAi: React.FC = () => {
  const [activeWordIdx, setActiveWordIdx] = useState<number>(0);
  const [activeCapId, setActiveCapId] = useState<string>("document");

  const words = [
    { name: "PERFORMANCE", note: "Sub-second response and fluid operational cadence" },
    { name: "RELIABILITY", note: "Resilient uptime through peak business hours" },
    { name: "MAINTAINABILITY", note: "Clean, transparent code that any team can operate" },
    { name: "FLEXIBILITY", note: "Modular architecture that grows with your business" },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-[#0E0E10] text-[#FAF9F6] relative overflow-hidden border-t border-[rgba(255,255,255,0.06)]">
      {/* Background Subtle Purple Glow */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-zevats-purple/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="zevats-container space-y-16 sm:space-y-20">
        
        {/* Technology Section */}
        <div>
          <div className="max-w-4xl mb-14 sm:mb-20">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#888888] font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>Technology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#FAF9F6] leading-[1.05] mb-6">
              Technology should serve the{" "}
              <span className="text-zevats-purple">product.</span>
            </h2>
            <p className="text-base sm:text-xl text-[#999999] max-w-2xl font-normal leading-relaxed">
              We choose technology according to the problem, the people using the system and the future the business is building toward.
            </p>
          </div>

          {/* Connected Typographic Composition with Purple Hairline */}
          <div className="relative pt-10 pb-6 border-t border-[rgba(255,255,255,0.1)]">
            {/* Fine Purple Axis connecting the 4 pillars */}
            <div className="hidden md:block absolute top-[48px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-zevats-purple/60 to-transparent z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {words.map((item, idx) => {
                const isActive = activeWordIdx === idx;
                return (
                  <div
                    key={item.name}
                    onClick={() => setActiveWordIdx(idx)}
                    onMouseEnter={() => setActiveWordIdx(idx)}
                    className="cursor-pointer group select-none transition-all duration-300"
                  >
                    {/* Visual Axis Indicator */}
                    <div className="hidden md:flex items-center mb-6">
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ring-4 ring-[#0E0E10] ${
                          isActive
                            ? "bg-zevats-purple scale-125 shadow-[0_0_12px_rgba(123,44,246,0.9)]"
                            : "bg-[#444444] group-hover:bg-zevats-purple/50"
                        }`}
                      />
                    </div>

                    <div
                      className={`text-xl sm:text-2xl md:text-2xl font-semibold tracking-tight transition-colors duration-200 mb-2 ${
                        isActive ? "text-white" : "text-[#888888] group-hover:text-[#CCCCCC]"
                      }`}
                    >
                      {item.name}
                      {isActive && <span className="text-zevats-purple ml-1">.</span>}
                    </div>

                    <p
                      className={`text-xs leading-relaxed transition-colors duration-200 ${
                        isActive ? "text-[#C8C5BD]" : "text-[#666666]"
                      }`}
                    >
                      {item.note}
                    </p>

                    {isActive && (
                      <motion.div
                        layoutId="active-tech-line"
                        className="mt-3 w-8 h-[2px] bg-zevats-purple"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Applied Intelligence Section */}
        <div className="pt-16 sm:pt-20 border-t border-[rgba(255,255,255,0.08)]">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#888888] font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>Applied Intelligence</span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#FAF9F6] leading-[1.08] mb-5">
              When intelligence helps, we build it{" "}
              <span className="text-zevats-purple">in.</span>
            </h3>
            <p className="text-base sm:text-lg text-[#999999] leading-relaxed font-normal">
              AI is useful when it removes repetitive work, makes information easier to access or helps people make better decisions. We use it where it has a practical role in the product.
            </p>
          </div>

          {/* Three Capabilities cleanly displayed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {aiCapabilities.map((cap) => {
              const isSelected = activeCapId === cap.id;
              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveCapId(cap.id)}
                  onMouseEnter={() => setActiveCapId(cap.id)}
                  className={`p-6 sm:p-7 rounded-sm transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#181820] border-l-2 border-zevats-purple shadow-[0_0_20px_-8px_rgba(123,44,246,0.3)]"
                      : "bg-[#121216]/60 border-l-2 border-[rgba(255,255,255,0.06)] hover:border-zevats-purple/50 hover:bg-[#15151B] opacity-75 hover:opacity-100"
                  }`}
                >
                  <h4
                    className={`text-xl sm:text-2xl font-semibold tracking-tight mb-2.5 transition-colors duration-200 ${
                      isSelected ? "text-white" : "text-[#D5D3CB]"
                    }`}
                  >
                    {cap.title}
                    {isSelected && <span className="text-zevats-purple ml-1">.</span>}
                  </h4>
                  <p className="text-sm text-[#999999] leading-relaxed font-normal">
                    {cap.detail}
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
