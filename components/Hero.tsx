"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { SITE } from "@/lib/constants";
import { stats } from "@/data/stats";
import { EASE_OUT_EXPO, RevealLine } from "@/components/ui/FadeIn";
import { LocalTime } from "@/components/ui/LocalTime";
import { CountUp } from "@/components/ui/CountUp";

/** A soft ember light that trails the cursor across the hero. */
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(70);
  const y = useMotionValue(30);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  const background = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(229,132,79,0.13), transparent 70%)`;

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set(((e.clientX - r.left) / r.width) * 100);
      y.set(((e.clientY - r.top) / r.height) * 100);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none absolute inset-0"
      style={{ background }}
      aria-hidden="true"
    />
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE_OUT_EXPO },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 md:pt-28"
      aria-label="Introduction"
    >
      <Spotlight />

      {/* Faint vertical column guides, like a layout grid left visible. */}
      <div
        className="container-page pointer-events-none absolute inset-0 hidden grid-cols-12 lg:grid"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-l border-line last:border-r" />
        ))}
      </div>

      <div className="container-page relative flex flex-1 flex-col">
        <motion.div
          {...fade(0.3)}
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-line pb-5"
        >
          <span className="label flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            Open to co-founding &amp; select projects
          </span>
          <span className="label hidden sm:inline">{SITE.location}</span>
          <LocalTime className="label" />
        </motion.div>

        <div className="flex flex-1 flex-col justify-center py-12 md:py-14">
          <motion.p {...fade(0.4)} className="label mb-8 text-accent">
            {SITE.name} — {SITE.shortTitle}
          </motion.p>

          <h1 className="font-serif text-[15vw] leading-[0.88] tracking-tightest text-foreground sm:text-[12vw] lg:text-[9.5rem] xl:text-[11rem]">
            <RevealLine animateOnMount delay={0.45}>
              I build products
            </RevealLine>
            <RevealLine animateOnMount delay={0.55}>
              people <span className="italic text-accent">actually</span> use.
            </RevealLine>
          </h1>

          <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-12">
            <motion.p
              {...fade(0.9)}
              className="max-w-xl text-pretty text-lg leading-relaxed text-muted md:text-xl lg:col-span-6 lg:col-start-1"
            >
              Four years turning ideas into production software across{" "}
              <span className="text-foreground">fintech, commerce and logistics</span>
              {" "}— mobile and web, architecture to launch, with the ownership of
              someone who intends to build companies, not just features.
            </motion.p>

            <motion.div
              {...fade(1)}
              className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:col-start-8 lg:justify-end"
            >
              <a href="#work" className="btn-solid group">
                View selected work
                <span className="transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-outline">
                Start a conversation
              </a>
            </motion.div>
          </div>
        </div>

        <motion.dl
          {...fade(1.15)}
          className="grid grid-cols-2 border-t border-line md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={
                "py-6 md:py-8 " +
                (i % 2 === 1 ? "border-l border-line pl-5 md:pl-8 " : "") +
                (i === 2 ? "md:border-l md:border-line md:pl-8 " : "") +
                (i >= 2 ? "border-t border-line md:border-t-0" : "")
              }
            >
              <dt className="label">{stat.label}</dt>
              <dd className="mt-2 font-serif text-5xl leading-none md:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
