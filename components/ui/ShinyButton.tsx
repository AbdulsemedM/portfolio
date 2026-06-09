"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export function ShinyButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
  type = "button",
}: ShinyButtonProps) {
  const classes = cn(
    variant === "primary" ? "btn-shiny" : "btn-ghost",
    className
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
