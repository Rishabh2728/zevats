"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    description: "",
    budget: "$25k - $50k",
    timeline: "1 - 3 months",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const budgetOptions = [
    "< $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k+",
  ];

  const timelineOptions = [
    "Immediate (< 1 month)",
    "1 - 3 months",
    "3 - 6 months",
    "Flexible / Exploratory",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please tell us briefly about your project";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      description: "",
      budget: "$25k - $50k",
      timeline: "1 - 3 months",
    });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[var(--surface)] text-[var(--text-primary)] rounded-2xl shadow-2xl border border-[var(--border-subtle)] p-6 sm:p-10 my-8 overflow-hidden transition-colors duration-500"
          >
            {/* Top close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[var(--text-secondary)] transition-colors"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-purple-50 dark:bg-purple-950/60 text-zevats-purple dark:text-zevats-lavender flex items-center justify-center mb-5 border border-purple-200/50 dark:border-purple-800/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                  Inquiry Received
                </h3>
                <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
                  Thank you for reaching out to Zevats AI Labs. Our engineering team will review your specifications and get back to you within 24 business hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 px-6 py-2.5 bg-zevats-purple hover:bg-zevats-vibrant text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-zevats-purple dark:text-zevats-lavender font-semibold block mb-2">
                    Project Inquiry
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] tracking-tight">
                    Start a project with Zevats.
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Tell us what you’re trying to build, automate or improve.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        Name <span className="text-zevats-purple">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all outline-none bg-[var(--bg-primary)] text-[var(--text-primary)] ${
                          errors.name
                            ? "border-red-400 bg-red-50/20"
                            : "border-[var(--border-subtle)] focus:border-zevats-purple focus:ring-2 focus:ring-purple-500/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-subtle)] focus:border-zevats-purple focus:ring-2 focus:ring-purple-500/20 text-sm transition-all outline-none bg-[var(--bg-primary)] text-[var(--text-primary)]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-zevats-purple">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all outline-none bg-[var(--bg-primary)] text-[var(--text-primary)] ${
                        errors.email
                          ? "border-red-400 bg-red-50/20"
                          : "border-[var(--border-subtle)] focus:border-zevats-purple focus:ring-2 focus:ring-purple-500/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* What are you building? */}
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                      What are you building? <span className="text-zevats-purple">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe the problem, target users, or operational challenge..."
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all outline-none resize-none bg-[var(--bg-primary)] text-[var(--text-primary)] ${
                        errors.description
                          ? "border-red-400 bg-red-50/20"
                          : "border-[var(--border-subtle)] focus:border-zevats-purple focus:ring-2 focus:ring-purple-500/20"
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1 text-[11px] text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] focus:border-zevats-purple focus:ring-2 focus:ring-purple-500/20 text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] outline-none"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[var(--surface)] text-[var(--text-primary)]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        Estimated Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] focus:border-zevats-purple focus:ring-2 focus:ring-purple-500/20 text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] outline-none"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[var(--surface)] text-[var(--text-primary)]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-[var(--text-muted)] font-mono">
                      NDA provided upon request
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 bg-zevats-purple hover:bg-zevats-vibrant text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-[0_0_20px_rgba(123,44,246,0.35)] disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
