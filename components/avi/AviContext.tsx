"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { AviExpression } from "./AviCharacter";

export type AviLocation = "hero" | "traveling" | "perspective" | "dock";

interface AviContextType {
  aviLocation: AviLocation;
  isChatOpen: boolean;
  currentPrompt: string | null;
  expression: AviExpression;
  isWaving: boolean;
  lookDirection: { x: number; y: number };

  // Actions
  openChat: (prompt?: string) => void;
  closeChat: () => void;
  setAviLocation: (loc: AviLocation) => void;
  setExpression: (exp: AviExpression) => void;
  setIsWaving: (waving: boolean) => void;
  setLookDirection: (dir: { x: number; y: number }) => void;

  // Compatibility helpers
  aviExpression: AviExpression;
  setAviExpression: (exp: AviExpression) => void;
  hasCompletedIntro: boolean;
  completeIntro: () => void;
}

const AviContext = createContext<AviContextType | undefined>(undefined);

export const AviProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [aviLocation, setAviLocation] = useState<AviLocation>("hero");
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [expression, setExpression] = useState<AviExpression>("neutral");
  const [isWaving, setIsWaving] = useState<boolean>(false);
  const [lookDirection, setLookDirection] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Open Chat: moves AVI to dock position and opens modal
  const openChat = useCallback((prompt?: string) => {
    if (prompt) setCurrentPrompt(prompt);
    setAviLocation("dock");
    setIsChatOpen(true);
    setExpression("speaking");
  }, []);

  // Close Chat: AVI returns to appropriate section based on current scroll position
  const closeChat = useCallback(() => {
    setIsChatOpen(false);
    setCurrentPrompt(null);
    setExpression("neutral");
    setIsWaving(false);
    setLookDirection({ x: 0, y: 0 });

    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    if (scrollY > 1150) {
      setAviLocation("dock");
    } else if (scrollY > 360) {
      setAviLocation("perspective");
    } else {
      setAviLocation("hero");
    }
  }, []);

  return (
    <AviContext.Provider
      value={{
        aviLocation,
        isChatOpen,
        currentPrompt,
        expression,
        isWaving,
        lookDirection,

        openChat,
        closeChat,
        setAviLocation,
        setExpression,
        setIsWaving,
        setLookDirection,

        // Compat
        aviExpression: expression,
        setAviExpression: setExpression,
        hasCompletedIntro: true,
        completeIntro: () => {},
      }}
    >
      {children}
    </AviContext.Provider>
  );
};

export const useAvi = () => {
  const context = useContext(AviContext);
  if (!context) {
    throw new Error("useAvi must be used within an AviProvider");
  }
  return context;
};
