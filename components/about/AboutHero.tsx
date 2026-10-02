"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const AboutHero: React.FC = () => {
  return (
    <section className="w-full relative pt-6 sm:pt-8 md:pt-12 pb-14 sm:pb-20 md:pb-24 overflow-hidden">
      {/* Background Subtle Zevats Purple Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-zevats-purple/[0.07] via-zevats-purple/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />

      <div className="zevats-container">
        <div className="max-w-4xl relative z-10">
          {/* Eyebrow with Zevats Purple Accent Marker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
            <span>About Zevats</span>
          </motion.div>

          {/* Large Editorial Headline with Purple Focus */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-[#111111] leading-[0.98] mb-8"
          >
            We build software around{" "}
            <span className="text-zevats-purple relative inline-block">
              businesses.
              {/* Subtle architectural hairline under the purple focus word */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/30 origin-left"
              />
            </span>
          </motion.h1>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl md:text-[25px] text-[#4A4A4A] font-normal leading-[1.5] max-w-3xl mb-10"
          >
            Every business works differently. We design and build digital products around the way people actually work — from websites and applications to software that becomes part of the operation itself.
          </motion.p>

          {/* Action Links: Stacked & centered on mobile, side-by-side on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-6 pt-1 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-zevats-purple hover:shadow-[0_4px_20px_rgba(123,44,246,0.3)] px-6 py-3.5 rounded-sm transition-all duration-200 group min-h-[44px] whitespace-nowrap"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-zevats-purple transition-colors duration-200 py-3.5 px-6 sm:px-4 group min-h-[44px] border border-[rgba(17,17,17,0.12)] sm:border-transparent rounded-sm whitespace-nowrap"
            >
              <span>Explore what we build</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
