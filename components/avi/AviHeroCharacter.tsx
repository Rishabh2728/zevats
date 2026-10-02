"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useReducedMotion } from "framer-motion";
import { AviCharacter, AviExpression } from "./AviCharacter";
import { useAvi } from "./AviContext";

const INTRO_STEPS = [
  "Hi, I'm AVI.",
  "I can help you explore Zevats.",
  "Need a hand?",
];

export const AviHeroCharacter: React.FC = () => {
  const { aviLocation, openChat } = useAvi();
  const prefersReducedMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive character dimensions:
  // Desktop (>= 1024px): ~322px tall (width 280px => 280 * 1.15 = 322px) [Target: 280-360px]
  // Tablet (640-1023px): ~247px tall (width 215px => 215 * 1.15 = 247.25px) [Target: 220-280px]
  // Mobile (< 640px): ~175px tall (width 152px => 152 * 1.15 = 174.8px) [Target: 150-200px]
  const [charWidth, setCharWidth] = useState<number>(280);

  // --- DUAL-SPEED SPRINGS: EYES NOTICE FIRST -> HEAD FOLLOWS ---
  // Fast, agile eye spring (reacts immediately in ~70ms)
  const eyeSpringConfig = { stiffness: 280, damping: 22, mass: 0.45 };
  const eyeSpringX = useSpring(0, eyeSpringConfig);
  const eyeSpringY = useSpring(0, eyeSpringConfig);

  // Heavier, organic head spring (glides smoothly behind eyes in ~250-350ms)
  const headSpringConfig = { stiffness: 105, damping: 19, mass: 0.85 };
  const headRotX = useSpring(0, headSpringConfig);
  const headRotY = useSpring(0, headSpringConfig);
  const headRotZ = useSpring(0, headSpringConfig);

  // Synchronized values for SVG rendering
  const [currentEyeOffset, setCurrentEyeOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [currentHeadRot, setCurrentHeadRot] = useState<{ x: number; y: number; z: number }>({
    x: 0,
    y: 0,
    z: 0,
  });

  // State
  const [expression, setExpression] = useState<AviExpression>("neutral");
  const [isWaving, setIsWaving] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [introStep, setIntroStep] = useState<number | null>(null);
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isClickReacting, setIsClickReacting] = useState<boolean>(false);

  // Attention tracking state machine refs
  const isInsideRadiusRef = useRef<boolean>(false);
  const isIntroActiveRef = useRef<boolean>(true);
  const lastMoveTimeRef = useRef<number>(Date.now());
  const timerRefs = useRef<NodeJS.Timeout[]>([]);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const noticeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = () => {
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (noticeTimeoutRef.current) clearTimeout(noticeTimeoutRef.current);
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
  };

  // Sync springs to state
  useEffect(() => {
    const unsubEyeX = eyeSpringX.on("change", (v) =>
      setCurrentEyeOffset((prev) => ({ ...prev, x: v }))
    );
    const unsubEyeY = eyeSpringY.on("change", (v) =>
      setCurrentEyeOffset((prev) => ({ ...prev, y: v }))
    );
    const unsubHeadX = headRotX.on("change", (v) =>
      setCurrentHeadRot((prev) => ({ ...prev, x: v }))
    );
    const unsubHeadY = headRotY.on("change", (v) =>
      setCurrentHeadRot((prev) => ({ ...prev, y: v }))
    );
    const unsubHeadZ = headRotZ.on("change", (v) =>
      setCurrentHeadRot((prev) => ({ ...prev, z: v }))
    );
    return () => {
      unsubEyeX();
      unsubEyeY();
      unsubHeadX();
      unsubHeadY();
      unsubHeadZ();
    };
  }, [eyeSpringX, eyeSpringY, headRotX, headRotY, headRotZ]);

  // Responsive character sizing
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCharWidth(152); // ~175px tall
      } else if (w < 1024) {
        setCharWidth(215); // ~247px tall
      } else {
        setCharWidth(280); // ~322px tall
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // --- GLOBAL POINTER/CURSOR TRACKING ENGINE ---
  // Tracks cursor relative to AVI's physical face center across the entire viewport
  const handleGlobalPointerMove = useCallback(
    (e: MouseEvent | PointerEvent) => {
      if (prefersReducedMotion || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const faceCenterX = rect.left + rect.width / 2;
      const faceCenterY = rect.top + rect.height * 0.32; // Recessed OLED Visor height

      const rawDx = e.clientX - faceCenterX;
      const rawDy = e.clientY - faceCenterY;
      const dist = Math.hypot(rawDx, rawDy);

      lastMoveTimeRef.current = Date.now();

      // Defined attention zone: 680px around AVI covers hero, typography, and navbar
      const isNearby = dist <= 680;

      // --- SMALL "NOTICE" REACTION ---
      // Triggered once when cursor first enters the defined attention radius
      if (isNearby && !isInsideRadiusRef.current) {
        isInsideRadiusRef.current = true;
        if (!isIntroActiveRef.current && !isHovered) {
          // Eyes widen slightly, head tilts with curious interest
          setExpression("curious");
          headRotZ.set(rawDx > 0 ? 5.5 : -5.5);
          if (noticeTimeoutRef.current) clearTimeout(noticeTimeoutRef.current);
          noticeTimeoutRef.current = setTimeout(() => {
            if (isInsideRadiusRef.current && !isHovered) {
              setExpression("neutral");
            }
          }, 650);
        }
      } else if (!isNearby && isInsideRadiusRef.current) {
        // Cursor has left nearby radius: watch it leave briefly, then relax
        isInsideRadiusRef.current = false;
        if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
        leaveTimeoutRef.current = setTimeout(() => {
          if (!isInsideRadiusRef.current && !isIntroActiveRef.current) {
            eyeSpringX.set(0);
            eyeSpringY.set(0);
            headRotY.set(0);
            headRotX.set(0);
            headRotZ.set(0);
            setExpression("neutral");
          }
        }, 750);
      }

      // Normalization factor: spans 520px horizontally, 380px vertically
      const normDx = Math.max(-1, Math.min(1, rawDx / 520));
      const normDy = Math.max(-1, Math.min(1, rawDy / 380));

      // TARGET EYE MOVEMENT (Noticeable, distinct ±12–18px physical screen range)
      // ±13.5 SVG units on a 280px wide SVG translates to ~19 physical pixels
      const targetEyeX = normDx * 13.5;
      const targetEyeY = normDy * 8.5;

      // TARGET HEAD ROTATIONS (Organic, distinct range)
      // Yaw: ±16° looking left/right
      // Pitch: ±8.5° looking up/down
      // Roll: ±4.5° subtle inquisitive head tilt
      const targetYaw = normDx * 16;
      const targetPitch = -normDy * 8.5;
      const targetRoll = normDx * 4.5;

      // Update springs: fast eye spring snaps first, slower head spring follows
      eyeSpringX.set(targetEyeX);
      eyeSpringY.set(targetEyeY);
      headRotY.set(targetYaw);
      headRotX.set(targetPitch);
      headRotZ.set(targetRoll);

      // --- INACTIVITY / STOPPED CURSOR RELAXATION ---
      // If cursor stops moving for 2.8s while nearby, relax posture slightly
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        if (isInsideRadiusRef.current && !isIntroActiveRef.current && !isHovered) {
          eyeSpringX.set(targetEyeX * 0.5);
          eyeSpringY.set(targetEyeY * 0.5);
          headRotY.set(targetYaw * 0.5);
          headRotX.set(targetPitch * 0.5);
          headRotZ.set(targetRoll * 0.5);
        }
      }, 2800);
    },
    [prefersReducedMotion, isHovered, eyeSpringX, eyeSpringY, headRotX, headRotY, headRotZ]
  );

  useEffect(() => {
    window.addEventListener("pointermove", handleGlobalPointerMove, { passive: true });
    window.addEventListener("mousemove", handleGlobalPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      window.removeEventListener("mousemove", handleGlobalPointerMove);
    };
  }, [handleGlobalPointerMove]);

  // --- INTRODUCTION SEQUENCE ON EVERY REFRESH ---
  // Plays on every page load / refresh as requested; cursor tracking remains live throughout
  useEffect(() => {
    clearTimers();
    isIntroActiveRef.current = true;

    if (prefersReducedMotion) {
      setHasEntered(true);
      setExpression("neutral");
      isIntroActiveRef.current = false;
      return;
    }

    // 0–600ms: Hero settles. AVI appears.
    const t1 = setTimeout(() => {
      setHasEntered(true);
      setExpression("neutral");
    }, 600);

    // 600–1600ms: AVI looks around inquisitively (unless user moves cursor)
    const t2 = setTimeout(() => {
      setExpression("curious");
    }, 1100);

    // 1600–2400ms: AVI notices the user. Head tilts.
    const t3 = setTimeout(() => {
      setExpression("curious");
    }, 1800);

    // 2400–3200ms: AVI gives a friendly wave.
    const t4 = setTimeout(() => {
      setIsWaving(true);
      setExpression("greeting");
    }, 2400);

    // 3200–4800ms: Speech: "Hi, I'm AVI."
    const t5 = setTimeout(() => {
      setIsWaving(false);
      setIntroStep(0);
      setExpression("happy");
    }, 3200);

    // 4800–6400ms: Speech: "I can help you explore Zevats."
    const t6 = setTimeout(() => {
      setIntroStep(1);
      setExpression("speaking");
    }, 4800);

    // 6400–7600ms: Speech: "Need a hand?"
    const t7 = setTimeout(() => {
      setIntroStep(2);
      setExpression("curious");
    }, 6400);

    // 7900ms+: Bubble disappears. AVI settles into calm hero tracking.
    const t8 = setTimeout(() => {
      setIntroStep(null);
      setExpression("neutral");
      isIntroActiveRef.current = false;
    }, 7900);

    timerRefs.current = [t1, t2, t3, t4, t5, t6, t7, t8];
    return () => clearTimers();
  }, [prefersReducedMotion]);

  // Click Handler
  const handleHeroClick = () => {
    if (isClickReacting) return;
    clearTimers();
    setIntroStep(null);
    isIntroActiveRef.current = false;
    setIsClickReacting(true);

    // Cheerful wide-eyed reaction, glances toward bottom right, then docks to chat
    setExpression("surprised");
    headRotY.set(14);
    eyeSpringX.set(12);

    setTimeout(() => {
      setIsClickReacting(false);
      openChat();
    }, 300);
  };

  // Only render in hero when aviLocation is "hero"
  if (aviLocation !== "hero") return null;

  return (
    <div
      ref={containerRef}
      className="relative select-none flex flex-col items-center justify-center p-2"
    >
      {/* 1. Introduction Speech Bubble (Editorial Zevats Paper Card) */}
      <AnimatePresence mode="wait">
        {introStep !== null && !isHovered && (
          <motion.div
            key={`intro-step-${introStep}`}
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.94 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-full mb-5 z-30 min-w-fit max-w-[280px] sm:max-w-[340px] px-5 py-3 bg-[#FAF9F6] border border-[rgba(17,17,17,0.14)] rounded-md shadow-[0_10px_32px_rgba(17,17,17,0.09)] flex items-center space-x-3 pointer-events-none whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-zevats-purple shrink-0 animate-pulse" />
            <span className="text-[13px] sm:text-[14px] font-medium text-[#111111] leading-snug tracking-tight">
              {INTRO_STEPS[introStep]}
            </span>
            {/* Small editorial pointer notch toward AVI */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-[#FAF9F6]" />
            <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[7px] border-x-transparent border-t-[9px] border-t-[rgba(17,17,17,0.14)] -z-10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hover Tooltip ("Talk to me") */}
      <AnimatePresence>
        {isHovered && !isClickReacting && introStep === null && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -3, scale: 0.95 }}
            transition={{ duration: 0.16 }}
            className="absolute bottom-full mb-4 whitespace-nowrap bg-[#141418] text-[#F4F1EA] text-[12px] font-medium py-2 px-3.5 rounded-sm shadow-xl border border-[rgba(244,241,234,0.16)] pointer-events-none flex items-center space-x-2 z-30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
            <span>Talk to me</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-x-3 border-x-transparent border-t-3 border-t-[#141418]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. The Hero-Scale 3D Character */}
      <motion.div
        layoutId="avi-unified-character"
        transition={{
          type: "spring",
          stiffness: 170,
          damping: 24,
          mass: 0.85,
        }}
        initial={{ opacity: 0, scale: 0.88, y: 16 }}
        animate={{
          opacity: 1,
          scale: isClickReacting ? 1.05 : 1,
          y: 0,
        }}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleHeroClick}
        onMouseEnter={() => {
          setIsHovered(true);
          setExpression("happy");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setExpression("neutral");
        }}
        className="cursor-pointer relative flex flex-col items-center"
        aria-label="Click to chat with AVI"
      >
        <AviCharacter
          size={charWidth}
          expression={isHovered ? "happy" : expression}
          pose="standing"
          isWaving={isWaving}
          eyeOffset={currentEyeOffset}
          headRotation={currentHeadRot}
          isHovered={isHovered}
        />
      </motion.div>
    </div>
  );
};
