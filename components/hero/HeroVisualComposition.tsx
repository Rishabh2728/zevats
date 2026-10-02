"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

export const HeroVisualComposition: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;
      smoothX.set(normX * 18);
      smoothY.set(normY * 18);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion, smoothX, smoothY]);

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1/1] max-w-[560px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Ambient directional lighting highlight */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-zevats-purple/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Structural Isometric Architectural Composition */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle drop shadow for paper-like layered elevation */}
          <filter id="slabShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="22"
              floodColor="#111111"
              floodOpacity="0.08"
            />
          </filter>
          <filter id="purpleGlow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="16"
              floodColor="#7B2CF6"
              floodOpacity="0.25"
            />
          </filter>
          <linearGradient id="purpleSlabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2CF6" />
            <stop offset="100%" stopColor="#5B0FA8" />
          </linearGradient>
          <linearGradient id="paperSlabGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF9F6" />
            <stop offset="100%" stopColor="#F4F1EA" />
          </linearGradient>
        </defs>

        {/* Layer 0: Orthographic Architectural Reference Grid Lines */}
        <g stroke="rgba(17, 17, 17, 0.09)" strokeWidth="1" strokeDasharray="3 6">
          <line x1="80" y1="180" x2="520" y2="180" />
          <line x1="80" y1="420" x2="520" y2="420" />
          <line x1="300" y1="60" x2="300" y2="540" />
          <line x1="160" y1="100" x2="480" y2="480" />
        </g>

        {/* Alignment Ticks */}
        <g stroke="rgba(17, 17, 17, 0.25)" strokeWidth="1.2">
          <line x1="75" y1="180" x2="85" y2="180" />
          <line x1="515" y1="180" x2="525" y2="180" />
          <line x1="300" y1="55" x2="300" y2="65" />
          <line x1="300" y1="535" x2="300" y2="545" />
        </g>

        {/* Layer 1: Deep Foundation Plane (Large Architectural Polygon) */}
        <motion.g
          style={prefersReducedMotion ? {} : { x: smoothX, y: smoothY }}
        >
          {/* Base Plane */}
          <polygon
            points="140,240 380,140 500,280 260,380"
            fill="url(#paperSlabGrad)"
            stroke="rgba(17, 17, 17, 0.15)"
            strokeWidth="1.2"
            filter="url(#slabShadow)"
          />
          {/* Base Plane internal coordinate grid */}
          <g stroke="rgba(17, 17, 17, 0.06)" strokeWidth="0.8">
            <line x1="200" y1="215" x2="320" y2="355" />
            <line x1="260" y1="190" x2="380" y2="330" />
            <line x1="320" y1="165" x2="440" y2="305" />
            <line x1="200" y1="305" x2="440" y2="205" />
          </g>
        </motion.g>

        {/* Layer 2: Intermediate Data/Software Plane (Offset Elevation) */}
        <motion.g
          style={
            prefersReducedMotion
              ? {}
              : {
                  x: smoothX,
                  y: smoothY,
                  transformOrigin: "center",
                }
          }
        >
          <polygon
            points="180,190 400,100 480,210 260,300"
            fill="#FFFFFF"
            stroke="#111111"
            strokeWidth="1.5"
            filter="url(#slabShadow)"
          />
          {/* Modular Wireframe Surface */}
          <rect
            x="240"
            y="170"
            width="120"
            height="50"
            transform="skewY(-16) rotate(-4)"
            fill="rgba(17, 17, 17, 0.03)"
            stroke="rgba(17, 17, 17, 0.12)"
            strokeWidth="1"
          />
          <line
            x1="220"
            y1="230"
            x2="380"
            y2="160"
            stroke="rgba(17, 17, 17, 0.18)"
            strokeWidth="1"
          />
          <circle cx="220" cy="230" r="3" fill="#111111" />
          <circle cx="380" cy="160" r="3" fill="#111111" />
        </motion.g>

        {/* Layer 3: Signature Zevats Purple Accent Prism (Hovering Physical Core) */}
        <motion.g
          style={
            prefersReducedMotion
              ? {}
              : {
                  x: smoothX,
                  y: smoothY,
                  transformOrigin: "320px 290px",
                }
          }
        >
          {/* Upper face of purple slab */}
          <polygon
            points="240,310 390,240 450,320 300,390"
            fill="url(#purpleSlabGrad)"
            filter="url(#purpleGlow)"
          />
          {/* Left depth bevel */}
          <polygon
            points="240,310 300,390 300,410 240,330"
            fill="#4C0D8C"
          />
          {/* Right depth bevel */}
          <polygon
            points="300,390 450,320 450,340 300,410"
            fill="#3B0970"
          />
          {/* Highlight line on top ridge */}
          <line
            x1="240"
            y1="310"
            x2="390"
            y2="240"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="1.5"
          />
        </motion.g>

        {/* Layer 4: Intersecting Vertical Glass Planes & Precision Markers */}
        <motion.g
          style={
            prefersReducedMotion
              ? {}
              : {
                  x: smoothX,
                  y: smoothY,
                }
          }
        >
          {/* Thin upright translucent plane */}
          <polygon
            points="330,110 370,90 370,300 330,320"
            fill="rgba(123, 44, 246, 0.08)"
            stroke="rgba(123, 44, 246, 0.35)"
            strokeWidth="1.2"
          />
          {/* Connected projection axis */}
          <line
            x1="350"
            y1="70"
            x2="350"
            y2="340"
            stroke="#7B2CF6"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <circle cx="350" cy="70" r="3" fill="#7B2CF6" />

          {/* Focal Crosshair Marker */}
          <g transform="translate(190, 360)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="rgba(17, 17, 17, 0.15)" strokeWidth="1" />
            <line x1="-18" y1="0" x2="18" y2="0" stroke="rgba(17, 17, 17, 0.3)" strokeWidth="1" />
            <line x1="0" y1="-18" x2="0" y2="18" stroke="rgba(17, 17, 17, 0.3)" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.5" fill="#111111" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};
