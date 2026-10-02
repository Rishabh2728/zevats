"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileCheck,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

interface Phase {
  num: string;
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  inPractice: string;
  icon: React.ReactNode;
}

const phases: Phase[] = [
  {
    num: "1",
    id: "understand",
    title: "Understand",
    summary: "Understand the business, users, workflows and requirements.",
    deliverables: [
      "Operational workflow audit",
      "User problem definition",
      "Technical constraint mapping",
      "Success metrics alignment",
    ],
    inPractice:
      "We interview the stakeholders and users who will actually rely on the software daily. We map existing bottlenecks, data sources, and operational habits before drafting architecture.",
    icon: <Search className="w-6 h-6 text-zevats-purple" />,
  },
  {
    num: "2",
    id: "define",
    title: "Define",
    summary: "Turn the problem into a clear product scope and technical direction.",
    deliverables: [
      "Product scope & milestones",
      "Architecture specification",
      "Data model & schema plan",
      "Technology stack selection",
    ],
    inPractice:
      "We crystallize the requirements into an unambiguous product backlog. You get clear scope definitions and architecture diagrams, eliminating surprises and unnecessary scope creep.",
    icon: <FileCheck className="w-6 h-6 text-zevats-purple" />,
  },
  {
    num: "3",
    id: "design",
    title: "Design",
    summary: "Create the experience, interface and product architecture.",
    deliverables: [
      "Interactive UI/UX prototypes",
      "Design system & component library",
      "Responsive layout specs",
      "API contract specifications",
    ],
    inPractice:
      "We design intuitive, high-utility interfaces focused on clarity and speed. Every interaction is designed to make work faster, not just to look trendy in a design showcase.",
    icon: <Palette className="w-6 h-6 text-zevats-purple" />,
  },
  {
    num: "4",
    id: "build",
    title: "Build",
    summary: "Develop, test and integrate the product.",
    deliverables: [
      "Production-ready codebase",
      "Automated test coverage",
      "Third-party integrations",
      "Weekly staging deployments",
    ],
    inPractice:
      "Full-stack development by dedicated senior engineers. We push incremental updates to a private staging environment so you can test features as they are engineered.",
    icon: <Code2 className="w-6 h-6 text-zevats-purple" />,
  },
  {
    num: "5",
    id: "launch-evolve",
    title: "Launch & Evolve",
    summary: "Deploy, monitor, improve and continue developing as the business grows.",
    deliverables: [
      "Production deployment & DNS",
      "Performance monitoring & alerts",
      "Documentation & team training",
      "Iterative roadmap upgrades",
    ],
    inPractice:
      "Zero-downtime production deployment, telemetry setup, and documentation handoff. As real users provide feedback and your business expands, we iterate and scale the software.",
    icon: <Rocket className="w-6 h-6 text-zevats-purple" />,
  },
];

export default function ApproachPage() {
  const [selectedPhase, setSelectedPhase] = useState<string>("understand");

  const currentPhase = phases.find((p) => p.id === selectedPhase) || phases[0];

  return (
    <div className="relative">
      {/* Approach Hero */}
      <section className="py-16 md:py-24 border-b border-[var(--border-subtle)] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-20">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-4"
            >
              Our Engineering Method
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.12]"
            >
              From idea to working software.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal"
            >
              A straightforward process for turning business problems and ideas into useful digital products.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive 5-Stage Stepper & Inspector */}
      <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-20">
        
        {/* Step Indicator Header */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {phases.map((p) => {
            const isSelected = p.id === selectedPhase;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPhase(p.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                  isSelected
                    ? "border-zevats-purple bg-[var(--surface)] shadow-md"
                    : "border-[var(--border-subtle)] bg-[var(--bg-tertiary)] hover:border-zevats-purple/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-zevats-purple dark:text-zevats-lavender">
                    {p.num}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-zevats-purple" />}
                </div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {p.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-8 sm:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center">
                    {currentPhase.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zevats-purple dark:text-zevats-lavender block">
                      Stage {currentPhase.num}
                    </span>
                    <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
                      {currentPhase.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {currentPhase.summary}
                </p>

                <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <span className="text-xs font-mono uppercase tracking-wider text-zevats-purple dark:text-zevats-lavender font-semibold block mb-2">
                    In Practice
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {currentPhase.inPractice}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Deliverables */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-6">
                  Phase Deliverables & Milestones
                </span>
                <ul className="space-y-4">
                  {currentPhase.deliverables.map((item, idx) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/50 dark:border-purple-800/40 flex items-center justify-center text-xs font-mono font-semibold text-zevats-purple dark:text-zevats-lavender">
                        {idx + 1}
                      </div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                  <span>Transparent weekly progress</span>
                  <span className="text-zevats-purple dark:text-zevats-lavender">Direct engineer access</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Complete Process Flow Cards for Sequential Reading */}
        <div className="mt-20 pt-16 border-t border-[var(--border-subtle)]">
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-8">
            Complete Delivery Framework
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-zevats-purple dark:text-zevats-lavender block mb-2">
                    {p.num}
                  </span>
                  <h4 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {p.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <CTABanner />
    </div>
  );
}
