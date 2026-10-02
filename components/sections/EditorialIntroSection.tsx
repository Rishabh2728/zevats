"use client";

import React from "react";
import { motion } from "framer-motion";
import { AviPerspectiveBoard } from "./AviPerspectiveBoard";

export const EditorialIntroSection: React.FC = () => {
  return (
    <section className="w-full relative py-8 sm:py-12 md:py-20 lg:py-28 border-t border-[rgba(17,17,17,0.08)]">
      <div className="zevats-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 xl:gap-14 2xl:gap-20 items-start">
          {/* Left Column: AVI + Physical Presentation Board */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex flex-col justify-start">
            {/* Physical Presentation Stage: Art-directed composition of AVI presenting her board */}
            <div className="relative w-full max-w-[480px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[600px] min-h-[200px] xs:min-h-[220px] sm:min-h-[260px] lg:min-h-[290px] xl:min-h-[320px] 2xl:min-h-[360px] flex items-center justify-center sm:justify-start">
              {/* 1. Reserved Destination Anchor for AVI */}
              <div
                id="avi-perspective-anchor"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[95px] xs:w-[115px] sm:w-[135px] md:w-[145px] lg:w-[145px] xl:w-[165px] 2xl:w-[185px] h-[120px] xs:h-[140px] sm:h-[170px] md:h-[190px] lg:h-[190px] xl:h-[220px] 2xl:h-[250px] pointer-events-none z-20"
              />

              {/* 2. Physical Presentation Board (Presented by AVI as the visual focus) */}
              <div className="relative ml-[36px] xs:ml-[48px] sm:ml-[60px] md:ml-[65px] lg:ml-[50px] xl:ml-[60px] 2xl:ml-[75px] z-10 shrink-0">
                <AviPerspectiveBoard />
              </div>
            </div>
          </div>

          {/* Right Column: Statement & Editorial Narrative */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8 lg:pt-1 xl:pt-2 2xl:pt-4 lg:pl-2 xl:pl-6 2xl:pl-10">
            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-5xl 2xl:text-6xl font-semibold tracking-[-0.025em] text-[#111111] leading-[1.14] max-w-3xl 2xl:max-w-4xl"
            >
              Technology should fit the business — not the other way around.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 max-w-2xl 2xl:max-w-3xl space-y-5 sm:space-y-6"
            >
              <p className="text-base sm:text-lg md:text-xl text-[#686868] leading-[1.7] font-normal">
                Generic software and off-the-shelf templates force companies into rigid habits. We design and engineer digital products around the reality of your operations — how your customers interact, how your internal teams move data, and where your distinct commercial advantage lives.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#686868]/90 leading-[1.7] font-normal">
                From high-conversion websites to mission-critical SaaS platforms, native mobile applications, and custom operational tools, we build technology that feels natural to use and built to last.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
