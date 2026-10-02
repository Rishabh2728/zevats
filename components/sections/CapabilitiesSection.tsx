"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Smartphone, Workflow, ArrowUpRight, Check } from "lucide-react";

interface Capability {
  id: string;
  num: string;
  title: string;
  summary: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  deliverables: string[];
  accentType: "glow" | "geometry" | "vertical" | "linear";
  visualSpec: {
    type: string;
    metrics: { label: string; value: string }[];
  };
}

const capabilities: Capability[] = [
  {
    id: "ai-systems",
    num: "01",
    title: "AI Systems",
    summary: "AI agents, LLM applications, intelligent workflows and natural-language interfaces.",
    description:
      "We design resilient multi-agent architectures, retrieval-augmented intelligence, and contextual processing layers that operate within explicit business constraints rather than black-box hype.",
    icon: <Sparkles className="w-5 h-5" />,
    tags: ["Agentic Systems", "RAG & Knowledge Graphs", "Deterministic Pipelines", "Prompt Engineering"],
    deliverables: ["Autonomous workflow agents", "Enterprise document intelligence", "Real-time copilot interfaces"],
    accentType: "glow",
    visualSpec: {
      type: "Agent Orchestrator",
      metrics: [
        { label: "Accuracy", value: "99.4%" },
        { label: "Latency", value: "<180ms" },
        { label: "Orchestration", value: "DAG / Stateful" },
      ],
    },
  },
  {
    id: "software-products",
    num: "02",
    title: "Software Products",
    summary: "Web platforms, SaaS products, dashboards and custom business applications.",
    description:
      "Full-cycle development from high-concurrency microservices to responsive, fluid interfaces. Every product is engineered for scalability, data integrity, and uncompromising performance.",
    icon: <Terminal className="w-5 h-5" />,
    tags: ["Full-Stack Architecture", "Next.js & React", "High-Volume APIs", "Enterprise Dashboards"],
    deliverables: ["Custom SaaS platforms", "Mission-critical operations portals", "Multi-tenant architectures"],
    accentType: "geometry",
    visualSpec: {
      type: "Application Core",
      metrics: [
        { label: "Availability", value: "99.99%" },
        { label: "Throughput", value: "High TPS" },
        { label: "Frontend", value: "Sub-second FCP" },
      ],
    },
  },
  {
    id: "mobile-experiences",
    num: "03",
    title: "Mobile Experiences",
    summary: "Android and iOS applications connected to real business systems.",
    description:
      "Native and cross-platform mobile ecosystems that synchronize directly with your backend, enabling field operations, logistics management, and frictionless client touchpoints.",
    icon: <Smartphone className="w-5 h-5" />,
    tags: ["iOS & Android", "Offline Sync", "Biometric Auth", "Hardware Integrations"],
    deliverables: ["Cross-platform React Native apps", "Fleet & asset trackers", "On-the-go operational tools"],
    accentType: "vertical",
    visualSpec: {
      type: "Mobile Node",
      metrics: [
        { label: "Sync Engine", value: "Delta Cache" },
        { label: "Offline Mode", value: "Full Support" },
        { label: "Crash-free", value: "99.98%" },
      ],
    },
  },
  {
    id: "automation-integrations",
    num: "04",
    title: "Automation & Integrations",
    summary: "Connect tools, remove repetitive work and automate business processes.",
    description:
      "Eliminate human glue work between disparate CRMs, ERPs, databases, and third-party APIs. We construct reliable event-driven data pipelines that execute automatically in the background.",
    icon: <Workflow className="w-5 h-5" />,
    tags: ["Event-Driven Webhooks", "CRM/ERP Bridges", "ETL Pipelines", "Scheduled Jobs"],
    deliverables: ["Zero-touch invoice workflows", "Bi-directional database sync", "Automated anomaly alerts"],
    accentType: "linear",
    visualSpec: {
      type: "Integration Mesh",
      metrics: [
        { label: "Friction", value: "Zero manual" },
        { label: "Event Bridge", value: "Sub-50ms" },
        { label: "Recovery", value: "Automated retry" },
      ],
    },
  },
];

export const CapabilitiesSection: React.FC = () => {
  const [activeCap, setActiveCap] = useState<string>("ai-systems");

  return (
    <section id="capabilities" className="py-24 md:py-36 bg-[var(--bg-primary)] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-[var(--border-subtle)] transition-colors duration-500">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-3 transition-colors duration-500">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-500">
              What we build
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[var(--text-secondary)] max-w-md text-sm md:text-base leading-relaxed transition-colors duration-500">
            Engineered systems designed around actual operational reality. We combine specialized domain logic with modern architectural standards.
          </p>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="space-y-6">
          {capabilities.map((cap) => {
            const isActive = activeCap === cap.id;

            return (
              <motion.div
                key={cap.id}
                onMouseEnter={() => setActiveCap(cap.id)}
                className={`relative rounded-2xl border transition-all duration-300 p-8 md:p-10 overflow-hidden ${
                  isActive
                    ? "bg-white dark:bg-[#1D1828] border-zevats-purple/50 dark:border-zevats-purple/40 shadow-[0_12px_32px_rgba(123,44,246,0.08)] ring-1 ring-zevats-purple/20"
                    : "bg-white/60 dark:bg-[#15121E] hover:bg-white dark:hover:bg-[#1A1624] border-[var(--border-subtle)]"
                }`}
              >
                {/* Subtle Unique Purple Accent (Section 13) */}
                {cap.accentType === "glow" && (
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-zevats-purple/10 dark:bg-zevats-purple/15 rounded-full blur-[60px] pointer-events-none" />
                )}
                {cap.accentType === "geometry" && (
                  <div className="absolute top-4 right-8 w-24 h-24 border border-zevats-purple/10 dark:border-zevats-purple/20 rounded-lg rotate-12 pointer-events-none" />
                )}
                {cap.accentType === "vertical" && (
                  <div className="absolute top-0 right-16 w-[1px] h-full bg-gradient-to-b from-transparent via-zevats-purple/20 dark:via-zevats-purple/30 to-transparent pointer-events-none" />
                )}
                {cap.accentType === "linear" && (
                  <div className="absolute bottom-6 right-6 w-32 h-[1px] bg-gradient-to-r from-transparent via-zevats-purple/30 to-transparent pointer-events-none" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Number & Main Information */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-semibold text-zevats-purple dark:text-zevats-lavender px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 border border-purple-200/50 dark:border-purple-800/40">
                          {cap.num}
                        </span>
                        <div className="p-1.5 rounded-md bg-black/5 dark:bg-white/10 text-[var(--text-primary)]">
                          {cap.icon}
                        </div>
                      </div>

                      <h3
                        className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-200 ${
                          isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                        }`}
                      >
                        {cap.title}
                      </h3>

                      <p className="mt-3 text-base sm:text-lg font-medium text-[var(--text-primary)]/90 leading-snug">
                        {cap.summary}
                      </p>

                      <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl">
                        {cap.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-subtle)] text-[var(--text-secondary)] rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Architectural Visual & Deliverables */}
                  <div className="lg:col-span-5 bg-[var(--surface)] dark:bg-[#181522] rounded-xl p-6 border border-[var(--border-subtle)] flex flex-col justify-between transition-colors duration-500 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                          Architecture // {cap.visualSpec.type}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>

                      {/* Technical Metric Cards */}
                      <div className="grid grid-cols-3 gap-2 mb-5">
                        {cap.visualSpec.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="bg-[var(--bg-primary)] dark:bg-[#12101A] p-2.5 rounded-lg border border-[var(--border-subtle)] text-center transition-colors duration-500"
                          >
                            <span className="block text-[10px] uppercase font-mono text-[var(--text-muted)]">
                              {m.label}
                            </span>
                            <span className="block text-xs font-semibold text-[var(--text-primary)] mt-0.5">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Key Deliverables */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                          Standard Deployments:
                        </span>
                        {cap.deliverables.map((d, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-[var(--text-secondary)]">
                            <Check className="w-3.5 h-3.5 text-zevats-purple dark:text-zevats-lavender flex-shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                      <span className="text-xs font-mono text-[var(--text-muted)]">Production Standard</span>
                      <div className="inline-flex items-center text-xs font-medium text-zevats-purple dark:text-zevats-lavender">
                        <span>Ready for integration</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
