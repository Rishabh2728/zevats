"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Layers, BarChart3 } from "lucide-react";

interface PipelineStep {
  step: string;
  name: string;
  role: string;
  technicalSpec: string;
  outputExample: string;
}

const pipelineSteps: PipelineStep[] = [
  {
    step: "01",
    name: "INPUT",
    role: "Raw Signal Ingestion",
    technicalSpec: "Multi-modal document PDFs, unstructured natural user dialogue, real-time WebSockets, webhook payloads.",
    outputExample: "{ type: 'unstructured_query', payload: 'Rebalance logistics schedule for Hub 4' }",
  },
  {
    step: "02",
    name: "UNDERSTAND",
    role: "Semantic Extraction & Intent",
    technicalSpec: "Tokenization, schema extraction, entity identification, contextual disambiguation against organizational ontology.",
    outputExample: "{ intent: 'reschedule_logistics', entity_id: 'hub_04', confidence: 0.992 }",
  },
  {
    step: "03",
    name: "REASON",
    role: "Deterministic Policy & Context",
    technicalSpec: "RAG retrieval from internal knowledge bases, constraint verification, business policy checks, multi-step planning.",
    outputExample: "{ constraints: ['max_driver_hours_ok', 'dock_available'], plan: ['dispatch_truck_08'] }",
  },
  {
    step: "04",
    name: "ACT",
    role: "Transactional Tool Execution",
    technicalSpec: "Asynchronous API calls, database writes with rollback safety, secure external webhook triggers, verified side-effects.",
    outputExample: "EXECUTE api.logistics.reassign(driver_id='D-91', route='R-14') -> 200 OK",
  },
  {
    step: "05",
    name: "RESULT",
    role: "Verified Business Outcome",
    technicalSpec: "Audited ledger logging, sub-second client state update, deterministic structured JSON response.",
    outputExample: "{ status: 'complete', execution_time: '142ms', audit_hash: '0x8f2a...c4' }",
  },
];

const pillars = [
  {
    title: "Agents",
    desc: "Autonomous software workers operating with strict guardrails, explicit tools, and audited memory.",
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "Automation",
    desc: "Replacing repetitive manual spreadsheets and manual handoffs with resilient event-driven background flows.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Intelligent Interfaces",
    desc: "Natural-language query surfaces, contextual search bars, and self-guiding enterprise software.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Data Intelligence",
    desc: "Extracting actionable structured data from messy PDFs, emails, call audio, and historical records.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

export const AISection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Default to "REASON"

  const activeStep = pipelineSteps[activeStepIndex];

  return (
    <section id="approach" className="py-24 md:py-36 bg-[var(--bg-primary)] relative border-b border-[var(--border-subtle)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-3 transition-colors duration-500">
            Applied Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-500">
            AI, when it actually helps.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal transition-colors duration-500">
            We don’t add AI because it is fashionable. We use it where intelligence can remove friction, automate work or create a better product.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-zevats-purple/50 transition-all duration-300 shadow-sm"
            >
              <div className="p-2.5 w-fit rounded-lg bg-purple-50 dark:bg-purple-950/60 text-zevats-purple dark:text-zevats-lavender mb-4 border border-purple-200/50 dark:border-purple-800/40">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{p.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Sophisticated Diagrammatic Pipeline */}
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6 sm:p-10 shadow-sm transition-colors duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[var(--border-subtle)]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zevats-purple dark:text-zevats-lavender font-semibold">
                System Specification // Pipeline Model
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mt-1">
                Deterministic Agent Execution Flow
              </h3>
            </div>
            <span className="mt-2 sm:mt-0 text-xs font-mono text-[var(--text-muted)]">
              Click any stage to inspect execution trace
            </span>
          </div>

          {/* Pipeline Stepper (Horizontal on desktop, stack on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {pipelineSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.name}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 relative ${
                    isActive
                      ? "bg-purple-50 dark:bg-[#201B2C] border-zevats-purple text-zevats-purple dark:text-zevats-lavender shadow-sm ring-1 ring-zevats-purple"
                      : "bg-[var(--bg-primary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-semibold opacity-70">
                      {step.step}
                    </span>
                    {idx < pipelineSteps.length - 1 && (
                      <ArrowRight className="hidden sm:block w-3.5 h-3.5 opacity-40" />
                    )}
                  </div>
                  <span className={`block text-sm font-semibold tracking-wider font-mono ${isActive ? "text-[var(--text-primary)] font-bold" : "text-[var(--text-muted)]"}`}>
                    {step.name}
                  </span>
                  <span className="block text-[11px] text-[var(--text-muted)] mt-1 truncate">
                    {step.role}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Inspector */}
          <motion.div
            key={activeStep.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-[#0D0B12] text-white p-6 sm:p-8 border border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60 font-semibold">
                  STAGE {activeStep.step}
                </span>
                <span className="text-lg font-semibold tracking-wide text-[#F7F4FC]">
                  {activeStep.name} — {activeStep.role}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-400">Status: Deterministic Guarded</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              <div className="lg:col-span-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Technical Architecture
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {activeStep.technicalSpec}
                </p>
              </div>

              <div className="lg:col-span-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 block mb-2">
                  Live Runtime Payload Preview
                </span>
                <pre className="p-3.5 rounded-lg bg-[#15121E] border border-white/5 text-[11px] font-mono text-emerald-400 overflow-x-auto">
                  <code>{activeStep.outputExample}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
