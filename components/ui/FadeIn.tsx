"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  className,
  y = 24,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Slides a line of text up from behind a mask — used for display headings. */
export function RevealLine({
  children,
  delay = 0,
  className,
  animateOnMount = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animateOnMount?: boolean;
}) {
  // The observer sits on the (unclipped) mask; the inner line inherits the
  // state via variants. Observing the inner span would never fire because
  // overflow-hidden clips it out of view.
  const trigger = animateOnMount
    ? { animate: "shown" }
    : { whileInView: "shown", viewport: { once: true, margin: "-60px" } };

  return (
    <motion.span
      className={cn("block overflow-hidden pb-[0.08em]", className)}
      initial="hidden"
      {...trigger}
    >
      <motion.span
        className="block"
        variants={{ hidden: { y: "110%" }, shown: { y: "0%" } }}
        transition={{ duration: 1.1, delay, ease: EASE_OUT_EXPO }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
