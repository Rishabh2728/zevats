"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Step {
  num: string;
  name: string;
  headline: string;
  description: string;
  activities: string[];
}

const steps: Step[] = [
  {
    num: "01",
    name: "Understand",
    headline: "Uncover the actual operational constraint.",
    description:
      "We interview stakeholders, study existing data flows, and analyze day-to-day user friction. We prioritize clarity over assumptions to define the real problem before writing a single line of code.",
    activities: [
      "Operational workflow shadowing",
      "Data availability & quality audit",
      "Constraint & requirement mapping",
    ],
  },
  {
    num: "02",
    name: "Define",
    headline: "Architect the right system, not the most complicated one.",
    description:
      "We design the complete technical blueprint: database schemas, deterministic logic boundaries, model selection (only where needed), and interface contracts.",
    activities: [
      "System architecture blueprinting",
      "API & schema contract specification",
      "Prototype validation with core users",
    ],
  },
  {
    num: "03",
    name: "Build",
    headline: "Engineered with speed, tested with discipline.",
    description:
      "Full-stack implementation using modern production technologies. Weekly tangible releases, automated test suites, and strict performance benchmarking from day one.",
    activities: [
      "Modular full-stack development",
      "Deterministic pipeline unit & integration tests",
      "Continuous review staging environments",
    ],
  },
  {
    num: "04",
    name: "Launch",
    headline: "Guarded deployment into real business operations.",
    description:
      "Zero-downtime release accompanied by edge telemetry, automated error alerting, and staff onboarding. We ensure the software delivers instant value without operational hiccups.",
    activities: [
      "Canary & phased rollouts",
      "Live telemetry & latency instrumentation",
      "User handoff documentation & training",
    ],
  },
  {
    num: "05",
    name: "Evolve",
    headline: "Continuous optimization without accumulating technical debt.",
    description:
      "Software must adapt as your organization scales. We monitor real-world system bottlenecks, fine-tune models on domain data, and scale system capacity seamlessly.",
    activities: [
      "Performance & cost optimization",
      "Domain model fine-tuning & prompt audits",
      "Strategic roadmap expansion",
    ],
  },
];

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const active = steps[activeStepIndex];

  return (
    <section className="py-24 md:py-36 bg-[var(--bg-secondary)] relative border-b border-[var(--border-subtle)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-3 transition-colors duration-500">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-500">
            From problem to product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed transition-colors duration-500">
            A disciplined, transparent delivery framework that eliminates guesswork and delivers production software on time.
          </p>
        </div>

        {/* Desktop Interactive Stepper */}
        <div className="hidden lg:block">
          {/* Step Timeline Bar */}
          <div className="relative mb-12">
            {/* Background line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/10 dark:bg-white/10 -translate-y-1/2" />
            {/* Active progress line */}
            <motion.div
              className="absolute top-1/2 left-0 h-[2px] bg-zevats-purple -translate-y-1/2 shadow-[0_0_8px_rgba(123,44,246,0.5)]"
              animate={{
                width: `${(activeStepIndex / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Stepper Node Buttons */}
            <div className="relative flex justify-between">
              {steps.map((s, idx) => {
                const isActive = activeStepIndex === idx;
                const isPast = activeStepIndex > idx;

                return (
                  <button
                    key={s.num}
                    onClick={() => setActiveStepIndex(idx)}
                    className="group flex flex-col items-center focus:outline-none"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-zevats-purple text-white shadow-[0_0_0_6px_rgba(123,44,246,0.2)] scale-110"
                          : isPast
                          ? "bg-purple-100 dark:bg-purple-950/80 text-zevats-purple dark:text-zevats-lavender border border-purple-300 dark:border-purple-800"
                          : "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border-subtle)] group-hover:border-[var(--border-strong)]"
                      }`}
                    >
                      {s.num}
                    </div>
                    <span
                      className={`mt-3 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                        isActive ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Panel */}
          <motion.div
            key={active.num}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-10 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] grid grid-cols-12 gap-8 items-center shadow-sm transition-colors duration-500"
          >
            <div className="col-span-7">
              <span className="text-xs font-mono font-bold text-zevats-purple dark:text-zevats-lavender px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 border border-purple-200/50 dark:border-purple-800/40">
                PHASE {active.num}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] mt-3 tracking-tight">
                {active.headline}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
                {active.description}
              </p>
            </div>

            <div className="col-span-5 bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border-subtle)] shadow-sm transition-colors duration-500">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-3">
                Key Execution Deliverables:
              </span>
              <div className="space-y-2.5">
                {active.activities.map((act, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-[var(--text-primary)]">
                    <CheckCircle2 className="w-4 h-4 text-zevats-purple dark:text-zevats-lavender flex-shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Vertical Progression (Designed intentionally) */}
        <div className="lg:hidden space-y-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] transition-colors duration-500"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-zevats-purple text-white flex items-center justify-center font-mono text-xs font-bold">
                  {s.num}
                </span>
                <span className="text-base font-semibold text-[var(--text-primary)]">{s.name}</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">{s.headline}</h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] space-y-1.5">
                {s.activities.map((act, i) => (
                  <div key={i} className="flex items-center space-x-2 text-[11px] text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zevats-purple dark:text-zevats-lavender flex-shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
