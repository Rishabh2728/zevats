"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ZevatsLogo } from "../ui/ZevatsLogo";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F4F1EA]/95 backdrop-blur-md border-b border-[rgba(17,17,17,0.08)] py-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-transparent border-b border-transparent py-6 md:py-8"
        }`}
      >
        <div className="zevats-container flex items-center justify-between">
          {/* Authentic Logo - Near-black editorial treatment on Paper */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]"
            aria-label="Zevats Home"
          >
            <ZevatsLogo size="md" variant="ink" />
          </Link>

          {/* Editorial Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-[13px] tracking-wide font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 relative py-1 text-sm tracking-normal ${
                    isActive
                      ? "text-[#111111] font-semibold"
                      : "text-[#686868] hover:text-[#111111]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#111111]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Editorial Physical CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#F4F1EA] bg-[#111111] hover:bg-zevats-purple hover:text-white transition-all duration-200 rounded-sm border border-[#111111] hover:border-zevats-purple active:scale-[0.98] group min-h-[40px]"
            >
              <span className="flex items-center space-x-2">
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#111111] hover:text-zevats-purple focus:outline-none transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Deliberate Editorial Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 z-40 bg-[#F4F1EA] text-[#111111] flex flex-col justify-between p-6 sm:p-10 pt-24 pb-8 md:hidden overflow-y-auto"
          >
            {/* Top Brand statement */}
            <div className="flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#686868] font-medium">
                Software & Digital Technology
              </span>

              {/* Navigation links */}
              <div className="flex flex-col space-y-5 pt-2">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-4xl font-semibold tracking-tight transition-colors ${
                          isActive
                            ? "text-zevats-purple"
                            : "text-[#111111] hover:text-zevats-purple"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-4xl font-semibold tracking-tight transition-colors ${
                      pathname === "/contact"
                        ? "text-zevats-purple"
                        : "text-[#111111] hover:text-zevats-purple"
                    }`}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-[rgba(17,17,17,0.1)] space-y-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#111111] hover:bg-zevats-purple text-[#F4F1EA] hover:text-white text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex justify-between items-center text-xs text-[#686868]">
                <span>ZEVATS</span>
                <span>hello@zevats.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
