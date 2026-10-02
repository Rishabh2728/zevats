"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Clock, Bell, MapPin, CheckCircle2, Wifi, Battery, Compass, CheckSquare, Database, User } from "lucide-react";

export const MobileMotionPreview: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [step, setStep] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t1 = setTimeout(() => setStep(1), 1600);
    const t2 = setTimeout(() => setStep(2), 3400);

    const loop = setInterval(() => {
      setStep(0);
      setTimeout(() => setStep(1), 1600);
      setTimeout(() => setStep(2), 3400);
    }, 5800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(loop);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-[400px] bg-[#FAF9F6] border border-[rgba(17,17,17,0.1)] rounded-sm overflow-hidden flex items-center justify-center p-6 select-none text-left shadow-[0_12px_36px_rgba(0,0,0,0.03)]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-architectural opacity-25 pointer-events-none" />

      {/* Two Overlapping Art-Directed Mobile App Screens (Warm & Clean Design) */}
      <div className="relative flex items-center justify-center w-full max-w-sm h-full">
        
        {/* Screen 1: Background Screen (Left / Behind) - Route & Queue Overview */}
        <div className="absolute z-10 -left-1 sm:left-3 w-[185px] h-[300px] bg-[#F4F1EA] text-[#111111] rounded-[24px] border-[2px] border-[rgba(17,17,17,0.14)] shadow-[0_16px_36px_rgba(0,0,0,0.06)] p-3.5 flex flex-col justify-between -rotate-3 opacity-95">
          <div>
            <div className="flex items-center justify-between text-[8.5px] font-mono text-[#686868] pb-2 border-b border-[rgba(17,17,17,0.08)]">
              <span>9:41</span>
              <div className="w-10 h-2 bg-[#111111]/20 rounded-full" />
              <span className="flex items-center space-x-1">
                <Wifi className="w-2.5 h-2.5" />
              </span>
            </div>

            <div className="pt-3 space-y-1">
              <span className="text-[8px] uppercase tracking-wider text-zevats-purple font-semibold block">
                Field Operations
              </span>
              <span className="text-xs font-semibold text-[#111111] block">
                Active Route #402
              </span>
            </div>

            <div className="mt-3 space-y-2">
              <div className="p-2 bg-white rounded-xs border border-[rgba(17,17,17,0.08)] space-y-1 shadow-xs">
                <span className="text-[9.5px] text-[#111111] font-semibold block">Terminal Bay 3</span>
                <span className="text-[8px] text-[#686868] block">4 Deliveries Scheduled</span>
              </div>
              <div className="p-2 bg-white rounded-xs border border-[rgba(17,17,17,0.08)] space-y-1 shadow-xs">
                <span className="text-[9.5px] text-[#111111] font-semibold block">Offline Vault</span>
                <span className="text-[8px] text-emerald-600 font-medium block">Local SQLite Synced</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[rgba(17,17,17,0.08)] flex items-center justify-between text-[8px] text-[#686868]">
            <span>Local Database</span>
            <span className="text-emerald-600 font-medium">Ready</span>
          </div>
        </div>

        {/* Screen 2: Foreground Main Screen (Right / Front) - Active Task Execution */}
        <div className="relative z-20 -right-3 sm:right-3 w-[215px] h-[330px] bg-[#FFFFFF] text-[#111111] rounded-[26px] border-[2px] border-[rgba(17,17,17,0.14)] shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-4 flex flex-col justify-between">
          <div>
            {/* Phone Notch & Status */}
            <div className="flex items-center justify-between text-[8.5px] text-[#686868] pb-2 border-b border-[rgba(17,17,17,0.06)]">
              <span className="font-semibold text-[#111111]">9:41</span>
              <div className="w-12 h-2.5 bg-[#111111] rounded-full" />
              <div className="flex items-center space-x-1">
                <Battery className="w-2.5 h-2.5 text-[#111111]" />
              </div>
            </div>

            {/* Task Card Header */}
            <div className="pt-2.5 pb-2">
              <span className="text-[8.5px] uppercase tracking-wider text-[#8A8A8A] font-medium block">
                Field Delivery Check
              </span>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-xs font-bold text-[#111111]">Terminal Handoff</span>
                <span
                  className={`text-[8px] px-1.5 py-0.5 rounded-xs font-semibold border transition-colors ${
                    step === 2
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-blue-50 text-blue-700 border-blue-200"
                  }`}
                >
                  {step === 2 ? "Completed" : "In Progress"}
                </span>
              </div>
            </div>

            {/* Dynamic Checklist Items */}
            <div className="space-y-1.5 mt-1">
              <div className="p-2 bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)] rounded-xs flex items-center justify-between">
                <div className="flex items-center space-x-2 truncate">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[10px] text-[#111111] font-medium truncate">Client QR Verified</span>
                </div>
              </div>

              <div className="p-2 bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)] rounded-xs flex items-center justify-between">
                <div className="flex items-center space-x-2 truncate">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[10px] text-[#111111] font-medium truncate">Manifest Reconciled</span>
                </div>
              </div>

              {/* Step 3: Interactive sign-off state */}
              <div
                className={`p-2 rounded-xs flex items-center justify-between transition-all duration-300 ${
                  step === 2
                    ? "bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)]"
                    : "bg-[#FFFFFF] border border-zevats-purple/40 shadow-xs"
                }`}
              >
                <div className="flex items-center space-x-2 truncate">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      step === 2
                        ? "bg-emerald-500 text-white"
                        : "border border-zevats-purple text-zevats-purple"
                    }`}
                  >
                    {step === 2 ? <Check className="w-2.5 h-2.5" /> : <Clock className="w-2.5 h-2.5" />}
                  </div>
                  <span
                    className={`text-[10px] font-medium truncate ${
                      step === 2 ? "text-[#111111]" : "text-zevats-purple font-semibold"
                    }`}
                  >
                    {step === 2 ? "Customer Signed Off" : "Sign-off Pending"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button & Tab Bar */}
          <div className="space-y-2 pt-2 border-t border-[rgba(17,17,17,0.06)]">
            <motion.button
              animate={{
                scale: step === 1 ? [1, 0.97, 1] : 1,
                backgroundColor: step === 2 ? "#059669" : "#111111",
              }}
              transition={{ duration: 0.3 }}
              className="w-full py-1.5 text-[#FAF9F6] text-[9.5px] font-semibold rounded-xs transition-colors flex items-center justify-center space-x-1"
            >
              {step === 2 ? (
                <>
                  <Check className="w-3 h-3 text-white" />
                  <span>Order Dispatched &amp; Synced</span>
                </>
              ) : (
                <span>Confirm &amp; Complete Task</span>
              )}
            </motion.button>
            <div className="flex items-center justify-around text-[8px] text-[#8A8A8A] pt-0.5">
              <span className="text-[#111111] font-semibold">Today</span>
              <span>Tasks</span>
              <span>Sync</span>
              <span>Profile</span>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Meta Indicator */}
      <div className="absolute bottom-2 inset-x-5 flex items-center justify-between text-[10px] text-[#8A8A8A]">
        <span className="flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
          <span>Simulated mobile flow: Pending → Sign-off → Synced</span>
        </span>
        <span className="font-mono text-[#111111]">iOS &amp; Android</span>
      </div>
    </div>
  );
};
