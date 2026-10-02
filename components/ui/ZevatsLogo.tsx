"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface ZevatsLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  onAnimationComplete?: () => void;
  showSubtitle?: boolean;
  variant?: "ink" | "white" | "purple" | "auto";
}

const letterData = [
  { id: "z", src: "/brand/letter_z.png", width: 162, alt: "Z", delay: 0.08 },
  { id: "e", src: "/brand/letter_e.png", width: 148, alt: "E", delay: 0.20 },
  { id: "v", src: "/brand/letter_v.png", width: 145, alt: "V", delay: 0.32 },
  { id: "a", src: "/brand/letter_a.png", width: 155, alt: "A", delay: 0.44 },
  { id: "t", src: "/brand/letter_t.png", width: 145, alt: "T", delay: 0.56 },
  { id: "s", src: "/brand/letter_s.png", width: 165, alt: "S", delay: 0.68 },
];

export const ZevatsLogo: React.FC<ZevatsLogoProps> = ({
  className = "",
  size = "md",
  animated = false,
  onAnimationComplete,
  showSubtitle = true,
  variant = "auto",
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [animDone, setAnimDone] = useState(!animated || prefersReducedMotion);

  useEffect(() => {
    if (animated && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setAnimDone(true);
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [animated, prefersReducedMotion, onAnimationComplete]);

  // Size scale styles
  const sizeStyles = {
    sm: "w-[120px] h-auto",
    md: "w-[160px] md:w-[175px] h-auto",
    lg: "w-[240px] md:w-[280px] h-auto",
    xl: "w-[320px] md:w-[420px] h-auto",
  };

  const variantFilterClass =
    variant === "ink"
      ? "brightness-0 opacity-90"
      : variant === "white"
      ? "brightness-0 invert opacity-95"
      : variant === "purple"
      ? ""
      : "brightness-0 opacity-90 dark:brightness-0 dark:invert dark:opacity-95";

  // If static or animation finished, show authentic single asset
  if (!animated || animDone || prefersReducedMotion) {
    return (
      <div
        className={`relative inline-block select-none group transition-transform duration-300 ease-out hover:scale-[1.01] ${sizeStyles[size]} ${className}`}
      >
        <Image
          src="/brand/zevats-logo.png"
          alt="ZEVATS"
          width={920}
          height={195}
          priority
          className={`relative z-10 w-full h-auto object-contain transition-all duration-300 ${variantFilterClass}`}
        />
      </div>
    );
  }

  // Sequential letter animation: Z → E → V → A → T → S with zero borders or box outlines
  return (
    <div
      className={`relative inline-flex flex-col select-none ${sizeStyles[size]} ${className}`}
      style={{ aspectRatio: "920 / 195" }}
    >
      {/* Wordmark letter row (aspect ratio 920:125) */}
      <div className="relative w-full flex items-center justify-between" style={{ height: "64.1%" }}>
        {letterData.map((letter) => {
          const widthPercent = `${(letter.width / 920) * 100}%`;
          return (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 6, filter: "blur(4px)", scale: 0.97 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{
                duration: 0.38,
                delay: letter.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ width: widthPercent, height: "100%" }}
              className="relative flex items-center justify-center pointer-events-none"
            >
              <Image
                src={letter.src}
                alt={letter.alt}
                width={letter.width}
                height={125}
                priority
                className={`w-full h-full object-contain pointer-events-none transition-all duration-300 ${variantFilterClass}`}
              />
            </motion.div>
          );
        })}
      </div>

      {/* AI LABS Subtitle row (aspect ratio 920:70) */}
      {showSubtitle && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.45,
            delay: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full origin-center"
          style={{ height: "35.9%" }}
        >
          <Image
            src="/brand/logo_sub.png"
            alt="AI LABS"
            width={920}
            height={70}
            priority
            className={`w-full h-full object-contain pointer-events-none transition-all duration-300 ${variantFilterClass}`}
          />
        </motion.div>
      )}
    </div>
  );
};
