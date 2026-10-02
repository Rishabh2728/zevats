"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "project" | "cta">("default");
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor positioning
  const springX = useSpring(mouseX, { stiffness: 500, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 35 });

  useEffect(() => {
    setMounted(true);
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);

    if (hasTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]");
      if (cursorAttr) {
        const type = cursorAttr.getAttribute("data-cursor");
        if (type === "project") {
          setCursorState("project");
          setCursorText("VIEW");
          return;
        } else if (type === "cta") {
          setCursorState("cta");
          setCursorText("");
          return;
        }
      }

      const interactive = target.closest("a, button, input, textarea, select, [role='button']");
      if (interactive) {
        setCursorState("hover");
        setCursorText("");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted || isTouchDevice) return null;

  const isProject = cursorState === "project";
  const isHover = cursorState === "hover";
  const isCTA = cursorState === "cta";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full font-mono text-[10px] tracking-wider uppercase font-semibold text-white mix-blend-difference"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        width: isProject ? 64 : isHover ? 32 : isCTA ? 28 : 10,
        height: isProject ? 64 : isHover ? 32 : isCTA ? 28 : 10,
        backgroundColor: isProject
          ? "rgba(123, 44, 246, 0.9)"
          : isHover
          ? "rgba(123, 44, 246, 0.4)"
          : isCTA
          ? "rgba(107, 33, 219, 0.8)"
          : "#111111",
        borderColor: isHover ? "#7B2CF6" : "transparent",
        borderWidth: isHover ? "1px" : "0px",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {isProject && <span className="text-white drop-shadow-sm">{cursorText}</span>}
    </motion.div>
  );
};
