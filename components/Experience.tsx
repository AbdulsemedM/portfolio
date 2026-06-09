"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { GlowCard } from "@/components/ui/GlowCard";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Experience() {
  return (
    <section
      id={SECTION_IDS.experience}
      className="relative px-6 py-24 md:py-32"
      aria-labelledby="experience-heading"
    >
      <SectionBackground variant="cyan" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built"
          highlight="built"
          subtitle="Shipping production software across fintech and e-commerce."
        />

        <div className="relative">
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-0.5 md:left-1/2 md:-translate-x-px"
            style={{
              background: "linear-gradient(to bottom, #22d3ee, #a855f7, transparent)",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((entry, i) => (
              <FadeIn key={entry.id} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={cn("relative pl-10 md:pl-0", i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]")}>
                  <motion.div
                    className="absolute left-0 top-6 h-4 w-4 rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{
                      background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                      boxShadow: "0 0 16px rgba(34, 211, 238, 0.6)",
                    }}
                    whileHover={{ scale: 1.5 }}
                    aria-hidden="true"
                  />

                  <GlowCard>
                    <div className="p-6">
                      <span
                        className={cn(
                          "text-xs font-bold uppercase tracking-widest",
                          entry.type === "education" ? "text-muted" : "text-accent"
                        )}
                      >
                        {entry.period}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-foreground">
                        {entry.title}
                      </h3>
                      <p className="gradient-text-static font-medium">
                        {entry.organization}
                      </p>
                      {entry.description && (
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {entry.description}
                        </p>
                      )}
                    </div>
                  </GlowCard>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
