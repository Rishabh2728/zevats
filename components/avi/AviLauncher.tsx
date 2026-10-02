"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useAvi } from "./AviContext";
import { AviLauncherButton } from "./AviLauncherButton";

export const AviLauncher: React.FC = () => {
  const { isChatOpen } = useAvi();
  const pathname = usePathname();

  // On the homepage, AviCompanion handles the continuous character journey from Hero -> Perspective -> Dock
  // On all other routes (/services, /solutions, /about, /contact, etc.), AviLauncher provides the persistent assistant
  if (pathname === "/" || isChatOpen) {
    return null;
  }

  return <AviLauncherButton />;
};
