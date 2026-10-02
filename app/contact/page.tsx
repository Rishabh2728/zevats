"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Phone, MessageCircle, Mail, ShieldCheck } from "lucide-react";

// ─── Form Data Types ────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectCategories: string[];
  budget: string;
  timeline: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectCategory?: string;
}

// ─── Selectable Chip Options ────────────────────────────────────────────────

const PROJECT_CATEGORIES = [
  "Website",
  "Web Application",
  "SaaS Platform",
  "Android App",
  "iOS App",
  "Android + iOS App",
  "Custom Software",
  "AI / Intelligent Features",
  "Business Automation",
  "API / Integration",
  "AMC / Maintenance",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "₹10,00,000+",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Not decided",
];

// ─── Input Styles ───────────────────────────────────────────────────────────

const inputCls =
  "w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[rgba(17,17,17,0.14)] rounded-sm text-sm text-[#111111] placeholder:text-[#8E8A82] outline-none transition-all duration-150 focus:bg-white focus:border-zevats-purple focus:ring-1 focus:ring-zevats-purple/20";

const inputErrCls =
  "w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-red-400 rounded-sm text-sm text-[#111111] placeholder:text-[#8E8A82] outline-none transition-all duration-150 focus:bg-white focus:border-red-400 focus:ring-1 focus:ring-red-400/20";

// ─── Component ──────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectCategories: [],
    budget: "",
    timeline: "",
    details: "",
  });
  const [otherSpecification, setOtherSpecification] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // ── Validation ─────────────────────────────────────────────────────────────

  const validate = (): boolean => {
    const e: FormErrors = {};

    if (!formData.name.trim()) {
      e.name = "Your name is required.";
    }

    if (!formData.email.trim()) {
      e.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      e.email = "Please enter a valid email address.";
    }

    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      e.phone = "Contact number is required.";
    } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      e.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (formData.projectCategories.length === 0) {
      e.projectCategory = "Please select at least one project category.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Toggle Category ────────────────────────────────────────────────────────

  const toggleCategory = (cat: string) => {
    setFormData((prev) => {
      const exists = prev.projectCategories.includes(cat);
      const updated = exists
        ? prev.projectCategories.filter((c) => c !== cat)
        : [...prev.projectCategories, cat];
      return { ...prev, projectCategories: updated };
    });
    if (errors.projectCategory) {
      setErrors((prev) => ({ ...prev, projectCategory: undefined }));
    }
  };

  // ── Submission ─────────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const formattedCategories = formData.projectCategories.map((c) =>
      c === "Other" && otherSpecification.trim()
        ? `Other (${otherSpecification.trim()})`
        : c
    );

    const payload = {
      ...formData,
      projectCategories: formattedCategories,
      projectCategory: formattedCategories.join(", "),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || (data && data.success === false)) {
        throw new Error(data?.message || "Submission failed");
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectCategories: [],
      budget: "",
      timeline: "",
      details: "",
    });
    setOtherSpecification("");
    setErrors({});
    setStatus("idle");
  };

  // ── What Happens Next helper ───────────────────────────────────────────────

  const renderWhatHappensNext = () => (
    <div className="space-y-4">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#686868] font-semibold block">
        What happens next
      </span>
      <div className="space-y-3">
        <div className="flex items-start space-x-3 text-sm">
          <span className="text-xs font-semibold text-zevats-purple pt-0.5 w-5 shrink-0">01</span>
          <div>
            <span className="font-medium text-[#111111]">Review</span>
            <p className="text-xs text-[#686868] mt-0.5">We review your requirements.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-sm">
          <span className="text-xs font-semibold text-zevats-purple pt-0.5 w-5 shrink-0">02</span>
          <div>
            <span className="font-medium text-[#111111]">Discuss</span>
            <p className="text-xs text-[#686868] mt-0.5">We discuss scope and approach.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-sm">
          <span className="text-xs font-semibold text-zevats-purple pt-0.5 w-5 shrink-0">03</span>
          <div>
            <span className="font-medium text-[#111111]">Propose</span>
            <p className="text-xs text-[#686868] mt-0.5">We prepare a clear proposal.</p>
          </div>
        </div>
      </div>
      <p className="text-xs text-[#686868] pt-2 border-t border-[rgba(17,17,17,0.06)]">
        Direct response within 24 business hours.
      </p>
    </div>
  );

  return (
    <div className="w-full py-8 sm:py-10 md:py-12 relative">
      <div className="zevats-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

        {/* ── LEFT COLUMN: Context & Direct Contact (~40%) ──────────────── */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#686868] font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
              <span>Start a conversation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-semibold tracking-[-0.035em] text-[#111111] leading-[1.08] mb-4">
              Tell us what you&apos;re{" "}
              <span className="text-zevats-purple">building.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#686868] leading-[1.6] font-normal">
              Tell us what you&apos;re trying to build, improve or solve. We work with businesses on websites, web applications, mobile products, custom software, automation and applied AI.
            </p>
          </div>

          {/* Direct Contact Card */}
          <div className="p-5 rounded-sm border border-[rgba(17,17,17,0.08)] bg-[#FAF9F6] space-y-3.5">
            <div className="flex items-center space-x-3 text-sm text-[#111111]">
              <Mail className="w-4 h-4 text-zevats-purple shrink-0" />
              <a href="mailto:hello@zevats.com" className="hover:text-zevats-purple transition-colors font-medium">
                hello@zevats.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-[#111111]">
              <Phone className="w-4 h-4 text-zevats-purple shrink-0" />
              <a href="tel:9306909708" className="hover:text-zevats-purple transition-colors font-medium">
                93069 09708
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-[#111111]">
              <MessageCircle className="w-4 h-4 text-zevats-purple shrink-0" />
              <a
                href="https://wa.me/919306909708"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zevats-purple transition-colors font-medium"
              >
                WhatsApp &middot; 93069 09708
              </a>
            </div>
            <div className="pt-2.5 border-t border-[rgba(17,17,17,0.06)] flex items-center space-x-2 text-xs text-[#8E8A82]">
              <ShieldCheck className="w-3.5 h-3.5 text-zevats-purple shrink-0" />
              <span>Mutual NDA available on request.</span>
            </div>
          </div>

          {/* Desktop What Happens Next */}
          <div className="hidden lg:block pt-1">
            {renderWhatHappensNext()}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Dedicated Project Enquiry Form (~60%) ────────── */}
        <div className="lg:col-span-7">
          <div className="rounded-sm border border-[rgba(17,17,17,0.12)] bg-[#FFFFFF] p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative">

            {/* Form Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(17,17,17,0.08)]">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#111111]">
                Project enquiry
              </h2>
              <span className="text-[11px] text-[#8E8A82]">
                Confidential
              </span>
            </div>

            <AnimatePresence mode="wait">

              {/* ── Success State ─────────────────────────────────────── */}
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-zevats-purple/10 text-zevats-purple mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6 text-zevats-purple" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#111111] tracking-tight">
                    Enquiry received.
                  </h3>
                  <p className="text-sm text-[#686868] max-w-md mx-auto leading-relaxed">
                    Your project details have been sent to our team.
                  </p>
                  <div className="inline-block px-3 py-1 rounded-sm bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] text-xs font-medium text-[#111111]">
                    Direct response within 24 business hours.
                  </div>
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="tel:9306909708"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#111111] hover:bg-zevats-purple text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Zevats</span>
                    </a>
                    <a
                      href="https://wa.me/919306909708"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[rgba(17,17,17,0.15)] hover:border-zevats-purple hover:text-zevats-purple text-[#111111] text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Zevats</span>
                    </a>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-[#686868] hover:text-zevats-purple underline transition-colors"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* ── Form Body ─────────────────────────────────────────── */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  {/* Error Banner */}
                  {status === "error" && (
                    <div className="p-3.5 rounded-sm border border-red-200 bg-red-50 text-red-800 text-sm space-y-1">
                      <p className="font-semibold text-xs sm:text-sm">We couldn&apos;t send your enquiry.</p>
                      <p className="text-red-700 text-xs">
                        Please try again or contact us directly at:{" "}
                        <a href="mailto:hello@zevats.com" className="font-medium underline hover:text-red-900">
                          hello@zevats.com
                        </a>{" "}
                        &middot;{" "}
                        <a href="tel:9306909708" className="font-medium underline hover:text-red-900">
                          93069 09708
                        </a>
                      </p>
                    </div>
                  )}

                  {/* Row 1: Name * | Contact Number * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold mb-1.5">
                        Name <span className="text-zevats-purple">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={set("name")}
                        placeholder="Your name"
                        className={errors.name ? inputErrCls : inputCls}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold mb-1.5">
                        Contact Number <span className="text-zevats-purple">*</span>
                      </label>
                      <input
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={set("phone")}
                        placeholder="+91 98765 43210"
                        className={errors.phone ? inputErrCls : inputCls}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Work Email * | Company / Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold mb-1.5">
                        Work Email <span className="text-zevats-purple">*</span>
                      </label>
                      <input
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={set("email")}
                        placeholder="you@company.com"
                        className={errors.email ? inputErrCls : inputCls}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold mb-1.5">
                        <span>Company / Organization</span>
                        <span className="text-[#8E8A82] text-[10px] normal-case tracking-normal font-normal">
                          Optional
                        </span>
                      </label>
                      <input
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={set("company")}
                        placeholder="Company name"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Row 3: What are you looking to build? * */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold">
                        What are you looking to build? <span className="text-zevats-purple">*</span>
                      </label>
                      <span className="text-[10px] text-[#8E8A82]">Select all that apply</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {PROJECT_CATEGORIES.map((cat) => {
                        const active = formData.projectCategories.includes(cat);
                        return (
                          <button
                            key={cat}
                            type="button"
                            aria-pressed={active}
                            onClick={() => toggleCategory(cat)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-sm border transition-all duration-150 ${
                              active
                                ? "bg-zevats-purple text-white border-zevats-purple shadow-[0_1px_6px_rgba(123,44,246,0.3)]"
                                : "bg-[#FAF9F6] border-[rgba(17,17,17,0.12)] text-[#444444] hover:border-zevats-purple/50 hover:text-[#111111]"
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>
                    {errors.projectCategory && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.projectCategory}</p>
                    )}

                    {/* Smooth inline input if 'Other' is picked */}
                    {formData.projectCategories.includes("Other") && (
                      <div className="mt-2.5">
                        <input
                          type="text"
                          value={otherSpecification}
                          onChange={(e) => setOtherSpecification(e.target.value)}
                          placeholder="What are you looking to build?"
                          className={inputCls}
                        />
                      </div>
                    )}
                  </div>

                  {/* Row 4: Approximate Budget (Optional) */}
                  <div className="pt-2 border-t border-[rgba(17,17,17,0.06)]">
                    <label className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold mb-2">
                      <span>Approximate Budget</span>
                      <span className="text-[#8E8A82] text-[10px] normal-case tracking-normal font-normal">
                        Optional
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {BUDGET_OPTIONS.map((opt) => {
                        const active = formData.budget === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            aria-pressed={active}
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                budget: active ? "" : opt,
                              }))
                            }
                            className={`px-3 py-1.5 text-xs font-medium rounded-sm border transition-all duration-150 ${
                              active
                                ? "bg-zevats-purple text-white border-zevats-purple shadow-[0_1px_6px_rgba(123,44,246,0.3)]"
                                : "bg-[#FAF9F6] border-[rgba(17,17,17,0.12)] text-[#444444] hover:border-zevats-purple/50 hover:text-[#111111]"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Expected Timeline (Optional) */}
                  <div className="pt-2 border-t border-[rgba(17,17,17,0.06)]">
                    <label className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold mb-2">
                      <span>Expected Timeline</span>
                      <span className="text-[#8E8A82] text-[10px] normal-case tracking-normal font-normal">
                        Optional
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {TIMELINE_OPTIONS.map((opt) => {
                        const active = formData.timeline === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            aria-pressed={active}
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                timeline: active ? "" : opt,
                              }))
                            }
                            className={`px-3 py-1.5 text-xs font-medium rounded-sm border transition-all duration-150 ${
                              active
                                ? "bg-zevats-purple text-white border-zevats-purple shadow-[0_1px_6px_rgba(123,44,246,0.3)]"
                                : "bg-[#FAF9F6] border-[rgba(17,17,17,0.12)] text-[#444444] hover:border-zevats-purple/50 hover:text-[#111111]"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 6: Project Details (Optional) */}
                  <div className="pt-2 border-t border-[rgba(17,17,17,0.06)]">
                    <label className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#555555] font-semibold mb-1.5">
                      <span>Project Details</span>
                      <span className="text-[#8E8A82] text-[10px] normal-case tracking-normal font-normal">
                        Optional
                      </span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={set("details")}
                      placeholder="Tell us briefly what you're trying to build, improve or solve."
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[rgba(17,17,17,0.14)] rounded-sm text-sm text-[#111111] placeholder:text-[#8E8A82] outline-none transition-all duration-150 focus:bg-white focus:border-zevats-purple focus:ring-1 focus:ring-zevats-purple/20 resize-none"
                    />
                  </div>

                  {/* Row 7: Submit Button */}
                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#F4F1EA] bg-[#111111] hover:bg-zevats-purple rounded-sm transition-all duration-200 disabled:opacity-60 active:scale-[0.99] group shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_20px_rgba(123,44,246,0.3)]"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send project enquiry</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#8E8A82]">
                      Fields marked <span className="text-zevats-purple">*</span> are required. Everything else is optional.
                    </p>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

          {/* Mobile What Happens Next (shown below the form on mobile) */}
          <div className="block lg:hidden mt-8 p-5 rounded-sm border border-[rgba(17,17,17,0.08)] bg-[#FAF9F6]">
            {renderWhatHappensNext()}
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
