"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ZevatsLogo } from "../ui/ZevatsLogo";
import { ArrowUpRight, Mail, Phone, Linkedin } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Footer: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const easeTransition = [0.16, 1, 0.3, 1] as const;

  return (
    <footer className="bg-[#111111] text-[#F4F1EA] pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 border-t border-[rgba(244,241,234,0.08)] relative z-10 overflow-hidden">
      {/* Subtle top architectural line highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zevats-purple/20 to-transparent pointer-events-none" />

      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-architectural-dark opacity-15 pointer-events-none" />

      {/* Controlled subtle ambient purple depth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-zevats-purple/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="zevats-container relative z-10">
        {/* Main Composition: Brand Statement on Left, Navigation & Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-14 sm:pb-16 md:pb-20">
          
          {/* Left Column: Brand Identity & Large Closing Statement */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: easeTransition }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <Link href="/" className="inline-block" aria-label="Zevats Home">
              <ZevatsLogo size="md" variant="white" />
            </Link>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-[-0.035em] text-[#F4F1EA] leading-[1.08] max-w-xl">
              Software and technology for{" "}
              <span className="text-zevats-purple relative inline-block">
                businesses.
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-zevats-purple/40" />
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Navigation & Contact Sub-Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12 lg:pt-2">
            
            {/* 1. Navigation Column */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.12, ease: easeTransition }}
            >
              <span className="text-xs tracking-wider text-[#8E8A82] font-semibold block mb-5">
                Navigation
              </span>
              <ul className="space-y-3.5 text-sm sm:text-base font-normal">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-[#A8A49E] hover:text-[#F4F1EA] transition-colors duration-200"
                    >
                      <span className="w-0 opacity-0 group-hover:w-2 group-hover:opacity-100 group-hover:mr-2 h-[1.5px] bg-zevats-purple transition-all duration-200 ease-out shrink-0" />
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 2. Contact Column */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.18, ease: easeTransition }}
            >
              <span className="text-xs tracking-wider text-[#8E8A82] font-semibold block mb-5">
                Get in touch
              </span>
              <div className="space-y-3.5 text-sm sm:text-base font-normal">
                {/* Email */}
                <div>
                  <a
                    href="mailto:hello@zevats.com"
                    className="group inline-flex items-center space-x-2.5 text-[#F4F1EA] hover:text-zevats-purple transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 text-zevats-purple shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span className="font-medium underline-offset-4 group-hover:underline">
                      hello@zevats.com
                    </span>
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <a
                    href="tel:9306909708"
                    className="group inline-flex items-center space-x-2.5 text-[#F4F1EA] hover:text-zevats-purple transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 text-zevats-purple shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span className="font-medium underline-offset-4 group-hover:underline">
                      93069 09708
                    </span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="pt-1">
                  <a
                    href="https://linkedin.com/company/zevats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 text-[#A8A49E] hover:text-[#F4F1EA] transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-zevats-purple/90 shrink-0 transition-all duration-200 group-hover:text-zevats-purple group-hover:scale-110" />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zevats-purple" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Final Footer Row: Subtle Divider & Understated Metadata */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-8 border-t border-[rgba(244,241,234,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#686868] gap-3 sm:gap-4 font-normal"
        >
          <p>© 2026 Zevats. All rights reserved.</p>
          <p>Independent Software & Digital Technology Company</p>
        </motion.div>
      </div>
    </footer>
  );
};
