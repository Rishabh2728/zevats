"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Plus, Filter, CheckCircle2, Clock, MoreHorizontal } from "lucide-react";

export const SaasStudioPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[360px] bg-[#FFFFFF] border border-[rgba(17,17,17,0.1)] rounded-sm overflow-hidden flex shadow-[0_12px_36px_rgba(0,0,0,0.03)] select-none text-left"
    >
      {/* 1. Clean App Sidebar */}
      <div className="w-[150px] bg-[#16161F] text-[#FAF9F6] flex flex-col justify-between p-3.5 border-r border-[#242433] shrink-0">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-[#242433]">
            <div className="w-5 h-5 rounded-xs bg-zevats-purple text-white flex items-center justify-center text-[10px] font-bold">
              Z
            </div>
            <span className="text-xs font-semibold text-white tracking-tight">Kuro Cloud</span>
          </div>

          <div className="space-y-1">
            <span className="text-[8.5px] uppercase tracking-wider text-[#7C7C8C] block px-2 mb-1">
              Workspace
            </span>
            <div className="px-2 py-1.5 rounded-xs bg-[#242433] text-white text-[11px] font-medium border-l-2 border-zevats-purple">
              Active Projects
            </div>
            <div className="px-2 py-1.5 rounded-xs text-[#A8A49E] hover:text-white text-[11px] transition-colors">
              Client Approvals
            </div>
            <div className="px-2 py-1.5 rounded-xs text-[#A8A49E] hover:text-white text-[11px] transition-colors">
              Deliverables
            </div>
            <div className="px-2 py-1.5 rounded-xs text-[#A8A49E] hover:text-white text-[11px] transition-colors">
              Team Access
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#242433] text-[9.5px] text-[#7C7C8C]">
          <span>Connected as Admin</span>
        </div>
      </div>

      {/* 2. Main Workspace View */}
      <div className="flex-1 flex flex-col justify-between bg-[#FAFAFC] overflow-hidden">
        {/* Workspace Toolbar */}
        <div className="px-4 py-2.5 bg-white border-b border-[rgba(17,17,17,0.08)] flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-xs text-[#111111]">Active Projects</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-xs bg-[#F4F1EA] text-[#686868] font-medium">
              8 in progress
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] px-2.5 py-1 rounded-xs text-[10px] text-[#686868]">
              <Search className="w-3 h-3 text-[#8A8A8A]" />
              <span>Filter projects...</span>
            </div>
            <button className="flex items-center space-x-1 bg-[#111111] text-[#FAF9F6] text-[10px] font-semibold px-2.5 py-1 rounded-xs hover:bg-zevats-purple transition-colors">
              <Plus className="w-3 h-3" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        {/* Real Operational Table */}
        <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
          <div className="space-y-2">
            {/* Table Header */}
            <div className="grid grid-cols-12 text-[10px] uppercase tracking-wider text-[#8A8A8A] font-semibold px-2 pb-1 border-b border-[rgba(17,17,17,0.06)]">
              <span className="col-span-5">Project Name</span>
              <span className="col-span-3">Phase</span>
              <span className="col-span-2">Owner</span>
              <span className="col-span-2 text-right">Status</span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-12 items-center text-xs p-2.5 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs hover:border-[rgba(17,17,17,0.15)] transition-colors">
              <div className="col-span-5 flex items-center space-x-2 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple" />
                <span className="font-medium text-[#111111] truncate">Aura Logistics Portal</span>
              </div>
              <span className="col-span-3 text-[11px] text-[#686868]">Client Testing</span>
              <span className="col-span-2 text-[11px] text-[#686868]">Sarah K.</span>
              <div className="col-span-2 flex justify-end">
                <span className="text-[9.5px] px-2 py-0.5 rounded-xs bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                  Ready
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 items-center text-xs p-2.5 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs hover:border-[rgba(17,17,17,0.15)] transition-colors">
              <div className="col-span-5 flex items-center space-x-2 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="font-medium text-[#111111] truncate">Quarterly Inventory Sync</span>
              </div>
              <span className="col-span-3 text-[11px] text-[#686868]">Data Migration</span>
              <span className="col-span-2 text-[11px] text-[#686868]">David L.</span>
              <div className="col-span-2 flex justify-end">
                <span className="text-[9.5px] px-2 py-0.5 rounded-xs bg-amber-50 text-amber-700 font-medium border border-amber-200">
                  Review
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-12 items-center text-xs p-2.5 bg-white border border-[rgba(17,17,17,0.06)] rounded-xs hover:border-[rgba(17,17,17,0.15)] transition-colors">
              <div className="col-span-5 flex items-center space-x-2 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="font-medium text-[#111111] truncate">Billing Integration v2</span>
              </div>
              <span className="col-span-3 text-[11px] text-[#686868]">Automated Rules</span>
              <span className="col-span-2 text-[11px] text-[#686868]">Elena R.</span>
              <div className="col-span-2 flex justify-end">
                <span className="text-[9.5px] px-2 py-0.5 rounded-xs bg-blue-50 text-blue-700 font-medium border border-blue-200">
                  In Progress
                </span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-2 border-t border-[rgba(17,17,17,0.06)] flex items-center justify-between text-[10px] text-[#8A8A8A]">
            <span>Showing recent team workflows</span>
            <span className="text-[#111111] font-medium">Auto-saved 2m ago</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
