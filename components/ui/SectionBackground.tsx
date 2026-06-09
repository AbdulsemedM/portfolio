"use client";

import { motion } from "framer-motion";

interface SectionBackgroundProps {
  variant?: "default" | "purple" | "cyan";
}

export function SectionBackground({ variant = "default" }: SectionBackgroundProps) {
  const orbColor =
    variant === "purple"
      ? "bg-accent-secondary/20"
      : variant === "cyan"
        ? "bg-accent/25"
        : "bg-accent/15";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className={`section-glow -left-32 top-0 h-80 w-80 ${orbColor}`}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="section-glow -right-32 bottom-0 h-96 w-96 bg-accent-secondary/15"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 grid-bg opacity-60" />
    </div>
  );
}
