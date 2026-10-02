"use client";

import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { EditorialIntroSection } from "@/components/sections/EditorialIntroSection";
import { WhatWeBuildSection } from "@/components/sections/WhatWeBuildSection";
import { IntelligenceSection } from "@/components/sections/IntelligenceSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { WhyZevatsSection } from "@/components/sections/WhyZevatsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { AviCompanion } from "@/components/avi/AviCompanion";

export default function Home() {
  return (
    <div id="zevats-page-root" className="relative">
      {/* 1. Asymmetric Editorial Hero (Paper #F4F1EA) */}
      <HeroSection />

      {/* 2. Editorial Statement with Enormous Whitespace (Paper #F4F1EA) */}
      <EditorialIntroSection />

      {/* 3. What We Build: Interactive Editorial Service Composition (Soft White #FAF9F6) */}
      <WhatWeBuildSection />

      {/* 4. When Software Needs to Do More: AI & Automation Capabilities (Deep Ink #111111) */}
      <IntelligenceSection />

      {/* 5. How We Work: Vertical Editorial Process Sequence (Paper #F4F1EA) */}
      <HowWeWorkSection />

      {/* 6. Why Zevats: Statement-Led Working Philosophy (Ink #111111) */}
      <WhyZevatsSection />

      {/* 7. Final Closing Composition (Deep Purple / Ink #111111) */}
      <CTABanner />

      {/* The Single Continuous Living Character (Hero -> Perspective -> Chatbot Dock) */}
      <AviCompanion />
    </div>
  );
}
