"use client";

import React from "react";
import { ShieldCheck, Zap, Compass } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[var(--bg-primary)] relative border-b border-[var(--border-subtle)] transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-4 transition-colors duration-500">
            About Zevats
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.18] transition-colors duration-500">
            A technology studio building what comes next.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal transition-colors duration-500">
            Zevats builds software, AI systems and automation for businesses that want to work differently. We combine product thinking, engineering and applied AI to turn ideas and operational challenges into useful technology.
          </p>
        </div>

        {/* Studio Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[var(--border-subtle)] transition-colors duration-500">
          <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] transition-colors duration-500">
            <div className="p-2 w-fit rounded-md bg-purple-50 dark:bg-purple-950/60 text-zevats-purple dark:text-zevats-lavender mb-3 border border-purple-200/50 dark:border-purple-800/40">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Applied Pragmatism</h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We build systems that generate immediate business utility rather than endless theoretical experiments.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] transition-colors duration-500">
            <div className="p-2 w-fit rounded-md bg-purple-50 dark:bg-purple-950/60 text-zevats-purple dark:text-zevats-lavender mb-3 border border-purple-200/50 dark:border-purple-800/40">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Production Reliability</h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Every interface, queue, and database transaction is engineered to withstand scale and real-world edge cases.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] transition-colors duration-500">
            <div className="p-2 w-fit rounded-md bg-purple-50 dark:bg-purple-950/60 text-zevats-purple dark:text-zevats-lavender mb-3 border border-purple-200/50 dark:border-purple-800/40">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Product Co-Design</h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We partner directly with operational teams to ensure the technology integrates seamlessly into daily habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
