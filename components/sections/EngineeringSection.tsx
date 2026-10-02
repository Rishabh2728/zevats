"use client";

import React, { useState } from "react";

interface TechItem {
  name: string;
  category: string;
  role: string;
  runtimeDetail: string;
}

const techItems: TechItem[] = [
  { name: "AI / LLMs", category: "Intelligence", role: "Agent Runtime & RAG", runtimeDetail: "Evaluated & deterministic execution" },
  { name: "Python", category: "Intelligence", role: "Data & ML Pipelines", runtimeDetail: "FastAPI, asynchronous event loops" },
  { name: "TypeScript", category: "Frontend", role: "End-to-End Type Safety", runtimeDetail: "Zero runtime type regressions" },
  { name: "React", category: "Frontend", role: "Component Architecture", runtimeDetail: "Concurrent rendering & state sync" },
  { name: "Next.js", category: "Frontend", role: "Hybrid Rendering & Edge", runtimeDetail: "Server components, minimal bundle size" },
  { name: "Node.js", category: "Backend", role: "High-Throughput Microservices", runtimeDetail: "Event-driven I/O streaming" },
  { name: "PostgreSQL", category: "Data", role: "Primary Relational Core", runtimeDetail: "ACID compliance, indexed queries, RLS" },
  { name: "MongoDB", category: "Data", role: "Flexible Document Store", runtimeDetail: "Horizontal scaling & rapid telemetry" },
  { name: "Redis", category: "Data", role: "In-Memory Caching & Queues", runtimeDetail: "Sub-millisecond pub/sub & session store" },
  { name: "Docker", category: "Infrastructure", role: "Containerization", runtimeDetail: "Reproducible hermetic deployments" },
  { name: "Cloud", category: "Infrastructure", role: "Distributed Hosting", runtimeDetail: "AWS / GCP / Cloudflare edge workers" },
  { name: "APIs", category: "Infrastructure", role: "Contracts & Integrations", runtimeDetail: "REST, GraphQL, gRPC, and WebSockets" },
];

export const EngineeringSection: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const activeTech = techItems.find((t) => t.name === hoveredTech);

  return (
    <section id="engineering" className="py-24 md:py-36 bg-[var(--bg-primary)] relative border-b border-[var(--border-subtle)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-3 transition-colors duration-500">
            Technical Rigor
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] transition-colors duration-500">
            Serious engineering underneath.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed transition-colors duration-500">
            From frontend experiences to backend infrastructure and AI systems, every product is built with maintainability, performance and growth in mind.
          </p>
        </div>

        {/* Interactive Technology Matrix (Editorial Spec Sheet, Section 17) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {techItems.map((tech) => {
              const isHovered = hoveredTech === tech.name;

              return (
                <div
                  key={tech.name}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`p-5 rounded-xl border transition-all duration-200 cursor-default ${
                    isHovered
                      ? "bg-[var(--surface-hover)] border-zevats-purple shadow-[0_4px_20px_rgba(123,44,246,0.12)] -translate-y-0.5"
                      : "bg-[var(--surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                      {tech.category}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isHovered ? "bg-zevats-purple dark:bg-zevats-lavender" : "bg-transparent"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-lg font-semibold tracking-tight transition-colors duration-150 ${
                      isHovered ? "text-zevats-purple dark:text-zevats-lavender" : "text-[var(--text-primary)]"
                    }`}
                  >
                    {tech.name}
                  </h3>

                  <p className="mt-1 text-xs text-[var(--text-muted)] font-mono">{tech.role}</p>

                  {/* Micro Visual Response on Hover */}
                  <div
                    className={`mt-3 pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-zevats-deep dark:text-zevats-lavender transition-opacity duration-200 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {tech.runtimeDetail}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Engineering Principles & Specification Card */}
          <div className="lg:col-span-4 bg-[var(--surface)] rounded-2xl border border-[var(--border-subtle)] p-8 shadow-sm transition-colors duration-500">
            <span className="text-xs font-mono uppercase tracking-wider text-zevats-purple dark:text-zevats-lavender font-semibold block mb-4">
              Architecture Standards
            </span>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              {activeTech ? activeTech.name : "Production Quality Core"}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {activeTech
                ? `${activeTech.name} is utilized for ${activeTech.role.toLowerCase()}. Built with ${activeTech.runtimeDetail.toLowerCase()}.`
                : "We do not chase transient tech fads. We select proven, modern primitives that provide deterministic behavior, high throughput, and seamless long-term maintainability."}
            </p>

            <div className="space-y-4 pt-6 border-t border-[var(--border-subtle)] font-mono text-xs text-[var(--text-secondary)]">
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)]">CI/CD Pipeline</span>
                <span className="font-semibold text-[var(--text-primary)]">Automated Staging</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Type Guarantee</span>
                <span className="font-semibold text-[var(--text-primary)]">Strict TypeScript</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Data Isolation</span>
                <span className="font-semibold text-[var(--text-primary)]">Row-Level Security</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)]">Latency Budget</span>
                <span className="font-semibold text-zevats-purple dark:text-zevats-lavender">&lt;200ms p95</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
