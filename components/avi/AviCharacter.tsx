"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export type AviExpression =
  | "neutral"
  | "curious"
  | "happy"
  | "thinking"
  | "speaking"
  | "sleepy"
  | "excited"
  | "wink"
  | "watching"
  | "surprised"
  | "greeting";

export type AviPose = "standing" | "sitting" | "sleeping" | "floating";

interface AviCharacterProps {
  size?: number; // width in pixels (height is derived ~ 1.15 aspect ratio)
  expression?: AviExpression;
  pose?: AviPose;
  isWaving?: boolean;
  isPresenting?: boolean;
  lookDirection?: { x: number; y: number }; // normalized -1 to 1
  headRotation?: { x: number; y: number; z: number }; // 3D pitch (x), yaw (y), roll (z)
  eyeOffset?: { x: number; y: number }; // direct SVG unit offset for eye tracking (±12–18px range)
  isHovered?: boolean;
  className?: string;
}

export const AviCharacter: React.FC<AviCharacterProps> = ({
  size = 280,
  expression = "neutral",
  pose = "standing",
  isWaving = false,
  isPresenting = false,
  lookDirection = { x: 0, y: 0 },
  headRotation = { x: 0, y: 0, z: 0 },
  eyeOffset,
  isHovered = false,
  className = "",
}) => {
  // Eye pupil offset based on explicit eyeOffset (SVG units) or normalized lookDirection
  // In 200x230 SVG coordinate space: ±13.5 SVG units translates to ~19px when rendered at 280px size
  const rawEyeX = eyeOffset !== undefined ? eyeOffset.x : (lookDirection?.x || 0) * 13;
  const rawEyeY = eyeOffset !== undefined ? eyeOffset.y : (lookDirection?.y || 0) * 8.5;

  // Clamp within visor display safety bounds
  const clampedEyeX = Math.max(-14, Math.min(14, rawEyeX));
  const clampedEyeY = Math.max(-9, Math.min(9, rawEyeY));

  // 3D rotations for perspective head & torso counter-rotation
  const rotX = headRotation?.x || 0;
  const rotY = headRotation?.y || 0;
  const rotZ = headRotation?.z || 0;

  // Parallax shift from head depth (eyes are recessed behind visor glass)
  const parallaxX = rotY * 0.35;
  const parallaxY = rotX * 0.25;

  // Organic slight difference between left and right eyes so tracking does not look mechanically rigid
  const leftEyeX = 75 + clampedEyeX * 1.03 + parallaxX;
  const leftEyeY = 50 + clampedEyeY * 0.98 + parallaxY;
  const rightEyeX = 125 + clampedEyeX * 0.97 + parallaxX;
  const rightEyeY = 50 + clampedEyeY * 1.02 + parallaxY;

  // Occasional natural blink (every 4.5 - 7.5 seconds)
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let blinkTimer: NodeJS.Timeout;
    const scheduleBlink = () => {
      const delay = Math.floor(Math.random() * 3200) + 4000;
      blinkTimer = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, 130);
      }, delay);
    };

    scheduleBlink();
    return () => clearTimeout(blinkTimer);
  }, []);

  return (
    <div
      style={{
        width: size,
        height: size * 1.15,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={`relative select-none flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 200 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        style={{
          filter: "drop-shadow(0 18px 36px rgba(17,17,20,0.22))",
        }}
      >
        <defs>
          {/* 1. Volumetric Graphite Head Shell (Curved 3D Studio Specular Lighting) */}
          <radialGradient id="avi-head-specular" cx="35%" cy="25%" r="65%" fx="30%" fy="20%">
            <stop offset="0%" stopColor="#3C3C4A" />
            <stop offset="35%" stopColor="#272732" />
            <stop offset="70%" stopColor="#191920" />
            <stop offset="100%" stopColor="#0F0F14" />
          </radialGradient>

          {/* 2. Volumetric Graphite Torso Shell */}
          <radialGradient id="avi-torso-specular" cx="40%" cy="30%" r="70%" fx="35%" fy="25%">
            <stop offset="0%" stopColor="#343440" />
            <stop offset="45%" stopColor="#23232C" />
            <stop offset="85%" stopColor="#16161D" />
            <stop offset="100%" stopColor="#0E0E12" />
          </radialGradient>

          {/* 3. Subtle Metallic Rim Lighting Gradient */}
          <linearGradient id="avi-rim-light" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.36)" />
            <stop offset="35%" stopColor="rgba(210,210,230,0.18)" />
            <stop offset="80%" stopColor="rgba(123,44,246,0.26)" />
            <stop offset="100%" stopColor="rgba(20,20,24,0.45)" />
          </linearGradient>

          {/* 4. Deep Recessed OLED Visor Aperture */}
          <linearGradient id="avi-visor-recess" x1="50" y1="32" x2="150" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#060608" />
            <stop offset="50%" stopColor="#0A0A0D" />
            <stop offset="100%" stopColor="#131319" />
          </linearGradient>

          {/* 5. Curved Visor Glass Fresnel Glow */}
          <linearGradient id="avi-visor-glass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="15%" stopColor="rgba(255,255,255,0.07)" />
            <stop offset="70%" stopColor="rgba(123,44,246,0.06)" />
            <stop offset="100%" stopColor="rgba(123,44,246,0.16)" />
          </linearGradient>

          {/* 6. Zevats Purple Luminous Core Gradient */}
          <linearGradient id="avi-purple-radiant" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B366FF" />
            <stop offset="45%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#7B2CF6" />
          </linearGradient>

          {/* 7. Soft Ground Ambient Shadow */}
          <filter id="avi-ground-blur" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>
        </defs>

        {/* --- 1. PHYSICAL GROUND CONTACT SHADOWS --- */}
        {/* Broad soft ambient occlusion shadow */}
        <ellipse
          cx="100"
          cy="216"
          rx={isHovered ? 52 : 60}
          ry="8"
          fill="rgba(14, 14, 18, 0.18)"
          filter="url(#avi-ground-blur)"
        />
        {/* Core tight contact shadow directly beneath pedestal */}
        <ellipse
          cx="100"
          cy="215"
          rx={isHovered ? 30 : 38}
          ry="4"
          fill="rgba(10, 10, 14, 0.36)"
        />

        {/* --- 2. MAIN 3D CHARACTER BODY RIG --- */}
        <motion.g
          animate={
            isHovered
              ? {
                  y: -6,
                }
              : {
                  y: [0, -5, 0],
                }
          }
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: "100px", originY: "140px" }}
        >
          {/* --- BASE / MAGNETIC PEDESTAL --- */}
          <g id="avi-base">
            {/* Pedestal rim bevel */}
            <path
              d="M74 180 C74 175 79 171 85 171 H115 C121 171 126 175 126 180 V186 C126 192 120 196 114 196 H86 C80 196 74 192 74 186 Z"
              fill="#181820"
              stroke="url(#avi-rim-light)"
              strokeWidth="1.2"
            />
            {/* Luminous micro propulsion strip */}
            <rect
              x="87"
              y="194.5"
              width="26"
              height="3"
              rx="1.5"
              fill="url(#avi-purple-radiant)"
              opacity="0.9"
            />
            {/* Micro thruster ambient glow */}
            <ellipse
              cx="100"
              cy="196"
              rx="15"
              ry="4.5"
              fill="#7B2CF6"
              opacity="0.36"
              filter="blur(3px)"
            />
          </g>

          {/* --- 3D TORSO RIG WITH ORGANIC COUNTER-ROTATION --- */}
          {/* Subtle counter-rotation when head turns creates natural 3D biomechanics */}
          <motion.g
            id="avi-torso-rig"
            animate={{
              rotateY: -rotY * 0.12,
              rotateX: -rotX * 0.08,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ originX: "100px", originY: "140px" }}
          >
            {/* LEFT ARM (Volumetric, resting at flank) */}
            <g id="avi-arm-left">
              {/* Arm shadow on body */}
              <path
                d="M48 116 C42 121 38 131 40 144 C41 152 46 158 52 160"
                stroke="rgba(10,10,14,0.4)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              {/* Arm geometry with specular contour */}
              <motion.path
                d="M47 116 C40 122 36 132 38 144 C39 152 44 158 50 160 C53 161 56 158 55 153 C54 144 56 135 60 128"
                fill="#202028"
                stroke="url(#avi-rim-light)"
                strokeWidth="1.4"
                strokeLinecap="round"
                animate={{
                  rotate: isHovered ? -4 : [0, -2.5, 0],
                }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Shoulder joint with metallic cap */}
              <circle cx="55" cy="116" r="4.5" fill="#2E2E38" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <circle cx="54" cy="115" r="1.5" fill="rgba(255,255,255,0.4)" />
            </g>

            {/* TORSO VOLUME */}
            <g id="avi-torso-volume">
              {/* Outer volumetric shell */}
              <path
                d="M56 112 C56 102 65 94 76 94 H124 C135 94 144 102 144 112 V160 C144 170 136 178 126 178 H74 C64 178 56 170 56 160 Z"
                fill="url(#avi-torso-specular)"
                stroke="url(#avi-rim-light)"
                strokeWidth="1.6"
              />

              {/* Top ambient highlight on shoulder plate */}
              <path
                d="M62 108 C68 98 76 96 100 96 C124 96 132 98 138 108"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Chest Inset Architectural Panel */}
              <path
                d="M67 108 C67 102 72 98 78 98 H122 C128 98 133 102 133 108 V154 C133 162 127 168 119 168 H81 C73 168 67 162 67 154 Z"
                fill="#181820"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.2"
              />

              {/* Chest Monogram: Etched Zevats Geometric Chevron with Glowing Jewel */}
              <g id="avi-chest-monogram" transform="translate(100, 131)">
                {/* Backplate shadow */}
                <polygon
                  points="0,-8 9,-3 9,4 0,-1 -9,4 -9,-3"
                  fill="#0D0D11"
                />
                {/* Upper dark chevron */}
                <polygon
                  points="0,-7 8,-2.5 8,3.5 0,-1 -8,3.5 -8,-2.5"
                  fill="#2A2A35"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="0.8"
                />
                {/* Lower purple luminous chevron */}
                <polygon
                  points="0,-1 8,3.5 0,8 -8,3.5"
                  fill="url(#avi-purple-radiant)"
                />
                {/* Glowing micro jewel center with subtle breathing pulse */}
                <circle cx="0" cy="3.5" r="1.6" fill="#FFFFFF" />
                <circle cx="0" cy="3.5" r="4.2" fill="#9333EA" opacity="0.5" filter="blur(1.5px)" />
              </g>

              {/* Architectural precision seam line */}
              <line x1="77" y1="149" x2="123" y2="149" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 2" />
            </g>

            {/* RIGHT ARM (Articulated shoulder + forearm + waving hand) */}
            <g id="avi-arm-right" transform="translate(145, 116)">
              {/* Shoulder joint */}
              <circle cx="0" cy="0" r="4.5" fill="#2E2E38" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <circle cx="-1" cy="-1" r="1.5" fill="rgba(255,255,255,0.4)" />

              {/* Articulated Arm Body with 3D Wave & Presenting Transform */}
              <motion.g
                animate={
                  isWaving
                    ? {
                        rotate: [-15, -112, -88, -112, -88, -15],
                      }
                    : isPresenting
                    ? {
                        rotate: -52,
                      }
                    : {
                        rotate: isHovered ? 12 : [0, 4, 0],
                      }
                }
                transition={
                  isWaving
                    ? {
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1],
                        repeat: 0,
                      }
                    : isPresenting
                    ? {
                        type: "spring",
                        stiffness: 140,
                        damping: 18,
                        mass: 0.7,
                      }
                    : {
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                style={{ originX: "0px", originY: "0px" }}
              >
                <path
                  d="M0 0 L14 18 C18 24 20 34 16 42 C14 46 9 46 7 42 C3 34 1 24 -4 8 Z"
                  fill="#202028"
                  stroke="url(#avi-rim-light)"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                {/* Waving / Presenting hand paddle */}
                <motion.g
                  transform="translate(16, 42)"
                  animate={
                    isWaving
                      ? {
                          rotate: [0, -28, 22, -28, 22, 0],
                        }
                      : isPresenting
                      ? { rotate: -24 }
                      : { rotate: 0 }
                  }
                  transition={
                    isWaving
                      ? { duration: 0.9, repeat: 2, ease: "easeInOut" }
                      : isPresenting
                      ? { type: "spring", stiffness: 140, damping: 18 }
                      : { duration: 0.3 }
                  }
                >
                  <circle cx="0" cy="4" r="4.2" fill="#282834" stroke="url(#avi-rim-light)" strokeWidth="1" />
                  {/* Purple micro sensor on palm */}
                  <rect x="-1" y="2.5" width="2" height="3" rx="1" fill="#7B2CF6" />
                </motion.g>
              </motion.g>
            </g>
          </motion.g>

          {/* --- NECK GIMBAL COLLAR --- */}
          <rect
            x="84"
            y="88"
            width="32"
            height="8"
            rx="4"
            fill="#101014"
            stroke="url(#avi-rim-light)"
            strokeWidth="1"
          />
          <line x1="92" y1="88" x2="92" y2="96" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="108" y1="88" x2="108" y2="96" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

          {/* --- 3D PERSPECTIVE HEAD RIG --- */}
          {/* Reacts visibly to cursor with Yaw (±12–18°), Pitch (±7–10°), Roll (±4–6°) */}
          <motion.g
            id="avi-3d-head-rig"
            animate={{
              rotateY: rotY,
              rotateX: rotX,
              rotateZ: rotZ + (expression === "curious" ? -4 : 0),
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              mass: 0.85,
            }}
            style={{
              originX: "100px",
              originY: "84px",
            }}
          >
            {/* VOLUMETRIC GRAPHITE HEAD CHASSIS */}
            <path
              d="M42 36 C42 22 55 12 70 12 H130 C145 12 158 22 158 36 V74 C158 85 149 94 138 94 H62 C51 94 42 85 42 74 Z"
              fill="url(#avi-head-specular)"
              stroke="url(#avi-rim-light)"
              strokeWidth="1.8"
            />

            {/* Top specular studio keylight contour */}
            <path
              d="M50 34 C54 22 66 16 80 15 H120 C134 16 146 22 150 34"
              stroke="rgba(255,255,255,0.38)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            {/* ASYMMETRIC METALLIC ANTENNA PIN (Upper Right) */}
            <g id="avi-antenna" transform="translate(144, 8)">
              {/* Antenna mast with metallic angle */}
              <line x1="0" y1="9" x2="7" y2="-5" stroke="#3A3A46" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="0" y1="9" x2="7" y2="-5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" strokeLinecap="round" />
              {/* Luminous purple micro-bead tip */}
              <circle cx="7" cy="-5" r="3" fill="url(#avi-purple-radiant)" />
              <circle cx="7" cy="-5" r="1" fill="#FFFFFF" />
              <circle cx="7" cy="-5" r="6" fill="#7B2CF6" opacity="0.45" filter="blur(2.5px)" />
            </g>

            {/* RECESSED 3D OLED VISOR DISPLAY SCREEN */}
            <g id="avi-visor-recess-group">
              {/* Outer bevel/shadow rim around visor */}
              <rect
                x="50"
                y="26"
                width="100"
                height="48"
                rx="14"
                fill="#0A0A0E"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              {/* Inner recessed display surface */}
              <rect
                x="52"
                y="28"
                width="96"
                height="44"
                rx="12"
                fill="url(#avi-visor-recess)"
              />
            </g>

            {/* VISOR 3D GLASS FRESNEL REFLECTION */}
            <path
              d="M57 32 C68 29 86 29 104 30 C122 31 138 34 143 38"
              stroke="url(#avi-visor-glass)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* --- RECESSED 3D INTERACTIVE EYES --- */}
            {/* Actively tracked with ±12–18px physical range and organic asymmetry */}
            <g id="avi-eyes-display">
              {/* NORMAL / ATTENTIVE EYES */}
              {expression === "neutral" && (
                <>
                  <g
                    transform={`translate(${leftEyeX}, ${leftEyeY}) scale(1, ${isBlinking ? 0.08 : 1})`}
                  >
                    <rect x="-9.5" y="-5.5" width="19" height="11" rx="5.5" fill="url(#avi-purple-radiant)" />
                    <circle cx="-1.8" cy="-1.8" r="2.2" fill="#FFFFFF" />
                    <circle cx="2.8" cy="1.4" r="1.3" fill="rgba(255,255,255,0.7)" />
                  </g>
                  <g
                    transform={`translate(${rightEyeX}, ${rightEyeY}) scale(1, ${isBlinking ? 0.08 : 1})`}
                  >
                    <rect x="-9.5" y="-5.5" width="19" height="11" rx="5.5" fill="url(#avi-purple-radiant)" />
                    <circle cx="-1.8" cy="-1.8" r="2.2" fill="#FFFFFF" />
                    <circle cx="2.8" cy="1.4" r="1.3" fill="rgba(255,255,255,0.7)" />
                  </g>
                </>
              )}

              {/* HAPPY / SMILING EYES (^ ^) */}
              {(expression === "happy" || expression === "greeting") && (
                <>
                  <g transform={`translate(${leftEyeX}, ${leftEyeY})`}>
                    <path
                      d="M-10 2 C-7 -8, 7 -8, 10 2"
                      stroke="#D8B4FE"
                      strokeWidth="4.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </g>
                  <g transform={`translate(${rightEyeX}, ${rightEyeY})`}>
                    <path
                      d="M-10 2 C-7 -8, 7 -8, 10 2"
                      stroke="#D8B4FE"
                      strokeWidth="4.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </g>
                </>
              )}

              {/* CURIOUS EYES (Asymmetric Aperture) */}
              {expression === "curious" && (
                <>
                  <g transform={`translate(${leftEyeX}, ${leftEyeY - 1})`}>
                    <circle cx="0" cy="0" r="8" fill="url(#avi-purple-radiant)" />
                    <circle cx="-2.2" cy="-2.2" r="2.8" fill="#FFFFFF" />
                    <circle cx="2.8" cy="1.6" r="1.5" fill="rgba(255,255,255,0.7)" />
                  </g>
                  <g transform={`translate(${rightEyeX}, ${rightEyeY + 1})`}>
                    <rect x="-8.5" y="-4" width="17" height="8" rx="4" fill="url(#avi-purple-radiant)" />
                    <circle cx="-1.4" cy="-1.4" r="1.8" fill="#FFFFFF" />
                  </g>
                </>
              )}

              {/* SURPRISED / EXCITED EYES (Wide Aperture - Notice Reaction) */}
              {(expression === "surprised" || expression === "excited") && (
                <>
                  <g transform={`translate(${leftEyeX}, ${leftEyeY})`}>
                    <circle cx="0" cy="0" r="9" fill="url(#avi-purple-radiant)" />
                    <circle cx="-2.5" cy="-2.5" r="3.2" fill="#FFFFFF" />
                    <circle cx="3.2" cy="2" r="1.6" fill="rgba(255,255,255,0.8)" />
                  </g>
                  <g transform={`translate(${rightEyeX}, ${rightEyeY})`}>
                    <circle cx="0" cy="0" r="9" fill="url(#avi-purple-radiant)" />
                    <circle cx="-2.5" cy="-2.5" r="3.2" fill="#FFFFFF" />
                    <circle cx="3.2" cy="2" r="1.6" fill="rgba(255,255,255,0.8)" />
                  </g>
                </>
              )}

              {/* SPEAKING EYES */}
              {expression === "speaking" && (
                <>
                  <g
                    transform={`translate(${leftEyeX}, ${leftEyeY}) scale(1, ${isBlinking ? 0.08 : 1})`}
                  >
                    <rect x="-9.5" y="-6" width="19" height="12" rx="6" fill="url(#avi-purple-radiant)" />
                    <circle cx="-1.6" cy="-2" r="2.2" fill="#FFFFFF" />
                    <circle cx="3" cy="1.6" r="1.3" fill="rgba(255,255,255,0.7)" />
                  </g>
                  <g
                    transform={`translate(${rightEyeX}, ${rightEyeY}) scale(1, ${isBlinking ? 0.08 : 1})`}
                  >
                    <rect x="-9.5" y="-6" width="19" height="12" rx="6" fill="url(#avi-purple-radiant)" />
                    <circle cx="-1.6" cy="-2" r="2.2" fill="#FFFFFF" />
                    <circle cx="3" cy="1.6" r="1.3" fill="rgba(255,255,255,0.7)" />
                  </g>
                </>
              )}

              {/* THINKING EYES */}
              {expression === "thinking" && (
                <>
                  <g transform={`translate(${leftEyeX}, ${leftEyeY - 2})`}>
                    <rect x="-8.5" y="-4.5" width="17" height="9" rx="4.5" fill="url(#avi-purple-radiant)" />
                    <circle cx="-1" cy="-1.5" r="1.8" fill="#FFFFFF" />
                  </g>
                  <g transform={`translate(${rightEyeX}, ${rightEyeY - 2})`}>
                    <circle cx="0" cy="0" r="7" fill="url(#avi-purple-radiant)" />
                    <circle cx="-1.6" cy="-1.6" r="2.2" fill="#FFFFFF" />
                  </g>
                </>
              )}

              {/* SLEEPY / SLEEPING EYES */}
              {expression === "sleepy" && (
                <>
                  <path
                    d={`M${leftEyeX - 9} ${leftEyeY + 2} Q${leftEyeX} ${leftEyeY + 8} ${leftEyeX + 9} ${leftEyeY + 2}`}
                    stroke="#A855F7"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d={`M${rightEyeX - 9} ${rightEyeY + 2} Q${rightEyeX} ${rightEyeY + 8} ${rightEyeX + 9} ${rightEyeY + 2}`}
                    stroke="#A855F7"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </>
              )}

              {/* WATCHING EYES */}
              {expression === "watching" && (
                <>
                  <g transform={`translate(${leftEyeX}, ${leftEyeY})`}>
                    <rect x="-8.5" y="-4" width="17" height="8" rx="4" fill="url(#avi-purple-radiant)" />
                    <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
                  </g>
                  <g transform={`translate(${rightEyeX}, ${rightEyeY})`}>
                    <rect x="-8.5" y="-4" width="17" height="8" rx="4" fill="url(#avi-purple-radiant)" />
                    <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
                  </g>
                </>
              )}

              {/* WINK EYES */}
              {expression === "wink" && (
                <>
                  <g transform={`translate(${leftEyeX}, ${leftEyeY})`}>
                    <rect x="-9.5" y="-5.5" width="19" height="11" rx="5.5" fill="url(#avi-purple-radiant)" />
                    <circle cx="-1.8" cy="-1.8" r="2.2" fill="#FFFFFF" />
                  </g>
                  <path
                    d={`M${rightEyeX - 8} ${rightEyeY + 1} Q${rightEyeX} ${rightEyeY + 5} ${rightEyeX + 8} ${rightEyeY + 1}`}
                    stroke="#D8B4FE"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </>
              )}
            </g>
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};
