"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const AboutCTA: React.FC = () => {
  return (
    <section className="w-full relative py-16 sm:py-20 md:py-28 bg-[#FAF9F6] text-[#111111] overflow-hidden border-t border-[rgba(17,17,17,0.08)]">
      {/* Subtle Ambient Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zevats-purple/[0.04] blur-3xl pointer-events-none rounded-full" />

      <div className="zevats-container">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 relative z-10">
          {/* Large Heading with Purple Highlight on "fits." */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-[#111111] leading-[0.98]">
            Build something that{" "}
            <span className="text-zevats-purple relative inline-block">
              fits.
              {/* Subtle underline */}
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/40" />
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-2xl text-[#555555] max-w-2xl mx-auto font-normal leading-relaxed">
            Tell us what you are building, what is getting in the way, or where your current software falls short.
          </p>

          {/* Buttons with Established Interaction Styles */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-zevats-purple hover:shadow-[0_4px_24px_rgba(123,44,246,0.35)] px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm transition-all duration-200 group min-h-[46px] whitespace-nowrap"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-zevats-purple transition-colors duration-200 py-3.5 sm:py-4 px-6 sm:px-4 group min-h-[46px] border border-[rgba(17,17,17,0.15)] sm:border-transparent hover:border-zevats-purple/30 rounded-sm whitespace-nowrap"
            >
              <span>Explore what we build</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
