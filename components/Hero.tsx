"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const HEADLINE_WORDS = [
  { text: "I", highlight: false },
  { text: "build", highlight: false },
  { text: "products", highlight: true },
  { text: "people", highlight: false },
  { text: "actually", highlight: false },
  { text: "use.", highlight: true },
];

const PARTICLE_KEYWORDS = [
  "Flutter", "React", "Next.js", "Node.js", "Go", "Python",
  "Docker", "AWS", "PostgreSQL", "TypeScript", "Firebase",
  "TailwindCSS", "Dart", "MongoDB", "Java",
];

interface Particle {
  id: number;
  text: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function ParticleBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const particles = useMemo<Particle[]>(() => {
    return PARTICLE_KEYWORDS.map((text, i) => ({
      id: i,
      text,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.6 + Math.random() * 0.55,
      duration: 14 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <motion.div
        className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full bg-accent-secondary/25 blur-[130px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px]"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {!reducedMotion &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute select-none font-mono font-medium text-accent/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize: `${p.size}rem`,
              textShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
            }}
            animate={{
              y: [0, -40, 15, -25, 0],
              x: [0, 20, -15, 8, 0],
              opacity: [0.2, 0.5, 0.3, 0.45, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p.text}
          </motion.span>
        ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      aria-label="Introduction"
    >
      <ParticleBackground />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={`${word.text}-${i}`}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`inline-block ${word.highlight ? "gradient-text" : "text-foreground"}`}
            >
              {word.text}
              {i < HEADLINE_WORDS.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted md:text-xl"
        >
          <span className="text-foreground">Senior Software Engineer</span>
          {" · "}
          4+ years delivering scalable mobile and web products — from architecture
          and build to launch and iteration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button onClick={() => scrollToSection("projects")} className="btn-primary w-full sm:w-auto">
            <span className="relative z-10">See My Work</span>
          </button>
          <a href={`mailto:${SITE.email}`} className="btn-ghost w-full sm:w-auto">
            Let&apos;s Talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
