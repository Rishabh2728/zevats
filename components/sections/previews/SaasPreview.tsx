"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Database, 
  ShieldCheck, 
  Activity, 
  Search, 
  ChevronRight,
  RefreshCw,
  Plus
} from "lucide-react";

export const SaasPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[340px] bg-[#FFFFFF] border border-[rgba(17,17,17,0.12)] rounded-sm overflow-hidden flex shadow-[0_12px_36px_rgba(0,0,0,0.04)] select-none text-left"
    >
      {/* 1. Operational Dark Graphite Sidebar (Instant Software Interface Signal) */}
      <div className="w-[140px] sm:w-[155px] bg-[#16161F] text-[#FAF9F6] flex flex-col justify-between p-3 border-r border-[#262635] shrink-0">
        <div className="space-y-3.5">
          {/* Workspace Title & Badge */}
          <div className="flex items-center space-x-2 pb-2.5 border-b border-[#262635]">
            <div className="w-5 h-5 rounded-xs bg-zevats-purple/30 border border-zevats-purple/60 flex items-center justify-center text-white text-[10px] font-bold">
              Z
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-tight text-white block leading-tight">
                Zevats Core
              </span>
              <span className="text-[8px] text-[#A8A49E] flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Multi-Tenant</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <span className="text-[8px] uppercase tracking-[0.18em] text-[#7A7A88] font-semibold block px-1.5 mb-1">
              Operations
            </span>

            <div className="flex items-center justify-between px-2 py-1.5 rounded-xs bg-[#222230] text-white text-[10px] font-medium border-l-2 border-zevats-purple cursor-default">
              <span className="flex items-center space-x-1.5 truncate">
                <Activity className="w-3 h-3 text-zevats-purple shrink-0" />
                <span className="truncate">Workflows</span>
              </span>
              <span className="text-[8px] font-mono bg-zevats-purple/20 text-purple-300 px-1 rounded-xs">14</span>
            </div>

            <div className="flex items-center justify-between px-2 py-1.5 rounded-xs text-[#A8A49E] hover:text-white text-[10px] transition-colors cursor-default">
              <span className="flex items-center space-x-1.5 truncate">
                <Layers className="w-3 h-3 shrink-0" />
                <span className="truncate">Pipelines</span>
              </span>
            </div>

            <div className="flex items-center justify-between px-2 py-1.5 rounded-xs text-[#A8A49E] hover:text-white text-[10px] transition-colors cursor-default">
              <span className="flex items-center space-x-1.5 truncate">
                <Database className="w-3 h-3 shrink-0" />
                <span className="truncate">Partitions</span>
              </span>
            </div>

            <div className="flex items-center justify-between px-2 py-1.5 rounded-xs text-[#A8A49E] hover:text-white text-[10px] transition-colors cursor-default">
              <span className="flex items-center space-x-1.5 truncate">
                <ShieldCheck className="w-3 h-3 shrink-0" />
                <span className="truncate">Permissions</span>
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar Footer: System Telemetry */}
        <div className="pt-2 border-t border-[#262635] text-[9px] text-[#7A7A88] font-mono space-y-0.5">
          <div className="flex items-center justify-between">
            <span>Uptime</span>
            <span className="text-emerald-400">99.99%</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Latency</span>
            <span className="text-white">12ms p95</span>
          </div>
        </div>
      </div>

      {/* 2. Main Workspace Dashboard */}
      <div className="flex-1 flex flex-col justify-between overflow-hidden bg-[#FAFAFC]">
        {/* Top Control Bar */}
        <div className="px-3.5 py-2 bg-white border-b border-[rgba(17,17,17,0.08)] flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center space-x-1.5 truncate">
            <span className="text-[#686868] text-[9.5px]">Ops</span>
            <ChevronRight className="w-2.5 h-2.5 text-[#A8A49E]" />
            <span className="font-semibold text-[#111111] text-[10.5px] truncate">Pipeline 04</span>
            <span className="text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.5 rounded-xs font-medium">
              Live
            </span>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            <div className="flex items-center space-x-1 bg-[#F4F1EA] border border-[rgba(17,17,17,0.08)] px-2 py-0.5 rounded-xs text-[8.5px] text-[#686868] whitespace-nowrap">
              <Search className="w-2.5 h-2.5" />
              <span>Filter</span>
              <kbd className="font-mono text-[7.5px] bg-white px-1 rounded-xs border border-[rgba(17,17,17,0.1)]">⌘K</kbd>
            </div>
            <button className="flex items-center space-x-1 bg-[#111111] text-[#FAF9F6] text-[8.5px] font-semibold px-2 py-0.5 rounded-xs hover:bg-zevats-purple transition-colors whitespace-nowrap">
              <Plus className="w-2.5 h-2.5" />
              <span>Trigger</span>
            </button>
          </div>
        </div>

        {/* Workspace Body: Operational Metrics + Workflow Table */}
        <div className="p-3 space-y-2.5 overflow-hidden flex-1 flex flex-col justify-between">
          {/* Quick Telemetry Cards */}
          <div className="grid grid-cols-3 gap-2 shrink-0">
            <div className="p-2 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs shadow-xs">
              <span className="text-[7.5px] uppercase tracking-wider text-[#686868] block">Daily Ingress</span>
              <span className="text-[11.5px] font-bold text-[#111111] block mt-0.5 font-mono whitespace-nowrap">14.2k / min</span>
              <span className="text-[7.5px] text-emerald-600 block mt-0.5 font-medium">+14.2% healthy</span>
            </div>

            <div className="p-2 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs shadow-xs">
              <span className="text-[7.5px] uppercase tracking-wider text-[#686868] block">Tenants Sync</span>
              <span className="text-[11.5px] font-bold text-[#111111] block mt-0.5 font-mono whitespace-nowrap">18/18 Active</span>
              <span className="text-[7.5px] text-zevats-purple block mt-0.5 font-medium">Postgres RLS</span>
            </div>

            <div className="p-2 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs shadow-xs">
              <span className="text-[7.5px] uppercase tracking-wider text-[#686868] block">Queues Backlog</span>
              <span className="text-[11.5px] font-bold text-[#111111] block mt-0.5 font-mono whitespace-nowrap">0 Backpressure</span>
              <span className="text-[7.5px] text-[#686868] block mt-0.5 font-medium">Redis In-Memory</span>
            </div>
          </div>

          {/* Operational Workflow Execution Table */}
          <div className="bg-white border border-[rgba(17,17,17,0.08)] rounded-xs overflow-hidden shadow-xs flex-1 flex flex-col justify-between">
            <div className="bg-[#F8F8FA] px-2.5 py-1.5 border-b border-[rgba(17,17,17,0.06)] flex items-center justify-between text-[8px] font-mono text-[#686868] uppercase tracking-wider shrink-0">
              <span className="w-1/4">Workflow ID</span>
              <span className="w-1/3">Tenant Partition</span>
              <span className="w-1/4">State</span>
              <span className="w-1/6 text-right">Latency</span>
            </div>

            <div className="divide-y divide-[rgba(17,17,17,0.04)] text-[9.5px]">
              <div className="px-2.5 py-1.5 flex items-center justify-between hover:bg-[#F9F9FB] transition-colors">
                <span className="w-1/4 font-mono font-medium text-[#111111] flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>WF-9042</span>
                </span>
                <span className="w-1/3 text-[#686868] truncate">Enterprise Hub</span>
                <span className="w-1/4">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[7.5px] font-medium px-1.5 py-0.5 rounded-xs">
                    Processing
                  </span>
                </span>
                <span className="w-1/6 text-right font-mono text-[#111111] font-medium">8ms</span>
              </div>

              <div className="px-2.5 py-1.5 flex items-center justify-between hover:bg-[#F9F9FB] transition-colors">
                <span className="w-1/4 font-mono font-medium text-[#111111] flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
                  <span>WF-9041</span>
                </span>
                <span className="w-1/3 text-[#686868] truncate">Fintech Ledger</span>
                <span className="w-1/4">
                  <span className="bg-purple-50 text-zevats-purple border border-purple-200 text-[7.5px] font-medium px-1.5 py-0.5 rounded-xs">
                    Ingress
                  </span>
                </span>
                <span className="w-1/6 text-right font-mono text-[#111111] font-medium">14ms</span>
              </div>

              <div className="px-2.5 py-1.5 flex items-center justify-between hover:bg-[#F9F9FB] transition-colors">
                <span className="w-1/4 font-mono font-medium text-[#111111] flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>WF-9040</span>
                </span>
                <span className="w-1/3 text-[#686868] truncate">Fleet Telemetry</span>
                <span className="w-1/4">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[7.5px] font-medium px-1.5 py-0.5 rounded-xs">
                    Synced
                  </span>
                </span>
                <span className="w-1/6 text-right font-mono text-[#111111] font-medium">6ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="px-3.5 py-1.5 bg-[#F4F1EA]/60 border-t border-[rgba(17,17,17,0.06)] flex items-center justify-between text-[8.5px] text-[#686868] shrink-0">
          <span className="font-mono">Role: Tenant-Admin (Full Access)</span>
          <span className="flex items-center space-x-1 text-emerald-600 font-medium">
            <RefreshCw className="w-2.5 h-2.5 animate-spin-slow" />
            <span>WebSocket Live Sync</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
