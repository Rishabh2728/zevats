"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0.98, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="w-full min-h-[calc(100vh-200px)]"
    >
      {children}
    </motion.div>
  );
};
