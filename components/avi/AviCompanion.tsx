"use client";

import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { AviCharacter, AviExpression } from "./AviCharacter";
import { useAvi } from "./AviContext";
import { AviLauncherButton } from "./AviLauncherButton";

const HERO_INTRO_STEPS = [
  "Hi, I'm AVI.",
  "I can help you explore Zevats.",
  "Need a hand?",
];

export const AviCompanion: React.FC = () => {
  const { aviLocation, setAviLocation, openChat } = useAvi();
  const prefersReducedMotion = useReducedMotion();

  const characterContainerRef = useRef<HTMLDivElement>(null);

  // Layout geometry cache (measured relative to #zevats-page-root container)
  const coordsRef = useRef({
    hX: 0,
    hY: 0,
    hWidth: 280,
    sX: 0,
    sY: 0,
    sWidth: 230,
    scrollEnd: 550,
    exitStart: 950,
    exitEnd: 1350,
  });

  // Track whether initial mount measurement is complete to prevent rendering at (0, 0)
  const [isReady, setIsReady] = useState<boolean>(false);

  // Logical stage
  const stageRef = useRef<"hero" | "traveling" | "perspective" | "dock_traveling" | "dock">("hero");
  const [stage, setStage] = useState<"hero" | "traveling" | "perspective" | "dock_traveling" | "dock">("hero");

  // Hardware-accelerated GPU transform motion values
  const aviX = useMotionValue(0);
  const aviY = useMotionValue(0);
  const aviScale = useMotionValue(1);
  const aviBankRotZ = useMotionValue(0);
  const aviFlightPitch = useMotionValue(0);

  // --- DUAL-SPEED SPRINGS: EYES NOTICE FIRST -> HEAD FOLLOWS ---
  const eyeSpringConfig = { stiffness: 280, damping: 22, mass: 0.45 };
  const eyeSpringX = useSpring(0, eyeSpringConfig);
  const eyeSpringY = useSpring(0, eyeSpringConfig);

  const headSpringConfig = { stiffness: 110, damping: 20, mass: 0.85 };
  const headRotX = useSpring(0, headSpringConfig);
  const headRotY = useSpring(0, headSpringConfig);
  const headRotZ = useSpring(0, headSpringConfig);

  // Synced spring values for 3D character props
  const [currentEyeOffset, setCurrentEyeOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [currentHeadRot, setCurrentHeadRot] = useState<{ x: number; y: number; z: number }>({
    x: 0,
    y: 0,
    z: 0,
  });

  // Emotive character state
  const [expression, setExpression] = useState<AviExpression>("neutral");
  const [isWaving, setIsWaving] = useState<boolean>(false);
  const [isPresenting, setIsPresenting] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClickReacting, setIsClickReacting] = useState<boolean>(false);

  // Speech bubble states for Hero introduction
  const [heroIntroStep, setHeroIntroStep] = useState<number | null>(null);

  // Attention tracking & lifecycle refs
  const isInsideRadiusRef = useRef<boolean>(false);
  const isHeroIntroActiveRef = useRef<boolean>(true);
  const hasPlayedPerspectiveArrivalRef = useRef<boolean>(false);
  const heroTimersRef = useRef<NodeJS.Timeout[]>([]);
  const perspectiveTimersRef = useRef<NodeJS.Timeout[]>([]);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const noticeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Continuous animation loop refs for direction-aware physics
  const heroPRef = useRef(0);
  const exitPRef = useRef(0);
  const targetHeroPRef = useRef(0);
  const targetExitPRef = useRef(0);
  const isTickingRef = useRef(false);
  const rAFRef = useRef<number | null>(null);

  // Sync eye/head springs to state
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

  // --- MEASURE SLOTS & GEOMETRY ---
  const measureAnchors = useCallback(() => {
    if (typeof window === "undefined") return;

    const pageRoot = document.getElementById("zevats-page-root") || document.body;
    const heroEl = document.getElementById("avi-hero-anchor");
    const perspEl = document.getElementById("avi-perspective-anchor");

    const w = window.innerWidth;
    let heroWidth = 280;
    let perspWidth = 145;

    if (w < 360) {
      heroWidth = 140;
      perspWidth = 95;
    } else if (w < 480) {
      heroWidth = 150;
      perspWidth = 115;
    } else if (w < 640) {
      heroWidth = 170;
      perspWidth = 135;
    } else if (w < 1024) {
      heroWidth = 220;
      perspWidth = 145;
    } else if (w < 1280) {
      heroWidth = 280;
      perspWidth = 145;
    } else if (w < 1536) {
      heroWidth = 280;
      perspWidth = 165;
    } else {
      heroWidth = 330;
      perspWidth = 185;
    }

    if (pageRoot && heroEl && perspEl) {
      const pRect = pageRoot.getBoundingClientRect();
      const hRect = heroEl.getBoundingClientRect();
      const sRect = perspEl.getBoundingClientRect();

      // Relative coordinates inside parent container
      const hX = hRect.left - pRect.left + (hRect.width - heroWidth) / 2;
      const hY = hRect.top - pRect.top + (hRect.height - heroWidth * 1.15) / 2;

      const sX = sRect.left - pRect.left + (sRect.width - heroWidth) / 2;
      const sY = sRect.top - pRect.top + (sRect.height - heroWidth * 1.15) / 2;

      // Scroll threshold definitions calibrated for all screen heights (laptop 800-900px up to 1440px/2160px)
      const centerOffset = Math.min(Math.max(window.innerHeight * 0.46, 320), window.innerHeight * 0.52);
      const scrollEnd = Math.max(260, sY - centerOffset);
      const exitStart = Math.max(scrollEnd + 150, sY + 40);
      const exitEnd = exitStart + Math.min(window.innerHeight * 0.45, 480);

      coordsRef.current = {
        hX,
        hY,
        hWidth: heroWidth,
        sX,
        sY,
        sWidth: perspWidth,
        scrollEnd,
        exitStart,
        exitEnd,
      };

      // Set initial values directly to hero coordinates so AVI never originates from (0, 0)
      if (window.scrollY === 0) {
        aviX.set(hX);
        aviY.set(hY);
        aviScale.set(1);
        heroPRef.current = 0;
        targetHeroPRef.current = 0;
        exitPRef.current = 0;
        targetExitPRef.current = 0;
      }
      setIsReady(true);
    }
  }, [aviX, aviY, aviScale]);

  // Strict page-load position & layout measurement
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
    measureAnchors();
    window.addEventListener("resize", measureAnchors, { passive: true });
    return () => window.removeEventListener("resize", measureAnchors);
  }, [measureAnchors]);

  // --- DIRECTION-AWARE CONTINUOUS PHYSICS TICK ---
  // HERO -> PERSPECTIVE: slow / cinematic / smooth / controlled
  // PERSPECTIVE -> HERO: fast / responsive / minimal / direct (~200-350ms, no overshoot)
  const tickPhysics = useCallback(() => {
    const { hX, hY, hWidth, sX, sY, sWidth } = coordsRef.current;
    if (hWidth === 0 || sWidth === 0) {
      isTickingRef.current = false;
      return;
    }

    const currentH = heroPRef.current;
    const targetH = targetHeroPRef.current;
    const currentE = exitPRef.current;
    const targetE = targetExitPRef.current;

    // Detect direction
    const isReturningToHero = targetH < currentH;
    const isReturningToPersp = targetE < currentE;

    // Asymmetric smoothing parameters:
    // Downward (Hero -> Perspective): lambda = 0.085 (~600-800ms cinematic ease)
    // Upward (Perspective -> Hero): lambda = 0.35 (~200-350ms fast, responsive direct track)
    const lambdaH = prefersReducedMotion ? 1 : isReturningToHero ? 0.35 : 0.085;
    const lambdaE = prefersReducedMotion ? 1 : isReturningToPersp ? 0.35 : 0.12;

    let nextH = currentH + (targetH - currentH) * lambdaH;
    let nextE = currentE + (targetE - currentE) * lambdaE;

    if (Math.abs(nextH - targetH) < 0.002) nextH = targetH;
    if (Math.abs(nextE - targetE) < 0.002) nextE = targetE;

    heroPRef.current = nextH;
    exitPRef.current = nextE;

    const pageRoot = document.getElementById("zevats-page-root") || document.body;
    const pRect = pageRoot.getBoundingClientRect();

    if (nextE > 0.005) {
      // --- PHASE 3: PERSPECTIVE -> DOCK TRANSFORMATION ---
      // Continuous single 3D character shrinking from 230px to 44px as she flies to bottom-right
      const dockButtonCenterX = window.innerWidth - 60 - pRect.left;
      const dockButtonCenterY = window.innerHeight - 60 - pRect.top;

      const scalePersp = sWidth / hWidth;
      const scaleDock = 44 / hWidth;

      const targetX = dockButtonCenterX - hWidth / 2;
      const targetY = dockButtonCenterY - (hWidth * 1.15) / 2;

      const curX = sX + (targetX - sX) * Math.pow(nextE, 0.85);
      const curY = sY + (targetY - sY) * Math.pow(nextE, 1.15);
      const curScale = scalePersp + (scaleDock - scalePersp) * nextE;

      aviX.set(curX);
      aviY.set(curY);
      aviScale.set(curScale);
      aviBankRotZ.set(4.5 * Math.sin(nextE * Math.PI));
      aviFlightPitch.set(-2 * Math.sin(nextE * Math.PI));
    } else {
      // --- PHASE 1 & 2: HERO <-> PERSPECTIVE ---
      if (isReturningToHero) {
        // PERSPECTIVE -> HERO: FAST, MINIMAL, DIRECT RETURN
        // Linear path directly to hero coordinates, no wide arc, no artificial banking or lift
        const curX = hX + (sX - hX) * nextH;
        const curY = hY + (sY - hY) * nextH;
        const curScale = 1 + (sWidth / hWidth - 1) * nextH;

        aviX.set(curX);
        aviY.set(curY);
        aviScale.set(curScale);
        aviBankRotZ.set(0);
        aviFlightPitch.set(0);

        if (nextH <= 0.02) {
          headRotY.set(0);
          headRotX.set(0);
          headRotZ.set(0);
          eyeSpringX.set(0);
          eyeSpringY.set(0);
        }
      } else {
        // HERO -> PERSPECTIVE: SLOW, CINEMATIC, SMOOTH, CONTROLLED
        const xProgress = Math.pow(nextH, 0.68);
        const yProgress = Math.pow(nextH, 1.28);

        const curX = hX + (sX - hX) * xProgress;
        const curY = hY + (sY - hY) * yProgress;
        const curScale = 1 + (sWidth / hWidth - 1) * nextH;

        const bankAngle = -4.2 * Math.sin(nextH * Math.PI);
        const pitchAngle = 2.2 * Math.sin(nextH * Math.PI);
        const flightLift = -10 * Math.sin(nextH * Math.PI);

        aviX.set(curX);
        aviY.set(curY + flightLift);
        aviScale.set(curScale);
        aviBankRotZ.set(bankAngle);
        aviFlightPitch.set(pitchAngle);

        // Dynamic gaze during forward travel
        if (!prefersReducedMotion && stageRef.current === "traveling") {
          if (nextH < 0.22) {
            const factor = nextH / 0.22;
            headRotY.set(-13 * factor);
            headRotX.set(6 * factor);
            headRotZ.set(-3.5 * factor);
            eyeSpringX.set(-10 * factor);
            eyeSpringY.set(5 * factor);
            setExpression("curious");
          } else if (nextH < 0.82) {
            headRotY.set(-4);
            headRotX.set(1.5);
            headRotZ.set(bankAngle * 0.4);
            eyeSpringX.set(0);
            eyeSpringY.set(0);
            setExpression("neutral");
          } else {
            const factor = (nextH - 0.82) / 0.18;
            headRotY.set(-4 - 6 * factor);
            headRotX.set(1.5 + 8.5 * factor);
            headRotZ.set(2 * factor);
            eyeSpringX.set(-7 * factor);
            eyeSpringY.set(6 * factor);
            setExpression("curious");
          }
        }
      }
    }

    // Stage resolution
    if (nextE >= 0.94) {
      if (stageRef.current !== "dock") {
        stageRef.current = "dock";
        setStage("dock");
        setAviLocation("dock");
        perspectiveTimersRef.current.forEach(clearTimeout);
        setIsPresenting(false);
      }
    } else if (nextE > 0.01) {
      if (stageRef.current !== "dock_traveling") {
        stageRef.current = "dock_traveling";
        setStage("dock_traveling");
        setAviLocation("dock");
        perspectiveTimersRef.current.forEach(clearTimeout);
        setIsPresenting(false);
      }
    } else if (nextH >= 0.96) {
      if (stageRef.current !== "perspective") {
        stageRef.current = "perspective";
        setStage("perspective");
        setAviLocation("perspective");
        setHeroIntroStep(null);

        // Physical Board Presentation Sequence:
        // AVI arrives -> notices the user -> positions board -> looks toward the board -> small presenting gesture -> looks back toward user
        if (!hasPlayedPerspectiveArrivalRef.current && !prefersReducedMotion) {
          hasPlayedPerspectiveArrivalRef.current = true;
          perspectiveTimersRef.current.forEach(clearTimeout);

          // 1. Arrives and notices the user (0-350ms)
          setExpression("curious");
          setIsPresenting(false);
          setIsWaving(false);
          headRotY.set(0);
          headRotX.set(2);
          eyeSpringX.set(0);
          eyeSpringY.set(0);

          // 2. Positions the board & looks toward the board on her right (350-1000ms)
          const t1 = setTimeout(() => {
            setExpression("thinking");
            headRotY.set(16); // Turns head right toward the board
            headRotX.set(6);  // Slight downward pitch to read the board statement
            headRotZ.set(2);
            eyeSpringX.set(12);
            eyeSpringY.set(6);
          }, 350);

          // 3. Small presenting gesture toward the board (1000-2200ms)
          const t2 = setTimeout(() => {
            setIsPresenting(true); // Right arm articulates toward the board
            setExpression("happy");
            headRotY.set(12);
            headRotX.set(4);
            eyeSpringX.set(9);
            eyeSpringY.set(4);
          }, 1000);

          // 4. Looks back toward the user/content (2200ms+)
          const t3 = setTimeout(() => {
            headRotY.set(0);
            headRotX.set(0);
            headRotZ.set(0);
            eyeSpringX.set(0);
            eyeSpringY.set(0);
            setExpression("neutral");
          }, 2200);

          // 5. Restrained presentation hold finishes (3400ms)
          const t4 = setTimeout(() => {
            setIsPresenting(false);
          }, 3400);

          perspectiveTimersRef.current = [t1, t2, t3, t4];
        }
      }
    } else if (nextH <= 0.02) {
      if (stageRef.current !== "hero") {
        stageRef.current = "hero";
        setStage("hero");
        setAviLocation("hero");
        perspectiveTimersRef.current.forEach(clearTimeout);
        hasPlayedPerspectiveArrivalRef.current = false;
        setIsPresenting(false);
      }
    } else {
      if (stageRef.current !== "traveling") {
        stageRef.current = "traveling";
        setStage("traveling");
        setAviLocation("traveling");
        setHeroIntroStep(null);
        perspectiveTimersRef.current.forEach(clearTimeout);
        setIsPresenting(false);
      }
    }

    // Continue loop if not settled
    const isSettled = nextH === targetH && nextE === targetE;
    if (!isSettled) {
      rAFRef.current = requestAnimationFrame(tickPhysics);
    } else {
      isTickingRef.current = false;
    }
  }, [
    prefersReducedMotion,
    setAviLocation,
    aviX,
    aviY,
    aviScale,
    aviBankRotZ,
    aviFlightPitch,
    headRotX,
    headRotY,
    headRotZ,
    eyeSpringX,
    eyeSpringY,
  ]);

  const startPhysicsTick = useCallback(() => {
    if (!isTickingRef.current) {
      isTickingRef.current = true;
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      rAFRef.current = requestAnimationFrame(tickPhysics);
    }
  }, [tickPhysics]);

  // Clean up rAF and timers on unmount
  useEffect(() => {
    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      perspectiveTimersRef.current.forEach(clearTimeout);
    };
  }, []);

  // --- PASSIVE SCROLL LISTENER ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const { scrollEnd, exitStart, exitEnd } = coordsRef.current;

      // Exit progress
      let tE = 0;
      if (scrollY >= exitStart) {
        tE = Math.max(0, Math.min(1, (scrollY - exitStart) / (exitEnd - exitStart)));
      }
      targetExitPRef.current = tE;

      // Hero progress
      let tH = 0;
      if (scrollY > 0) {
        tH = Math.max(0, Math.min(1, scrollY / (scrollEnd || 1)));
      }
      if (scrollY >= exitStart) {
        tH = 1;
      }
      targetHeroPRef.current = tH;

      startPhysicsTick();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startPhysicsTick]);

  // --- ORIGINAL HERO INTRODUCTION SEQUENCE (ON EVERY FRESH REFRESH) ---
  useEffect(() => {
    heroTimersRef.current.forEach(clearTimeout);

    if (prefersReducedMotion) {
      setExpression("neutral");
      isHeroIntroActiveRef.current = false;
      return;
    }

    // 0–600ms: Hero settles; AVI appears right in hero anchor
    const t1 = setTimeout(() => {
      setExpression("neutral");
    }, 600);

    // 600–1600ms: Looks around inquisitively
    const t2 = setTimeout(() => {
      setExpression("curious");
    }, 1100);

    // 1600–2400ms: Notices user, tilts head
    const t3 = setTimeout(() => {
      setExpression("curious");
    }, 1800);

    // 2400–3200ms: Friendly wave gesture
    const t4 = setTimeout(() => {
      setIsWaving(true);
      setExpression("greeting");
    }, 2400);

    // 3200–4800ms: "Hi, I'm AVI."
    const t5 = setTimeout(() => {
      setIsWaving(false);
      setHeroIntroStep(0);
      setExpression("happy");
    }, 3200);

    // 4800–6400ms: "I can help you explore Zevats."
    const t6 = setTimeout(() => {
      setHeroIntroStep(1);
      setExpression("speaking");
    }, 4800);

    // 6400–7600ms: "Need a hand?"
    const t7 = setTimeout(() => {
      setHeroIntroStep(2);
      setExpression("curious");
    }, 6400);

    // 7900ms+: Bubble disappears; settles into hero cursor tracking
    const t8 = setTimeout(() => {
      setHeroIntroStep(null);
      setExpression("neutral");
      isHeroIntroActiveRef.current = false;
    }, 7900);

    heroTimersRef.current = [t1, t2, t3, t4, t5, t6, t7, t8];
    return () => heroTimersRef.current.forEach(clearTimeout);
  }, [prefersReducedMotion]);

  // --- GLOBAL CURSOR TRACKING ENGINE ---
  const handleGlobalPointerMove = useCallback(
    (e: MouseEvent | PointerEvent) => {
      if (prefersReducedMotion || !characterContainerRef.current) return;
      if (stageRef.current === "traveling" || stageRef.current === "dock_traveling" || stageRef.current === "dock") return;

      const rect = characterContainerRef.current.getBoundingClientRect();
      const faceCenterX = rect.left + rect.width / 2;
      const faceCenterY = rect.top + rect.height * 0.32;

      const rawDx = e.clientX - faceCenterX;
      const rawDy = e.clientY - faceCenterY;
      const dist = Math.hypot(rawDx, rawDy);

      const isNearby = dist <= 680;

      if (isNearby && !isInsideRadiusRef.current) {
        isInsideRadiusRef.current = true;
        if (!isHeroIntroActiveRef.current && !isHovered) {
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
        isInsideRadiusRef.current = false;
        if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
        leaveTimeoutRef.current = setTimeout(() => {
          if (!isInsideRadiusRef.current && !isHeroIntroActiveRef.current) {
            eyeSpringX.set(0);
            eyeSpringY.set(0);
            headRotY.set(0);
            headRotX.set(0);
            headRotZ.set(0);
            setExpression("neutral");
          }
        }, 750);
      }

      const normDx = Math.max(-1, Math.min(1, rawDx / 520));
      const normDy = Math.max(-1, Math.min(1, rawDy / 380));

      const targetEyeX = normDx * 13.5;
      const targetEyeY = normDy * 8.5;

      const targetYaw = normDx * 16;
      const targetPitch = -normDy * 8.5;
      const targetRoll = normDx * 4.5;

      eyeSpringX.set(targetEyeX);
      eyeSpringY.set(targetEyeY);
      headRotY.set(targetYaw);
      headRotX.set(targetPitch);
      headRotZ.set(targetRoll);

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        if (isInsideRadiusRef.current && !isHeroIntroActiveRef.current && !isHovered) {
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

  // Click Handler in Hero / Perspective
  const handleClick = () => {
    if (isClickReacting) return;
    setHeroIntroStep(null);
    isHeroIntroActiveRef.current = false;
    setIsClickReacting(true);

    setExpression("surprised");
    headRotY.set(14);
    eyeSpringX.set(12);

    setTimeout(() => {
      setIsClickReacting(false);
      openChat();
    }, 300);
  };

  // Don't render until layout coordinates are set so AVI never flashes at (0, 0)
  if (!isReady) {
    return null;
  }

  // --- RENDER DOCKED STATE AT BOTTOM-RIGHT ---
  if (stage === "dock") {
    return <AviLauncherButton />;
  }

  const baseWidth = coordsRef.current.hWidth || 280;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 30,
      }}
    >
      {/* The Single Continuous 3D Living Character */}
      <motion.div
        ref={characterContainerRef}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          x: aviX,
          y: aviY,
          scale: aviScale,
          rotateZ: aviBankRotZ,
          rotateX: aviFlightPitch,
          width: baseWidth,
          height: baseWidth * 1.15,
          transformOrigin: "center center",
          pointerEvents: "auto",
          willChange: "transform",
        }}
        className="select-none flex flex-col items-center justify-center cursor-pointer"
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          setExpression("happy");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setExpression("neutral");
        }}
        aria-label="Click to chat with AVI"
      >
        {/* Inner Entrance Glide Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 48 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full flex flex-col items-center justify-center"
        >
          {/* 1. Contextual Speech Bubble (Only in Hero Introduction) */}
          <AnimatePresence mode="wait">
            {stage === "hero" && heroIntroStep !== null && !isHovered && (
              <motion.div
                key={HERO_INTRO_STEPS[heroIntroStep]}
                initial={{ opacity: 0, y: 10, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.94 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-left-10 z-40 min-w-fit max-w-[280px] sm:max-w-[340px] px-4 sm:px-5 py-2.5 sm:py-3 bg-[#FAF9F6] border border-[rgba(17,17,17,0.14)] rounded-md shadow-[0_10px_32px_rgba(17,17,17,0.09)] flex items-center space-x-2.5 sm:space-x-3 pointer-events-none whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-zevats-purple shrink-0 animate-pulse" />
                <span className="text-[12px] sm:text-[14px] font-medium text-[#111111] leading-snug tracking-tight">
                  {HERO_INTRO_STEPS[heroIntroStep]}
                </span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-16 w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-[#FAF9F6]" />
                <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-16 w-0 h-0 border-x-[7px] border-x-transparent border-t-[9px] border-t-[rgba(17,17,17,0.14)] -z-10" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. Hover Tooltip ("Talk to me") */}
          <AnimatePresence>
            {isHovered && !isClickReacting && heroIntroStep === null && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -3, scale: 0.95 }}
                transition={{ duration: 0.16 }}
                className="absolute bottom-full mb-4 whitespace-nowrap bg-[#141418] text-[#F4F1EA] text-[12px] font-medium py-2 px-3.5 rounded-sm shadow-xl border border-[rgba(244,241,234,0.16)] pointer-events-none flex items-center space-x-2 z-40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
                <span>Talk to me</span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-x-3 border-x-transparent border-t-3 border-t-[#141418]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. The Continuous 3D Living Character */}
          <div className="relative flex flex-col items-center">
            <AviCharacter
              size={baseWidth}
              expression={isHovered ? "happy" : expression}
              pose={stage === "dock_traveling" ? "sitting" : "standing"}
              isWaving={isWaving}
              isPresenting={isPresenting}
              eyeOffset={currentEyeOffset}
              headRotation={currentHeadRot}
              isHovered={isHovered}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Receiving Graphite Dock Cradle during Perspective -> Chatbot Transformation */}
      {stage === "dock_traveling" && (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-20 select-none pointer-events-none">
          <div
            className="w-14 h-14 rounded-full border border-[rgba(255,255,255,0.20)] flex items-center justify-center transition-opacity duration-200"
            style={{
              background: "linear-gradient(145deg, #3C3C4C 0%, #323240 55%, #292936 100%)",
              boxShadow:
                "inset 0 1px 1.5px rgba(255, 255, 255, 0.28), inset 0 -2px 4px rgba(0, 0, 0, 0.45), 0 10px 28px rgba(0, 0, 0, 0.38)",
            }}
          >
            <div
              className="absolute inset-1 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 60%, transparent 100%)",
              }}
            />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#292936] shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
          </div>
        </div>
      )}
    </div>
  );
};
