"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="w-full relative pt-4 sm:pt-8 md:pt-10 pb-8 sm:pb-12 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-between">
      <div className="zevats-container flex-1 flex flex-col justify-between">
        {/* Hero grid: Editorial typography + large hero AVI character */}
        {/* On desktop & tablet: side-by-side balanced composition (col 1-7 typography & CTAs, col 8-12 large AVI character anchor) */}
        {/* On mobile: adapted vertical hierarchy with compact, integrated AVI character */}
        <div className="relative z-10 py-4 sm:py-8 md:py-12 lg:py-14 2xl:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-10 xl:gap-14 items-center my-auto">
          {/* Left Column: Headlines & Actions */}
          <div className="md:col-span-7 flex flex-col justify-center">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[36px] xs:text-[42px] sm:text-[56px] md:text-[68px] lg:text-[84px] xl:text-[90px] 2xl:text-[98px] 3xl:text-[104px] font-semibold tracking-[-0.035em] text-[#111111] leading-[0.98] max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl"
            >
              <span className="block">Software</span>
              <span className="block">built around</span>
              <span className="block text-zevats-purple">
                your business.
              </span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#686868] leading-[1.65] font-normal max-w-xl xl:max-w-2xl"
            >
              Websites, web applications, mobile apps and custom software — designed
              around the way your business actually works.
            </motion.p>

            {/* Action CTAs: Stacked & centered on mobile, side-by-side on desktop */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto justify-center text-center px-5 sm:px-7 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F4F1EA] bg-[#111111] hover:bg-zevats-purple hover:text-white transition-all duration-200 rounded-sm shadow-sm hover:shadow-[0_4px_20px_rgba(123,44,246,0.3)] active:scale-[0.99] flex items-center space-x-2 group min-h-[44px] whitespace-nowrap"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto justify-center text-center px-5 sm:px-5 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-zevats-purple transition-colors flex items-center space-x-2 group min-h-[44px] border border-[rgba(17,17,17,0.12)] sm:border-transparent rounded-sm whitespace-nowrap"
              >
                <span>Explore services</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#686868] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Character Anchor */}
          <div className="md:col-span-5 flex items-center justify-center my-3 sm:my-5 md:my-0">
            <div
              id="avi-hero-anchor"
              className="relative flex items-center justify-center w-full min-h-[195px] sm:min-h-[225px] md:min-h-[260px] lg:min-h-[340px] xl:min-h-[380px] 2xl:min-h-[420px] pointer-events-none"
            />
          </div>
        </div>

        {/* Capabilities Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative z-10 pt-5 sm:pt-6 border-t border-[rgba(17,17,17,0.08)] w-full"
        >
          {/* Mobile / Tablet: Precise 2-column aligned grid where every word starts from the exact same level */}
          <div className="grid grid-cols-2 lg:hidden gap-x-4 xs:gap-x-6 sm:gap-x-10 gap-y-2.5 sm:gap-y-3 text-[10.5px] xs:text-[11px] sm:text-xs uppercase tracking-wider text-[#686868] font-medium w-full">
            {[
              "Websites",
              "Web Apps & SaaS",
              "Mobile Applications",
              "Custom Software",
              "Applied AI",
              "Business Automation",
            ].map((item) => (
              <div key={item} className="flex items-center space-x-1.5 xs:space-x-2">
                <span className="text-[rgba(17,17,17,0.25)] select-none shrink-0 font-bold">·</span>
                <span className="hover:text-[#111111] transition-colors whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>

          {/* Desktop (lg+): Single continuous horizontal spread */}
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between text-xs uppercase tracking-wider text-[#686868] font-medium w-full">
            {[
              "Websites",
              "Web Apps & SaaS",
              "Mobile Applications",
              "Custom Software",
              "Applied AI",
              "Business Automation",
            ].map((item, idx, arr) => (
              <React.Fragment key={item}>
                <span className="hover:text-[#111111] transition-colors whitespace-nowrap">{item}</span>
                {idx < arr.length - 1 && (
                  <span className="text-[rgba(17,17,17,0.15)] select-none">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
