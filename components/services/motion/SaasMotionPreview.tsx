"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search, Plus, Check, CheckCircle2, ChevronRight, Activity, Layers, Database, ShieldCheck, RefreshCw } from "lucide-react";

export const SaasMotionPreview: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [taskState, setTaskState] = useState<"pending" | "processing" | "completed">("pending");

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer1 = setTimeout(() => setTaskState("processing"), 1800);
    const timer2 = setTimeout(() => setTaskState("completed"), 3600);

    const loop = setInterval(() => {
      setTaskState("pending");
      setTimeout(() => setTaskState("processing"), 1800);
      setTimeout(() => setTaskState("completed"), 3600);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(loop);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-[400px] bg-[#FFFFFF] border border-[rgba(17,17,17,0.1)] rounded-sm overflow-hidden flex shadow-[0_12px_36px_rgba(0,0,0,0.03)] select-none text-left">
      {/* 1. App Navigation Sidebar (Clean Warm Tone) */}
      <div className="w-[145px] sm:w-[160px] bg-[#F8F7F4] flex flex-col justify-between p-3.5 border-r border-[rgba(17,17,17,0.08)] shrink-0">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-[rgba(17,17,17,0.08)]">
            <div className="w-5 h-5 rounded-xs bg-[#111111] text-white flex items-center justify-center text-[10px] font-bold">
              Z
            </div>
            <span className="text-xs font-semibold text-[#111111] tracking-tight">Kuro Portal</span>
          </div>

          <div className="space-y-1">
            <span className="text-[8.5px] uppercase tracking-wider text-[#8A8A8A] font-semibold block px-2 mb-1">
              Workspace
            </span>
            <div className="px-2 py-1.5 rounded-xs bg-white text-[#111111] text-[11px] font-medium border-l-2 border-zevats-purple shadow-xs">
              Active Orders
            </div>
            <div className="px-2 py-1.5 rounded-xs text-[#686868] hover:text-[#111111] text-[11px] transition-colors cursor-default">
              Approvals
            </div>
            <div className="px-2 py-1.5 rounded-xs text-[#686868] hover:text-[#111111] text-[11px] transition-colors cursor-default">
              Client Accounts
            </div>
            <div className="px-2 py-1.5 rounded-xs text-[#686868] hover:text-[#111111] text-[11px] transition-colors cursor-default">
              Audit Logs
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[rgba(17,17,17,0.08)] text-[9.5px] text-[#8A8A8A]">
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Admin Session Active</span>
          </span>
        </div>
      </div>

      {/* 2. Main Workspace View */}
      <div className="flex-1 flex flex-col justify-between bg-[#FAFAFC] overflow-hidden relative">
        
        {/* Dynamic Notification Toast */}
        <AnimatePresence>
          {taskState === "completed" && (
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-12 right-4 z-30 bg-[#111111] text-white px-3 py-2 rounded-xs border border-[rgba(17,17,17,0.2)] shadow-md flex items-center space-x-2 text-[10.5px]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ORD-4092 approved and logged to ledger</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Workspace Toolbar */}
        <div className="px-5 py-3 bg-white border-b border-[rgba(17,17,17,0.08)] flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-xs text-[#111111]">Dispatch &amp; Orders</span>
            <span className="text-[10px] px-2 py-0.5 rounded-xs bg-[#F4F1EA] text-[#686868] font-medium">
              {taskState === "completed" ? "8 of 8 processed" : "7 of 8 processed"}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] px-2.5 py-1 rounded-xs text-[10px] text-[#686868]">
              <Search className="w-3 h-3 text-[#8A8A8A]" />
              <span>Filter orders...</span>
            </div>
            <button className="flex items-center space-x-1 bg-[#111111] text-[#FAF9F6] text-[10px] font-semibold px-2.5 py-1 rounded-xs hover:bg-zevats-purple transition-colors">
              <Plus className="w-3 h-3" />
              <span>New Order</span>
            </button>
          </div>
        </div>

        {/* Operational Workflow Table */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between overflow-hidden">
          <div className="space-y-2">
            {/* Table Header */}
            <div className="grid grid-cols-12 text-[10px] uppercase tracking-wider text-[#8A8A8A] font-semibold px-3 pb-1 border-b border-[rgba(17,17,17,0.06)]">
              <span className="col-span-5">Order / Client</span>
              <span className="col-span-3">Corridor</span>
              <span className="col-span-2">Assigned</span>
              <span className="col-span-2 text-right">Status</span>
            </div>

            {/* Dynamic Animated Row */}
            <motion.div
              layout
              className="grid grid-cols-12 items-center text-xs p-3 bg-white border border-[rgba(17,17,17,0.08)] rounded-xs shadow-xs"
            >
              <div className="col-span-5 flex items-center space-x-2 truncate">
                <span className="w-2 h-2 rounded-full bg-zevats-purple shrink-0" />
                <span className="font-semibold text-[#111111] truncate">ORD-4092 · Meridian Studio</span>
              </div>
              <span className="col-span-3 text-[11px] text-[#686868] truncate">
                {taskState === "completed" ? "Bay 3 Handoff" : "Verification Stage"}
              </span>
              <span className="col-span-2 text-[11px] text-[#686868]">Sarah K.</span>
              <div className="col-span-2 flex justify-end">
                {taskState === "pending" && (
                  <span className="text-[10px] px-2 py-0.5 rounded-xs bg-amber-50 text-amber-700 font-semibold border border-amber-200">
                    Pending
                  </span>
                )}
                {taskState === "processing" && (
                  <span className="text-[10px] px-2 py-0.5 rounded-xs bg-blue-50 text-blue-700 font-semibold border border-blue-200 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                    <span>Processing</span>
                  </span>
                )}
                {taskState === "completed" && (
                  <motion.span
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-[10px] px-2 py-0.5 rounded-xs bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center space-x-1"
                  >
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Completed</span>
                  </motion.span>
                )}
              </div>
            </motion.div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 items-center text-xs p-3 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs">
              <div className="col-span-5 flex items-center space-x-2 truncate">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="font-medium text-[#111111] truncate">ORD-4091 · Kanso Holdings</span>
              </div>
              <span className="col-span-3 text-[11px] text-[#686868] truncate">Nordic Route</span>
              <span className="col-span-2 text-[11px] text-[#686868]">David L.</span>
              <div className="col-span-2 flex justify-end">
                <span className="text-[10px] px-2 py-0.5 rounded-xs bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  Ready
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-12 items-center text-xs p-3 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs">
              <div className="col-span-5 flex items-center space-x-2 truncate">
                <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                <span className="font-medium text-[#111111] truncate">ORD-4090 · Sora Global</span>
              </div>
              <span className="col-span-3 text-[11px] text-[#686868] truncate">Express Air Hub</span>
              <span className="col-span-2 text-[11px] text-[#686868]">Elena R.</span>
              <div className="col-span-2 flex justify-end">
                <span className="text-[10px] px-2 py-0.5 rounded-xs bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-2.5 border-t border-[rgba(17,17,17,0.06)] flex items-center justify-between text-[10px] text-[#8A8A8A]">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
              <span>Simulated live order progression: Pending → Processing → Completed</span>
            </div>
            <span className="text-[#111111] font-medium">Automatic cloud sync</span>
          </div>
        </div>
      </div>
    </div>
  );
};
