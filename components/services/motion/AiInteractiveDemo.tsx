"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Search, Zap, Check, ArrowRight, CheckCircle2 } from "lucide-react";

interface AiCapability {
  id: "document" | "search" | "automation";
  title: string;
  description: string;
  icon: React.ReactNode;
}

const capabilities: AiCapability[] = [
  {
    id: "document",
    title: "Document intelligence",
    description:
      "Extract line items and critical data from invoices, contracts, and receipts automatically without manual typing.",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: "search",
    title: "Knowledge & search",
    description:
      "Search across company documents, policies, and customer records using natural everyday language.",
    icon: <Search className="w-4 h-4" />,
  },
  {
    id: "automation",
    title: "Workflow automation",
    description:
      "Trigger notifications, generate files, and advance project statuses automatically as milestones are reached.",
    icon: <Zap className="w-4 h-4" />,
  },
];

export const AiInteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"document" | "search" | "automation">("document");

  return (
    <div className="mt-10 sm:mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: 3 Interactive Capabilities */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          {capabilities.map((cap) => {
            const isSelected = activeTab === cap.id;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`p-5 sm:p-6 text-left rounded-sm border-l-4 transition-[background-color,border-color,opacity] duration-200 cursor-pointer w-full group ${
                  isSelected
                    ? "bg-[#FFFFFF] border-zevats-purple shadow-[0_4px_20px_rgba(0,0,0,0.03)] opacity-100"
                    : "bg-transparent border-transparent hover:bg-white/50 opacity-60 hover:opacity-90"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span
                      className={`transition-colors duration-200 ${
                        isSelected ? "text-zevats-purple" : "text-[#686868] group-hover:text-[#111111]"
                      }`}
                    >
                      {cap.icon}
                    </span>
                    <h3
                      className={`text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-200 ${
                        isSelected ? "text-[#111111]" : "text-[#333333] group-hover:text-zevats-purple"
                      }`}
                    >
                      {cap.title}
                    </h3>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      isSelected
                        ? "bg-zevats-purple scale-110 shadow-[0_0_8px_rgba(123,44,246,0.6)]"
                        : "bg-[#D8D8D8]"
                    }`}
                  />
                </div>

                <p className="mt-2.5 text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                  {cap.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Evolving Software Product Demo */}
        <div className="lg:col-span-7">
          <div className="bg-[#FFFFFF] border border-[rgba(17,17,17,0.08)] rounded-sm shadow-[0_12px_36px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-full">
            
            {/* Realistic Application Window Header */}
            <div className="px-5 py-3.5 bg-[#FAF9F6] border-b border-[rgba(17,17,17,0.06)] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E3DC]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E3DC]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E3DC]" />
                <span className="ml-2 text-[11px] font-medium text-[#777777] uppercase tracking-wider">
                  Operations Console
                </span>
              </div>

              <div className="flex items-center space-x-1.5 text-xs text-zevats-purple font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-pulse" />
                <span className="capitalize text-[11px] font-medium">
                  {activeTab === "document" && "Document Processing"}
                  {activeTab === "search" && "Knowledge Retrieval"}
                  {activeTab === "automation" && "Workflow Engine"}
                </span>
              </div>
            </div>

            {/* Living Product Demonstration Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center bg-white min-h-[360px]">
              <AnimatePresence mode="wait">
                
                {/* 1. DOCUMENT INTELLIGENCE */}
                {activeTab === "document" && (
                  <motion.div
                    key="demo-document"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between text-xs text-[#777777] pb-2 border-b border-[rgba(17,17,17,0.06)]">
                      <span>Source Document</span>
                      <span>Structured Record</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                      {/* Document Surface */}
                      <div className="sm:col-span-5 p-4 rounded-sm bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] space-y-3 relative overflow-hidden">
                        {/* Animated Scanning Line */}
                        <motion.div
                          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zevats-purple to-transparent pointer-events-none"
                          initial={{ top: "0%" }}
                          animate={{ top: "100%" }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="flex items-center justify-between text-[11px] text-[#777777]">
                          <span className="font-semibold text-[#111111]">Acme Logistics</span>
                          <span>#INV-4029</span>
                        </div>

                        <div className="space-y-1.5 text-[11px] text-[#555555]">
                          <div className="p-1.5 rounded-xs bg-white/80 border border-zevats-purple/20">
                            <span className="text-[#888888] block text-[9.5px]">Description</span>
                            <span className="font-medium text-[#111111]">3x Freight Dispatch to Bay 3</span>
                          </div>
                          <div className="p-1.5 rounded-xs bg-white/80 border border-zevats-purple/20">
                            <span className="text-[#888888] block text-[9.5px]">Total Amount</span>
                            <span className="font-semibold text-zevats-purple">$14,250.00</span>
                          </div>
                        </div>

                        <span className="text-[10px] text-[#888888] block">Due date: Net 30 days</span>
                      </div>

                      {/* Directional Flow */}
                      <div className="hidden sm:flex sm:col-span-1 justify-center text-zevats-purple">
                        <ArrowRight className="w-4 h-4" />
                      </div>

                      {/* Structured Populated Fields */}
                      <div className="sm:col-span-6 p-4 rounded-sm bg-white border border-zevats-purple/30 space-y-3 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#111111]">Ledger Entry</span>
                          <span className="inline-flex items-center space-x-1 text-[10px] text-zevats-purple font-medium">
                            <Check className="w-3 h-3" />
                            <span>Fields Populated</span>
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 rounded-xs bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)]">
                            <span className="text-[10px] text-[#888888] block">Vendor</span>
                            <span className="font-medium text-[#111111]">Acme Logistics</span>
                          </div>
                          <div className="p-2 rounded-xs bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)]">
                            <span className="text-[10px] text-[#888888] block">Invoice</span>
                            <span className="font-medium text-[#111111]">INV-4029</span>
                          </div>
                          <div className="p-2 rounded-xs bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)]">
                            <span className="text-[10px] text-[#888888] block">Destination</span>
                            <span className="font-medium text-[#111111]">Terminal Bay 3</span>
                          </div>
                          <div className="p-2 rounded-xs bg-[#FAF9F6] border border-[rgba(17,17,17,0.06)]">
                            <span className="text-[10px] text-[#888888] block">Net Amount</span>
                            <span className="font-semibold text-zevats-purple">$14,250.00</span>
                          </div>
                        </div>

                        <div className="pt-1 text-[11px] text-[#686868] flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zevats-purple shrink-0" />
                          <span>Ready for automated approval workflow</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. KNOWLEDGE & SEARCH */}
                {activeTab === "search" && (
                  <motion.div
                    key="demo-search"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    {/* Natural Query Input */}
                    <div className="p-3.5 bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] rounded-sm flex items-center space-x-3 text-xs sm:text-sm">
                      <Search className="w-4 h-4 text-zevats-purple shrink-0" />
                      <span className="text-[#111111] font-medium">
                        &quot;What is our procedure for damaged container exceptions?&quot;
                      </span>
                    </div>

                    {/* Grounded Result Card */}
                    <div className="p-5 rounded-sm bg-white border border-zevats-purple/30 space-y-3 shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#111111]">
                          Standard Operating Procedure 4.3
                        </span>
                        <span className="text-[11px] text-zevats-purple font-medium">
                          Warehouse Operations Handbook
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                        Damaged containers must be documented with timestamped photos within 60 minutes of arrival at Terminal Bay 3 before signing the manifest. The dispatch supervisor will automatically issue replacement ticket #RT-40.
                      </p>

                      <div className="pt-2 border-t border-[rgba(17,17,17,0.06)] flex items-center justify-between text-[11px] text-[#777777]">
                        <span>Verified from private company documents</span>
                        <span className="text-zevats-purple font-medium">Section 4.3 · Page 18</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. WORKFLOW AUTOMATION */}
                {activeTab === "automation" && (
                  <motion.div
                    key="demo-automation"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    {/* Trigger Card */}
                    <div className="p-3.5 bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] rounded-sm flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-zevats-purple" />
                        <span className="font-semibold text-[#111111]">
                          Event Trigger: Invoice #INV-4029 Approved
                        </span>
                      </div>
                      <span className="text-[11px] text-zevats-purple font-medium">
                        Automated Pipeline Active
                      </span>
                    </div>

                    {/* 3 Sequential Operational Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-sm bg-white border border-[rgba(17,17,17,0.08)] space-y-1.5 shadow-xs">
                        <div className="flex items-center space-x-1.5 text-zevats-purple text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Ledger Updated</span>
                        </div>
                        <span className="text-xs font-medium text-[#111111] block">
                          $14,250.00 Synchronized
                        </span>
                        <span className="text-[10px] text-[#777777] block">
                          Posted to accounts payable
                        </span>
                      </div>

                      <div className="p-3.5 rounded-sm bg-white border border-[rgba(17,17,17,0.08)] space-y-1.5 shadow-xs">
                        <div className="flex items-center space-x-1.5 text-zevats-purple text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Inventory Reserved</span>
                        </div>
                        <span className="text-xs font-medium text-[#111111] block">
                          Stock Allocated
                        </span>
                        <span className="text-[10px] text-[#777777] block">
                          Reserved at Terminal Bay 3
                        </span>
                      </div>

                      <div className="p-3.5 rounded-sm bg-white border border-zevats-purple/40 space-y-1.5 shadow-xs">
                        <div className="flex items-center space-x-1.5 text-zevats-purple text-xs font-semibold">
                          <span className="w-2 h-2 rounded-full bg-zevats-purple animate-ping" />
                          <span>Driver Dispatched</span>
                        </div>
                        <span className="text-xs font-medium text-[#111111] block">
                          Mobile Route Active
                        </span>
                        <span className="text-[10px] text-[#777777] block">
                          Delivered to driver tablet
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Footer Status Bar */}
            <div className="px-5 py-3 bg-[#FAF9F6] border-t border-[rgba(17,17,17,0.06)] flex items-center justify-between text-xs text-[#777777]">
              <span>Applied intelligence embedded into real operations</span>
              <span className="text-zevats-purple font-medium">Sub-second execution</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
