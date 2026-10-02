"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ExpandablePanel } from "@/components/ui/ExpandablePanel";

interface Principle {
  num: string;
  statement: string;
  substatement: string;
  elaboration: string;
}

const principles: Principle[] = [
  {
    num: "01",
    statement: "Start with the problem.",
    substatement: "Technology comes second.",
    elaboration:
      "We never shoehorn fashionable frameworks or modern hype where a simpler, more dependable solution exists. The operational business constraint dictates the engineering architecture, never the other way around.",
  },
  {
    num: "02",
    statement: "Make complexity disappear.",
    substatement: "Users should experience simplicity, not the engineering underneath.",
    elaboration:
      "A system may coordinate asynchronous queues, vector embeddings, and multi-tenant databases behind the scenes, but for the operator sitting in front of the screen, the experience must feel effortless, instant, and obvious.",
  },
  {
    num: "03",
    statement: "Use AI with intent.",
    substatement: "Not every problem needs AI.",
    elaboration:
      "Predictable deterministic algorithms beat probabilistic models every single day when business rules are clear. We only deploy machine intelligence where cognitive adaptability genuinely removes human friction.",
  },
  {
    num: "04",
    statement: "Build for what comes next.",
    substatement: "Products should evolve rather than become technical debt.",
    elaboration:
      "We write strict, typed, self-documenting code with decoupled interfaces. We design architectures that can gracefully adapt as your organization grows, without requiring costly ground-up rewrites.",
  },
];

export const PrinciplesSection: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  return (
    <section className="py-24 md:py-36 bg-[var(--bg-secondary)] relative border-b border-[var(--border-subtle)] transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-3 transition-colors duration-500">
            Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-500">
            How we think
          </h2>
        </div>

        {/* Editorial Expansion Treatment (Section 18) */}
        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {principles.map((p, idx) => {
            const isActive = activePrinciple === idx;

            return (
              <div
                key={p.num}
                onClick={() => setActivePrinciple(idx)}
                className={`group py-8 md:py-10 transition-colors duration-200 cursor-pointer ${
                  isActive ? "bg-[var(--surface)]/90 px-4 md:px-6 rounded-xl" : "hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-baseline space-x-6">
                    <span className="text-xs font-mono font-bold text-zevats-purple dark:text-zevats-lavender opacity-80">
                      {p.num}
                    </span>
                    <div>
                      <h3
                        className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-200 ${
                          isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                        }`}
                      >
                        {p.statement}
                      </h3>
                      <p
                        className={`mt-1 text-base sm:text-lg font-medium transition-colors duration-200 ${
                          isActive ? "text-zevats-purple dark:text-zevats-lavender" : "text-[var(--text-muted)]"
                        }`}
                      >
                        {p.substatement}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] group-hover:text-zevats-purple dark:group-hover:text-zevats-lavender group-hover:border-zevats-purple transition-colors ml-4 flex-shrink-0">
                    {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                <ExpandablePanel isOpen={isActive} className="mt-6 pl-10 md:pl-12 max-w-2xl">
                  <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                    {p.elaboration}
                  </p>
                </ExpandablePanel>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
