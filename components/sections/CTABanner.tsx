"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const CTABanner: React.FC = () => {
  return (
    <section className="w-full relative py-14 sm:py-20 md:py-28 bg-[#111111] text-[#F4F1EA] overflow-hidden border-t border-[rgba(244,241,234,0.1)]">
      {/* Subtle Restrained Ambient Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zevats-purple/[0.08] blur-[120px] pointer-events-none rounded-full" />

      {/* Architectural grid background */}
      <div className="absolute inset-0 bg-grid-architectural-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 zevats-container max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <span className="text-xs uppercase tracking-[0.25em] text-zevats-purple font-medium block">
          Start a Conversation
        </span>

        {/* Closing Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.035em] text-[#F4F1EA] leading-[1.05]">
          Have something <br className="hidden sm:block" />
          <span className="text-zevats-purple relative inline-block">
            worth building?
            <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/40" />
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#A8A49E] max-w-xl mx-auto font-normal leading-relaxed">
          Tell us what you&apos;re trying to build, improve or automate. We&apos;ll review your requirements and engineer a clear path forward.
        </p>

        {/* Action CTAs: Stacked on mobile with generous margin, side-by-side on desktop */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto justify-center text-center px-6 sm:px-8 py-3.5 sm:py-4 text-xs uppercase tracking-wider font-semibold rounded-sm text-[#111111] bg-[#F4F1EA] hover:bg-zevats-purple hover:text-white transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_24px_rgba(123,44,246,0.35)] active:scale-[0.98] flex items-center space-x-2 group min-h-[46px] whitespace-nowrap"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/solutions"
            className="w-full sm:w-auto justify-center text-center px-6 sm:px-6 py-3.5 sm:py-4 text-xs uppercase tracking-wider font-semibold rounded-sm text-[#A8A49E] hover:text-[#F4F1EA] transition-colors flex items-center space-x-2 group min-h-[46px] border border-[rgba(244,241,234,0.15)] sm:border-transparent whitespace-nowrap"
          >
            <span>Explore solutions</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#686868] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Simple direct line */}
        <div className="pt-6">
          <a
            href="mailto:hello@zevats.com"
            className="text-xs font-mono text-[#686868] hover:text-zevats-purple transition-colors"
          >
            or reach out directly at hello@zevats.com
          </a>
        </div>
      </div>
    </section>
  );
};
