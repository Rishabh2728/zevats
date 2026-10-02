"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export const AtmosphericBackground: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Scroll-driven modular transformations across page sections:
  // Hero (0 - 0.2): unified large modular form
  // Services (0.2 - 0.5): splits and expands into separated structural planes
  // Solutions (0.5 - 0.8): connects into an integrated matrix
  // Contact (0.8 - 1.0): converges tightly
  const module1Y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 120, -40, 60]);
  const module1Rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 6, -3]);
  const module1Scale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [1, 1.08, 0.94, 1.02]);

  const module2Y = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, -90, 80, -20]);
  const module2Rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 4, 12]);

  const module3Y = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 160, 20, 200]);
  const module3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.15, 0.98]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Subtle Film Grain Texture */}
      <div
        className="absolute inset-0 film-grain"
        style={{ opacity: "var(--grain-opacity)" }}
      />

      {/* 2. Architectural Coordinate Grid Lines */}
      <div className="absolute inset-0 bg-grid-architectural opacity-60 dark:opacity-40" />

      {/* 3. Diffused Ambient Atmosphere Fields (Quiet Technology Light) */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[680px] h-[680px] rounded-full blur-[170px] pointer-events-none transition-opacity duration-700"
        style={{
          backgroundColor: "#7B2CF6",
          opacity: "var(--ambient-purple-opacity)",
        }}
      />
      <div
        className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none transition-opacity duration-700"
        style={{
          backgroundColor: "#6B21DB",
          opacity: "calc(var(--ambient-purple-opacity) * 0.75)",
        }}
      />
      <div
        className="absolute top-[65%] right-[10%] w-[540px] h-[540px] rounded-full blur-[160px] pointer-events-none transition-opacity duration-700"
        style={{
          backgroundColor: "#9333EA",
          opacity: "calc(var(--ambient-purple-opacity) * 0.6)",
        }}
      />
      <div
        className="absolute -bottom-[10%] left-[20%] w-[720px] h-[520px] rounded-full blur-[190px] pointer-events-none transition-opacity duration-700"
        style={{
          backgroundColor: "#7B2CF6",
          opacity: "var(--ambient-purple-opacity)",
        }}
      />

      {/* 4. Large Translucent Modular Geometric Forms (Recurring Zevats Motif) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Linear Gradients for Translucent Modular Planes */}
          <linearGradient id="plane-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2CF6" stopOpacity="0.09" />
            <stop offset="60%" stopColor="#D8B4FE" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#7B2CF6" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="plane-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" stopOpacity="0.07" />
            <stop offset="70%" stopColor="#7B2CF6" stopOpacity="0.015" />
            <stop offset="100%" stopColor="#1B1625" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="line-stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D8B4FE" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#7B2CF6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D8B4FE" stopOpacity="0.02" />
          </linearGradient>
        </defs>
      </svg>

      {/* Module Group 1: Upper Right Architectural Ribbon / Block Structure */}
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : {
                y: module1Y,
                rotate: module1Rotate,
                scale: module1Scale,
              }
        }
        className="absolute -top-12 -right-24 md:right-[5%] w-[420px] md:w-[640px] h-[440px] md:h-[620px] pointer-events-none"
      >
        <svg viewBox="0 0 600 600" className="w-full h-full fill-none overflow-visible">
          {/* Main Translucent Modular Form */}
          <polygon
            points="120,40 540,80 480,480 80,420"
            fill="url(#plane-grad-1)"
            stroke="url(#line-stroke-grad)"
            strokeWidth="1"
            className="transition-colors duration-700"
          />
          {/* Sub-panel 1: Intersecting Architectural Facet */}
          <polygon
            points="200,90 510,130 430,360 140,310"
            fill="url(#plane-grad-2)"
            stroke="rgba(216, 180, 254, 0.12)"
            strokeWidth="0.75"
          />
          {/* Faint Projection Lines */}
          <line
            x1="120"
            y1="40"
            x2="40"
            y2="180"
            stroke="rgba(123, 44, 246, 0.16)"
            strokeWidth="0.75"
            strokeDasharray="4 8"
          />
          <line
            x1="480"
            y1="480"
            x2="560"
            y2="380"
            stroke="rgba(123, 44, 246, 0.16)"
            strokeWidth="0.75"
            strokeDasharray="4 8"
          />
          <circle cx="120" cy="40" r="2.5" fill="#D8B4FE" opacity="0.4" />
          <circle cx="540" cy="80" r="2.5" fill="#D8B4FE" opacity="0.4" />
          <circle cx="480" cy="480" r="2.5" fill="#7B2CF6" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Module Group 2: Mid-Left Floating Structural Plane (Divides in Services, Connects in Solutions) */}
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : {
                y: module2Y,
                rotate: module2Rotate,
              }
        }
        className="absolute top-[40%] -left-32 md:-left-12 w-[380px] md:w-[580px] h-[360px] md:h-[500px] pointer-events-none"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full fill-none overflow-visible">
          <polygon
            points="60,120 420,60 360,380 40,410"
            fill="url(#plane-grad-2)"
            stroke="rgba(216, 180, 254, 0.14)"
            strokeWidth="1"
          />
          <polygon
            points="140,160 460,110 390,320 90,350"
            stroke="rgba(123, 44, 246, 0.12)"
            strokeWidth="0.75"
            strokeDasharray="6 6"
          />

        </svg>
      </motion.div>

      {/* Module Group 3: Lower Converging Structural System */}
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : {
                y: module3Y,
                scale: module3Scale,
              }
        }
        className="absolute top-[75%] right-[2%] md:right-[12%] w-[420px] md:w-[560px] h-[400px] md:h-[480px] pointer-events-none"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full fill-none overflow-visible">
          <polygon
            points="80,80 460,120 380,420 40,360"
            fill="url(#plane-grad-1)"
            stroke="rgba(216, 180, 254, 0.12)"
            strokeWidth="0.75"
          />
          <line
            x1="80"
            y1="80"
            x2="380"
            y2="420"
            stroke="rgba(123, 44, 246, 0.1)"
            strokeWidth="0.5"
            strokeDasharray="3 6"
          />

        </svg>
      </motion.div>
    </div>
  );
};
