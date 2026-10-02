"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Sparkles, Terminal, Shield, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  overview: string;
  engineeringFocus: string;
  techStack: string[];
  features: string[];
  visualType: "image" | "aura-visual" | "campus-visual" | "society-visual";
}

const projects: Project[] = [
  {
    id: "anergina",
    num: "01",
    title: "ANERGINA",
    subtitle: "Automotive technology platform.",
    category: "Automotive Engineering & Telemetry",
    image: "/projects/anergina/design-mockup.png",
    overview:
      "A high-performance automotive software platform engineered to handle complex vehicular telemetry, real-time performance analytics, aerodynamic simulation models, and modular diagnostic interfaces.",
    engineeringFocus:
      "Engineered with a high-throughput data processing pipeline handling low-latency telemetry streams, paired with dynamic WebGL visualizations and responsive diagnostic dashboards.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Telemetry APIs", "WebGL"],
    features: [
      "Real-time sensor data ingest and processing",
      "Dynamic aerodynamic simulation visualization",
      "Multi-module vehicle diagnostic suite",
      "Field-tested responsive operator dashboard",
    ],
    visualType: "image",
  },
  {
    id: "aura",
    num: "02",
    title: "AURA",
    subtitle: "Autonomous voice-first AI assistant.",
    category: "Voice Intelligence & Agentic Runtime",
    image: "/brand/zevats-logo.png",
    overview:
      "A voice-first intelligent assistant system built for low-latency verbal dialogue, dynamic context window management, and autonomous tool calling across external APIs.",
    engineeringFocus:
      "Zero-overhead streaming pipeline connecting full-duplex audio processing with asynchronous LLM tool execution, eliminating perceptible conversational lag.",
    techStack: ["Python", "FastAPI", "WebSockets", "LLM Orchestration", "Whisper", "Edge Inference"],
    features: [
      "Sub-250ms conversational turnaround",
      "Stateful short & long-term memory retrieval",
      "Deterministic tool invocation with validation",
      "Interruptible voice streaming protocol",
    ],
    visualType: "aura-visual",
  },
  {
    id: "campusops",
    num: "03",
    title: "CAMPUSOPS",
    subtitle: "Education management platform.",
    category: "Enterprise Institutional Software",
    image: "/brand/zevats-logo.png",
    overview:
      "An end-to-end institutional operating platform orchestrating complex multi-campus admissions, scheduling matrices, academic grade calculation, and faculty resource allocation.",
    engineeringFocus:
      "Scalable multi-tenant architecture with row-level security, optimized SQL queries for high-volume grade runs, and asynchronous report generation.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Automated conflict-free timetable engine",
      "Multi-tier role-based access control (RBAC)",
      "High-volume student gradebook processing",
      "Centralized campus resource scheduling",
    ],
    visualType: "campus-visual",
  },
  {
    id: "society-operations",
    num: "04",
    title: "SOCIETY OPERATIONS",
    subtitle: "Residential community management system.",
    category: "Operations & Facility Management",
    image: "/brand/zevats-logo.png",
    overview:
      "A modern operations platform for residential complexes, integrating real-time visitor authorization, automated maintenance ticketing, vendor dispatches, and financial ledger consolidation.",
    engineeringFocus:
      "Event-driven architecture with instant push notification delivery, biometric gate hardware synchronization, and audit-compliant transactional billing.",
    techStack: ["TypeScript", "React Native", "Next.js", "PostgreSQL", "MQTT", "Cloudflare Workers"],
    features: [
      "Real-time digital pass and gate authorization",
      "Automated maintenance dispatch with SLA tracking",
      "Consolidated community billing & ledger audits",
      "Resident communication & amenity reservation",
    ],
    visualType: "society-visual",
  },
];

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-36 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-[var(--border-subtle)] transition-colors duration-500">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-3 transition-colors duration-500">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-500">
              Selected work
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[var(--text-secondary)] max-w-md text-sm md:text-base leading-relaxed transition-colors duration-500">
            Real products. Real systems. Real problems. Practical software and applied intelligence deployed into demanding operational environments.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => setSelectedProject(project)}
                data-cursor="project"
                className="group cursor-pointer rounded-2xl border border-[var(--border-subtle)] hover:border-zevats-purple/50 bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-[0_16px_40px_rgba(123,44,246,0.12)] relative"
              >
                {/* Subtle purple illumination on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-zevats-purple/5 dark:bg-zevats-purple/10 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 relative z-10 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? "" : "lg:order-2"}`}>
                    <div>
                      {/* Category */}
                      <div className="flex items-center space-x-3 mb-5">
                        <span className="text-xs font-mono text-zevats-purple dark:text-zevats-lavender uppercase tracking-wider font-semibold">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="flex items-center justify-between group/title">
                        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-zevats-purple dark:group-hover:text-zevats-lavender transition-colors duration-200">
                          {project.title}
                        </h3>
                        <div className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-zevats-purple group-hover:text-white group-hover:border-zevats-purple transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className="mt-2 text-base sm:text-lg font-medium text-[var(--text-secondary)]">
                        {project.subtitle}
                      </p>

                      {/* Overview */}
                      <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                        {project.overview}
                      </p>

                      {/* Engineering Focus Card */}
                      <div className="mt-6 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] transition-colors duration-500">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zevats-purple dark:text-zevats-lavender font-semibold block mb-1">
                          Engineering Core
                        </span>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {project.engineeringFocus}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-black/5 dark:bg-white/5 text-[var(--text-secondary)] rounded-md border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual Composition Column: Image -> Dark Frame -> Subtle Border */}
                  <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[#0D0B12] group-hover:shadow-md transition-shadow">
                      {project.visualType === "image" ? (
                        <div className="relative w-full h-full bg-[#0D0B12] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                            <span>ANERGINA Telemetry Dashboard</span>
                            <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm border border-white/20">
                              Live System
                            </span>
                          </div>
                        </div>
                      ) : project.visualType === "aura-visual" ? (
                        /* AURA Tasteful Abstract Voice Architecture Composition */
                        <div className="relative w-full h-full bg-[#0D0B12] p-6 flex flex-col justify-between text-white overflow-hidden">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center space-x-2">
                              <Sparkles className="w-4 h-4 text-zevats-lavender" />
                              <span className="text-xs font-mono font-medium">AURA Voice Architecture</span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/50">
                              Sub-250ms
                            </span>
                          </div>

                          {/* Soundwave Acoustic Simulation */}
                          <div className="py-6 flex items-center justify-center space-x-1.5">
                            {[30, 48, 70, 95, 45, 60, 85, 110, 65, 80, 50, 90, 75, 40, 65, 85, 55, 30].map(
                              (height, i) => (
                                <motion.div
                                  key={i}
                                  animate={{
                                    height: [height * 0.4, height, height * 0.5],
                                    backgroundColor: i % 2 === 0 ? "#7B2CF6" : "#A78BFA",
                                  }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1.2 + (i % 5) * 0.2,
                                    ease: "easeInOut",
                                  }}
                                  className="w-1.5 rounded-full"
                                  style={{ height: `${height}px` }}
                                />
                              )
                            )}
                          </div>

                          {/* Pipeline nodes */}
                          <div className="grid grid-cols-3 gap-2 text-[11px] font-mono border-t border-white/10 pt-3">
                            <div className="bg-white/5 p-2 rounded border border-white/5">
                              <span className="text-zinc-500 block text-[9px]">AUDIO</span>
                              <span>WebSocket Full-Duplex</span>
                            </div>
                            <div className="bg-white/5 p-2 rounded border border-white/5">
                              <span className="text-zinc-500 block text-[9px]">INTENT</span>
                              <span>Contextual Parser</span>
                            </div>
                            <div className="bg-white/5 p-2 rounded border border-white/5">
                              <span className="text-zinc-500 block text-[9px]">ACTION</span>
                              <span className="text-purple-400">Execution Handler</span>
                            </div>
                          </div>
                        </div>
                      ) : project.visualType === "campus-visual" ? (
                        /* CAMPUSOPS Modular Institutional Grid Composition */
                        <div className="relative w-full h-full bg-[#12101A] p-6 flex flex-col justify-between text-white overflow-hidden">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center space-x-2">
                              <Terminal className="w-4 h-4 text-zevats-lavender" />
                              <span className="text-xs font-mono font-medium">CAMPUSOPS Academic Management</span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                              Multi-Tenant RBAC
                            </span>
                          </div>

                          {/* Scheduling Matrix Mock */}
                          <div className="py-4 space-y-2.5">
                            <div className="grid grid-cols-4 gap-2 text-[10px] font-mono text-zinc-400">
                              <div className="p-2 rounded bg-white/5 border border-white/5">
                                <span className="text-zinc-500 block text-[8px]">ADMISSIONS</span>
                                <span className="text-emerald-400 font-semibold">98.2% Auto-routed</span>
                              </div>
                              <div className="p-2 rounded bg-white/5 border border-white/5">
                                <span className="text-zinc-500 block text-[8px]">TIMETABLE</span>
                                <span className="text-purple-400 font-semibold">0 Conflicts</span>
                              </div>
                              <div className="p-2 rounded bg-white/5 border border-white/5">
                                <span className="text-zinc-500 block text-[8px]">EXAM CORE</span>
                                <span className="text-white font-semibold">Row-level RLS</span>
                              </div>
                              <div className="p-2 rounded bg-white/5 border border-white/5">
                                <span className="text-zinc-500 block text-[8px]">LATENCY</span>
                                <span className="text-emerald-400 font-semibold">42ms SQL</span>
                              </div>
                            </div>

                            <div className="p-3 rounded-lg bg-black/40 border border-purple-500/20 text-xs font-mono text-zinc-300 flex items-center justify-between">
                              <span>Query: Institutional gradebook aggregation</span>
                              <span className="text-purple-400 font-bold">12,400 Students / 1.8s</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/10 pt-3">
                            <span>Architecture: PostgreSQL + Node Microservices</span>
                            <span className="text-purple-400">SOC2 Prepared</span>
                          </div>
                        </div>
                      ) : (
                        /* SOCIETY OPERATIONS Residential Infrastructure Node Composition */
                        <div className="relative w-full h-full bg-[#0D0B12] p-6 flex flex-col justify-between text-white overflow-hidden">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center space-x-2">
                              <Shield className="w-4 h-4 text-purple-400" />
                              <span className="text-xs font-mono font-medium">SOCIETY OPERATIONS Access & Operations</span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                              Online • 2,400 Units
                            </span>
                          </div>

                          {/* Event Timeline Simulation */}
                          <div className="space-y-2 py-3 font-mono text-xs">
                            <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                              <span className="text-zinc-300">Access: Gate Entry Authorization</span>
                              <span className="text-emerald-400 text-[11px]">Authorized in 120ms</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                              <span className="text-zinc-300">Dispatch: Facility Maintenance</span>
                              <span className="text-purple-300 text-[11px]">Technician Assigned</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                              <span className="text-zinc-300">Billing: Monthly Dues Ledger</span>
                              <span className="text-blue-300 text-[11px]">Synced with Bank API</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-white/10 pt-3">
                            <span>MQTT Gateway + Edge Verifier</span>
                            <span className="text-zinc-300">Resident Sync: Live</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study In-Depth Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--surface)] text-[var(--text-primary)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[var(--border-subtle)] p-6 sm:p-10 relative transition-colors duration-500"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[var(--text-secondary)] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xs font-mono text-zevats-purple dark:text-zevats-lavender uppercase tracking-wider font-semibold">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="text-base text-[var(--text-secondary)] mt-1">{selectedProject.subtitle}</p>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    System Architecture & Overview
                  </h4>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zevats-purple dark:text-zevats-lavender font-semibold mb-2">
                    Engineering Approach
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {selectedProject.engineeringFocus}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Key Architectural Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-zevats-purple dark:text-zevats-lavender flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-black/5 dark:bg-white/5 text-[var(--text-secondary)] rounded-md border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-zevats-purple hover:bg-zevats-vibrant text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
