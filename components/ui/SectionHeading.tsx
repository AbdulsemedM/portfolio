"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  highlight?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  highlight,
}: SectionHeadingProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="eyebrow-badge"
      >
        {eyebrow}
      </motion.span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {highlight && titleParts.length > 1 ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          <span className="gradient-text-static">{title}</span>
        )}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "mt-4 max-w-2xl text-lg text-muted md:text-xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
