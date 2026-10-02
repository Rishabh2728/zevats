"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Check, Bell, User, MapPin, Camera } from "lucide-react";

export const MobileStudioPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[360px] bg-[#FAF9F6] border border-[rgba(17,17,17,0.1)] rounded-sm overflow-hidden flex items-center justify-center p-4 shadow-[0_12px_36px_rgba(0,0,0,0.03)] select-none text-left"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-architectural opacity-20 pointer-events-none" />

      {/* Two Overlapping Art-Directed Mobile App Screens */}
      <div className="relative flex items-center justify-center w-full max-w-sm h-full">
        
        {/* Screen 1: Background Screen (Left / Behind) - Activity & Sync Log */}
        <div className="absolute z-10 -left-2 sm:left-4 w-[180px] h-[280px] bg-[#16161F] text-white rounded-[24px] border-[2px] border-[#2C2C3C] shadow-[0_16px_36px_rgba(0,0,0,0.2)] p-3.5 flex flex-col justify-between -rotate-3 opacity-90">
          <div>
            <div className="flex items-center justify-between text-[8.5px] font-mono text-[#A8A49E] pb-2 border-b border-[#2A2A3A]">
              <span>9:41</span>
              <div className="w-10 h-2 bg-[#0D0D12] rounded-full" />
              <span>100%</span>
            </div>

            <div className="pt-3 space-y-1">
              <span className="text-[8px] uppercase tracking-wider text-zevats-purple font-semibold block">
                Daily Operations
              </span>
              <span className="text-xs font-semibold text-white block">
                Field Activity Log
              </span>
            </div>

            <div className="mt-3 space-y-2">
              <div className="p-2 bg-[#20202E] rounded-xs border border-[#2E2E40] space-y-1">
                <span className="text-[9.5px] text-white font-medium block">Job #804 Dispatched</span>
                <span className="text-[8px] text-[#A8A49E] block">Assigned to Field Team B</span>
              </div>
              <div className="p-2 bg-[#20202E] rounded-xs border border-[#2E2E40] space-y-1">
                <span className="text-[9.5px] text-white font-medium block">Site Inspection</span>
                <span className="text-[8px] text-emerald-400 block">Photos uploaded &amp; synced</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#2A2A3A] flex items-center justify-between text-[8px] text-[#A8A49E]">
            <span>Local Database</span>
            <span className="text-emerald-400">Offline Ready</span>
          </div>
        </div>

        {/* Screen 2: Foreground Main Screen (Right / Front) - Active Task Inspection */}
        <div className="relative z-20 -right-4 sm:right-4 w-[205px] h-[310px] bg-[#FFFFFF] text-[#111111] rounded-[26px] border-[2px] border-[rgba(17,17,17,0.14)] shadow-[0_20px_40px_rgba(0,0,0,0.14)] p-3.5 flex flex-col justify-between">
          <div>
            {/* Phone Notch & Status */}
            <div className="flex items-center justify-between text-[8.5px] text-[#686868] pb-2 border-b border-[rgba(17,17,17,0.06)]">
              <span className="font-semibold text-[#111111]">9:41</span>
              <div className="w-12 h-2.5 bg-[#111111] rounded-full" />
              <div className="flex items-center space-x-1">
                <Bell className="w-2.5 h-2.5 text-[#686868]" />
              </div>
            </div>

            {/* Task Card Header */}
            <div className="pt-2.5 pb-2">
              <span className="text-[8.5px] uppercase tracking-wider text-[#8A8A8A] font-medium block">
                Today&apos;s Checklist
              </span>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-xs font-bold text-[#111111]">Terminal Delivery</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded-xs bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  Active
                </span>
              </div>
            </div>

            {/* Interactive Checklist Items */}
            <div className="space-y-1.5 mt-1">
              <div className="p-2 bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)] rounded-xs flex items-center justify-between">
                <div className="flex items-center space-x-2 truncate">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[10px] text-[#111111] font-medium truncate">Customer QR Verified</span>
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

              <div className="p-2 bg-[#FFFFFF] border border-zevats-purple/30 rounded-xs flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-2 truncate">
                  <div className="w-4 h-4 rounded-full border border-zevats-purple text-zevats-purple flex items-center justify-center shrink-0">
                    <Clock className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[10px] text-zevats-purple font-semibold truncate">Sign-off Confirmation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button & Tab Bar */}
          <div className="space-y-2 pt-2 border-t border-[rgba(17,17,17,0.06)]">
            <button className="w-full py-1.5 bg-[#111111] text-[#FAF9F6] text-[9.5px] font-semibold rounded-xs hover:bg-zevats-purple transition-colors">
              Complete &amp; Submit Order
            </button>
            <div className="flex items-center justify-around text-[8px] text-[#8A8A8A] pt-0.5">
              <span className="text-[#111111] font-semibold">Today</span>
              <span>Tasks</span>
              <span>Sync</span>
              <span>Profile</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
