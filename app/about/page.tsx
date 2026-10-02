"use client";

import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutWhoWeAre } from "@/components/about/AboutWhoWeAre";
import { AboutBeliefs } from "@/components/about/AboutBeliefs";
import { AboutHowWeWork } from "@/components/about/AboutHowWeWork";
import { AboutWorkWithYou } from "@/components/about/AboutWorkWithYou";
import { AboutTechAndAi } from "@/components/about/AboutTechAndAi";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="relative bg-[#FAF9F6] text-[#111111] overflow-hidden">
      {/* 1. Hero: Editorial Opening Spread */}
      <AboutHero />

      {/* 2. Who We Are: Split Editorial Statement */}
      <AboutWhoWeAre />

      {/* 3. What We Believe: Visual Centerpiece Dark Section */}
      <AboutBeliefs />

      {/* 4. How We Work: Continuous Single-Line Progression */}
      <AboutHowWeWork />

      {/* 5. What Makes Zevats Different: How We Work With You */}
      <AboutWorkWithYou />

      {/* 6. Technology + AI: Technology Should Serve the Product */}
      <AboutTechAndAi />

      {/* 7. Final CTA: Natural Conclusion */}
      <AboutCTA />
    </div>
  );
}
