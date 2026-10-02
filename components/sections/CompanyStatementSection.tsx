"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const CompanyStatementSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-3">
              Company Perspective
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.18]">
              Technology that works for the business.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <p className="text-lg sm:text-xl text-[var(--text-primary)] font-normal leading-relaxed">
              Zevats is a software and technology company building digital products, business applications and intelligent systems.
            </p>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
              We combine product thinking, design and engineering to turn ideas, business requirements and operational challenges into useful software that teams and customers rely on every day.
            </p>

            <div className="pt-4 flex items-center space-x-6 text-sm">
              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 font-semibold text-zevats-purple dark:text-zevats-lavender hover:underline"
              >
                <span>Read more about our company</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center space-x-1.5 font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <span>See business solutions</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
