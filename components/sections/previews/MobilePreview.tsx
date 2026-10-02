"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Wifi, 
  Battery, 
  CheckCircle2, 
  Fingerprint, 
  Compass, 
  CheckSquare, 
  Clock, 
  User, 
  Bell,
  Database
} from "lucide-react";

export const MobilePreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[340px] bg-[#FAF9F6] border border-[rgba(17,17,17,0.12)] rounded-sm overflow-hidden flex items-center justify-center p-3 shadow-[0_12px_36px_rgba(0,0,0,0.04)] select-none text-left"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-architectural opacity-30 pointer-events-none" />

      {/* Atmospheric Central Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-zevats-purple/5 blur-3xl pointer-events-none" />

      {/* Two Overlapping Art-Directed Mobile App Screens */}
      <div className="relative flex items-center justify-center w-full max-w-sm h-full">

        {/* 1. Secondary Screen (Behind / Left): Offline Sync & Biometric Security Screen */}
        <motion.div
          initial={{ opacity: 0, x: -16, y: 10, rotate: -3 }}
          animate={{ opacity: 0.85, x: -50, y: 4, rotate: -3 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-10 w-[172px] h-[270px] bg-[#16161F] text-white rounded-[24px] border-[2px] border-[#2C2C3C] shadow-[0_16px_36px_rgba(0,0,0,0.22)] p-3 flex flex-col justify-between overflow-hidden"
        >
          {/* Top Notch & Time */}
          <div>
            <div className="flex items-center justify-between text-[8px] font-mono text-[#A8A49E] px-1 pb-2 border-b border-[#2A2A3A]">
              <span>9:41</span>
              <div className="w-12 h-2.5 bg-[#0D0D12] rounded-full mx-auto" />
              <div className="flex items-center space-x-1">
                <Wifi className="w-2.5 h-2.5" />
              </div>
            </div>

            {/* Offline Telemetry Heading */}
            <div className="pt-2 space-y-0.5">
              <span className="text-[7.5px] uppercase tracking-wider text-zevats-purple font-semibold block">
                Offline-First Data Layer
              </span>
              <span className="text-[11px] font-semibold text-white block leading-tight">
                Field Vault
              </span>
            </div>

            {/* Offline Sync State Cards */}
            <div className="space-y-1.5 pt-2">
              <div className="p-2 bg-[#20202D] rounded-xs border border-[#2D2D40] space-y-1">
                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-[#A8A49E] flex items-center space-x-1">
                    <Database className="w-2.5 h-2.5 text-zevats-purple" />
                    <span>Local SQLite</span>
                  </span>
                  <span className="text-emerald-400 font-mono">Synced</span>
                </div>
                <span className="text-[9px] font-mono text-white block">1,840 Records</span>
              </div>

              <div className="p-2 bg-[#20202D] rounded-xs border border-[#2D2D40] space-y-1">
                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-[#A8A49E] flex items-center space-x-1">
                    <Fingerprint className="w-2.5 h-2.5 text-emerald-400" />
                    <span>Biometric Key</span>
                  </span>
                  <span className="text-white font-mono">Ready</span>
                </div>
                <span className="text-[9px] text-[#A8A49E] block">Hardware Encrypted</span>
              </div>
            </div>
          </div>

          {/* Action pill */}
          <div className="w-full py-1.5 bg-zevats-purple/20 border border-zevats-purple/40 text-purple-300 text-[8px] font-semibold uppercase text-center rounded-xs mb-1">
            Push Dispatch Active
          </div>
        </motion.div>

        {/* 2. Primary Screen (Front / Right): Core Operational Flow & Gestures */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 16 }}
          animate={{ opacity: 1, x: 44, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-[186px] h-[286px] bg-white text-[#111111] rounded-[28px] border-[3px] border-[#16161F] shadow-[0_22px_44px_rgba(0,0,0,0.18)] p-3 flex flex-col justify-between overflow-hidden"
        >
          {/* Device Top Bar: Notch + 9:41 + Battery */}
          <div>
            <div className="flex items-center justify-between text-[8px] font-mono text-[#686868] px-1 pb-1">
              <span>9:41</span>
              <div className="w-14 h-2.5 bg-[#16161F] rounded-full mx-auto" />
              <div className="flex items-center space-x-1">
                <Battery className="w-3 h-3 text-[#111111]" />
              </div>
            </div>

            {/* In-App Header */}
            <div className="flex items-center justify-between pt-1 pb-1.5 border-b border-[rgba(17,17,17,0.06)]">
              <div className="flex items-center space-x-1.5">
                <div className="w-4 h-4 rounded-full bg-[#111111] text-white flex items-center justify-center text-[7px] font-bold">
                  Z
                </div>
                <div>
                  <span className="text-[9.5px] font-semibold text-[#111111] block leading-none">
                    Operations App
                  </span>
                  <span className="text-[7.5px] text-[#686868]">Field Operations</span>
                </div>
              </div>
              <Bell className="w-3 h-3 text-[#686868]" />
            </div>

            {/* Core Workflow Card */}
            <div className="mt-1.5 p-2 bg-[#FAF9F6] border border-[rgba(17,17,17,0.08)] rounded-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[7.5px] uppercase tracking-wider text-[#686868] font-semibold">
                  Today&apos;s Dispatch
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-[7px] font-bold px-1 py-0.5 rounded-xs border border-emerald-200">
                  Active
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#111111] block leading-tight">
                  Terminal Logistics Handoff
                </span>
                <span className="text-[7.5px] text-[#686868] block mt-0.5">Route ID: #DISP-402</span>
              </div>

              {/* Progress Track */}
              <div className="space-y-0.5 pt-0.5">
                <div className="flex items-center justify-between text-[7px] text-[#686868]">
                  <span>Verification Complete</span>
                  <span className="font-semibold text-zevats-purple">75%</span>
                </div>
                <div className="w-full h-1 bg-[#EBE7DC] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-zevats-purple rounded-full" />
                </div>
              </div>
            </div>

            {/* Checklist items in app */}
            <div className="mt-1.5 space-y-1">
              <div className="flex items-center space-x-1.5 p-1 rounded-xs bg-[#FAF9F6] text-[7.5px] text-[#111111] border border-[rgba(17,17,17,0.04)]">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="font-medium truncate">Client QR Scan Confirmed</span>
              </div>
              <div className="flex items-center space-x-1.5 p-1 rounded-xs bg-[#FAF9F6] text-[7.5px] text-[#111111] border border-[rgba(17,17,17,0.04)]">
                <Clock className="w-3 h-3 text-zevats-purple shrink-0" />
                <span className="font-medium truncate">Awaiting Sign-off</span>
              </div>
            </div>
          </div>

          {/* Sticky Bottom Native App Navigation Tab Bar */}
          <div className="pt-1.5 pb-1 border-t border-[rgba(17,17,17,0.08)] flex items-center justify-around text-[7.5px] text-[#686868]">
            <div className="flex flex-col items-center space-y-0.5 text-zevats-purple font-semibold">
              <Compass className="w-3 h-3 text-zevats-purple" />
              <span>Route</span>
            </div>
            <div className="flex flex-col items-center space-y-0.5 hover:text-[#111111]">
              <CheckSquare className="w-3 h-3" />
              <span>Tasks</span>
            </div>
            <div className="flex flex-col items-center space-y-0.5 hover:text-[#111111]">
              <Database className="w-3 h-3" />
              <span>Sync</span>
            </div>
            <div className="flex flex-col items-center space-y-0.5 hover:text-[#111111]">
              <User className="w-3 h-3" />
              <span>Profile</span>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
