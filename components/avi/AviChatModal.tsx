"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react";
import { AviCharacter, AviExpression } from "./AviCharacter";
import { useAvi } from "./AviContext";

interface ChatMessage {
  id: string;
  sender: "avi" | "user";
  text: string;
  actions?: { label: string; href: string }[];
  timestamp: string;
}

const INITIAL_SUGGESTIONS = [
  "What does Zevats build?",
  "I need a website",
  "I need a web app / SaaS",
  "I need a mobile app",
  "I need custom software",
  "Tell me about AI & automation",
  "Start a project",
];

export const AviChatModal: React.FC = () => {
  const { isChatOpen, closeChat, currentPrompt } = useAvi();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-greeting",
      sender: "avi",
      text: "Hi, I'm AVI. I'm the digital assistant for Zevats. What can I help you explore or build?",
      actions: [
        { label: "Explore Services →", href: "/services" },
        { label: "Review Solutions →", href: "/solutions" },
      ],
      timestamp: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aviExpression, setLocalExpression] = useState<AviExpression>("happy");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [messages, isChatOpen]);

  // Handle passed-in prompt from Hero
  useEffect(() => {
    if (currentPrompt && isChatOpen) {
      handleUserSendMessage(currentPrompt);
    }
  }, [currentPrompt, isChatOpen]);

  const handleUserSendMessage = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: queryText,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);
    setLocalExpression("thinking");

    // Realistic response delay
    setTimeout(() => {
      const response = generateAviResponse(queryText);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
      setLocalExpression("speaking");
      setTimeout(() => setLocalExpression("neutral"), 1500);
    }, 750);
  };

  const generateAviResponse = (query: string): ChatMessage => {
    const q = query.toLowerCase();

    // 1. What does Zevats build / do?
    if (q.includes("what does zevats build") || q.includes("what do you do") || q.includes("about zevats")) {
      return {
        id: `avi-${Date.now()}`,
        sender: "avi",
        text: "Zevats is an independent software and digital technology company. We engineer 4 core capabilities: Websites, Web Applications & SaaS, Mobile Applications, and Custom Software. AI, Automation, and APIs are extension capabilities we embed into products.",
        actions: [
          { label: "View What We Build", href: "/#what-we-build" },
          { label: "Read Our Story", href: "/about" },
        ],
        timestamp: "Just now",
      };
    }

    // 2. Websites
    if (q.includes("website") || q.includes("web design") || q.includes("landing")) {
      return {
        id: `avi-${Date.now()}`,
        sender: "avi",
        text: "We build corporate flagships, high-converting product pages, and headless editorial platforms designed to establish brand authority and turn visitors into qualified commercial inquiries. Sub-second load times and refined typography.",
        actions: [
          { label: "Explore Websites Discipline", href: "/services#websites" },
          { label: "Discuss a Web Project ↗", href: "/contact" },
        ],
        timestamp: "Just now",
      };
    }

    // 3. Web Apps / SaaS
    if (q.includes("web app") || q.includes("saas") || q.includes("portal") || q.includes("dashboard")) {
      return {
        id: `avi-${Date.now()}`,
        sender: "avi",
        text: "We build full-stack cloud applications, multi-tenant SaaS products, client portals, and administrative consoles. Engineered for high daily operational volume, role permissions, and seamless Stripe billing.",
        actions: [
          { label: "Explore SaaS & Web Apps", href: "/services#saas" },
          { label: "Plan a SaaS Architecture ↗", href: "/contact" },
        ],
        timestamp: "Just now",
      };
    }

    // 4. Mobile Apps
    if (q.includes("mobile") || q.includes("ios") || q.includes("android") || q.includes("app")) {
      return {
        id: `avi-${Date.now()}`,
        sender: "avi",
        text: "We build native and cross-platform iOS and Android applications for customers, internal teams, and field workforce. They feature offline-first local SQLite sync, biometric authentication, and actionable push workflows.",
        actions: [
          { label: "View Mobile Capabilities", href: "/services#mobile" },
          { label: "Start Mobile Project ↗", href: "/contact" },
        ],
        timestamp: "Just now",
      };
    }

    // 5. Custom Software
    if (q.includes("custom") || q.includes("bespoke") || q.includes("internal tool") || q.includes("legacy")) {
      return {
        id: `avi-${Date.now()}`,
        sender: "avi",
        text: "When off-the-shelf software doesn't fit your operational rules, we build custom business software with tailored logic, legacy modernization, and 100% client code/IP ownership.",
        actions: [
          { label: "Custom Software Details", href: "/services#custom" },
          { label: "Talk to Engineers ↗", href: "/contact" },
        ],
        timestamp: "Just now",
      };
    }

    // 6. AI & Automation
    if (q.includes("ai") || q.includes("automation") || q.includes("machine learning") || q.includes("intelligence") || q.includes("integration")) {
      return {
        id: `avi-${Date.now()}`,
        sender: "avi",
        text: "We introduce AI and background automation where it genuinely saves hours: document parsing (invoices/PDFs), semantic search across company archives, automated billing, and two-way CRM/ERP sync.",
        actions: [
          { label: "AI & Automation Extension", href: "/services#ai" },
          { label: "Discuss Use Case ↗", href: "/contact" },
        ],
        timestamp: "Just now",
      };
    }

    // 7. Start project / contact
    if (q.includes("start") || q.includes("project") || q.includes("contact") || q.includes("hire") || q.includes("quote") || q.includes("price")) {
      return {
        id: `avi-${Date.now()}`,
        sender: "avi",
        text: "You can initiate a project directly. Tell us what you're trying to build or solve, and our senior engineers will review your technical specifications within 24 business hours.",
        actions: [
          { label: "Open Project Briefing ↗", href: "/contact" },
        ],
        timestamp: "Just now",
      };
    }

    // Default friendly response
    return {
      id: `avi-${Date.now()}`,
      sender: "avi",
      text: "I can help with information about what Zevats builds (Websites, SaaS, Mobile Apps, Custom Software), our engineering approach, or starting a new project.",
      actions: [
        { label: "Explore All Services", href: "/services" },
        { label: "Start a Conversation", href: "/contact" },
      ],
      timestamp: "Just now",
    };
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "initial-greeting",
        sender: "avi",
        text: "Hi, I'm AVI. I'm the digital assistant for Zevats. What can I help you explore or build?",
        actions: [
          { label: "Explore Services →", href: "/services" },
          { label: "Review Solutions →", href: "/solutions" },
        ],
        timestamp: "Just now",
      },
    ]);
    setLocalExpression("neutral");
  };

  return (
    <AnimatePresence>
      {isChatOpen && (
        <>
          {/* Backdrop on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 md:hidden"
          />

          {/* Chat Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="fixed inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-8 sm:right-8 w-full sm:w-[420px] h-[85vh] sm:h-[580px] max-h-[calc(100vh-40px)] bg-[#FAF9F6] border-t sm:border border-[rgba(17,17,17,0.12)] rounded-t-2xl sm:rounded-lg shadow-[0_20px_50px_rgba(17,17,17,0.22)] z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#111111] text-[#F4F1EA] flex items-center justify-between border-b border-[rgba(244,241,234,0.1)]">
              <div className="flex items-center space-x-3">
                <div
                  className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.20)] flex items-center justify-center overflow-hidden shrink-0"
                  style={{
                    background: "linear-gradient(145deg, #3C3C4C 0%, #323240 55%, #292936 100%)",
                    boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 2px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <AviCharacter size={32} expression={aviExpression} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-sm text-[#F4F1EA]">AVI</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] text-[#A8A49E] block">
                    Zevats Assistant · Online
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 text-[#A8A49E] hover:text-[#F4F1EA] hover:bg-[#222222] rounded-sm transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={closeChat}
                  title="Close chat"
                  className="p-1.5 text-[#A8A49E] hover:text-[#F4F1EA] hover:bg-[#222222] rounded-sm transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-md text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#111111] text-[#F4F1EA] rounded-br-xs"
                        : "bg-[#FFFFFF] text-[#111111] border border-[rgba(17,17,17,0.08)] rounded-bl-xs shadow-xs"
                    }`}
                  >
                    <p>{msg.text}</p>

                    {/* Action buttons inside AVI's response */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-[rgba(17,17,17,0.06)] flex flex-wrap gap-2">
                        {msg.actions.map((act, i) => (
                          <Link
                            key={i}
                            href={act.href}
                            onClick={closeChat}
                            className="inline-flex items-center space-x-1 text-[11px] font-semibold text-zevats-purple hover:text-[#5B0FA8] bg-[#F4F1EA] px-2.5 py-1 rounded-sm border border-[rgba(123,44,246,0.2)] transition-colors"
                          >
                            <span>{act.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-[#8E8A82] mt-1 px-1">
                    {msg.sender === "user" ? "You" : "AVI"} · {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center space-x-2 text-xs text-[#686868] p-2">
                  <div className="w-4 h-4 rounded-full bg-zevats-purple/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-zevats-purple animate-ping" />
                  </div>
                  <span>AVI is thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 py-2 bg-[#F4F1EA]/80 border-t border-[rgba(17,17,17,0.06)] overflow-x-auto whitespace-nowrap flex space-x-2 scrollbar-none">
              {INITIAL_SUGGESTIONS.map((sugg, i) => (
                <button
                  key={i}
                  onClick={() => handleUserSendMessage(sugg)}
                  className="text-[11px] font-medium text-[#444444] hover:text-[#111111] hover:border-[rgba(17,17,17,0.2)] bg-white px-2.5 py-1 rounded-sm border border-[rgba(17,17,17,0.08)] shrink-0 transition-colors"
                >
                  {sugg}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserSendMessage(inputVal);
              }}
              className="p-3 bg-white border-t border-[rgba(17,17,17,0.08)] flex items-center space-x-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask AVI about what we build..."
                className="flex-1 bg-[#F4F1EA] text-[#111111] placeholder-[#8E8A82] text-xs sm:text-sm px-3.5 py-2.5 rounded-sm border border-[rgba(17,17,17,0.08)] focus:outline-none focus:border-zevats-purple transition-colors"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="p-2.5 bg-[#111111] text-[#F4F1EA] hover:bg-zevats-purple disabled:opacity-30 disabled:hover:bg-[#111111] rounded-sm transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
