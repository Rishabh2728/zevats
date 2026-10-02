"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";
import { HeroSoftwareVisual } from "@/components/services/HeroSoftwareVisual";
import { WebsitesMotionPreview } from "@/components/services/motion/WebsitesMotionPreview";
import { SaasMotionPreview } from "@/components/services/motion/SaasMotionPreview";
import { MobileMotionPreview } from "@/components/services/motion/MobileMotionPreview";
import { CustomMotionPreview } from "@/components/services/motion/CustomMotionPreview";
import { WorkflowInteractiveSection } from "@/components/services/motion/WorkflowInteractiveSection";
import { CustomSystemPreview } from "@/components/services/CustomSystemPreview";
import { CustomCapabilitiesInteractive } from "@/components/services/motion/CustomCapabilitiesInteractive";
import { AiInteractiveDemo } from "@/components/services/motion/AiInteractiveDemo";
import { ProcessMotionSection } from "@/components/services/motion/ProcessMotionSection";

interface ServiceItem {
  id: "websites" | "saas" | "mobile" | "custom";
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    id: "websites",
    title: "Websites",
    summary: "Digital experiences designed to represent your business clearly.",
    description:
      "We build company websites, digital flagships, and high-performance web experiences that articulate what your business does, build lasting credibility, and convert visitors into long-term commercial relationships.",
    deliverables: [
      "Company flagships and brand websites",
      "High-conversion product and service landing pages",
      "Content systems your team can update without a developer",
      "Fast, responsive design across all devices",
    ],
  },
  {
    id: "saas",
    title: "Web Applications & SaaS",
    summary: "Products, portals and platforms built around real workflows.",
    description:
      "From internal operating tools to customer-facing software products, we design and build web applications that make daily work faster, reduce manual tasks, and handle complex business processes reliably.",
    deliverables: [
      "Customer and client portals",
      "Internal operating consoles and dashboards",
      "Commercial SaaS products with subscription billing",
      "Multi-user workflows with role-based permissions",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    summary: "Android and iOS experiences designed for everyday use.",
    description:
      "We design and engineer mobile applications for customers on the go and teams working in the field. Built with smooth interactions, offline reliability, and deep integration with device hardware.",
    deliverables: [
      "Customer mobile applications for iOS and Android",
      "Field operations and job site tools",
      "Offline capability for work without connectivity",
      "Camera scanning, GPS routing, and push notifications",
    ],
  },
  {
    id: "custom",
    title: "Custom Software",
    summary: "Purpose-built software for workflows standard tools cannot handle.",
    description:
      "When off-the-shelf software fails to fit your business, we build software designed precisely around your proprietary calculations, unique operating rules, and legacy systems.",
    deliverables: [
      "Proprietary business logic and calculation engines",
      "Custom internal workflow and dispatch systems",
      "Direct integrations between your existing tools",
      "Full client ownership with zero recurring per-user fees",
    ],
  },
];

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState<"websites" | "saas" | "mobile" | "custom">("websites");
  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  return (
    <div className="relative bg-[#FAF9F6] text-[#111111] overflow-hidden">
      
      {/* 1. HERO SECTION (EDITORIAL SPREAD MATCHING ABOUT) */}
      <section className="w-full relative pt-6 sm:pt-8 md:pt-12 pb-14 sm:pb-18 md:pb-20 border-b border-[rgba(17,17,17,0.08)]">
        {/* Background Subtle Ambient Purple Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-zevats-purple/[0.07] via-zevats-purple/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />

        <div className="zevats-container">
          <div className="max-w-4xl relative z-10">
            {/* Eyebrow with Zevats Purple Accent Marker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
              <span>Software Disciplines</span>
            </motion.div>

            {/* Large Editorial Headline with Purple Focus */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-[#111111] leading-[0.98] mb-8"
            >
              Software built around{" "}
              <span className="text-zevats-purple relative inline-block">
                your business.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/30 origin-left"
                />
              </span>
            </motion.h1>

            {/* Supporting Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-2xl md:text-[25px] text-[#4A4A4A] font-normal leading-[1.5] max-w-3xl mb-10"
            >
              We design and build digital products, applications and custom software around the way your business actually works.
            </motion.p>

            {/* Action Links */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-6 pt-1 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-zevats-purple hover:shadow-[0_4px_20px_rgba(123,44,246,0.3)] px-6 py-3.5 rounded-sm transition-all duration-200 group min-h-[44px] whitespace-nowrap"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#what-we-build"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-zevats-purple transition-colors duration-200 px-6 py-3.5 border border-[rgba(17,17,17,0.15)] sm:border-transparent hover:border-zevats-purple/30 rounded-sm group min-h-[44px] whitespace-nowrap"
              >
                <span>Explore what we build</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Multi-discipline Supporting Visual */}
          <HeroSoftwareVisual />
        </div>
      </section>

      {/* 2. WHAT WE BUILD (INTERACTIVE SERVICE SHOWCASE) */}
      <section id="what-we-build" className="w-full relative py-14 sm:py-18 md:py-24 border-b border-[rgba(17,17,17,0.08)]">
        <div className="zevats-container">
          <div className="mb-10 sm:mb-16 max-w-3xl">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
            <span>What We Build</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-[#111111] leading-[1.05]">
            Four core disciplines.{" "}
            <span className="text-zevats-purple">One standard.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#555555] font-normal leading-relaxed">
            From your public-facing website to the software your team uses every day, we build digital systems around real business needs.
          </p>
        </div>

        {/* Interactive Desktop Composition: Selector + Living Motion Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Responsive Service Selector */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[rgba(17,17,17,0.08)] border-t border-b border-[rgba(17,17,17,0.08)]">
            {services.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  className={`py-5 sm:py-7 px-3.5 sm:px-6 -mx-3.5 sm:-mx-6 rounded-sm border-l-4 cursor-pointer transition-[background-color,border-color,opacity] duration-200 group select-none ${
                    isSelected
                      ? "bg-white/80 border-zevats-purple opacity-100"
                      : "bg-transparent border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-200 ${
                        isSelected
                          ? "text-[#111111]"
                          : "text-[#111111] group-hover:text-zevats-purple"
                      }`}
                    >
                      {service.title}
                      {isSelected && <span className="text-zevats-purple ml-1">.</span>}
                    </h3>

                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-transform duration-200 shrink-0 ${
                        isSelected ? "bg-zevats-purple scale-110 shadow-[0_0_8px_rgba(123,44,246,0.8)]" : "bg-[#DDDDDD]"
                      }`}
                    />
                  </div>

                  <p className={`mt-2 text-sm sm:text-base transition-colors duration-200 ${
                    isSelected ? "text-[#333333] font-normal" : "text-[#777777]"
                  }`}>
                    {service.summary}
                  </p>

                  <ExpandablePanel isOpen={isSelected} className="pt-4 space-y-4">
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2.5 text-xs text-[#111111]"
                        >
                          <Check className="w-3.5 h-3.5 text-zevats-purple shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Inline Living Product Preview on Mobile & Tablet (<lg) */}
                    <div className="block lg:hidden pt-2">
                      <div className="w-full bg-[#FFFFFF] border border-[rgba(17,17,17,0.08)] rounded-sm p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] space-y-3">
                        <div className="flex items-center justify-between pb-2.5 border-b border-[rgba(17,17,17,0.06)] text-xs text-[#686868]">
                          <span className="font-semibold uppercase tracking-wider text-[10px] text-[#111111]">
                            Interactive Architecture
                          </span>
                          <span className="text-zevats-purple font-medium flex items-center space-x-1.5 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
                            <span>{service.title}</span>
                          </span>
                        </div>

                        <div className="w-full min-h-[300px] flex items-center justify-center overflow-x-hidden">
                          {service.id === "websites" && <WebsitesMotionPreview key="inline-motion-websites" />}
                          {service.id === "saas" && <SaasMotionPreview key="inline-motion-saas" />}
                          {service.id === "mobile" && <MobileMotionPreview key="inline-motion-mobile" />}
                          {service.id === "custom" && <CustomMotionPreview key="inline-motion-custom" />}
                        </div>
                      </div>
                    </div>
                  </ExpandablePanel>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Living Product Preview Viewport (Desktop only) */}
          <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-28">
            <div className="w-full bg-[#FFFFFF] border border-[rgba(17,17,17,0.08)] rounded-sm p-5 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.04)] space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(17,17,17,0.06)] text-xs text-[#686868]">
                <span className="font-semibold uppercase tracking-wider text-[10px] text-[#111111]">
                  Living Product Preview
                </span>
                <span className="text-zevats-purple font-medium flex items-center space-x-1.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-ping" />
                  <span>{activeService.title}</span>
                </span>
              </div>

              {/* Dynamic Motion Preview Container */}
              <div className="w-full min-h-[350px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {activeServiceId === "websites" && <WebsitesMotionPreview key="motion-websites" />}
                  {activeServiceId === "saas" && <SaasMotionPreview key="motion-saas" />}
                  {activeServiceId === "mobile" && <MobileMotionPreview key="motion-mobile" />}
                  {activeServiceId === "custom" && <CustomMotionPreview key="motion-custom" />}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-[rgba(17,17,17,0.06)] flex items-center justify-between text-xs text-[#686868]">
                <span>Designed and engineered by Zevats</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1 text-[#111111] hover:text-zevats-purple font-medium transition-colors min-h-[44px]"
                >
                  <span>Discuss this service</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

          </div>
        </div>
      </section>

      {/* 3. BUILT AROUND THE WAY YOU WORK */}
      <WorkflowInteractiveSection />

      {/* 4. CUSTOM SOFTWARE (DARK VISUAL CENTERPIECE MATCHING ABOUT BELIEFS) */}
      <section className="w-full relative py-16 sm:py-20 md:py-28 bg-[#0E0E10] text-[#FAF9F6] overflow-hidden">
        {/* Ambient Purple Glow */}
        <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-zevats-purple/[0.08] blur-[140px] rounded-full pointer-events-none -translate-y-1/2" />

        <div className="zevats-container space-y-12 sm:space-y-16 relative z-10">
          
          {/* Top Heading Spread */}
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#888888] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>Custom Software</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-[#FAF9F6] leading-[1.02]">
              When standard software doesn&apos;t fit, we build what{" "}
              <span className="text-zevats-purple relative inline-block">
                does.
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/40" />
              </span>
            </h2>

            <p className="text-base sm:text-xl text-[#999999] leading-relaxed max-w-3xl font-normal">
              We build internal systems, operational tools and purpose-built software around proprietary workflows, calculations and business rules.
            </p>
          </div>

          {/* Dedicated System Architecture Console (Dark Theme) */}
          <CustomSystemPreview dark={true} />

          {/* 5 Core Capabilities with Interactive Revelations */}
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#888888] font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>5 Core Capabilities</span>
            </div>
            <CustomCapabilitiesInteractive />
          </div>

        </div>
      </section>

      {/* 5. AI + AUTOMATION (LIGHT SURFACED APPLIED INTELLIGENCE) */}
      <section className="w-full relative py-14 sm:py-18 md:py-24 border-b border-[rgba(17,17,17,0.08)]">
        <div className="zevats-container">
          <div className="max-w-3xl mb-8 space-y-4">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>Applied Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#111111] leading-[1.05]">
              And when intelligence helps, we build it{" "}
              <span className="text-zevats-purple relative inline-block">
                in.
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/30" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              AI and automation can become part of the software itself — helping teams search, process information, automate repetitive work and make better use of their systems.
            </p>
          </div>

          {/* Interactive Living Demonstration for Document Intelligence, Search, and Automation */}
          <AiInteractiveDemo />
        </div>
      </section>

      {/* 6. HOW WE WORK (CONTINUOUS SINGLE-LINE PROGRESSION) */}
      <ProcessMotionSection />

      {/* 7. FINAL CTA (MATCHING ABOUT CTA) */}
      <section className="w-full relative py-20 sm:py-24 md:py-32 bg-[#FAF9F6] text-[#111111] overflow-hidden">
        {/* Background Architectural Purple Line Structure */}
        <div className="hidden md:block absolute right-0 bottom-0 w-[500px] h-[350px] pointer-events-none opacity-20 -z-0">
          <svg viewBox="0 0 400 280" fill="none" className="w-full h-full">
            <path
              d="M 50 250 L 350 250 L 350 50"
              stroke="#7B2CF6"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="350" cy="50" r="4" fill="#7B2CF6" />
            <path
              d="M 120 250 C 220 250, 350 180, 350 90"
              stroke="#7B2CF6"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="zevats-container">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 relative z-10">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-[#111111] leading-[0.98]">
              Have something worth{" "}
              <span className="text-zevats-purple relative inline-block">
                building?
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/40" />
              </span>
            </h2>

            <p className="text-base sm:text-xl md:text-2xl text-[#555555] max-w-2xl mx-auto font-normal leading-relaxed">
              Tell us what you are trying to build, automate, or improve. We will review your requirements and engineer a clear path forward.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-zevats-purple hover:shadow-[0_4px_24px_rgba(123,44,246,0.35)] px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm transition-all duration-200 group min-h-[46px] whitespace-nowrap"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions"
                className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-zevats-purple transition-colors duration-200 py-3.5 sm:py-4 px-6 sm:px-5 group min-h-[46px] border border-[rgba(17,17,17,0.15)] sm:border-transparent hover:border-zevats-purple/30 rounded-sm whitespace-nowrap"
              >
                <span>Explore solutions</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
