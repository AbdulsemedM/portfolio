"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-[1px]",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-main opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundSize: "200% 200%", animation: "border-flow 4s linear infinite" }}
        aria-hidden="true"
      />
      <div className="relative h-full overflow-hidden rounded-2xl glass-card">
        <div
          className="pointer-events-none absolute -inset-full top-0 z-10 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100"
          aria-hidden="true"
        />
        {children}
      </div>
    </motion.div>
  );
}
