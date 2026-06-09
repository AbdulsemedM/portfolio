"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
  ...props
}: FadeInProps) {
  const variants = {
    up: { opacity: 0, y: 40, filter: "blur(8px)" },
    left: { opacity: 0, x: -40, filter: "blur(8px)" },
    right: { opacity: 0, x: 40, filter: "blur(8px)" },
    scale: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
  };

  const initial = variants[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
