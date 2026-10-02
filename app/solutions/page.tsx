"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";

interface BusinessProblemSolution {
  id: string;
  category: "presence-portals" | "operations" | "mobile-ai";
  tag: string;
  question: string;
  subhead: string;
  problem: string;
  approach: string;
  deliverables: string[];
  recommendedTech: string;
}

const businessProblems: BusinessProblemSolution[] = [
  {
    id: "digital-presence",
    category: "presence-portals",
    tag: "Digital Flagship",
    question: "Need a stronger digital presence?",
    subhead: "High-impact flagships and product websites that build authority.",
    problem:
      "Your current website looks outdated, fails to communicate what you actually do, or feels like a template. Qualified prospects visit but leave without inquiring because your digital surface does not reflect the maturity of your business.",
    approach:
      "We design and build bespoke digital flagships focused on editorial clarity, sub-second performance, and brand authority. Every section is written and structured to answer commercial questions and convert high-value buyers.",
    deliverables: [
      "Custom corporate flagship architecture",
      "High-converting product landing funnels",
      "Headless CMS integration for autonomous team updates",
      "Global edge deployment with sub-second page loads",
    ],
    recommendedTech: "Next.js · React · TypeScript · Tailwind CSS · Edge CDN",
  },
  {
    id: "customer-portal",
    category: "presence-portals",
    tag: "Client Portal",
    question: "Need a customer portal?",
    subhead: "Self-service authenticated hubs for clients and partners.",
    problem:
      "Your team spends excessive time answering emails about project status, manually emailing PDF invoices, and chasing file attachments. Customers expect a single, secure place to log in and manage their relationship with you.",
    approach:
      "We engineer dedicated, authenticated portals where your clients can view real-time project progress, approve documents, pay invoices, and download deliverables — directly connected to your internal database.",
    deliverables: [
      "Secure role-based authentication and team permissions",
      "Real-time project tracking and milestone status",
      "Integrated billing, invoice history, and Stripe payments",
      "Encrypted document storage and exchange",
    ],
    recommendedTech: "Next.js · PostgreSQL · Node.js · Stripe · AWS / Cloudflare",
  },
  {
    id: "manual-workflows",
    category: "operations",
    tag: "Automated Operations",
    question: "Need to replace manual workflows?",
    subhead: "Turn repetitive, error-prone tasks into reliable software.",
    problem:
      "Employees spend hours each day copying records between spreadsheets, re-entering data into multiple tools, reconciling receipts, and tracking progress across chaotic email threads.",
    approach:
      "We design automated workflow software that ingests data from forms or documents, validates inputs with strict business rules, and routes tasks automatically to the right person or tool.",
    deliverables: [
      "Custom review queues and multi-step approval workflows",
      "Automated document parsing and data ingestion",
      "Role-based task assignment with status timelines",
      "Comprehensive operational audit logs",
    ],
    recommendedTech: "TypeScript · Python · PostgreSQL · Redis Queue Workers",
  },
  {
    id: "custom-internal-system",
    category: "operations",
    tag: "Custom Internal System",
    question: "Need a business-specific internal system?",
    subhead: "Purpose-built operational software that matches your rules.",
    problem:
      "Off-the-shelf software doesn't fit your operational model. You are forced to pay expensive per-seat SaaS licenses for features you don't need while constantly creating clumsy workarounds for features you do need.",
    approach:
      "We build bespoke software tailored strictly around your proprietary business rules, calculations, and data structures. You own 100% of the code, database, and intellectual property with zero per-seat licensing penalties.",
    deliverables: [
      "Bespoke operational consoles and field management tools",
      "Proprietary calculation and pricing engines",
      "Direct database control and full schema ownership",
      "Unrestricted scalability without per-seat SaaS costs",
    ],
    recommendedTech: "Full-Stack TypeScript · Node / Python · PostgreSQL · Docker",
  },
  {
    id: "mobile-access",
    category: "mobile-ai",
    tag: "Mobile Application",
    question: "Need mobile access for your customers or team?",
    subhead: "Native iOS and Android experiences designed for everyday utility.",
    problem:
      "Your field team or customers need to complete workflows away from their desks, but your web platform is awkward on mobile, fails without Wi-Fi, and cannot leverage device hardware.",
    approach:
      "We build high-performance mobile applications with offline-first synchronization. Staff can scan barcodes, take photos, capture signatures, and record data on-site, with automatic background sync when connectivity resumes.",
    deliverables: [
      "Native iOS and Android applications",
      "Offline-first local SQLite caching and conflict resolution",
      "Hardware integration: camera, biometric login, GPS, scanning",
      "Actionable push notifications connecting to relevant screens",
    ],
    recommendedTech: "React Native · Swift · Kotlin · SQLite · Cloud Sync",
  },
  {
    id: "ai-integration",
    category: "mobile-ai",
    tag: "Applied Intelligence",
    question: "Need AI integrated into an existing product?",
    subhead: "Applied intelligence where it genuinely saves time.",
    problem:
      "You want to leverage modern AI, but generic chatbots feel like useless gimmicks and don't solve actual business bottlenecks like messy document extraction or slow internal search.",
    approach:
      "We integrate applied machine intelligence directly into your existing software workflows: extracting structured data from PDFs, enabling natural language search over company archives, and assisting human decisions.",
    deliverables: [
      "Structured data extraction from invoices, contracts, and claims",
      "Semantic knowledge retrieval across private documents",
      "Contextual in-app assistants that guide multi-step tasks",
      "Automated triage and routing of incoming requests",
    ],
    recommendedTech: "Python · FastAPI · LLM Orchestration · Vector Search · Embeddings",
  },
  {
    id: "connect-systems",
    category: "mobile-ai",
    tag: "System Integration",
    question: "Need multiple systems to work together?",
    subhead: "Synchronize disconnected software into a unified flow.",
    problem:
      "Your CRM, ERP, accounting software, and operational tools don't talk to each other. Information is manually keyed in multiple times, leading to discrepancies, delayed billing, and messy reports.",
    approach:
      "We build robust, bi-directional API pipelines and webhook listeners that connect your tools into a single operational loop. When an event happens in one system, all connected tools update automatically.",
    deliverables: [
      "Bi-directional CRM & ERP data synchronization",
      "Automated billing triggers upon project status updates",
      "Webhook listeners and background queue workers",
      "Centralized logging and automated error alerting",
    ],
    recommendedTech: "REST & GraphQL APIs · Webhooks · Redis · Node.js Microservices",
  },
];

interface PrincipleItem {
  id: string;
  title: string;
  description: string;
}

const durablePrinciples: PrincipleItem[] = [
  {
    id: "ownership",
    title: "100% Client Ownership",
    description:
      "Every line of source code, database architecture, and API integration belongs exclusively to your company. Zero vendor lock-in or recurring per-seat fees.",
  },
  {
    id: "standards",
    title: "Zero Middleware Lock-In",
    description:
      "Built with durable, modern open standards — PostgreSQL, TypeScript, Node, and Python — so any capable engineering team can maintain and extend your software.",
  },
  {
    id: "real-operations",
    title: "Engineered Around Real Operations",
    description:
      "Designed precisely around your commercial calculations, approval hierarchies, and operational exceptions, rather than forcing you into rigid generic templates.",
  },
];

export default function SolutionsPage() {
  const [openId, setOpenId] = useState<string>("digital-presence");
  const [activeCategory, setActiveCategory] = useState<"all" | "presence-portals" | "operations" | "mobile-ai">("all");
  const [activePrincipleIdx, setActivePrincipleIdx] = useState<number>(0);

  const toggleQuestion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  const filteredProblems =
    activeCategory === "all"
      ? businessProblems
      : businessProblems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative bg-[#FAF9F6] text-[#111111] overflow-hidden">
      {/* 1. HERO SECTION (EDITORIAL SPREAD MATCHING ABOUT & SERVICES) */}
      <section className="w-full relative pt-6 sm:pt-8 md:pt-12 pb-14 sm:pb-18 md:pb-20 border-b border-[rgba(17,17,17,0.08)]">
        {/* Subtle Ambient Purple Glow */}
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
              <span>Problem & Solution Matrix</span>
            </motion.div>

            {/* Large Editorial Headline with Purple Focus */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-[#111111] leading-[0.98] mb-8"
            >
              Technology built around real{" "}
              <span className="text-zevats-purple relative inline-block">
                business problems.
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
              We look past technology jargon to focus on what your business actually needs: launching new digital products, replacing manual overhead, connecting existing tools, and making operations faster.
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
                className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-zevats-purple hover:shadow-[0_4px_20px_rgba(123,44,246,0.3)] px-6 py-3.5 rounded-sm transition-all duration-200 group min-h-[44px] whitespace-nowrap"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-zevats-purple transition-colors duration-200 py-3.5 px-6 sm:px-4 group min-h-[44px] border border-[rgba(17,17,17,0.12)] sm:border-transparent rounded-sm whitespace-nowrap"
              >
                <span>Explore disciplines</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE 7 BUSINESS SOLUTIONS MATRIX */}
      <section className="w-full relative py-12 sm:py-16 md:py-24">
        <div className="zevats-container">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(17,17,17,0.08)] mb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>Browse by Challenge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[#111111]">
              Select a challenge to view our engineered solution
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Solutions (7)" },
              { id: "presence-portals", label: "Flagships & Portals" },
              { id: "operations", label: "Workflows & Operations" },
              { id: "mobile-ai", label: "Mobile, AI & APIs" },
            ].map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-sm border transition-all duration-200 ${
                    isSelected
                      ? "bg-[#111111] text-white border-[#111111] shadow-sm"
                      : "bg-[#FAF9F6] text-[#686868] border-[rgba(17,17,17,0.12)] hover:border-zevats-purple hover:text-[#111111]"
                  }`}
                >
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple inline-block mr-1.5 align-middle" />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Accordion Rows */}
        <div className="flex flex-col divide-y divide-[rgba(17,17,17,0.08)]">
          {filteredProblems.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div key={item.id} className="py-6 sm:py-8 transition-colors">
                {/* Clickable Row Header */}
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full text-left flex items-start justify-between gap-6 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zevats-purple">
                        {item.tag}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] transition-colors duration-200 ${
                        isOpen
                          ? "text-zevats-purple"
                          : "text-[#111111] group-hover:text-zevats-purple"
                      }`}
                    >
                      {item.question}
                    </h3>

                    <p className="text-sm sm:text-base text-[#686868] font-normal max-w-3xl">
                      {item.subhead}
                    </p>
                  </div>

                  {/* Toggle Button */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-sm border flex items-center justify-center shrink-0 mt-1 transition-all duration-200 ${
                      isOpen
                        ? "bg-zevats-purple text-white border-zevats-purple shadow-[0_0_15px_rgba(123,44,246,0.35)]"
                        : "bg-[#FAF9F6] text-[#111111] border-[rgba(17,17,17,0.15)] group-hover:border-zevats-purple group-hover:text-zevats-purple"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Detailed Solution */}
                <ExpandablePanel isOpen={isOpen} className="pt-5 sm:pt-6 pb-2">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 p-4 sm:p-8 md:p-10 rounded-sm bg-[#FFFFFF] border border-[rgba(17,17,17,0.08)] border-l-4 border-l-zevats-purple shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                    {/* Challenge & Approach Column */}
                    <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold block mb-2">
                          The Challenge
                        </span>
                        <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                          {item.problem}
                        </p>
                      </div>

                      <div className="p-4 sm:p-6 rounded-sm bg-zevats-purple/[0.03] border border-zevats-purple/15 space-y-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-zevats-purple font-semibold block">
                          How Zevats Solves It
                        </span>
                        <p className="text-sm sm:text-base text-[#111111] leading-relaxed font-normal">
                          {item.approach}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables & Technology Column */}
                    <div className="lg:col-span-6 space-y-5 sm:space-y-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold block mb-3">
                          Typical Deliverables
                        </span>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {item.deliverables.map((del) => (
                            <li key={del} className="flex items-start space-x-2.5 sm:space-x-3 text-xs sm:text-sm text-[#111111]">
                              <div className="w-4 h-4 rounded-full bg-zevats-purple/15 text-zevats-purple flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </div>
                              <span className="font-medium text-[#222222]">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 sm:pt-5 border-t border-[rgba(17,17,17,0.08)] flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-[#686868]">
                          <span className="font-semibold text-[#111111]">Architecture:</span>{" "}
                          <span>{item.recommendedTech}</span>
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-zevats-purple hover:text-zevats-purple-light transition-colors group min-h-[44px]"
                        >
                          <span>Discuss this solution</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ExpandablePanel>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* 3. DARK VISUAL CENTERPIECE (MATCHING ABOUT BELIEFS & SERVICES DARK SECTION) */}
      <section className="w-full py-16 sm:py-20 md:py-28 bg-[#0E0E10] text-[#FAF9F6] relative overflow-hidden border-t border-[rgba(255,255,255,0.06)]">
        {/* Background Ambient Purple Glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-zevats-purple/[0.08] blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />

        <div className="zevats-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Sticky Editorial Anchor */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#888888] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
                <span>Durable Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#FAF9F6] leading-[1.04]">
                Software built to solve the bottleneck, not introduce{" "}
                <span className="text-zevats-purple relative inline-block">
                  new ones.
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/40" />
                </span>
              </h2>

              <p className="text-base sm:text-xl text-[#999999] font-normal leading-relaxed">
                We engineer systems designed for commercial longevity: 100% intellectual property ownership, zero recurring per-seat fees, and clean architectures any competent team can maintain.
              </p>
            </div>

            {/* Right Column: Three Interactive Principle Cards */}
            <div className="lg:col-span-7 space-y-4 pt-4 lg:pt-0">
              {durablePrinciples.map((item, idx) => {
                const isActive = activePrincipleIdx === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActivePrincipleIdx(idx)}
                    onMouseEnter={() => setActivePrincipleIdx(idx)}
                    className={`p-6 sm:p-8 rounded-sm transition-all duration-300 cursor-pointer relative ${
                      isActive
                        ? "bg-[#16161A] border-l-4 border-zevats-purple shadow-[0_0_30px_-10px_rgba(123,44,246,0.3)]"
                        : "bg-[#111113]/40 hover:bg-[#141417] border-l-2 border-[rgba(255,255,255,0.08)] opacity-60 hover:opacity-90"
                    }`}
                  >
                    <h3
                      className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-200 ${
                        isActive ? "text-white" : "text-[#D0CFC8]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-base sm:text-lg leading-relaxed transition-colors duration-200 ${
                        isActive ? "text-[#E2DFD8]" : "text-[#777777]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA (MATCHING ABOUT CTA & SERVICES CTA) */}
      <section className="w-full relative py-20 sm:py-24 md:py-32 bg-[#FAF9F6] text-[#111111] overflow-hidden border-t border-[rgba(17,17,17,0.08)]">
        {/* Background Architectural Connected Workflow / Convergence Diagram */}
        <div className="hidden md:block absolute right-0 bottom-0 w-[520px] h-[360px] pointer-events-none opacity-20 -z-0">
          <svg viewBox="0 0 420 280" fill="none" className="w-full h-full">
            {/* Input Problem Nodes */}
            <circle cx="60" cy="70" r="3" fill="#7B2CF6" />
            <circle cx="60" cy="140" r="3" fill="#7B2CF6" />
            <circle cx="60" cy="210" r="3" fill="#7B2CF6" />
            {/* Converging Pathways to Solution Nexus */}
            <path
              d="M 60 70 C 160 70, 200 140, 260 140"
              stroke="#7B2CF6"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 60 210 C 160 210, 200 140, 260 140"
              stroke="#7B2CF6"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 60 140 L 260 140"
              stroke="#7B2CF6"
              strokeWidth="1.5"
            />
            {/* Engineering Nexus */}
            <circle cx="260" cy="140" r="5" fill="#7B2CF6" />
            <circle cx="260" cy="140" r="10" stroke="#7B2CF6" strokeWidth="1" strokeDasharray="3 3" />
            {/* Unified Solution Delivery Line */}
            <path
              d="M 260 140 L 390 140"
              stroke="#7B2CF6"
              strokeWidth="2.5"
            />
            <circle cx="390" cy="140" r="6" fill="#7B2CF6" />
          </svg>
        </div>

        <div className="zevats-container">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 relative z-10">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-[#111111] leading-[0.98]">
              Have a problem that requires a{" "}
              <span className="text-zevats-purple relative inline-block">
                custom solution?
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/40" />
              </span>
            </h2>

            <p className="text-lg sm:text-2xl text-[#555555] max-w-2xl mx-auto font-normal leading-relaxed">
              Whether you need to replace manual spreadsheets, build a customer portal, or connect disconnected tools, let&apos;s talk through your workflow.
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
                href="/services"
                className="w-full sm:w-auto justify-center text-center inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-zevats-purple transition-colors duration-200 py-3.5 sm:py-4 px-6 sm:px-4 group min-h-[46px] border border-[rgba(17,17,17,0.15)] sm:border-transparent hover:border-zevats-purple/30 rounded-sm whitespace-nowrap"
              >
                <span>Explore disciplines</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
