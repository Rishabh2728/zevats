"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AviPerspectiveBoardProps {
  className?: string;
}

export const AviPerspectiveBoard: React.FC<AviPerspectiveBoardProps> = ({ className = "" }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        perspective: "1200px",
      }}
    >
      {/* 3D Physical Presentation Board Container */}
      <motion.div
        initial={
          prefersReducedMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 22, rotateX: 6, rotateZ: -1.5, scale: 0.96 }
        }
        whileInView={
          prefersReducedMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: 0, rotateX: 1.5, rotateZ: 0, scale: 1 }
        }
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.75,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "bottom center",
          transform: "perspective(1200px) rotateY(-3.5deg) rotateX(1.5deg)",
        }}
        className="relative w-[225px] xs:w-[245px] sm:w-[285px] md:w-[320px] lg:w-[365px] xl:w-[415px] 2xl:w-[475px] pt-3 pb-2"
      >
        {/* Top Architectural Mounting Clamp */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <div className="w-9 sm:w-10 h-3 sm:h-3.5 bg-[#2D2D3D] border border-white/20 rounded-t-sm shadow-sm flex items-center justify-center space-x-1">
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="w-3.5 sm:w-4 h-[1.5px] bg-[#14141E] rounded-full" />
            <span className="w-1 h-1 rounded-full bg-white/40" />
          </div>
        </div>

        {/* The Physical Charcoal/Deep Graphite Board Slab - Lighter surface value creates crisp contrast against near-black AVI */}
        <div
          className="relative rounded-md overflow-hidden pt-5 sm:pt-6 lg:pt-6 xl:pt-7 pb-6 sm:pb-7 lg:pb-7 xl:pb-8 pl-14 pr-4 xs:pl-16 xs:pr-5 sm:pl-16 sm:pr-6 lg:pl-[105px] lg:pr-6 xl:pl-[120px] xl:pr-7 2xl:pl-[135px] 2xl:pr-8 border border-[rgba(255,255,255,0.18)] shadow-[0_22px_45px_-10px_rgba(12,12,18,0.38),0_4px_14px_rgba(12,12,18,0.2)] min-h-[160px] xs:min-h-[175px] sm:min-h-[195px] lg:min-h-[215px] xl:min-h-[235px] 2xl:min-h-[260px] flex flex-col justify-between"
          style={{
            background: "linear-gradient(150deg, #2A2A38 0%, #20202B 55%, #181822 100%)",
            boxShadow:
              "inset 0 1px 1.5px rgba(255, 255, 255, 0.28), inset 0 -2px 3px rgba(0, 0, 0, 0.6), 0 24px 48px -12px rgba(10, 10, 16, 0.38)",
          }}
        >
          {/* Top Edge Specular Studio Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          {/* Precision Machined Corner Titanium Rivets */}
          <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#343446] border border-white/25 shadow-inner flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-black/60" />
          </div>
          <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#343446] border border-white/25 shadow-inner flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-black/60" />
          </div>
          <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#343446] border border-white/25 shadow-inner flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-black/60" />
          </div>
          <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#343446] border border-white/25 shadow-inner flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-black/60" />
          </div>

          {/* Micro-textured background sheen */}
          <div
            className="absolute inset-0 opacity-[0.045] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#FFFFFF 1px, transparent 1px), radial-gradient(#FFFFFF 1px, #181822 1px)",
              backgroundSize: "16px 16px",
              backgroundPosition: "0 0, 8px 8px",
            }}
          />

          {/* Content: Animated Display Reveal Sequence */}
          <div className="relative z-10 flex flex-col justify-between my-auto">
            {/* 1. Small Label / Eyebrow: OUR PERSPECTIVE (Reveals first) */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-2 mb-2 sm:mb-3"
            >
              <motion.span
                initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
                whileInView={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="w-1.5 h-1.5 rounded-full bg-zevats-purple shrink-0"
              />
              <span className="text-[9.5px] xs:text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#C4B5FD] select-none">
                OUR PERSPECTIVE
              </span>
            </motion.div>

            {/* 2. Large Editorial Statement: Clarity over complexity. (Staggered line reveal) */}
            <h2 className="text-[19px] xs:text-[21px] sm:text-[25px] md:text-[28px] lg:text-[26px] xl:text-[30px] 2xl:text-[35px] font-semibold tracking-[-0.03em] text-[#FAF9F6] leading-[1.16] select-none pb-0.5">
              <motion.span
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.48, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Clarity over
              </motion.span>
              <motion.span
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.48, delay: 0.92, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[#FAF9F6]"
              >
                complexity.
              </motion.span>
            </h2>
          </div>
        </div>

        {/* Physical Easel Legs & Floor Support Stand */}
        <div className="relative w-full h-4 sm:h-5 pointer-events-none flex justify-between px-6 sm:px-10 -mt-0.5">
          {/* Left Easel Leg */}
          <div className="flex flex-col items-center">
            <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-[#282836] border-x border-white/15 shadow-sm" />
            <div className="w-3 sm:w-3.5 h-1 bg-[#0E0E14] rounded-full shadow-sm" />
          </div>

          {/* Center Rear Easel Strut (visible slightly behind) */}
          <div className="w-1.5 h-3 bg-[#1C1C26] border-x border-white/10 opacity-80" />

          {/* Right Easel Leg */}
          <div className="flex flex-col items-center">
            <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-[#282836] border-x border-white/15 shadow-sm" />
            <div className="w-3 sm:w-3.5 h-1 bg-[#0E0E14] rounded-full shadow-sm" />
          </div>
        </div>

        {/* Ground Plane Contact Occlusion Shadow */}
        <div className="w-full h-3 -mt-1 bg-gradient-to-r from-transparent via-[rgba(15,15,20,0.25)] to-transparent blur-[2.5px] pointer-events-none" />
      </motion.div>
    </div>
  );
};
