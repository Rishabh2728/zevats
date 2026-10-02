"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutWhoWeAre: React.FC = () => {
  return (
    <section className="w-full py-14 sm:py-18 md:py-24 border-t border-[rgba(17,17,17,0.08)] relative">
      <div className="zevats-container">
        {/* Eyebrow and Section Heading */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#111111] leading-[1.05]">
            Software should make the business{" "}
            <span className="text-zevats-purple">clearer.</span>
          </h2>
        </div>

        {/* Split Composition with Connected Visual Movement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">
          
          {/* Left Side: Visual Centerpiece — UNDERSTAND FIRST → BUILD SECOND */}
          <div className="lg:col-span-6 lg:pr-8 relative">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-zevats-purple/20">
              {/* Animated Purple Progress Line along the border */}
              <motion.div
                className="absolute left-[-2px] top-0 w-[2px] bg-zevats-purple shadow-[0_0_10px_rgba(123,44,246,0.5)] origin-top"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Step 1: Understand first */}
              <div className="relative mb-12 sm:mb-16">
                <span className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-[#111111] ring-4 ring-[#FAF9F6] border-2 border-zevats-purple" />
                <div className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#111111] leading-[1.08]">
                  Understand first.
                </div>
              </div>

              {/* Step 2: Build second */}
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-zevats-purple ring-4 ring-[#FAF9F6] shadow-[0_0_8px_rgba(123,44,246,0.6)]" />
                <div className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-zevats-purple leading-[1.08]">
                  Build second.
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Editorial Narrative */}
          <div className="lg:col-span-6 lg:pl-4 space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-normal">
            <p>
              Zevats is an independent software and technology company. We design and build digital products for businesses that need something more specific than an off-the-shelf tool can provide.
            </p>

            <p>
              We work across websites, web applications, mobile applications and custom software. The technology changes from project to project. The principle does not:{" "}
              <span className="text-[#111111] font-medium border-b border-zevats-purple/40 pb-0.5">
                understand the business first, then build around it.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
