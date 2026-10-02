"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Search, FileText, Cpu, ArrowUpRight } from "lucide-react";

const aiCapabilities = [
  {
    title: "AI Assistants",
    description: "Conversational assistants integrated with your internal knowledge base to answer inquiries and help users complete tasks.",
    icon: <MessageSquare className="w-5 h-5 text-zevats-purple" />,
  },
  {
    title: "Intelligent Search",
    description: "Semantic search that understands natural intent across vast archives, catalogs, and documentation.",
    icon: <Search className="w-5 h-5 text-zevats-purple" />,
  },
  {
    title: "Document Processing",
    description: "Automated extraction and classification of structured data from PDFs, invoices, forms, and contracts.",
    icon: <FileText className="w-5 h-5 text-zevats-lavender" />,
  },
  {
    title: "AI-Powered Workflows",
    description: "Decision-support tools that summarize reports, detect anomalies, and streamline routine approvals.",
    icon: <Cpu className="w-5 h-5 text-zevats-purple" />,
  },
];

export const AIPragmaticSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-3">
            Applied Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            AI where it makes sense.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            AI can make software more useful, but it is not the answer to every problem. We use it where it can improve products, reduce manual work or help people get things done faster.
          </p>
        </div>

        {/* 4 Focused Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiCapabilities.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] flex flex-col justify-between hover:border-zevats-purple/40 transition-colors shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zevats-purple dark:text-zevats-lavender font-semibold">
                  Applied Feature
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to solutions */}
        <div className="mt-10 flex items-center justify-between pt-6 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono">
          <span>Zero hype. Strict business utility.</span>
          <Link
            href="/solutions"
            className="text-zevats-purple dark:text-zevats-lavender hover:underline font-semibold inline-flex items-center space-x-1"
          >
            <span>See how we integrate AI into business solutions</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
