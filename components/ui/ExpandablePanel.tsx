"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExpandablePanelProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

/**
 * ExpandablePanel
 *
 * Provides a single-source-of-truth, interruptible expand/collapse transition.
 * Eliminates the secondary-shrink / jump bug caused by AnimatePresence unmounting
 * containers with residual padding.
 *
 * The outer motion container has zero padding and zero margin, cleanly collapsing
 * to strictly 0px. The inner wrapper receives all user padding and spacing.
 */
export const ExpandablePanel: React.FC<ExpandablePanelProps> = ({
  isOpen,
  children,
  className = "",
  duration,
}) => {
  const openDuration = duration ?? 0.38;
  const closeDuration = duration ? duration * 0.8 : 0.28;

  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        height: {
          duration: isOpen ? openDuration : closeDuration,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: isOpen ? openDuration * 0.75 : closeDuration * 0.7,
          ease: "easeInOut",
        },
      }}
      style={{
        overflow: "hidden",
        padding: 0,
        margin: 0,
        border: "none",
      }}
    >
      <div className={className}>
        {children}
      </div>
    </motion.div>
  );
};
