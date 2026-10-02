"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";
import { WebsitesPreview } from "./previews/WebsitesPreview";
import { SaasPreview } from "./previews/SaasPreview";
import { MobilePreview } from "./previews/MobilePreview";
import { CustomSoftwarePreview } from "./previews/CustomSoftwarePreview";

interface ServiceItem {
  id: "websites" | "saas" | "mobile" | "custom";
  title: string;
  oneLiner: string;
  description: string;
  tags: string[];
  href: string;
}

const services: ServiceItem[] = [
  {
    id: "websites",
    title: "Websites",
    oneLiner: "Digital experiences designed to represent the business clearly.",
    description:
      "Corporate flagships, high-converting product pages, and editorial platforms that establish brand authority and turn qualified visitors into long-term commercial relationships.",
    tags: ["Brand Flagships", "Headless CMS", "Editorial Typography", "Sub-Second Load"],
    href: "/services#websites",
  },
  {
    id: "saas",
    title: "Web Applications & SaaS",
    oneLiner: "Products, portals and platforms built around real workflows.",
    description:
      "Full-stack cloud applications, multi-tenant SaaS products, client portals, and administrative consoles engineered for high daily operational volume and strict data security.",
    tags: ["Multi-Tenant Architecture", "Client Portals", "Role Permissions", "Real-Time Sync"],
    href: "/services#saas",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    oneLiner: "Android and iOS experiences designed for everyday use.",
    description:
      "Native and cross-platform mobile apps for customers, operations, and field teams. Smooth on-device gestures, biometric login, and offline-first synchronization for uninterrupted work anywhere.",
    tags: ["iOS & Android", "Offline-First Sync", "Field Operations", "Push Workflows"],
    href: "/services#mobile",
  },
  {
    id: "custom",
    title: "Custom Software",
    oneLiner: "Internal systems, business tools and purpose-built software.",
    description:
      "Purpose-built business software for workflows that standard tools cannot handle. Tailored operational rules, proprietary calculations, and legacy modernization with 100% client IP ownership.",
    tags: ["Proprietary Logic", "Full IP Ownership", "Legacy Modernization", "Bespoke APIs"],
    href: "/services#custom",
  },
];

const SERVICE_SPECS: Record<string, { metrics: string[]; pillars: { label: string; detail: string }[] }> = {
  websites: {
    metrics: ["HTTP/3 Edge", "0.24s LCP", "100% Static Edge"],
    pillars: [
      { label: "Headless CMS & Edge", detail: "Sub-second load times with instant global cache updates." },
      { label: "Core Web Vitals", detail: "0.24s LCP, zero runtime layout shift, accessible semantic markup." },
      { label: "Editorial Authority", detail: "Bespoke typographical design engineered to convert visitors." },
    ],
  },
  saas: {
    metrics: ["Multi-Tenant", "SOC2-Ready", "Real-Time Sync"],
    pillars: [
      { label: "Tenant Isolation", detail: "Strict database boundary security, role permissions, and audit logs." },
      { label: "High-Volume Workflows", detail: "Engineered for heavy daily operational use with zero UI delay." },
      { label: "Live System Sync", detail: "WebSocket connections, webhook pipelines, and ERP integrations." },
    ],
  },
  mobile: {
    metrics: ["iOS & Android", "Offline-First", "Native Auth"],
    pillars: [
      { label: "Native Performance", detail: "Smooth 60fps on-device gestures and hardware optimization." },
      { label: "Offline-First Sync", detail: "SQLite local storage that reconciles seamlessly when reconnected." },
      { label: "Hardware Security", detail: "Biometric authentication, secure enclave keychain, and push alerts." },
    ],
  },
  custom: {
    metrics: ["100% Client IP", "Custom APIs", "Zero Lock-In"],
    pillars: [
      { label: "Proprietary Logic", detail: "Software designed around your company's unique operational rules." },
      { label: "100% Code Ownership", detail: "Zero vendor lock-in with clean, maintainable, documented codebases." },
      { label: "Legacy Modernization", detail: "Gradual modernization pathways without interrupting daily work." },
    ],
  },
};

export const WhatWeBuildSection: React.FC = () => {
  const [activeId, setActiveId] = useState<"websites" | "saas" | "mobile" | "custom">("websites");
  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <section className="w-full relative py-12 sm:py-16 md:py-24 border-t border-[rgba(17,17,17,0.08)] bg-[#FAF9F6]">
      <div className="zevats-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-[rgba(17,17,17,0.08)]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#686868] font-medium block mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#111111]">
              What we build
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base md:text-lg text-[#686868] max-w-md font-normal leading-relaxed">
            Digital products engineered around business workflows. Select an offering to examine its architecture.
          </p>
        </div>

        {/* Large Interactive Service Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Editorial List */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-[rgba(17,17,17,0.08)]">
            {services.map((service) => {
              const isActive = service.id === activeId;
              const specs = SERVICE_SPECS[service.id];

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className={`py-6 sm:py-8 cursor-pointer transition-opacity duration-300 group ${
                    isActive ? "opacity-100" : "opacity-55 hover:opacity-85"
                  }`}
                >
                  {/* Title & Arrow */}
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-3.5">
                      <span
                        className={`w-2 h-2 rounded-full transition-transform duration-200 shrink-0 ${
                          isActive ? "bg-zevats-purple scale-100" : "bg-transparent scale-0"
                        }`}
                      />
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] transition-colors duration-200 ${
                          isActive ? "text-[#111111]" : "text-[#111111] group-hover:text-zevats-purple"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 shrink-0 ${
                        isActive
                          ? "text-zevats-purple translate-x-1 opacity-100"
                          : "text-[#686868] opacity-0 group-hover:opacity-60"
                      }`}
                    />
                  </div>

                  {/* Always-visible One-Liner */}
                  <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#686868] font-normal pl-5 sm:pl-5.5">
                    {service.oneLiner}
                  </p>

                  {/* Expanded Details on Active Item with zero-jump ExpandablePanel */}
                  <ExpandablePanel isOpen={isActive} className="pl-5 sm:pl-5.5 pt-4 space-y-4">
                    <p className="text-xs sm:text-sm text-[#686868] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs text-[#111111] bg-[#F4F1EA] rounded-sm border border-[rgba(17,17,17,0.08)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Dedicated Mobile / Tablet Architectural Snapshot Card (<lg) */}
                    <div className="block lg:hidden pt-2">
                      <div className="w-full rounded-sm bg-white border border-[rgba(17,17,17,0.1)] p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-3.5">
                        <div className="flex items-center justify-between border-b border-[rgba(17,17,17,0.08)] pb-2.5 text-xs">
                          <span className="uppercase tracking-widest text-[#111111] font-semibold text-[10px]">
                            Architecture Snapshot
                          </span>
                          <span className="text-zevats-purple font-medium text-[11px] flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
                            <span>{service.title}</span>
                          </span>
                        </div>

                        {/* Metric Badges */}
                        {specs && (
                          <div className="flex flex-wrap gap-1.5">
                            {specs.metrics.map((m, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 text-[10px] font-mono font-medium text-[#111111] bg-[#FAF9F6] border border-[rgba(17,17,17,0.12)] rounded-xs"
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Architectural Pillars */}
                        {specs && (
                          <div className="space-y-2.5 pt-1">
                            {specs.pillars.map((pillar, idx) => (
                              <div key={idx} className="space-y-0.5">
                                <span className="text-xs font-semibold text-[#111111] block">
                                  {pillar.label}
                                </span>
                                <p className="text-xs text-[#686868] leading-relaxed">
                                  {pillar.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={service.href}
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-zevats-purple hover:underline min-h-[44px]"
                      >
                        <span>Explore {service.title} details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </ExpandablePanel>
                </div>
              );
            })}
          </div>

          {/* Right Column: Signature Art-Directed Product Snapshot Preview (Desktop only) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <div className="w-full min-h-[460px] sm:min-h-[480px] rounded-sm bg-[#F4F1EA] border border-[rgba(17,17,17,0.08)] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              
              {/* Top metadata row */}
              <div className="flex items-center justify-between border-b border-[rgba(17,17,17,0.08)] pb-3.5 text-xs font-medium text-[#686868]">
                <span className="uppercase tracking-widest text-[#111111] font-semibold text-[10px]">
                  Product Architecture Snapshot
                </span>
                <span className="text-zevats-purple font-medium text-[11px] flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
                  <span>{activeService.title}</span>
                </span>
              </div>

              {/* Dynamic Art-Directed Product Snapshot Viewport */}
              <div className="my-auto py-2 w-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {activeId === "websites" && <WebsitesPreview key="preview-websites" />}
                  {activeId === "saas" && <SaasPreview key="preview-saas" />}
                  {activeId === "mobile" && <MobilePreview key="preview-mobile" />}
                  {activeId === "custom" && <CustomSoftwarePreview key="preview-custom" />}
                </AnimatePresence>
              </div>

              {/* Bottom summary link */}
              <div className="pt-3.5 border-t border-[rgba(17,17,17,0.08)] flex items-center justify-between text-xs">
                <span className="text-[#686868] text-[11px]">Disciplined execution</span>
                <Link
                  href={activeService.href}
                  className="text-[#111111] hover:text-zevats-purple font-medium flex items-center space-x-1 text-[11px] transition-colors min-h-[44px]"
                >
                  <span>Read full technical specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
