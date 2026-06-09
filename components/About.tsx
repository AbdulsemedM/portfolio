"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { SITE } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SECTION_IDS } from "@/lib/constants";

export function About() {
  return (
    <section
      id={SECTION_IDS.about}
      className="relative px-6 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <SectionBackground variant="cyan" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="What I bring to the table"
          highlight="bring"
          subtitle="Senior engineering with product ownership — from first commit to production."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative mx-auto aspect-square max-w-sm"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-main opacity-60 blur-lg" />
              <div className="shiny-border relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt={SITE.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-shine opacity-20"
                  style={{ backgroundSize: "200% 100%", animation: "shimmer 3s ease-in-out infinite" }}
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              I&apos;m a senior software engineer who helps teams turn ideas into
              reliable, production-ready products. With 4+ years across mobile and
              web, I bring{" "}
              <span className="font-semibold text-foreground">end-to-end delivery</span>
              — architecture, implementation, deployment, and iteration — with a
              clear focus on quality, maintainability, and user impact.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
              You get a partner who communicates clearly, takes ownership of outcomes,
              and moves with urgency without cutting corners. Whether building a new
              product from scratch or strengthening an existing platform, I contribute
              technical depth, sound judgment, and the discipline to ship work that
              holds up in the real world.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <FadeIn key={stat.id} delay={0.1 * i} direction="scale">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="glass-card rounded-xl p-4 text-center sm:text-left"
                  >
                    <p className="stat-glow">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                      {stat.label}
                    </p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
